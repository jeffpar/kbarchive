---
layout: page
title: "Q59125: Mac GW: AppleLink Comm Will Not Start Up, Missing &quot;MS Mail GW&quot;"
permalink: /kb/059/Q59125/
---

## Q59125: Mac GW: AppleLink Comm Will Not Start Up, Missing &quot;MS Mail GW&quot;

	Article: Q59125
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
	Service at (206) 936-9661, but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	MORE INFORMATION
	================
	
	When starting the AppleLink Comm program, you will receive the following error
	message if the file "MS Mail GW" is not in the System Folder of the Macintosh
	acting as the gateway Mail server:
	
	Unable to launch application for the following reason: Gateway Services not
	present. Check to see if MS Mail GW is in your System Folder.
	
	The only option is to click the OK button.
	
	To correct this problem, copy the file "MS Mail GW" from the Gateway For
	AppleLink disk into the System Folder of the gateway server and restart.
	
	After restarting the server, do the following:
	
	1. From the Apple menu, choose the Chooser.
	
	2. Click the icon for MS Mail GW.
	
	3. Select the name of the gateway server and close the Chooser.
	
	When running the AppleLink gateway, the AppleLink Comm program should be set as a
	start-up application.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
