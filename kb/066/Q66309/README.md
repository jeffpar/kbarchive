---
layout: page
title: "Q66309: FIX: PWB May Exit to MS-DOS If TMP Is Set Incorrectly"
permalink: kb/066/Q66309/
---

## Q66309: FIX: PWB May Exit to MS-DOS If TMP Is Set Incorrectly

	Article: Q66309
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the TMP environment variable is set only to a drive (with no path specified),
	the Programmer's WorkBench (PWB) version 1.0 or 1.1 may "crash" out to MS-DOS
	when a compile is attempted. The screen will still show PWB editor, but there
	will be a prompt displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. This
	problem was corrected in PWB version 2.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, use the following procedure:
	
	1. Set up the environment to run PWB.
	
	2. Set the TMP environment variable to the current drive, without specifying a
	  path. For example:
	
	  SET TMP=C:
	
	3. Execute PWB and create or load a simple source file.
	
	4. Attempt to compile the source file. (Note: If the Compile option is not
	  available on the Make menu, make sure the file has a name with a .C
	  extension.)
	
	Additional query words: 1.00 1.10 build rebuild exit buglist1.00 buglist1.10 fixlist2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	Solution Type     : kbfix
	
	=============================================================================
	
