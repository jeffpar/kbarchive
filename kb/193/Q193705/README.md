---
layout: page
title: "Q193705: Cannot Use 11 or More Musical Instrument Device Interface Ports"
permalink: /kb/193/Q193705/
---

## Q193705: Cannot Use 11 or More Musical Instrument Device Interface Ports

	Article: Q193705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure your Windows 95-based computer to use more than ten Musical
	Instrument Device Interface (MIDI) ports, your computer may stop responding
	(hang), or you may receive the following error message:
	
	  Msgsrv32.exe This program has performed an illegal operation and will be shut
	  down.
	
	If you then click Details, you may receive the following error message:
	
	  MSGSRV32 caused invalid page fault in module KERNEL32.DLL
	
	CAUSE
	=====
	
	This issue occurs because Windows 95 does not support using more than 10 MIDI
	ports.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your computer to use 10 MIDI ports or less. For
	information about how to do so, view the documentation included with your MIDI
	device.
	
	Note that you can use more than 10 MIDI ports in Microsoft Windows 98.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
