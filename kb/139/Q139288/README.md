---
layout: page
title: "Q139288: How to Change the Default Port Speed on a RAS Server"
permalink: /kb/139/Q139288/
---

## Q139288: How to Change the Default Port Speed on a RAS Server

	Article: Q139288
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set the Remote Access Service (RAS) Server Port Speed (bps) field displayed
	in the Port Status dialog box of RasAdmin (RASADMIN.EXE), you must modify the
	INITIALBPS parameter in the
	%SystemRoot%\SYSTEM32\RAS\SERIAL.INI file.
	
	To view the Port Speed (bps) field in the Port Status dialog box:
	
	1. Run RasAdmin.
	
	2. From the Server menu, choose Communication Ports.
	
	3. Choose Port Status.
	
	To change the Port Speed on your RAS server follow the instructions below.
	
	MORE INFORMATION
	================
	
	Windows NT RAS sets two bits per second (bps) speeds for each RAS serial port:
	
	- The carrier bps speed.
	
	- The connect bps speed also referred to as port speed.
	
	The carrier bps speed is the speed is read from the MAXCARRIERBPS parameter in
	your modem's section of the %SystemRoot%\SYSTEM32\RAS\MODEM.INF file. The
	carrier bps set the speed at which the two connected modems send data over the
	telephone line.
	
	The connect bps speed, or port speed, is the speed at which data is transferred
	between your modem and the serial port on your computer (also known as the Data
	Terminal Equipment [DTE] to Data Communication Equipment [DCE] bps transfer
	rate).
	
	While the carrier bps used by the RAS server modem may be different for each RAS
	connection due to the connecting modem capabilities, line noise, etc., the RAS
	server connect bps is always initialized at the same speed. The connect bps
	speed used by the RAS server is read from the MAXCONNECTBPS parameter in your
	modem's section of the %SystemRoot%\SYSTEM32\RAS\MODEM.INF file when you install
	your modem. The speed is then stored in the INITIALBPS parameter of the
	SERIAL.INI file. The RAS server service then uses the INITIALBPS parameter in
	SERIAL.INI to initialize the port speed whenever the RAS server service is
	started.
	
	To Change the Port Speed (bps):
	
	NOTE: Verify that your modem and serial port support the Port Speed value you
	intend to set.
	
	1. Load the %SystemRoot%\SYSTEM32\RAS\SERIAL.INI into a text editor, for
	  example, NOTEPAD.EXE.
	
	2. Change the INITIALBPS parameter to the desired value.
	
	3. Save SERIAL.INI.
	
	4. Run RasAdmin.
	
	5. From the Server menu, choose Stop Remote Access Service.
	
	6. From the Server menu, choose Start Remote Access Service.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.50 3.51
	
	=============================================================================
	
