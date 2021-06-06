import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { sendDish } from './MyForm.api'
import { StyledMyForm, StyledInput, StyledH2, StyledOption, StyledSelect, StyledSubmit, StyledAlert } from './MyForm.css'

const MyForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const onSubmit = (values) => {
        sendDish(values, setLoading, setError, setSuccess)
    }


    const required = value => (value ? undefined : <StyledAlert isErr={true}>Required</StyledAlert>)

    return (
        <Form
            onSubmit={onSubmit}
            validate={required}
            render={({ handleSubmit, submitting, values }) => (
                <StyledMyForm onSubmit={async event => {
                    await handleSubmit(event)
                }}>
                    <StyledH2>MyForm</StyledH2>

                    <Field name="name" validate={required}>
                        {({ input, meta }) => (
                            <>
                                <StyledInput {...input} type="text" placeholder="Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        )}
                    </Field>

                    <Field name="preparation_time" validate={required} default>
                        {({ input, meta }) => (
                            <>
                                <StyledInput {...input} type="time" step="1" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </>
                        )}
                    </Field>

                    <StyledSelect name="type" component="select" validate={required}>

                        <StyledOption value="" selected disabled>------</StyledOption>
                        <StyledOption value="pizza">🍕 Pizza</StyledOption>
                        <StyledOption value="sandwich">🥪 Sandwich</StyledOption>
                        <StyledOption value="soup">🥣 Soup</StyledOption>

                    </StyledSelect>

                    {values.type === "pizza" ? <>

                        <Field name="no_of_slices" validate={required} parse={value => Number(value)}>
                            {({ input, meta }) => (
                                <>
                                    <StyledInput {...input} type="number" placeholder="10" min="0" max="20" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>

                        <Field name="diameter" validate={required} parse={value => Number(value)}>
                            {({ input, meta }) => (
                                <>
                                    <StyledInput {...input} type="number" placeholder="60" min="0" max="400" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>

                    </> : null}

                    {values.type === "soup" ? <>

                        <Field name="spiciness_scale" validate={required} parse={value => Number(value)}>
                            {({ input, meta }) => (
                                <>
                                    <StyledInput {...input} type="number" placeholder="5" min="0" max="10" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>

                    </> : null}

                    {values.type === "sandwich" ? <>

                        <Field name="slices_of_bread" validate={required} parse={value => Number(value)}>
                            {({ input, meta }) => (
                                <>
                                    <StyledInput {...input} type="number" placeholder="10" min="1" max="20" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>

                    </> : null}

                    <StyledSubmit type="submit" disabled={submitting}>
                        Submit
                    </StyledSubmit>
                    {error ? <StyledAlert isErr={true}>{error}</StyledAlert> : null}
                    {success ? <StyledAlert>Success</StyledAlert> : null}
                    {loading ? <StyledAlert >Loading...</StyledAlert> : null}

                </StyledMyForm>
            )}
        />
    )
}



export default MyForm