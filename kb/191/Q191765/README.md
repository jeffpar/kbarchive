---
layout: page
title: "Q191765: Winspool.drv and Kernel32.dll on Same Base Address in CHS SP3"
permalink: /kb/191/Q191765/
---

## Q191765: Winspool.drv and Kernel32.dll on Same Base Address in CHS SP3

{% raw %}

	Article: Q191765
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Chinese version of Windows NT 4.0 Service Pack 3, Winspool.drv is at the
	same base address as Kernel32.dll. If a program is linked to Winspool.drv
	statically, an error message appears stating that Winspool.drv is at the same
	base address as Kernel32.dll when the program is launched.
	
	CAUSE
	=====
	
	Winspool.drv has been assigned the wrong base address.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix should have the following file attributes or later:
	
	  Date     Time                  Size    File Name     Platform
	  -------------------------------------------------------------
	  8/20/98  02:10a                93,456  Winspool.drv  (x386)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 3,
	Chinese version.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
