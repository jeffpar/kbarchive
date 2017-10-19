---
layout: page
title: "Q163086: IBM MWave 28800 Modem Does Not Function Properly with RAS"
permalink: /kb/163/Q163086/
---

## Q163086: IBM MWave 28800 Modem Does Not Function Properly with RAS

	Article: Q163086
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some models of the IBM MWave 28800 modems do not work with Remote Access Service
	(RAS) and other communications software. However, the same modems sometimes
	appear to function properly with Windows Terminal or other communications
	software.
	
	CAUSE
	=====
	
	The IBM MWave 28800 modems are not on the Windows NT 3.51 Hardware Compatibility
	List (HCL). Windows NT detects these modems as generic 28800 modems, and may
	drop connections intermittently.
	
	RESOLUTION
	==========
	
	To resolve this problem, update the existing Modem.inf file in the
	%Systemroot%\System32\Ras directory by appending the following information:
	
	  ;----------------------------------------
	  [Mwave 28800]
	  <speaker_on>=M1
	  <speaker_off>=M0
	  <autodial_on>=ATDT
	  <autodial_off>=ATX3D
	  <speaker_on>=M1
	  <speaker_off>=M0
	  <hwflowcontrol_on>=&K3
	  <hwflowcontrol_off>=&K0
	  <compression_on>=%C1"H3
	  <compression_off>=%C0"H0
	  <protocol_on>=\\N7
	  <protocol_off>=\\N0
	
	  CALLBACKTIME=10
	  DEFAULTOFF=compression
	  MAXCARRIERBPS=28800
	  MAXCONNECTBPS=57600
	
	  DETECT_STRING=ATI3<cr>
	  DETECT_RESPONSE=IBM Mwave Modem v3.0
	
	  COMMAND_INIT=AT&F&C1&D2 V1 S0=0 S2=128 S7=55<cr>
	  COMMAND_INIT=AT<hwflowcontrol><protocol><compression><speaker><cr>
	  COMMAND_DIAL=<autodial><phonenumber><cr>
	  COMMAND_LISTEN=ATS0=1<cr>
	
	IBM also suggests that you set the PORT flow control to hardware and click to
	select FIFO under advanced settings.
	
	STATUS
	======
	
	This problem occurs when you use Windows NT 3.5 or 3.51 and IBM MWave modems.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51
	Issue type        : kbprb
	
	=============================================================================
	
