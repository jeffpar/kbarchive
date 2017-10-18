---
layout: page
title: "Q152469: Hardware Inventory Hangs at 30% When Detecting the Game Port"
permalink: kb/152/Q152469/
---

## Q152469: Hardware Inventory Hangs at 30% When Detecting the Game Port

	Article: Q152469
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the network card's I/O address is set to 200h, hardware inventory will hang
	and ultimately fail when trying to detect the game port.
	
	CAUSE
	=====
	
	When inventory verifies whether the game port adapter is in the computer (using
	Getother.exe), it makes a call to port 201h (this is the industry standard
	setting for game ports). This call impinges on the network card address range,
	causing the network connection to hang.
	
	The issue is discussed in QUE's "Upgrading and Repairing PCs" (4th edition):
	
	  The game adapter does not use much in the way of system resources. The
	  card does not use an IRQ, DMA channel, or memory, and requires only a
	  single I/O address (port) 201h. The adapter is controlled by reading and
	  writing data to and from port 201h.
	
	WORKAROUND
	==========
	
	There are three possible workarounds to this problem:
	
	1. Set the net card I/O address to another value (recommended).
	
	2. Create an Smssafe.tmp file and add "GamePorts=CRASHED" to prevent it from
	  being inventoried.
	
	3. Remove Getother.exe from your SMS site, so that the it is never called during
	  the inventory process. (Not Recommended)
	
	Additional query words: prodsms sms game port adapter 201h network getother
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
