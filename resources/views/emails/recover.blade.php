@component('mail::message')
# Recover your password

Click here to continue.

@component('mail::button', ['url' => $data])
Click to recover
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
