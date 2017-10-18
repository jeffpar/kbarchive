---
layout: page
title: "Q71410: Mac Hyp: Setting Automatic Addition of Names to Address Book"
permalink: kb/071/Q71410/
---

## Q71410: Mac Hyp: Setting Automatic Addition of Names to Address Book

	Article: Q71410
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Mail Software Development Kit (SDK) for HyperCard, the
	following function sets the message's "Add recipients to Address Book" flag.
	This function affects only the current message.
	
	     msmail(SetAddToAddressBook, messageRef [, boolean])
	
	This function simulates the Add Recipients to Address Book option in the Options
	dialog box of the message's send screen. The default boolean is true.
	
	For example, the following commands will add the recipients of this message to
	the Address Book:
	
	     put msmail (createMessage) into messageRef
	     get msmail (setAddToAddressBook, messageRef, true)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	
