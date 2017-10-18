---
layout: page
title: "Q123472: HOWTO: Create a Unique SRCSAFE.INI File"
permalink: kb/123/Q123472/
---

## Q123472: HOWTO: Create a Unique SRCSAFE.INI File

	Article: Q123472
	Product(s): Microsoft SourceSafe
	Version(s): 3.0x 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbSSafe
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a unique SRCSAFE.INI file, use the SSDIR environment variable:
	
	1. Create a new SRCSAFE.INI file and place it in the desired location.
	
	2. If you want include the default SRCSAFE.INI in the unique copy, add the
	  following line:
	
	        #INCLUDE <SS path>\SRCSAFE.INI
	
	3. Create the following environment variable:
	
	        SET SSDIR=<path to VSS directory>
	
	     (such as SET SSDIR = \\MyServer\MyVSSdir)
	
	While it is possible to do this with Visual SourceSafe 5.0, in is not necessary.
	Simply open the database using file->open.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup kbSSafe 
	Version           : 3.0x 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
