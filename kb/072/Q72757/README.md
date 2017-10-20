---
layout: page
title: "Q72757: SETVER.EXE Not Affected By Read-Only Bit"
permalink: /kb/072/Q72757/
---

## Q72757: SETVER.EXE Not Affected By Read-Only Bit

{% raw %}

	Article: Q72757
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can modify SETVER.EXE even when the read-only bit has been set.
	
	MORE INFORMATION
	================
	
	SETVER.EXE contains the version table used by MS-DOS version 5.0 to report
	itself as a version number other than the one actually running. This table can
	be modified by use of the SETVER command if the device driver SETVER.EXE has
	been installed in the CONFIG.SYS file. For example, the following command tells
	MS-DOS to report itself as version 4.01 whenever a program named FORMAT.COM is
	run:
	
	  setver format.com 4.01
	
	You can use the MS-DOS command ATTRIB to change the status of the SETVER.EXE
	program to read-only, meaning that the program should not be allowed to be
	modified or deleted. The following command performs this function, assuming that
	MS-DOS 5.0 was installed in the directory C:\DOS:
	
	  attrib +r c:\dos\setver.exe
	
	However, MS-DOS 5.0 still allows you to modify the version table even though the
	file has been marked read-only.
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
