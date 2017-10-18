---
layout: page
title: "Q60093: Mac GW: User Can't Send Mail Through a Gateway"
permalink: kb/060/Q60093/
---

## Q60093: Mac GW: User Can't Send Mail Through a Gateway

	Article: Q60093
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
	
	If the Network Manager has added a user to a gateway account, but that user
	cannot see the gateway address icon in the Address Mail window, that user is not
	registered on the gateway server or on a gateway- access server. Also, if the
	gateway has its own Send form, as does the AppleLink gateway, the user will not
	be able to see this form in the Summary window.
	
	When defining gateway accounts in the Define Gateway Accounts window, the Network
	Manager can select any user on the Mail network. However, to give users access
	to the gateway so that they can send mail, the Network Manager must add only
	users registered on the gateway server or on an access server. Since the gateway
	resources are installed only on the gateway server or on an access server, only
	users registered on these servers can see the gateway resources to send mail.
	Please note that the Network Manager can specify that any user on the Mail
	network can receive gateway mail, since gateway resources are not required to
	receive mail. For more information about receiving incoming gateway mail, query
	on the following words:
	
	  " default and user " (without the quotation marks)
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
