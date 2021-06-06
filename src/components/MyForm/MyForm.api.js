export const sendDish = async (sendingData, setLoading, setError, setSuccess) => {
    setLoading(true)
    setError(false)
    setSuccess(false)
    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendingData),
    })
        .then(response => response.json())
        .then(data => {
            setSuccess(data)
            setLoading(false)
            setError(false)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
            setSuccess(false)
        });
};