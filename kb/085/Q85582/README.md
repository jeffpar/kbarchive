---
layout: page
title: "Q85582: Group Icon Location Not Saved with Read-Only Attribute Set"
permalink: kb/085/Q85582/
---

## Q85582: Group Icon Location Not Saved with Read-Only Attribute Set

	Article: Q85582
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Changes you make to program groups are not saved in Program Manager, even though
	you choose the Save Settings On Exit command from the Options menu.
	
	CAUSE
	=====
	
	Each program group has a corresponding .GRP file that stores information about
	that group. If the program group's corresponding .GRP file has its Read-Only
	attribute set, changes to the group are not saved when you quit Windows.
	
	RESOLUTION
	==========
	
	To remove the Read-Only attribute from program group files, type the following
	command at an MS-DOS command prompt in the Windows directory:
	
	  attrib -r *.grp
	
	MORE INFORMATION
	================
	
	The Read-Only attribute is sometimes set for program groups in networked
	environments to ensure consistent Program Manager contents at all workstations.
	Note that you cannot move program icons between groups whose Read-Only attribute
	is set. No error message will appear if a .GRP file's Read-Only attribute is
	set.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following command at an MS-DOS command prompt in the Windows
	  directory:
	
	  attrib +r *.grp
	
	2. Start Windows and rearrange all the program groups.
	
	3. Quit Windows and then restart it. Note that the changes you made in step 2
	  are not saved.
	
	4. Type the following command at an MS-DOS command prompt in the Windows
	  directory to remove the Read-Only attribute from program group files:
	
	  attrib -r *.grp
	
	Additional query words: 3.10 3.11 progman archive freeze frozen
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
