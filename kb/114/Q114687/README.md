---
layout: page
title: "Q114687: Setting Number of Rings for RAS Server Auto-Answer in NT 3.5x"
permalink: /kb/114/Q114687/
---

## Q114687: Setting Number of Rings for RAS Server Auto-Answer in NT 3.5x

	Article: Q114687
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	The number of rings a Remote Access Service (RAS) server's modem allows
	before answering is easily configurable.
	
	A network administrator may have RAS running on a Windows NT Server or
	Advanced Server and want to share the phone line between another device (a
	fax machine, for example) and the RAS modem. This article describes how to
	set the number of rings the modem waits before answering.
	
	To edit the MODEM.INF file found in WINNT\SYSTEM32\RAS, find the section
	relating to your modem, and change the value on the COMMAND_LISTEN line
	(the last line in the example below) to the number of rings you want before
	the modem answers.
	
	NOTE: You must re-boot the NT server before the change will take effect.
	
	  [Hayes Compatible 9600]
	  <speaker_on>=M1
	  <speaker_off>=M0
	  <autodial_on>=ATDT
	  <autodial_off>=ATX3D
	  CALLBACKTIME=10
	  DEFAULTOFF=
	  MAXCARRIERBPS=9600
	  MAXCONNECTBPS=9600
	
	  COMMAND_INIT=AT&F&C1&D2 V1 S0=0 S2=128 S7=55<speaker><cr>
	  COMMAND_DIAL=<autodial><phonenumber><cr>
	  COMMAND_LISTEN=ATS0=1<cr>
	
	Additional query words: prodnt ras modem
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
