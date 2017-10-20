---
layout: page
title: "Q120201: RAS Err Msg: Error 717: Serial Overrun Errors Were Detected..."
permalink: /kb/120/Q120201/
---

## Q120201: RAS Err Msg: Error 717: Serial Overrun Errors Were Detected...

{% raw %}

	Article: Q120201
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial a Remote Access Services (RAS) server, the connection is not
	established, and the following error message is displayed:
	
	  Error Communicating with Server
	
	  Error 717: Serial Overrun Errors were detected Communicating with your Modem.
	
	Help suggests lowering the bits-per-second (BPS) rate. Although this eliminates
	the error message, it prevents you from using the full capabilities of your
	high-speed modem.
	
	CAUSE
	=====
	
	This error message occurs when a high-speed modem with a 16550 UART chip is
	being used and the COMxFIFO= setting for the corresponding communications (COM)
	port is set to 0 (zero). The COMxFIFO= entry default is normally 1.
	
	
	RESOLUTION
	==========
	
	To correct this problem, manually edit the SYSTEM.INI file and change the
	COMxFIFO= setting (where x is the COM port the modem is on) in the [386Enh]
	section to 1.
	
	Additional query words: 3.11 over run zero com1fifo com2fifo com3fifo com4fifo
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
