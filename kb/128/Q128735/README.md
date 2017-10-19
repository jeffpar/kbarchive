---
layout: page
title: "Q128735: Microcom DeskPorte FAST EP 28.8 Not Compatible With ES Model"
permalink: /kb/128/Q128735/
---

## Q128735: Microcom DeskPorte FAST EP 28.8 Not Compatible With ES Model

	Article: Q128735
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a call from Windows NT 3.5 Remote Access Service (RAS), and your
	EP modem is configured as an ES modem, the call fails. Event Id 20015
	(indicating a hardware failure) is written to the system log.
	
	Windows for Workgroups 3.11 did not ship with support for any Microcom DeskPorte
	v.fast modems. However, if the [Microcom DeskPorte FAST ES 28.8] modem section
	from Windows NT is appended to the Windows for Workgroups 3.11 MODEM.INF file,
	hardware failure symptoms occur when you attempt to make a call.
	
	CAUSE
	=====
	
	The Windows NT 3.5 MODEM.INF section for the Microcom DeskPorte FAST EP 28.8 is
	not compatible with the Microcom DeskPorte FAST ES 28.8 (which is supported in
	Windows NT 3.5).
	
	RESOLUTION
	==========
	
	Windows NT
	----------
	
	To correct this problem under Windows NT, either use the MODEM.INF section for
	the Microcom DeskPorte FAST (which is a different from the ES model) or use the
	[Microcom DeskPorte FAST EP 28.8] section provided below.
	
	Although the MODEM.INF section for the Microcom DeskPorte FAST works for the EP
	model, it has to be manually selected in Windows NT since RAS Setup in Control
	Panel (the Network) not automatically detect the modem (because the EP modem
	identifies itself with a different string). After you select the Microcom
	DeskPorte FAST, restart RAS.
	
	The new [Microcom DeskPorte FAST EP 28.8] section below works for most EP modems
	and allows Control Panel to automatically detect the correct modem.
	
	NOTE: If your EP modem has a ROM revision that responds to the ATI3 detection
	command with a different string than the EP modems used in Microsoft's tests,
	your modem will not be detected.
	
	Windows for Workgroups
	----------------------
	
	To use the EP model under Windows for Workgroups version 3.11, append the below
	[Microcom DeskPorte FAST EP 28.8] section to your MODEM.INF file after you
	remove the following two lines:
	
	  DETECT_STRING=ATI3<cr>
	  DETECT_RESPONSE=DeskPorte 28.8P 2.0
	
	
	General Information
	-------------------
	
	The EP and ES MODEM.INF sections differ as follows:
	
	- The hardware flow control command is different in the EP version:
	
	   - The EP uses: \Qx
	
	   - The ES uses: &Kx
	
	     where x represents a number that modifies the command.
	
	- The DETECT_RESPONSE strings (after issuing ATI3) are different:
	
	   - The EP uses: DeskPorte 28.8P 2.0
	
	   - The ES uses: DeskPorte V.FC
	
	The new MODEM.INF section should be appended to your existing MODEM.INF file:
	
	;----------------------------------------
	[Microcom DeskPorte FAST EP 28.8]
	; NOTE: this EP version is different from the ES version in terms of
	; hardware flow control and DETECT_RESPONSE= strings.
	CALLBACKTIME=10
	DEFAULTOFF=compression
	MAXCARRIERBPS=28800
	MAXCONNECTBPS=57600
	
	<speaker_on>=M1
	<speaker_off>=M0
	<protocol_on>=\\N3
	<protocol_off>=\\N0
	<hwflowcontrol_on>=\\Q3
	<hwflowcontrol_off>=\\Q0
	<compression_on>=%C3
	<compression_off>=%C0
	<autodial_on>=ATDT
	<autodial_off>=ATD
	
	DETECT_STRING=ATI3<cr>
	DETECT_RESPONSE=DeskPorte 28.8P 2.0
	
	COMMAND_INIT=AT&F&C1&D2 V1 -M0 W1 S2=128 S7=55<cr>
	COMMAND_INIT=AT<speaker><compression><hwflowcontrol><protocol><cr>
	
	COMMAND_LISTEN=ATS0=1<cr>
	COMMAND_DIAL=<autodial><phonenumber><cr>
	
	;----------------------------------------
	
	Additional query words: prodnt initialization fails
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	
