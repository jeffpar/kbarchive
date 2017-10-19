---
layout: page
title: "Q83387: Windows 3.1 SYSTEM.INI &#91;standard&#93; Section"
permalink: /kb/083/Q83387/
---

## Q83387: Windows 3.1 SYSTEM.INI &#91;standard&#93; Section

	Article: Q83387
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information contained in this article is taken from the SYSINI.WRI file
	contained in the Microsoft Windows Resource Kit for the Windows operating system
	version 3.1. The SYSINI.WRI file may be viewed with Windows Write.
	
	The [standard] section of the SYSTEM.INI file contains settings that are specific
	to running Windows in standard mode.
	
	MORE INFORMATION
	================
	
	The [standard] section can contain the following settings:
	===============================================================================
	
	FasterModeSwitch=<0-or-1>
	
	Default:  0
	Purpose:  Enabling this setting causes Windows running in
	         standard mode to use a faster method of switching
	         from protected to real mode on many 80286-based
	         computers. When this setting is enabled, Windows
	         responds quicker to hardware interrupts, allowing
	         better throughput for interrupt-intensive
	         applications, such as communications applications.
	         In addition, you should enable this setting if you
	         are using a Zenith Z-248 system and are losing
	         characters while typing, or if you are using an
	         Olivetti M-250-E and lose control of the mouse.
	
	Note:  This setting has no affect on 80386-based computers.
	      Some early IBM-AT and compatible computers do not
	      have the BIOS support necessary to use this setting.
	      Enabling this setting on these computers may cause
	      them to hang when starting Windows.
	
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Int28Filter=<number>
	
	Default:  10
	Purpose:  Specifies the interval of INT28h interrupts,
	         generated when the system is idle, that are made
	         visible (or reflected) to software that is loaded
	         before Windows. Windows will reflect every nth
	         interrupt, where n is the value of this setting.
	         For example, a value of 1 reflects every INT28h
	         interrupt, a value of 2 reflects every second
	         INT28h interrupt, a value of 3, every third INT28h
	         interrupt, and so on. Increasing this value might
	         improve Windows' performance, but may interfere
	         with some memory-resident software such as a
	         network. Set this value to 0 to prevent any INT28h
	         interrupts from being reflected. Setting this
	         value too low (from 1 to 9)  might interfere with
	         communications applications.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	MouseSyncTime=<milliseconds>
	
	Default:  500
	Purpose:  Specifies the number of milliseconds that can
	         elapse between mouse data bytes before Windows
	         running in standard mode assumes that a mouse data
	         packet is complete. This setting only affects
	         Windows running standard mode on computers with an
	         IBM PS/2 mouse interface.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	NetHeapSize=<kilobytes>
	
	Default:  8
	Purpose:  Specifies the size (in kilobytes) of the data-
	         transfer buffer that standard-mode Windows
	         allocates in conventional memory for transferring
	         data over a network. If an application is not
	         running correctly, your network may require a
	         larger buffer than the default. Increasing this
	         value will decrease the amount of memory available
	         to applications. If no network software is
	         running, this setting will be ignored and no
	         memory will be allocated.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	PadCodeSegments=<0-or-1>
	
	Default:  0
	Purpose:  Setting this value to 1 causes Windows kernel to
	         pad code segments with 16 bytes. This will prevent
	         the last instruction in the segment from being too
	         close to the segment limit for 80286 C2 stepping.
	         Set this value to 1 if your 80286 system hangs in
	         standard mode.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	Stacks=<number>
	
	Default:  12
	Purpose:  Specifies the number of interrupt reflector stacks
	         used by the standard mode MS-DOS Extender (DOSX).
	         Interrupt reflector stacks are used when the MS-
	         DOS Extender needs to map a DOS or BIOS API from
	         real mode to protected mode. If you receive a
	         "Standard Mode: Stack Overflow" message, try
	         increasing the number. You can specify a number
	         between 8 and 64.
	To change:  Use Notepad to edit the SYSTEM.INI file.
	
	===============================================================================
	
	StackSize=<bytes>
	
	Default:  384
	Purpose:  Specifies the size of the interrupt reflector
	         stacks used by the standard mode MS-DOS Extender.
	To change:  Use Notepad to edit the SYSTEM.INI file. (You
	           should never need to change this setting.)
	
	===============================================================================
	
	REFERENCES
	==========
	
	Microsoft Windows Resource Kit 3.1 SYSINI.WRI file
	
	Additional query words: 3.10 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
