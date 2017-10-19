---
layout: page
title: "Q156467: Writer 2: GPF in GDI with Virtual Memory Disabled"
permalink: /kb/156/Q156467/
---

## Q156467: Writer 2: GPF in GDI with Virtual Memory Disabled

	Article: Q156467
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Windows 95/98 with Virtual Memory disabled, Creative Writer 2
	displays the following error message when started
	
	  Writer caused a GPF in module GDI.EXE at...
	
	then the system stops responding (hangs).
	
	RESOLUTION
	==========
	
	Creative Writer requires Virtual Memory to run. To enable Virtual Memory, do the
	following:
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Virtual Memory.
	
	4. Click "Let Windows Manage My Virtual Memory Settings," click OK, click OK,
	  and then close Control Panel.
	
	Additional query words: 2.00 mskids artist maggie max writer cw2 cw2.0 hang locks up freezes
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
