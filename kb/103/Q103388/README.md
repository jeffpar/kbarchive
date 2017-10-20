---
layout: page
title: "Q103388: Corrupted DBLSPACE.EXE May Cause a &quot;CVF Is Damaged&quot; Error"
permalink: /kb/103/Q103388/
---

## Q103388: Corrupted DBLSPACE.EXE May Cause a &quot;CVF Is Damaged&quot; Error

{% raw %}

	Article: Q103388
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the DBLSPACE.EXE file is corrupted, the error message "A CVF Is Damaged" may
	appear during startup. This may also cause CHKDSK to hang during execution.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Insert the disk containing DBLSPACE.EX_ into the floppy disk drive.
	
	2. From the DOS directory of the hard disk drive, type the following:
	
	  " expand <floppy drive>:\DBLSPACE.EX_ c:\DOS\DBLSPACE.EXE " (without
	  the quotation marks)
	
	3. Reboot the computer using <Ctrl> <Alt> <Del>
	
	DBLSPACE.EX_ resides on the following disks:
	
	  Format     Disk Number
	  ----------------------
	
	  1.44 MB    3
	  1.2  MB    4
	  720K       5
	  360K       10
	
	Additional query words: 6.00 hangs compressed volume file files trouble shooting troubleshooting tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
