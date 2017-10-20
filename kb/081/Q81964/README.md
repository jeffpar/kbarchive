---
layout: page
title: "Q81964: TSR Fails to Pop Up Under MS-DOS Versions 4.0 and Later"
permalink: /kb/081/Q81964/
---

## Q81964: TSR Fails to Pop Up Under MS-DOS Versions 4.0 and Later

{% raw %}

	Article: Q81964
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Terminate-and-stay-resident (TSR) programs do not activate when their hot keys
	are pressed under MS-DOS versions 4.0 and later on a system with an enhanced
	keyboard.
	
	CAUSE
	=====
	
	One way the TSR programs wait to be activated is to hook the Int 16h ROM BIOS
	keyboard service and wait for another program to call that function and request
	keyboard input. The TSR then compares the key code returned by the ROM BIOS
	service with the key code of its hot key.
	
	With the introduction of the enhanced keyboard, two new ROM BIOS keyboard
	services were added that supersede two of the original functions. MS-DOS
	versions 4.0 and later are designed to recognize the enhanced keyboard and use
	these two new functions instead of the old ones. This means that TSRs that watch
	the ROM BIOS Int 16h service for calls to the original functions will never be
	activated.
	
	RESOLUTION
	==========
	
	There are two ways to solve this problem:
	
	- The TSR must be updated to watch all four of the ROM BIOS keyboard read
	  functions: 00h, 01h, 10h, and 11h.
	
	-or-
	
	- Add SWITCHES=/K or DEVICE=ANSI.SYS /K to your CONFIG.SYS file. This option
	  causes MS-DOS versions 4.0 and later to use the old ROM BIOS keyboard read
	  functions even when an enhanced keyboard is detected. This will solve the
	  problem while MS-DOS is waiting for keyboard input, but other applications
	  that call the new enhanced keyboard ROM BIOS services will still disable the
	  TSR.
	
	For more information on how MS-DOS reads from the keyboard, query on the
	following words in the Microsoft Knowledge Base:
	
	  CON ANSI SWITCHES
	
	Additional query words: 4.00 4.00a 4.01 4.01a 5.00 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.0,5.0a
	
	=============================================================================
	

{% endraw %}
