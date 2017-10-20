---
layout: page
title: "Q95997: DELTREE: No Error Message If Directory Does Not Exist"
permalink: /kb/095/Q95997/
---

## Q95997: DELTREE: No Error Message If Directory Does Not Exist

{% raw %}

	Article: Q95997
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the DELTREE.EXE command is executed on a directory that does not exist, no
	error message is displayed and you are returned to the MS-DOS prompt. This
	behavior can be misleading if you mistype a directory name--since no error
	message is displayed, you may think that the directory you were trying to delete
	was successfully deleted.
	
	MORE INFORMATION
	================
	
	If the directory you want to delete is specified correctly with the DELTREE.EXE
	command, you will receive the following message:
	
	  Delete directory <DirectoryName> and all of its subdirectories? [yn]
	
	where <DirectoryName> is the name of the directory you want to delete. You
	are required to answer "y" to delete the entire subdirectory or "n" to cancel
	the operation.
	
	For more information on the DELTREE command, type "HELP DELTREE" (without the
	quotation marks) at the command prompt.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
