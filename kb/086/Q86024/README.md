---
layout: page
title: "Q86024: Ocean Isle Software ReachOut May Fail Under Windows 3.1"
permalink: /kb/086/Q86024/
---

## Q86024: Ocean Isle Software ReachOut May Fail Under Windows 3.1

{% raw %}

	Article: Q86024
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ReachOut, by Ocean Isle Software, lets you remotely control (via modem) a PC
	running MS-DOS or Windows. However, if you use ReachOut with Microsoft Windows
	version 3.1, you may not be able to remotely control a PC running Windows.
	
	RESOLUTION
	==========
	
	According to Ocean Isle, you can correct this problem by remarking out all
	references to COM ports in the [386 Enh] section of the SYSTEM.INI file. This
	can be done by placing a semicolon (;) at the beginning of each COMx= line, as
	in the following example:
	
	     [386Enh]
	     ;COM1Base=03F8
	     ;Com1AutoAssign=2
	     ;COM1Irq=4
	
	MORE INFORMATION
	================
	
	Unlike Windows 3.0, Windows 3.1 will add ComxBase= and ComxIrq= lines to the
	SYSTEM.INI file with the appropriate default COM port values if you choose the
	OK button when exiting from the Advanced Settings dialog box. As a result, when
	Windows 3.1 is started, it will re-initialize the specified port.
	Re-initializing the port when starting Windows will break the connection to the
	modem and ReachOut.
	
	To change the advanced port settings:
	
	1. Run Control Panel.
	
	2. Choose the Ports icon.
	
	3. Choose the Settings button.
	
	4. Choose the Advanced button.
	
	Choosing the OK button will update the SYSTEM.INI file. If the ComxBase= and
	ComxIrq= lines are not already in the [386 Enh] section of the SYSTEM.INI file,
	they will be added, even if you do not change the port settings from Default.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
