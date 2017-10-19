---
layout: page
title: "Q68268: Simulating Wildcards"
permalink: /kb/068/Q68268/
---

## Q68268: Simulating Wildcards

	Article: Q68268
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can simulate wildcards with the FOR command for those commands in MS-DOS
	that do not allow wildcards. The structure of the command is as follows
	
	     for %p in (set) do (command) %p
	
	where %p is a variable used by the FOR command, (set) is a set of filenames that
	command will be applied to, and command is the command to be carried out. For
	example:
	
	     for %p in (*.txt) do type %p
	
	  -or-
	
	     for %p in (*.txt) do find "CONFIG" %p
	
	MORE INFORMATION
	================
	
	You may want to create a batch file for this command because it will be much
	shorter. However, unlike the command-line version of the FOR command, the
	batch-file version uses two percent signs (%). The following are two batch-file
	examples:
	
	     for %%p in (%1) do type %%p
	
	  -or-
	
	     for %%p in (%1) do find "%2" %%p
	
	Using the second batch-file example, the following command typed at the MS-DOS
	prompt finds every file ending with the .TXT extension that has the string
	"CONFIG" in it. The quotation marks ("%2") are specific to the FIND command and
	not necessarily part of the FOR command syntax. If the second example is in a
	batch file called FF.BAT, to invoking the batch-file command, type:
	
	     ff *.txt CONFIG"
	
	Additional query words: 6.22 3.x 4.00 4.01 5.00 5.00a 6.00 6.20 wild card
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
