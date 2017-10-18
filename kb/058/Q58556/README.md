---
layout: page
title: "Q58556: Mac GW: How Gateway Servers Work"
permalink: kb/058/Q58556/
---

## Q58556: Mac GW: How Gateway Servers Work

	Article: Q58556
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
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
	User Sales and Service at (800) 426-9400 or Microsoft Customer Service at (206)
	936-8661, but ONLY for customers using the AppleLink Gateway to Microsoft Mail.
	Customers using other gateways must obtain an updated "MS Mail GW" file from the
	developer of the gateway they are using. The Microsoft Mail server upgrade can
	also be obtained at the above numbers.
	
	
	Gateway servers are created by using the Gateway Installer program to install the
	gateway resources in the data file of a Microsoft Mail server. The gateway
	server is the Mail server that has the physical connection to the external mail
	service (or any other service such as the stock exchange to receive stock
	quotes). In the case of the AppleLink gateway, the gateway server has the modem,
	which is used to connect to the AppleLink host, connected to the modem port.
	
	Mail users registered on the gateway server have access to the gateway. When a
	user on a gateway server sends a message to a recipient on the external service,
	the Mail server passes information about the Mail message to the gateway. The
	gateway then forwards the mail message to the external service.
	
	Please note that the sending of gateway messages is based on gateway accounts
	defined, if any, and scheduled connect times.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
