---
layout: page
title: "Q85326: Windows Err Msg: Failed to Register Server"
permalink: /kb/085/Q85326/
---

## Q85326: Windows Err Msg: Failed to Register Server

{% raw %}

	Article: Q85326
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are installing software and/or updating the REG.DAT file using
	Registration Editor (REGEDIT.EXE) under Windows version 3.1, you may receive the
	following error message:
	
	  Failed to Register Server
	
	CAUSE
	=====
	
	This error can be caused by any of the following:
	
	- Two REG.DAT files on your hard drive
	
	- A corrupt REG.DAT file
	
	- A write-protected REG.DAT file
	
	RESOLUTION
	==========
	
	To correct this problem,
	
	1. Check to see if there are two REG.DAT files on your hard drive. (If there are
	  two files, one file is probably in the WINDOWS directory, while the other is
	  likely in the WINDOWS\SYSTEM directory.)
	
	  There should only be one copy of these files on your hard drive; it should be
	  in the WINDOWS directory. If there is a REG.DAT file in your WINDOWS\SYSTEM
	  directory, delete the REG.DAT file in your WINDOWS\SYSTEM directory.
	
	2. If there aren't two REG.DAT files on your hard drive, the REG.DAT file is
	  probably corrupt or write-protected. (REGEDIT /U cannot correct the file.)
	  Delete the file, then run REGEDIT.EXE to re-create the REG.DAT file.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
