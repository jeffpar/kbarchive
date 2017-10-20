---
layout: page
title: "Q193788: Devices with 64-bit Base Address Registers Do Not Function"
permalink: /kb/193/Q193788/
---

## Q193788: Devices with 64-bit Base Address Registers Do Not Function

{% raw %}

	Article: Q193788
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A device that has the capability to access 64-bit base address spaces does not
	work in an x86 computer. Some of the newer devices such as fiber channel cards
	and high performance SCSI adapters have the capability to use a 64-bit address
	space.
	
	CAUSE
	=====
	
	Devices that have the capability to support 64-bit base address registers do not
	run on x86 computers because x86 computers only support a 32-bit address space.
	
	RESOLUTION
	==========
	
	Because of the limitations of hardware, Windows NT can only support the 32-bit
	address space. The device will not function properly if installed.
	
	STATUS
	======
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
