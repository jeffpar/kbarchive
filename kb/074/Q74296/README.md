---
layout: page
title: "Q74296: EDLIN Saves a Backup File when editing; EDIT Does Not"
permalink: /kb/074/Q74296/
---

## Q74296: EDLIN Saves a Backup File when editing; EDIT Does Not

{% raw %}

	Article: Q74296
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS EDIT command does not save a backup file the way the MS-DOS EDLIN
	command does.
	
	Information about EDIT applies to Microsoft MS-DOS version 5.0.
	
	Information about EDLIN applies to Microsoft MS-DOS versions 3.0, 3.1, 3.2, 3.21,
	3.22, 3.3, 3.30a, 4.0, 4.01, and 5.0.
	
	MORE INFORMATION
	================
	
	EDIT is an external DOS command that can start the MS-DOS Editor (a full-screen
	text editor), but EDIT does not create a backup file with a .BAK extension the
	way EDLIN does, even if changes are made.
	
	EDLIN is an external DOS command as well. However, EDLIN is a line- oriented text
	editor; when you end your editing session with the "E" command, EDLIN will give
	the changed file the same name as the original and rename the original file with
	a .BAK extension. If you end the editing session with the "Q" command, however,
	your original file will remain unchanged.
	
	Additional query words: 3.00 3.10 3.20 3.21 3.22 3.30 3.30a 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

{% endraw %}
