---
layout: page
title: "Q137751: System Agent Reports Damaged Sage.dat File"
permalink: /kb/137/Q137751/
---

## Q137751: System Agent Reports Damaged Sage.dat File

{% raw %}

	Article: Q137751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to schedule a task in System Agent, you may receive the following
	error message:
	
	  System Agent Error
	  Cannot find file. Make sure path and file name are correct.
	
	When you click OK, you receive the following error message:
	
	  System Agent Error
	  The Sage.dat file is damaged or the incorrect version.
	  Delete Sage.dat and then reinstall System Agent.
	
	When you click OK again, System Agent displays a task time with no task
	description.
	
	CAUSE
	=====
	
	This problem can occur if there is not enough free space on the drive containing
	Microsoft Plus! for Windows 95 to save information in the Sage.dat file.
	
	RESOLUTION
	==========
	
	To fix the Sage.dat file, click the blank space in System Agent where the task
	description normally appears, and then click Remove on the Program menu. To add
	new tasks, you must first increase the available free space on the drive
	containing Microsoft Plus!.
	
	
	Additional query words: corrupt program
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
