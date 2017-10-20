---
layout: page
title: "Q146409: Backup Error.log File Contains Garbage Characters"
permalink: /kb/146/Q146409/
---

## Q146409: Backup Error.log File Contains Garbage Characters

{% raw %}

	Article: Q146409
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Error.log file located in the Program Files\Accessories\Log folder created
	by Windows 95 Backup may contain garbage characters.
	
	CAUSE
	=====
	
	This problem may occur after you attempt to perform an incremental backup if any
	of the following conditions are true:
	
	- Some of the files or folders specified in the original backup no longer
	  exist.
	
	- You do not have the necessary network access rights.
	
	- No changes have been made to the original files before running an incremental
	  backup.
	
	NOTE: If any of the above conditions are true when you attempt to perform an
	incremental backup, you receive the following error message:
	
	  Microsoft Backup could not find any files for this operation. Either the
	  specified files or directory no longer exist, you do not have the necessary
	  network access rights, or none of the selected files need to be backed up.
	  This operation has been canceled.
	
	RESOLUTION
	==========
	
	To remove the garbage characters from the Error.log file, use either of the
	following methods:
	
	- Manually delete the garbage characters by opening the file in any text editor
	  (such as Notepad).
	
	- Click the Overwrite Old Status Log Files check box in Backup so that it is
	  selected. To access the check box, click Options on the Settings menu in
	  Backup, and then click the General tab.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
