---
layout: page
title: "Q124726: MODEM.INF Settings for US Robotics Modems"
permalink: /kb/124/Q124726/
---

## Q124726: MODEM.INF Settings for US Robotics Modems

	Article: Q124726
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	US Robotics has a file available containing updated MODEM.INF settings for use
	with all of their modems. These MODEM.INF settings have been tested with the
	Remote Access Service (RAS) software included with Windows for Workgroups 3.11,
	Windows NT version 3.1, and Windows NT version 3.5. The file, MDMUSR.INF, can be
	downloaded from the US Robotics BBS at (847) 982- 5092.
	
	MORE INFORMATION
	================
	
	Enclosed is the contents of the file MDMUSRV2.INF. To use this file, you can
	either rename it to MODEM.INF and place it in the \WINNT\SYSTEM32\RAS directory
	or add the settings to the existing MODEM.INF that ships with Windows NT. In
	either case, be sure to backup the original MODEM.INF before making changes.
	
	If you choose to add the settings from MDMUSRV2.INF to the existing MODEM.INF, be
	sure to delete or comment the original US Robotics sections included in the
	MODEM.INF.
	
	Contents of MDMUSRV2.INF
	------------------------
	
	; MDMUSRV2.INF
	;
	; For use with Windows for Workgroups, NT 3.1, NT 3.5
	
	; 10/25/94 - modified to include PCMCIA aliases
	; 12/12/95 - modified to allow 33.6 connections
	;     - MAXCONNECT jumped to 57600
	;          - COMPRESSION_ON changed to &K1
	;          - &a3 changed to &a1 to eliminate superflous result codes
	
	[Responses]
	
	; General non-connect responses that all USR modems generate...
	
	OK=<cr><lf>OK<cr><lf>
	LOOP=<cr><lf>RING<cr><lf>
	LOOP=<cr><lf>RINGING<cr><lf>
	ERROR=<cr><lf>ERROR<cr><lf>
	ERROR_NO_CARRIER=<cr><lf>NO CARRIER<cr><lf>
	ERROR_VOICE=<cr><lf>VOICE<cr><lf>
	ERROR_NO_DIALTONE=<cr><lf>NO DIAL TONE<cr><lf>
	ERROR_BUSY=<cr><lf>BUSY<cr><lf>
	ERROR_NO_ANSWER=<cr><lf>NO ANSWER<cr><lf>
	
	; General connect responses that all USR modems generate...
	
	CONNECT=<cr><lf>CONNECT <ignore>/NONE<ignore>
	CONNECT_EC=<cr><lf>CONNECT <ignore>/ARQ<ignore>
	
	; Since serial port is locked, carrier rate is irrelevant.  The RAS
	; client calcuates link rate after connection is accepted.
	
	[USRobotics General]
	
	; This selection can be used by almost ALL USRobotics modems!
	
	; * ITU-T standards are on by default to ensure compatibility with
	; non-USR modems.
	
	; * X4 is set to ensure compatibility with Sportster modems. Advanced
	; dial features for Courier can be activated by placing X7 in the dial
	; string. (i.e. phone number field contains "1-708-676-1059X7"
	
	CALLBACKTIME=10
	DEFAULTOFF=speaker
	MAXCARRIERBPS=33600
	MAXCONNECTBPS=57600
	<speaker_on>=m1
	<speaker_off>=m0
	<hwflowcontrol_on>=&h1&r2
	<hwflowcontrol_off>=&h0&r1
	<compression_on>=&k1
	<compression_off>=&k0
	<protocol_on>=&m4
	<protocol_off>=&m0
	<autodial_on>=ATdt
	<autodial_off>=ATd
	COMMAND_INIT=AT&f&a1x4e1q0v1s0=0s7=55s2=128<cr>
	COMMAND_INIT=AT&b1&c1&d2b0x4<hwflowcontrol><compression><protocol><speaker>
	<cr>
	COMMAND_DIAL=<autodial><phonenumber><cr>
	COMMAND_LISTEN=ATS0=1<cr>
	
	; US Robotics modems are defined in original MODEM.INF are maintained
	; here for installation purposes
	
	[US Robotics Courier Dual]
	ALIAS=USRobotics General
	
	[US Robotics Courier HST]
	ALIAS=USRobotics General
	
	[US Robotics Courier V.32bis]
	ALIAS=USRobotics General
	
	[US Robotics Sportster 2400]
	ALIAS=USRobotics General
	
	[US Robotics Worldport PCMCIA 14400]
	ALIAS=USRobotics General
	
	[US Robotics Sportster PCMCIA 14400]
	ALIAS=USRobotics General
	
	[US Robotics Courier PCMCIA 14400]
	ALIAS=USRobotics General
	
	[US Robotics Sportster 9600]
	ALIAS=USRobotics General
	
	[US Robotics V.FC/V.34]
	ALIAS=USRobotics General
	
	The US Robotics products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: wfw wfwg prodnt MDMUSRV2.INF
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
