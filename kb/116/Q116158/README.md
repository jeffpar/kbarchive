---
layout: page
title: "Q116158: RAS Server Resets in Answer Mode with Sportster Modem"
permalink: /kb/116/Q116158/
---

## Q116158: RAS Server Resets in Answer Mode with Sportster Modem

{% raw %}

	Article: Q116158
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft does not encourage nor support user changes to .INF files;
	therefore, Microsoft Product Support Services (PSS) does not support the
	procedure in this article. Although we have tested the following procedure
	and it appears to function as described; we strongly recommend that you
	make a backup copy of your .INF file before you proceed.
	
	SYMPTOMS
	========
	
	When Remote Access Services (RAS) is placed in answer mode with a U.S. Robotics
	14400 Internal Sportster modem, the modem may stay in a continuous loop between
	"Waiting for Call" and "Device Reset." This issue occurs only when the device is
	placed in answer mode with the RAS point-to-point server.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the modem initialization entry (COMMAND_INIT=) in
	the [US Robotics Sportster 14400] or [US Robotics Courier V.32bis] section of
	the MODEM.INF file as follows:
	
	1. Run Microsoft Windows for Workgroups Write and open the MODEM.INF file.
	
	2. Choose the No Conversion button.
	
	3. From the Find menu, choose Find.
	
	4. In the Find What box, type "[US Robotics Sportster 14400]" (without the
	  quotation marks) or "[US Robotics Courier V.32bis]" (without the quotation
	  marks) and then choose Find Next.
	
	5. Choose Cancel and then change "AT&F" (without the quotation marks) to
	  "ATZ&F" (without the quotation marks). For example, change
	
	  COMMAND_INIT=AT&F&C1&D2 V1 S0=0 S2=128 S7=55 W1 S95=44
	
	  to:
	
	  COMMAND_INIT=ATZ&F&C1&D2 X7 V1 S0=0 S2=128 S7=55 W1 S95=44
	
	6. Save the MODEM.INF file.
	
	7. Quit and restart RAS Phonebook.
	
	  This issues a reset command that resets the modem to the factory defaults.
	
	The X command setting establishes compatibility with older modems that send
	different result codes to the receiving modem. X7 is used to enable result codes
	0-11 and 13-43, which are used mainly on U.S. Robotics modems. Check the BIOS
	date of the modem and then check with the modem manufacturer to determine the
	current modem BIOS date available.
	
	
	Additional query words: 3.11 hardware failure errors gateway 2000 point to ptp 3rdparty usr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
