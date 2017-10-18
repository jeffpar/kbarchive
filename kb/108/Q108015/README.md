---
layout: page
title: "Q108015: MS-DOS 6.0 and 6.2 Setup Move EDIT.BAT to OLD_DOS.1"
permalink: kb/108/Q108015/
---

## Q108015: MS-DOS 6.0 and 6.2 Setup Move EDIT.BAT to OLD_DOS.1

	Article: Q108015
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an EDIT.BAT file in your DOS directory when you install MS-DOS 6
	Upgrade or MS-DOS 6.2 Upgrade, Setup moves EDIT.BAT to the OLD_DOS.1 directory.
	
	NOTE: This problem does not occur with MS-DOS 6.2 Step-Up.
	
	RESOLUTION
	==========
	
	To work around this problem, copy EDIT.BAT from your OLD_DOS.1 directory to your
	DOS directory. For example, type "copy c:\old_dos.1\edit.bat c:\dos" (without
	the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS 6 Upgrade and MS-DOS 6.2
	Upgrade Setup. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.20 stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
