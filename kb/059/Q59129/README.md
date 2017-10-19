---
layout: page
title: "Q59129: Mac AL: Creating an AppleLink Gateway-Access Server"
permalink: /kb/059/Q59129/
---

## Q59129: Mac AL: Creating an AppleLink Gateway-Access Server

	Article: Q59129
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
	
	IMPORTANT: All Microsoft Mail version 2.0 customers who have gateways installed
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
	
	To create an AppleLink gateway-access server, the associated AppleLink gateway
	server must already be installed. To create an AppleLink access server, do the
	following:
	
	1. Extract the AppleLink gateway-access server resources from the AppleLink
	  gateway server as follows:
	
	  a. On the gateway server from which you are creating the access server,
	     select the "MS Mail 2.0" or "MS Mail" icon in the Chooser and make sure
	     the gateway server's name is selected.
	
	  b. Click the Chooser's close box to return to the desktop.
	
	  c. Start the Gateway Installer program.
	
	  d. Select the AppleLink gateway from the "Gateways Installed On This Server"
	     list in the Gateway Installer window.
	
	  e. From the Gateway menu, choose Extract Access Gateway.
	
	  f. The name "AppleLink Access Gateway" is proposed. Click the Save button.
	
	2. Install the AppleLink gateway-access server resources as follows:
	
	  a. On the gateway server, select the "MS Mail 2.0" or "MS Mail" icon in the
	     Chooser.
	
	  b. Select the appropriate AppleTalk zone and select the name of the Mail
	     server you are making an access server.c. Close the Chooser.
	
	  c. If you are not running the Gateway Installer from step 1f above, start the
	     Gateway Installer program.
	
	  d. The name of the Mail server you are making an access server should be
	     displayed.
	
	  e. From the Access menu, choose Install Access Gateway.
	
	  f. Select the file named "AppleLink Access Gateway", created in step 1f
	     above, and click the Install button.
	
	  g. When done, choose Quit from the File menu.
	
	  Users with accounts on the AppleLink gateway-access server will now:
	
	   - Have access to the AppleLink Send form in the Mail Summary window.
	
	   - Be able to send mail through the AppleLink gateway, depending on the
	     gateway accounts defined.
	
	   - Have access to the AppleLink gateway address screen in the Address Mail
	     window.
	
	   - See AppleLink gateway recipients, defined on the AppleLink gateway server,
	     in the All users list in the Address Mail window.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
