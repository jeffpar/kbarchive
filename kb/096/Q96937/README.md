---
layout: page
title: "Q96937: UNINSTALL and DELOLDOS Don't Remove Directories"
permalink: /kb/096/Q96937/
---

## Q96937: UNINSTALL and DELOLDOS Don't Remove Directories

{% raw %}

	Article: Q96937
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a directory name other than the default directory name for MS-DOS
	(C:\DOS), the commands UNINSTALL and DELOLDOS may have difficulty finding and
	removing the appropriate directories. Also, MS-DOS Setup may not put your
	previous MS-DOS files in the appropriate OLD_DOS.<X> directory (where
	<X> is a number based on the number of OLD_DOS directories that have not
	been removed).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you run DELOLDOS, the OLD_DOS.1 directory is removed; however, the MSDOS5
	directory, which contains all the old MS-DOS files, is not. Your directory
	structure appears as follows:
	
	  c:\msdos5 (still contains old MS-DOS files)
	  c:\msdos6 (contains new MS-DOS files)
	
	If you run UNINSTALL, OLD_DOS.1 is removed, along with all the files in MSDOS6;
	however, the MSDOS6 directory is not removed. Your directory structure appears
	as follows:
	
	  c:\msdos5 (contains old MS-DOS files)
	  c:\msdos6 (contains no files)
	
	All these commands (SETUP, DELOLDOS, and UNINSTALL) correctly manage the MS-DOS
	PATH variable and do not jeopardize any operating system functionality. The only
	problem is in the proper removal and creation of certain directories.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
