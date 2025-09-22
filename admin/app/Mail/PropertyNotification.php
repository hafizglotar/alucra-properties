<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PropertyNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $property; // property data

    public function __construct($property)
    {
        $this->property = $property;
    }

    public function build()
    {
        return $this->subject('New Property Added')
                    ->view('emails.property_notification'); // create this Blade file
    }
}
