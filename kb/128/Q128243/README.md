---
layout: page
title: "Q128243: PC Win: GP Fault with Corrupt .XTN Files"
permalink: /kb/128/Q128243/
---

## Q128243: PC Win: GP Fault with Corrupt .XTN Files

	Article: Q128243
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0 of Mail for Windows will general protection (GP) fault when you
	check for new mail or view new messages.
	
	CAUSE
	=====
	
	This can be caused by irregular .XTN file sizes. If you check the .XTN files to
	see if they are divide into 698 evenly, you can tell if that is the problem.
	
	RESOLUTION
	==========
	
	This problem is fixed by version 3.06 of IMPORT.EXE and MSSFS.DLL with a date of
	5/9/93 or later.
	
	MORE INFORMATION
	================
	
	All .XTN files should be divisible by 698 into even number. Older versions of
	IMPORT.EXE will add extra bytes to end of file. You can use the RCX command in
	debug to remove the extra few bytes and make it a number that divides into 698
	evenly. Here are the steps to debug the file:
	
	1. Identify the problem .XTN. The size of a valid .XTN file should be a multiple
	  of 698 bytes.
	
	2. TYPE NETWORK.GLB in the GLB subdirectory. To the left of the 8 digit .XTN
	  file number you will see the Network Name for this file.
	
	  NOTE: At this point you could ignore the rest of the steps and use ADMIN.EXE
	  to delete and redefine the network that the problem .XTN belongs to. This
	  means you will also have to redefine all of the external Postoffices defined
	  on that network.
	
	3. Using Admin, count the number of external postoffices defined for this
	  network name. This will give us a rough approximation of what the file size
	  should be. #Postoffices * 698 approximately equals the size of the .XTN
	  file.
	
	  NOTE: The actual size of the file may be larger by a multiple of 698 since
	  there may be deleted records in the .XTN file. The only accurate way to
	  determine the contents of the XTN is to edit the .XTN file with debug and
	  reset the file size to include all records up to and including the last
	  record that is not marked as deleted.
	
	4. Using Debug, reset the file size of the problem .XTN file. The cases that
	  have been seen thus far where additional information has been appended to the
	  file were calculated by the following formula to get the actual .XTN file
	  size:
	
	  (Current Size div by 698)
	  example: (3015 div 698)
	  = 4.3194842 (Where it should divide out to 4)
	  Take 4 x 698=2792
	  This number has to be converted to HEX
	
	  Debug ????????.XTN
	  -RCX
	  :BC7 <-This is the current file size
	  -AE8 <-This is the number that you calculated as the correct size
	  -W
	  -Q
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
