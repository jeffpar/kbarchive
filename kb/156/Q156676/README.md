---
layout: page
title: "Q156676: Windows NT 4.0 Won't Install on Computers with 386 Processors"
permalink: /kb/156/Q156676/
---

## Q156676: Windows NT 4.0 Won't Install on Computers with 386 Processors

{% raw %}

	Article: Q156676
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install Microsoft Windows NT version 4.0 on a computer that
	uses a 80386 processor, the following error messages may occur:
	
	  Windows NT requires an 80486 or later processor. Setup cannot continue.
	
	CAUSE
	=====
	
	Microsoft Windows NT version 4.0 is compiled for use on computers with 80486 or
	later processors and will not install on a computer with an 80386 processor.
	Some computers on the Microsoft Windows NT version 3.5x Hardware Compatibility
	List (HCL) contain the 80386 processor. Although the HCL for Windows NT 4.0
	suggests that computers on the Windows NT 3.51 HCL are expected to run Windows
	NT 4.0, any computers listed with the 80386 processor will not run Microsoft
	Windows NT 4.0.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
