---
layout: page
title: "Q58597: Mac Hyp: DisplayAddressScreen for User to Add Recipients"
permalink: /kb/058/Q58597/
---

## Q58597: Mac Hyp: DisplayAddressScreen for User to Add Recipients

	Article: Q58597
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To display the standard Microsoft Mail Address screen and allow the user to add
	or remove recipients to the selected message specified by "messageRef", use the
	following syntax:
	
	  msmail(DisplayAddressScreen, messageRef) => anyRecipients
	
	With Mail version 3.00 an additional optional argument ("title") is available:
	
	  msmail(DisplayAddressScreen, messageRef[, title]) => anyRecipients
	
	MORE INFORMATION
	================
	
	If there are any recipients in the new address, "anyRecipients" is "true". If
	the recipient list is empty, anyRecipients is "false". To get a list of the
	recipients, use GetRecipients.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the Microsoft Mail function using a parameter (such as GetMessageList or
	CreateMessage) that returns a message reference.
	
	"title" is a name for the address window. If none is specified, then the default
	of "Address Mail" is displayed.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
