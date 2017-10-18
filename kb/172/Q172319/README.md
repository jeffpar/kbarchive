---
layout: page
title: "Q172319: HOWTO: Determining Paths of Operating System Folders"
permalink: kb/172/Q172319/
---

## Q172319: HOWTO: Determining Paths of Operating System Folders

	Article: Q172319
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SYS(2033,n) returns the path information for either the System folder,
	Extensions folder, Preferences folder, or the Microsoft folder. The value of "n"
	determines the folder and the path being returned.
	
	MORE INFORMATION
	================
	
	Often, the exact path to a particular folder on the machine needs to be known.
	For example, FoxPro 2.6a for the Macintosh places the FoxTools.mlb file in the
	Extensions folder. Since both hard drive names and folder names can vary between
	machines, there is no way to hard code a path that would work on all machines.
	The SYS(2033,n) function is useful in determining this information.
	
	According to the Help File, the SYS(2033,n) function has four values for the
	numeric expression n. These values and the folders they return are:
	
	  0 System Folder
	  1 Extensions Folder
	  2 Preferences Folder
	  3 Microsoft Folder
	
	For example, in FoxPro 2.6a for the Macintosh, the SYS(2033,1) function can be
	used in conjunction with the SET LIBRARY TO command to point to the FoxTools.mlb
	file in the Preferences folder.
	
	     SET LIBRARY TO SYS(2033,2)+":FoxTools.mlb"
	     ? SET("LIBRARY")  &&& Returns FoxTools.mlb
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Help file
	Microsoft FoxPro Help file
	
	Additional query words: Extensions System Preferences Microsoft
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300Mac
	Version           : MACINTOSH:2.6a,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
