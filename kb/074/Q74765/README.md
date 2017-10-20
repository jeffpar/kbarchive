---
layout: page
title: "Q74765: Corruption of the SETVER Table"
permalink: /kb/074/Q74765/
---

## Q74765: Corruption of the SETVER Table

{% raw %}

	Article: Q74765
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the MS-DOS SETVER.EXE program to report a version number of MS-DOS
	that is different than the current version to programs that do a version check.
	This allows some programs to run in your installed MS-DOS version where they
	would otherwise be unable to.
	
	SETVER is "self modifying," that is, the location of the SETVER version table is
	inside the SETVER.EXE file. Under certain circumstances, it is possible for the
	file to become corrupted.
	
	MORE INFORMATION
	================
	
	If you add a new program to the SETVER table and the length of the previous
	entries plus the length of the new entry equals 2048 bytes (the maximum size of
	the version table), SETVER reports that the program was added successfully.
	However, the program is not in fact added, and the table is corrupted. SETVER
	returns an ERRORLEVEL code of 0 (zero). If you issue the SETVER command, the
	corrupted table is displayed and the new entry is not shown on the table.
	
	If you attempt to add another program, SETVER returns an ERRORLEVEL code of 11,
	which indicates to a corrupted version table.
	
	If an addition exceeds the 2048- byte limit, the message "There is no more space
	in version table new entries" appears, and the return code is 14.
	
	Additional query words: 6.22 5.00 3rdparty corrupt corruption 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
