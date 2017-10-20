---
layout: page
title: "Q75670: Err Msg: There Was an Error Writing to the File DOSSHELL.INI"
permalink: /kb/075/Q75670/
---

## Q75670: Err Msg: There Was an Error Writing to the File DOSSHELL.INI

{% raw %}

	Article: Q75670
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run an application under MS-DOS Shell, the following initialization
	file error is displayed if the path to the DOSSHELL.INI file is not set
	correctly:
	
	  There was an error writing to the file DOSSHELL.INI. Changes were not saved
	  to disk at this time.
	
	Your computer may stop responding (hang) at this point or may display one of the
	following messages when you press ENTER:
	
	  Unable to load COMMAND.COM (or DOSSWAP.EXE). Retry? (Y/N)
	
	  -or-
	
	  Unable to load MS-DOS Shell. Retry? (Y/N)
	
	MORE INFORMATION
	================
	
	Check to make sure the DOSSHELL.INI file is residing in the same directory as
	your other MS-DOS 5.0 commands. Check the PATH statement to make sure it is
	correctly typed. In most cases, it is C:\DOS. (A path written as C:DOS causes
	the above problem.)
	
	If the above action does not clear up the problem, other steps to try are as
	follows:
	
	- Make sure Task Swapper is disabled.
	
	- Do a CHKDSK and check for any lost clusters or allocation units, and also to
	  see if you are low on disk space.
	
	- If all fails, try re-expanding over the DOSSHELL.INI file from the MS-DOS 5.0
	  or 6.0 disks.
	
	For more information on expanding files, query on the following words:
	
	  " <MS-DOS version number> and EXPAND " (without the quotation marks)
	
	Additional query words: 5.00 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
