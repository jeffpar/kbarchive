---
layout: page
title: "Q51350: Mac GW: Gateway Recipients Propagate Only to Access Servers"
permalink: kb/051/Q51350/
---

## Q51350: Mac GW: Gateway Recipients Propagate Only to Access Servers

	Article: Q51350
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
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661, but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	Gateway recipients are external mail accounts with which Microsoft Mail users
	communicate frequently. These account names are added to the Microsoft Mail
	directory list of the gateway server and any gateway-access servers created from
	it. However, these names do not propagate to any other servers on the network.
	Since only the server on which the recipients reside (and any gateway-access
	servers created from it) can have privileges to send to these users, these names
	don't need to be propagated to all servers in the network.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
