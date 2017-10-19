---
layout: page
title: "Q153147: Client Inventory Fails on Game Ports"
permalink: /kb/153/Q153147/
---

## Q153147: Client Inventory Fails on Game Ports

	Article: Q153147
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run inventory, the client computer stops responding approximately 33
	percent of the way through the process. In verbose mode, the screen hangs on
	game ports.
	
	After waiting a minute or so, you may get a message indicating that the device
	has timed out. You then have a choice to select either "FAIL" or "ABORT."
	Regardless of the answer you enter, the computer locks and has to be rebooted.
	
	The last entry in the Smssafe.tmp file may show GamePorts=COMPLETED (before, the
	file did not exist).
	
	CAUSE
	=====
	
	The client computer may have a device using the default game port address
	(201h). This problem will occur because SMS queries this address when looking
	for game ports.
	
	
	MORE INFORMATION
	================
	
	When the Inventory Agent runs, it creates a file, Smssafe.tmp, to keep track of
	any hardware failures. This file is stored in the \MS\SMS\DATA directory in SMS
	1.1 and in the <SMS> root directory for SMS 1.0. Any failed hardware tests
	are written into this file while the Inventory Agent scans the hardware. When
	the inventory collection is complete, the Inventory Agent writes any failures to
	the Sms.ini file in the [WorkstationStatus] section, using the
	FailedHardwareChecks keyword. After moving the failed tests to the Sms.ini file,
	the Inventory Agent deletes the Smssafe.tmp file.
	
	DOS 6.22 MSD and other 3rd-party hardware diagnostic programs will also detect
	the existence of interrupt 201h as a game port when there is not one. To ensure
	that this is your problem, you can run MSD and determine if a game port is
	found.
	
	RESOLUTION
	==========
	
	To work around this problem, create a file named Smssafe.tmp using a text
	editor, such as Notepad, and add the following line:
	
	    GamePorts=CRASHED
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
