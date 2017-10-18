---
layout: page
title: "Q59923: Mac Hyp: Addressing Messages to Specified Recipient"
permalink: kb/059/Q59923/
---

## Q59923: Mac Hyp: Addressing Messages to Specified Recipient

	Article: Q59923
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The msmail function parameter "addRecipients" adds the users whose names are
	passed in "users" to the list of recipients for the message "messageRef". The
	syntax of the command is as follows:
	
	     msmail(AddRecipients, messageRef, users) => unknownUsers
	
	There are two valid formats for a user name in "users", as follows:
	
	  Unique Mail name:          Jane User
	  Fully extended name:       Jane User@Accounting Server
	
	In both cases, the components of the name must be given in full. Thus even if
	"Jane User" were the only person whose name began with "Jane," "Jane" would fail
	to match it, and "Jane User@Accounting" would fail to match the above fully
	extended name. To add a recipient from an address book in Microsoft Mail version
	3.00, put a double "@" sign after the name, as follows:
	
	     put msmail(AddRecipients, messRef, "Carpool@@") into Unknown
	
	You can add carbon copy or blind carbon copy recipients by prepending "Cc:" or
	"Bcc:" onto the recipient names. Therefore, adding "Cc:Jane User" adds this user
	as a carbon-copy recipient.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	Any users who cannot be found will be returned in the list "unknownUsers". This
	list is delimited by returns with one user name on each line.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
