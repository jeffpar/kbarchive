---
layout: page
title: "Q67381: Deleting Files Based on Creation Date"
permalink: /kb/067/Q67381/
---

## Q67381: Deleting Files Based on Creation Date

	Article: Q67381
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,3.30,3.30a,4.0,4.01,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.20, 3.21, 3.30, 3.30a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS versions before 6.x do not provide a direct means of deleting a file
	based upon its creation date. However, you can perform this function by using a
	sequence of MS-DOS commands, executed from the directory in which the files to
	be deleted reside, as follows:
	
	  md newfiles                     (Creates subdirectory NEWFILES)
	
	  xcopy *.* newfiles /d:date      (Copies all files from current
	                                  directory created on or after
	                                  date to the subdirectory
	                                  NEWFILES*)
	
	  del *.*                         (Deletes all files in current
	                                  directory)
	
	  xcopy newfiles                  (Copies files from NEWFILES to
	                                  current directory)
	
	  del newfiles                    (Deletes all files in subdirectory
	                                  NEWFILES)
	
	  rd newfiles                     (Removes subdirectory NEWFILES)
	
	- Please note that this procedure requires enough free disk space to maintain
	  two copies of all of the files in the current directory that will be saved.
	
	With MS-DOS version 6.x the final two steps can be replaced with:
	
	  deltree newfiles
	
	Additional query words: 3.20 3.30 3.30a 4.00 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.20,3.21,3.30,3.30a,4.0,4.01,5.0,5.0a
	
	=============================================================================
	
