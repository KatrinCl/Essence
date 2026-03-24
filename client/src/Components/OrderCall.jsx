import React from 'react'

const OrderCall = ({ onClose }) => {
  const [result, setResult] = React.useState('')

  const onSubmit = async event => {
    event.preventDefault()
    setResult('Отправляется...')

    const formData = new FormData(event.target)
    formData.append('access_key', '0cbfb9cc-a4cd-4586-a7fb-d34271cd6434')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Успешно отправлено ✓')
      event.target.reset()
    } else {
      setResult('Ошибка отправки')
    }
  }

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4'>
      <form onSubmit={onSubmit} className='relative bg-white w-full max-w-md rounded-xl p-6 md:p-8 flex flex-col gap-4'>
        <button type='button' onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-black'>
          ✕
        </button>

        <h2 className='text-yellow-600 text-xl md:text-2xl font-semibold text-center'>Заказать звонок</h2>

        <input type='text' name='name' placeholder='Ваше имя' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <input type='tel' name='phone' placeholder='Ваш телефон' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <input type='email' name='email' placeholder='Email' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500' />
        <textarea name='message' rows='4' placeholder='Здесь Вы можете задать нам свои вопросы' required className='w-full p-3 border rounded-md outline-none focus:border-yellow-500 resize-none' />

        {result && <p className='text-sm text-gray-600 text-center'>{result}</p>}

        <button type='submit' className='mt-2 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition cursor-pointer'>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default OrderCall
