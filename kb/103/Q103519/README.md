---
layout: page
title: "Q103519: CVF Internal Errors: System Fails to Clean/Interactive Boot"
permalink: /kb/103/Q103519/
---

## Q103519: CVF Internal Errors: System Fails to Clean/Interactive Boot

{% raw %}

	Article: Q103519
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	If your DBLSPACE.INI file contains a command to mount a compressed volume file
	(CVF) that contains internal errors, DBLSPACE.BIN displays the following
	message:
	
	  DoubleSpace found a problem on compressed drive <drive>.
	
	  To continue the startup process, press ENTER. Then, correct the problem by
	  typing SCANDISK <drive>: at the command prompt.
	
	If you press either the Clean Boot (F5) or Interactive Boot (F8) keys, your
	response is taken as a response to the above prompt. (The system does not
	perform a clean start or an interactive start.)
	
	RESOLUTION
	==========
	
	To work around this problem, press F5 twice to clean boot the system or F8 twice
	to boot the system interactively.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
