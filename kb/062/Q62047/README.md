---
layout: page
title: "Q62047: Mac Hyp: Removing Addressee from Auto-Addressed Message"
permalink: kb/062/Q62047/
---

## Q62047: Mac Hyp: Removing Addressee from Auto-Addressed Message

	Article: Q62047
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail version 2.00 Software Development Kit (SDK) for HyperCard
	cannot remove a user from a message automatically once the user has been added
	with the "addRecipients" command. This becomes a problem if a custom form that
	uses the auto-addressing feature is used. When the Forms Designer stack that
	comes with Mail 2.00 is used to create a custom form for Mail, a form can be
	made that will automatically be addressed to a certain user when it is selected.
	To do this, type in the unique user name followed by the "@" symbol and the
	server name in the User List field of the Send Screen card. For example, type
	
	  " John Doe@Editing Department Server " (without the quotation marks)
	
	where "Editing Department Server" is the Mail 2.00 server name and "John Doe" is
	the complete user name of the user on the server. Lock the field and compile the
	Send screen.
	
	MORE INFORMATION
	================
	
	If this technique is used to create a custom form that is automatically
	addressed to a specific user, or users, the HyperCard interface commands cannot
	remove that specified address without using the displayAddressScreen. This means
	that if the HyperCard interface is used to create a message that uses that
	custom form type, it is not possible to remove the user or users that the form
	is designed to automatically address the message to.
	
	Microsoft has confirmed this to be a problem in Mail version 2.00. This problem
	is corrected in Mail version 3.00.
	
	A suggested alternative is to install an additional copy of the form at the
	bottom of the forms list and to remove the automatic address from this form.
	
	The name can also be removed manually with displayAddressScreen.
	
	For more information about custom forms, see the "Microsoft Mail Network
	Manager's Guide." For more information about the HyperCard interface commands,
	see the "Microsoft Mail HyperCard Interface Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	
