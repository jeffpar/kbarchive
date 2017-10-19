---
layout: page
title: "Q153935: Install May Fail for Programs Using REGEDIT4 on Windows NT"
permalink: /kb/153/Q153935/
---

## Q153935: Install May Fail for Programs Using REGEDIT4 on Windows NT

	Article: Q153935
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Traditional Chinese version(s) of Windows NT 3.51.
	
	
	SYMPTOMS
	========
	
	Windows NT Workstation 3.51 Traditional Chinese cannot recognize REGEDIT4
	registration file format. When you install a program that uses REGEDIT4 format,
	the message appears:
	
	  This is not a registration file, please provide the path to the file
	  [.REG] and try again
	
	CAUSE
	=====
	
	The version of Regedit.exe included with Window NT Workstation 3.51 Traditional
	Chinese does not work with REGEDIT4 format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Traditional Chinese Windows NT
	Workstation/Server version 3.51.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodnt KBTRADCH
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : :3.51
	
	=============================================================================
	
