---
layout: page
title: "Q112376: RAS: Disable Modem Speaker Works on Outgoing Calls Only"
permalink: kb/112/Q112376/
---

## Q112376: RAS: Disable Modem Speaker Works on Outgoing Calls Only

	Article: Q112376
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft does not encourage nor support changes to .INF files; therefore,
	Microsoft Product Support Services (PSS) does not support the procedure in
	this article. Although we have tested the following procedure and it
	appears to function as described; we recommend that you make a backup copy
	of your .INF file before you proceed.
	
	SUMMARY
	=======
	
	The Disable Modem Speaker option in Remote Access Services (RAS) works with
	outgoing calls only. The Disable Modem Speaker option does not work when the RAS
	server is in Answer mode.
	
	MORE INFORMATION
	================
	
	Some modems have a switch that allows you to control the speaker. If your modem
	does not include this feature, it is possible to modify the MODEM.INF file in
	the Windows SYSTEM subdirectory to direct the modem to turn the speaker off
	during incoming calls.
	
	NOTE: The following procedure works only if your modem supports turning the
	speaker off with a software command.
	
	Steps to Disable the Modem Speaker
	----------------------------------
	
	1. Make a backup copy of your MODEM.INF file.
	
	2. Make a note of the DeviceName= setting in the SERIAL.INI file in the Windows
	  directory.
	
	3. Load the MODEM.INF file in a text editor.
	
	  NOTE: The MODEM.INF file is too large for the Microsoft Windows Notepad
	  application that ships with Windows for Workgroups; you must use another text
	  editor.
	
	4. Search for the modem name that appeared on the DeviceName setting of the
	  SERIAL.INI file.
	
	5. Retrieve the AT command that appears on the <speaker_off>= line in this
	  section.
	
	6. Place the AT command from step 5 before the <cr> statement on the
	  COMMAND_LISTEN= setting.
	
	Example
	-------
	
	If the SERIAL.INI file contains the following line
	
	     DeviceName=Supra Fax Modem V32bis
	
	and the MODEM.INF file has the following text
	
	     [Supra Fax Modem V32bis]
	     <speaker_on>=M1
	     <speaker_off>=M0
	     ...
	     COMMAND_LISTEN=ATS0=1<cr>
	     ...
	
	change the Command_Listen setting to:
	
	     [Supra Fax Modem V32bis]
	     <speaker_on>=M1
	     <speaker_off>=M0
	     ...
	     COMMAND_LISTEN=ATS0=1 M0<cr>
	     ...
	
	NOTE: This turns off the speaker when an incoming call is present; however, the
	Disable Modem Speaker setting under Options is still a valid selection for
	outgoing calls.
	
	Additional query words: 3.11 ptp change update
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
