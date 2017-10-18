---
layout: page
title: "Q135527: Err Msg: Windows NT Could Not Be Started As Configured"
permalink: kb/135/Q135527/
---

## Q135527: Err Msg: Windows NT Could Not Be Started As Configured

	Article: Q135527
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardwarekbfaq
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you make changes to your Windows NT configuration and restart your
	computer, you may receive the following error message:
	
	  Windows NT could not be started as configured. A previous working
	  configuration was used instead.
	
	CAUSE
	=====
	
	This problem occurs on computers using an Award Modular BIOS version 4.50G,
	Award 4.50GP BIOS, or Award 4.50PG BIOS (the PG version supports Plug and Play).
	
	RESOLUTION
	==========
	
	According to Award Software, if you are using the Award Modular BIOS version
	4.50G you can correct this problem by changing the following CMOS settings one
	at a time until the problem goes away:
	
	- Daylight Savings Time: disabled
	
	- DMACLOCK: SCLK-2
	
	- PRQ2detection: enabled
	
	- IDEHDDblockmode: disabled
	
	NOTE: Some of these settings may not be available on all computers.
	
	If you are using the Award 4.50PG BIOS, you can correct this problem by disabling
	the Daylight Savings Time setting.
	
	You can also correct this problem by obtaining an updated Award BIOS from your
	computer manufacturer, or contact Award Software at (415) 968-4433.
	
	
	The Award Modular BIOS discussed here is manufactured by Award Software, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: 4.00startup fail pnp
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
