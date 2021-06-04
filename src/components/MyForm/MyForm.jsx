import React from 'react'
import { Form, Field } from 'react-final-form'

const MyForm = () => {
    const onSubmit = (values) => {
        window.alert(JSON.stringify(values))
    }
    // const validate = () => {
    //     console.log('xd')
    // }
    const required = value => (value ? undefined : 'Required')
    return (
        <Form
            onSubmit={onSubmit}
            validate={required}
            render={({ handleSubmit, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                    <h2>Simple Default Input</h2>

                    <Field name="name" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <input {...input} type="text" placeholder="Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Field name="preparation_time" validate={required} default>
                        {({ input, meta }) => (
                            <div>
                                <input {...input} type="time" step="1" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Field name="type" component="select" validate={required}>

                        <option value="pizza">🍕 Pizza</option>
                        <option value="sandwich">🥪 Sandwich</option>
                        <option value="soup">🥣 Soup</option>

                    </Field>

                    {values.type === "pizza" ? <>

                        <Field name="no_of_slices" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="number" placeholder="10" min="0" max="20" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="diameter" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="number" placeholder="60" min="0" max="400" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                    </> : null}

                    {values.type === "soup" ? <>

                        <Field name="spicines_scale" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="number" placeholder="5" min="0" max="10" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                    </> : null}

                    {values.type === "sandwich" ? <>

                        <Field name="slices_of_bread" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="number" placeholder="10" min="1" max="20" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                    </> : null}

                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>

                </form>
            )}
        />
    )
}



export default MyForm