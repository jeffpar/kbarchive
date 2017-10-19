---
layout: page
title: "Q103733: Error Messages or Hangs Using 3Com EtherLink III (3C509)"
permalink: /kb/103/Q103733/
---

## Q103733: Error Messages or Hangs Using 3Com EtherLink III (3C509)

	Article: Q103733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive error messages or your computer may stop responding (hang) when
	you use a 3Com EtherLink III (3C509 or 3C509TP) network adapter card if your
	card is configured for a maximum modem speed setting that is too high. If a
	problem occurs when you start (boot) your computer, an error message such as the
	following may occur:
	
	  Error #5740 the Protocol Manager Reported a Protocol Failure at
	  Initialization
	
	RESOLUTION
	==========
	
	To correct these problems, run the Menu program on the 3C509 Utility disk
	supplied with your EtherLink card. The following instructions describe how to
	use the Menu program to change the maximum modem speed for your EtherLink card:
	
	1. Start the Menu program.
	
	2. From the main menu, choose Diagnostic and Configuration Program.
	
	3. On the next menu, choose the Install option.
	
	4. Choose Configure Adapter to open the Adapter Configuration menu.
	
	5. From the Adapter Configuration menu, select the Maximum Modem Speed option.
	
	6. The default speed, 9600, is usually appropriate. If your machine is slower,
	  select a lower value.
	
	MORE INFORMATION
	================
	
	The following quote, from page 2-4 of the "EtherLink III Adapter Guide,"
	describes the function of the Maximum Modem Speed option:
	
	  Selecting a modem speed tells the adapter how long it can disable interrupts
	  without causing problems with the serial port. The lower the modem speed, the
	  longer the adapter can keep interrupts disabled. On slower computers, running
	  with longer disabled interrupts can improve network performance. On those
	  computers, changing the option setting to 2400, 1200 or No Modem may improve
	  performance. On faster computers, there is little performance difference
	  between the settings.
	
	If you experience problems with your modem, such as dropped characters or
	excessive retries, selecting a higher option setting should help. If the problem
	is not due to the EtherLink III driver, changing the option setting does not
	make a difference.
	
	If you experience compatibility problems between your adapter and another device
	in the system other than a modem, selecting a higher option may help.
	
	NOTE: The default value (9600 bits per second [BPS]) works whether you have a
	modem or not, or even if the modem is slower than the default (example, 2400
	BPS). Do not change the default option setting unless you experience problems.
	
	Additional query words: 3.10 hang hung crash crashed locks locked frozen freezes crashing quit quits stopped
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
