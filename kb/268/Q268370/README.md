---
layout: page
title: "Q268370: Windows NT Server &quot;0x00000023&quot; Error with Norton AntiVirus"
permalink: /kb/268/Q268370/
---

## Q268370: Windows NT Server &quot;0x00000023&quot; Error with Norton AntiVirus

{% raw %}

	Article: Q268370
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Norton AntiVirus on Windows NT 4.0, you may receive a "Stop
	0xA" error message on a blue screen. The error message may be similar to:
	
	  STOP: 0x00000023 (0x00110335, 0x00000001, 0x00000000, 0x00000000)
	  FAT_FILE_SYSTEM
	
	CAUSE
	=====
	
	The Norton Symevent.sys driver requests an input/output (I/O) request packet
	(IRP) to set file information in the FAT partition. In that (I/O) request, the
	file object is invalid, causing Fastfat to stop Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Symantec to obtain the latest update for the
	Symevent.sys driver.
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: trap dump
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
