---
layout: page
title: "Q125746: Stop 7B When Installing Windows NT 3.5 On AST Bravo LC 486/33"
permalink: /kb/125/Q125746/
---

## Q125746: Stop 7B When Installing Windows NT 3.5 On AST Bravo LC 486/33

{% raw %}

	Article: Q125746
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT version 3.5 on an AST Bravo LC 486/33,
	the following STOP message appears after Setup completes the mass storage device
	detection and reboots the computer (after the third Setup disk):
	
	  STOP: 0x0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	CAUSE
	=====
	
	This problem can occur when:
	
	- The AST Bravo LC 486/33 computer has a BIOS revision earlier than 2.01.
	
	  -or-
	
	- The AST Bravo computer uses an IBM blue lightning processor.
	
	RESOLUTION
	==========
	
	If your AST Bravo does not use an IBM blue lightning processor, you can correct
	this problem by contacting AST End-User Customer Support at (800) 727-1278 and
	obtaining the latest BIOS revision for the AST computer (part number
	237874-006).
	
	AST Bravo computers with IBM blue lightning processors are not supported.
	
	Bravo LC 486/33 is manufactured by AST, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt trap 0x7b 0x07b blue screen disk 9
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
