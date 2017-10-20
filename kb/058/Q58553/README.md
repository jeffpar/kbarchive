---
layout: page
title: "Q58553: Mac GW: How Gateway-Access Servers Work"
permalink: /kb/058/Q58553/
---

## Q58553: Mac GW: How Gateway-Access Servers Work

{% raw %}

	Article: Q58553
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
	
	IMPORTANT: All Microsoft Mail version 2.0 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.0b and the "Microsoft Mail
	Server" file version 2.0b, both of which are located in the System Folder of the
	Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661 but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	Initially, only those Microsoft Mail users registered on the gateway server can
	exchange messages with the gateway's external mail service. Creating a
	gateway-access server allows users on the access server to exchange messages
	with the external mail service as well.
	
	Gateway-access servers are created by using the Gateway Installer to first
	extract access-server resources from an existing gateway server and then using
	the Gateway Installer to install those resources on Mail servers that you want
	to have access to the gateway. These resources include the gateway address
	dialog box in the Address Mail window for specifying gateway recipients and can
	include the forms to send, read, and print gateway messages. Please note that in
	Mail version 3.0, you can make all servers in a site gateway-access servers. For
	more information, query on the following words:
	
	  "access" (without the quotation marks) and "gateway" (without the quotation
	  marks) and "site" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For example, suppose you have a company with 10 Microsoft Mail servers and only
	one modem, and users on four different Mail servers need access to AppleLink. To
	give all these users access to AppleLink, set one of the four Mail servers up as
	a gateway server and the other three as gateway-access servers.
	
	When a user on an access server sends a message to a recipient on the external
	service, the access server forwards the Mail message to the Mail server that is
	its gateway server. The gateway server, depending on its gateway accounts and
	connect times, sends the mail message to the external service.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
