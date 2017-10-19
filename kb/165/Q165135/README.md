---
layout: page
title: "Q165135: XCLN: Client Setup Requires a Restart During First Install"
permalink: /kb/165/Q165135/
---

## Q165135: XCLN: Client Setup Requires a Restart During First Install

	Article: Q165135
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; Win95:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Client for Windows 95, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Client is installed on a workstation for the very
	first time, the Setup program requires that you restart Windows at the end of
	Setup. When you use quiet mode setup (setup /q), this restart occurs
	automatically. Even if you remove Microsoft Exchange Client completely and run
	Setup again, it will not require a restart on subsequent occasions.
	
	CAUSE
	=====
	
	The Setup program uses the file Ole32.dll but at the same time wants to replace
	the Windows 95 version (dated 7/11/95) with its own newer copy (3/8/96 for RTM,
	7/2/96 for SP2). Because it has been loaded into memory, Windows must restart to
	unload the file so it can be replaced.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Replace the existing Win95\System\Ole32.dll file with the newer copy from the
	  share point before running Setup. The file can be extracted from Exchng6.cab
	  if necessary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0; Win95:4.0
	
	=============================================================================
	
