---
layout: page
title: "Q119566: Intel SatisFAXtion Inaccessible: &quot;Write Fault Error...&quot;"
permalink: /kb/119/Q119566/
---

## Q119566: Intel SatisFAXtion Inaccessible: &quot;Write Fault Error...&quot;

	Article: Q119566
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
	
	After you turn off and then restart your system, the installed Intel
	SatisFAXtion internal fax modem is inaccessible. The following error message may
	appear
	
	  Write fault error writing comm<x> when attempting to access the fax
	  modem from an MS-DOS prompt.
	
	where <x> is the number of the serial port on which the modem is
	configured.
	
	Also, when you try to dial in Hyperterminal, the system may stop responding
	(hang) or fail to dial without indicating any problem.
	
	CAUSE
	=====
	
	The Intel SatisFAXtion internal fax modem requires that its real-mode device
	drivers be loaded from the CONFIG.SYS and AUTOEXEC.BAT files at system startup.
	
	RESOLUTION
	==========
	
	Install the real-mode device drivers from the installation disks provided with
	the Intel SatisFAXtion internal fax modem card.
	
	MORE INFORMATION
	================
	
	The Intel SatisFAXtion internal fax modem is manufactured by Intel Corporation,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Technical support for the Intel 200/400 SatisFAXtion fax modem is provided by
	Pure Data Satisfaxtion.
	
	Additional query words: err msg 3rdparty powering down fax/modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
