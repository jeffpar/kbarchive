---
layout: page
title: "Q96152: Setup Adds MS-DOS Directory to Every PATH Statement"
permalink: /kb/096/Q96152/
---

## Q96152: Setup Adds MS-DOS Directory to Every PATH Statement

	Article: Q96152
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Setup adds the MS-DOS directory to every PATH statement in your
	AUTOEXEC.BAT file. For example, if Setup finds the following lines in your
	AUTOEXEC.BAT file
	
	  path c:\dos;c:\windows
	  path %path%;c:\c700\bin
	
	it adds "c:\dos" to the second line even though the MS-DOS directory is already
	present in the first line. The lines appear as follows:
	
	  path c:\dos;c:\windows
	  path c:\dos;%path%;c:\c700;c:\bin
	
	MORE INFORMATION
	================
	
	If your MS-DOS directory is in the path twice, some applications may not behave
	as expected. For example, Windows Setup finds MS-DOS-based applications twice
	when it searches your hard disk based on the path.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
