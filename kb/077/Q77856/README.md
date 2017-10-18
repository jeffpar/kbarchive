---
layout: page
title: "Q77856: IF EXIST Finds Hidden and System Files"
permalink: kb/077/Q77856/
---

## Q77856: IF EXIST Finds Hidden and System Files

	Article: Q77856
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
	
	The IF EXIST command finds system and hidden files. You may encounter a
	situation in which IF EXIST finds a file and then the specified action on that
	file fails. It is possible that the IF EXISTS command is finding a file with
	hidden or system attributes and the specified action fails on a hidden file.
	
	MORE INFORMATION
	================
	
	To duplicate this problem, create a file called TEST.TXT and give the file
	system or hidden attributes using the ATTRIB command. Next, execute the
	following command:
	
	  if exist test.txt del test.txt
	
	Upon execution, the above command will return
	
	  FILE NOT FOUND
	  Access Denied
	
	The IF EXIST command finds the file even though it has a hidden attribute, but
	the DEL command does not recognize hidden or system files. The solution is to
	remove the system and/or hidden attributes. The IF EXIST command will then
	function correctly.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
