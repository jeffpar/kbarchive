---
layout: page
title: "Q142091: XCLN: No E-form When Sent from a Public Folder"
permalink: /kb/142/Q142091/
---

## Q142091: XCLN: No E-form When Sent from a Public Folder

	Article: Q142091
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read an electronic form that was created using the Microsoft Exchange,
	version 4.0, Electronic Forms Designer, the following message can appear in the
	message body as a standard mail message in the recipient's Inbox:
	
	  Correctly displaying this item requires a custom form that is either not
	  available or not correctly installed. Please see you network manager for more
	  information.
	
	CAUSE
	=====
	
	One reason that the form can not be run is because the send form was only
	installed to a public folder. The Exchange client will search only the default
	send form locations (Inbox and Enterprise forms registry). However, the Exchange
	client will search all available public folders for post forms.
	
	WORKAROUND
	==========
	
	To be able to run the form, drag or copy the message to the public folder where
	the form is installed, or install the folder to the Organization forms library
	or local folder (mailbox or .PST).
	
	You can create a Send form from a Post form by using the Electronic Forms
	Designer. This is the recommended solution for Exchange forms managers who wish
	to install send forms to a public folder.
	
	MORE INFORMATION
	================
	
	For additional information regarding this procedure, please see Chapter 12 of
	the "Application Designer's Guide" for Microsoft Exchange.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
