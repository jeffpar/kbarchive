---
layout: page
title: "Q135143: Zenith ZDS 1762 Laptop Computer Hangs at Startup"
permalink: /kb/135/Q135143/
---

## Q135143: Zenith ZDS 1762 Laptop Computer Hangs at Startup

	Article: Q135143
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 on a Zenith ZDS 1762 laptop computer, the computer may
	stop responding (hang) while Windows 95 is processing the Config.sys file.
	
	CAUSE
	=====
	
	This problem can occur if Pcenable.exe (Zenith's PCMCIA driver) is loaded before
	Mztinit.sys (Zenith's Mozart sound system driver) in the Config.sys file. When
	this occurs, Pcenable.exe installs a hook for IRQ 7, which Mztinit.sys also
	tries to use.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Config.sys file. Move the
	"device=mztinit.sys" line so that it is before any PCMCIA drivers. After you
	make this change, save and then close the Config.sys file, and then restart your
	computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
