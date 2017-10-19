---
layout: page
title: "Q80655: Mac AL: Troubleshooting the AppleLink Gateway"
permalink: /kb/080/Q80655/
---

## Q80655: Mac AL: Troubleshooting the AppleLink Gateway

	Article: Q80655
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is useful for troubleshooting problems with the
	AppleLink Gateway for version 3.0 of Microsoft Mail for AppleTalk Networks.
	
	- The AppleLink Comm application should be running at all times.
	
	- In the Chooser, the Mail server with the AppleLink gateway installed should
	  be selected when MS Mail GW is selected.
	
	- For System 7.0, MS Mail GW version 3.0a must be used.
	
	- Check for a file named "AG Scratch" in the AppleLink Out Basket, which is
	  located in the System Folder. The file "AG Scratch" is a temporary file that
	  is created and then deleted after the AppleLink gateway completes a session.
	  Delete this file if the AppleLink gateway is not currently connected and is
	  not working correctly.
	
	- Make sure the "USA Modem.EF3.CCL" file included with the AppleLink gateway is
	  correctly specified in the Gateway Configuration screen. This script file has
	  been modified to work specifically with the AppleLink gateway.
	
	- See if the AppleLink application from Apple can be used successfully on the
	  same machine with the same modem settings. If the AppleLink software is
	  successful, then the AppleLink Gateway should be successful as well. Try
	  sending another message at this point.
	
	- Make sure your modem is set for verbose mode, no error correction and Hayes
	  modem emulation.
	
	MORE INFORMATION
	================
	
	Displaying the AppleLink Comm trace window can be very useful for debugging
	problems with the gateway.
	
	While troubleshooting a problem, select "Connect immediately when there is
	outgoing mail" in the Gateway Connect Times screen for the AppleLink gateway.
	The gateway should then attempt to connect to AppleLink when a mail message is
	sent to an AppleLink recipient.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
