---
layout: page
title: "Q59128: Mac AL GW: Sending Mail Through the AppleLink Gateway"
permalink: kb/059/Q59128/
---

## Q59128: Mac AL GW: Sending Mail Through the AppleLink Gateway

	Article: Q59128
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
	
	To send an AppleLink mail message to a recipient on AppleLink, the following
	must be true:
	
	1. You must have a Microsoft Mail account on an AppleLink gateway server or an
	  AppleLink gateway-access server.
	
	2. The Network Manager of the gateway server must give your Mail account access
	  to an AppleLink account. This is done in the Define Gateway Accounts window.
	
	To send an AppleLink mail message to a recipient on AppleLink, do the followi
	
	1. Select the AppleLink Send form or the 80 Column form if using Mail 3.00. You
	  can use any of the forms, but the AppleLink form and 80 Column form are 80
	  characters wide in 9-point Monaco, which is compatible with AppleLink.
	
	2. Create the subject and body of the Mail message as you would in a normal Mail
	  message.
	
	3. Click the Address Mail button to bring up the Address Mail window.
	
	4. In the All list of recipients, select the AppleLink recipient, if the
	  recipient has been defined by the Network Manager of the gateway server. If
	  the AppleLink recipient has not been defined, click the AppleLink icon and
	  enter the information for the fields "Recipient Name" and "AppleLink Address"
	  in the address box that pops up. Click the Add button to add this recipient
	  to the list of Message Recipients. Repeat this step as many times as
	  necessary.
	
	5. Click the Close button when done adding message recipients.
	
	6. Click the Send button to send the Mail message.
	
	Please note that when an AppleLink mail message is actually sent through the
	gateway depends on the connect times set in the Gateway Connect Times window.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
