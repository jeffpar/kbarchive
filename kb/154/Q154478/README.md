---
layout: page
title: "Q154478: XCLN: Attaching Digitally Signed Messages to an Eform"
permalink: /kb/154/Q154478/
---

## Q154478: XCLN: Attaching Digitally Signed Messages to an Eform

	Article: Q154478
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to digitally sign an Eform for groupware and tracking purposes. You
	cannot digitally sign an Eform using Visual Basic 4.0, but you can have a
	RichEntry field on the Eform to which you can attach an already digitally signed
	or encrypted message.
	
	MORE INFORMATION
	================
	
	1. Make sure that you have enhanced security installed and running on your
	  Exchange Server.
	
	2. Have the user that wants to send a secure Eform create a message and
	  digitally sign or encrypt the message and send it to their mailbox.
	
	3. From the client Inbox folder select the encrypted message that was just
	  received. On the File menu, select Save As and select Save File As Type.
	  Select message format. This will save the message as an .MSG file.
	
	4. Start the EForms designer and create your form. Make sure that there is a
	  RichEntry field on the form. The RichEntry field should also have a reference
	  name of MAPI_BODY_CUSTOM; this will allow you to add file attachments to this
	  field.
	
	5. Generate and install the form into the forms registry.
	
	6. Launch the form from the client. Click the RichEntry field to highlight it.
	
	7. Select Insert/File and select the .msg file that you saved earlier. The
	  message should show up in the RichEntry field as an envelope icon.
	
	You can send this Eform and the attached messages will be sent along with it. You
	can also open and make changes to the attached messages and then send the
	changed message on to another recipient.
	
	The steps above allow for the full functionality of an encrypted or digitally
	signed message, as long as the enhanced security is installed.
	
	Additional query words: Eforms encryption signature
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
