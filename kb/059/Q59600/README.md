---
layout: page
title: "Q59600: Mac GW: Allowing Multiple Users to Receive Gateway Mail"
permalink: /kb/059/Q59600/
---

## Q59600: Mac GW: Allowing Multiple Users to Receive Gateway Mail

	Article: Q59600
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: All Microsoft Mail version 2.00 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.00b and the "Microsoft Mail
	Server" file version 2.00b, both of which are located in the System Folder of
	the Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661 but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	MORE INFORMATION
	================
	
	For multiple Mail users to receive incoming mail for a gateway account, these
	users must be defined as a Microsoft Mail group. To make this group the "default
	user," do the following:
	
	1. In the Define Gateway Accounts window, after you have filled in the other
	  appropriate gateway account information, click the Add Users button.
	
	2. Select and add the users that you want to be able to send Mail through the
	  gateway. Also add the group that includes all the users that you want to
	  receive the incoming gateway mail.
	
	3. Click the Close button when done to return to the Define Gateway Accounts
	  window.
	
	4. In the list of gateway users, click the name of the group that includes all
	  the users that you want to receive the incoming gateway mail. This
	  highlighted group or user is called the "default user."
	
	5. Click the Define button.
	
	Now all incoming gateway mail for this account will be received by everyone in
	the default user group.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
