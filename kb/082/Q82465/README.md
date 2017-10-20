---
layout: page
title: "Q82465: STACKS=9,256 with PCKSCRN 1.3 Can Cause System Hangs"
permalink: /kb/082/Q82465/
---

## Q82465: STACKS=9,256 with PCKSCRN 1.3 Can Cause System Hangs

{% raw %}

	Article: Q82465
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PCKSCRN 1.3 is a terminate-and-stay-resident (TSR) screen accelerator included
	in Multisoft's PowerPak versions 2.x. Under some conditions, the computer can
	hang during startup and generate the following error message
	
	  MEMORY ALLOCATION ERROR - CANNOT LOAD COMMAND.COM SYSTEM HALTED
	
	when STACKS=9,256 is set in CONFIG.SYS and PCKSCRN is loaded in the AUTOEXEC.BAT.
	
	WORKAROUND
	==========
	
	To prevent the system from hanging, change the location in the AUTOEXEC.BAT file
	where PCKSCRN is loaded or manually load the utility.
	
	
	KBCategory: kb3rdparty kbenv
	KBSubcategory: win31
	
	Additional query words: 3.10 3.1 3.11 screen accelerator
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
