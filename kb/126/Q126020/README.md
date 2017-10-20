---
layout: page
title: "Q126020: Setup Err Msg on Intel Xpress Deskside: Inaccessible Boot..."
permalink: /kb/126/Q126020/
---

## Q126020: Setup Err Msg on Intel Xpress Deskside: Inaccessible Boot...

{% raw %}

	Article: Q126020
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
	
	When you install Windows NT on an Intel Xpress Deskside/MX 66Mhz Dual Pentium,
	your computer stops responding (hangs) for about ten minutes, after Setup
	reboots the computer the first time. The following error message appears:
	
	  INACCESSIBLE BOOT DEVICE
	
	This problem occurs when Setup selects MPS 1.1 Multiprocessor PC as the system
	type. This problem does not occur when you select Standard PC.
	
	NOTE: Selecting MPS 1.1 Multiprocessor PC causes HALMPS.DLL to be installed.
	Selecting Standard PC causes HAL.DLL to be installed.
	
	CAUSE
	=====
	
	Older Mylex Firmware doesn't respond in the time-out period allotted during the
	SCSI ENQUIRY2 command initialization.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: crash install blue screen prodnt express
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
