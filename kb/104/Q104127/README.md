---
layout: page
title: "Q104127: Mac Gty: Gateway Entry Behavior After Gateway Removal/Install"
permalink: kb/104/Q104127/
---

## Q104127: Mac Gty: Gateway Entry Behavior After Gateway Removal/Install

	Article: Q104127
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.0 or 3.1 of Microsoft Mail for AppleTalk Networks, you may
	receive an undeliverable mail message when you send mail to gateway recipients
	you added to your Personal Address Book (PAB). If the particular gateway has
	been removed, Mail will be returned to you with the following error message:
	
	  Could not be delivered because the gateway has been removed
	
	This may cause confusion, because you would expect gateway recipients to be
	removed when the gateway is removed.
	
	CAUSE
	=====
	
	System-defined gateway recipients such as those added by the network manager or
	by a batch process such as the Connection Name utility will be removed when the
	gateway is removed. This removal is by design. System-defined gateway recipients
	can be copied and installed by using the Gateway Installer program. To preserve
	the account information, the network manager should use the Copy Accounts and
	Recipients feature of the the Gateway Installer before removing the gateway or
	rebuilding the Mail Data file. After the gateway resources have been installed,
	the Install Accounts and Recipients option will replace the user information.
	
	In contrast, if you add gateway recipients to your PAB through the particular
	gateway's custom form or the Special Addressing Form, the recipients will remain
	in your address book after the gateway is removed. The means you use to remove
	the gateway has no visual effect; user-defined gateway recipients will remain
	whether the gateway is removed with the Gateway Installer or whether the gateway
	is erased as a consequence of rebuilding the data file using Mail Tools.
	Administrator-defined gateway recipients will be removed in either case.
	
	System-defined gateway recipients who are added to a user's PAB will be removed
	when the gateway is removed. Only entries that were defined by the user using
	the special icon or a custom one-off addressing screen will remain in the PAB.
	
	RESOLUTION
	==========
	
	Reinstalling the gateway (either the master gateway with the same two-letter ID
	code, or the access gateway) should reactivate those user-defined gateway
	recipients stored in your PAB. Once the recipient's source gateway is
	reinstalled, you should be able to send messages to the recipient just as you
	had before the gateway was removed. Microsoft has tested and confirmed this
	process with the AppleLink, Fax, and Mail Connection gateways.
	
	However, some third-party gateways may produce different results. If selecting
	the recipient and clicking the Details button fails to return the correct
	information, you must redefine the gateway recipient.
	
	Additional query words: 3.00 3.10 names addresses detail accounts
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
