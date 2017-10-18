---
layout: page
title: "Q127079: PC Mac DB: Purpose and Location of LOWRCASE.GLB"
permalink: kb/127/Q127079/
---

## Q127079: PC Mac DB: Purpose and Location of LOWRCASE.GLB

	Article: Q127079
	Product(s): Microsoft Mail For PC Networks
	Version(s): (all),3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a LOWRCASE.GLB file exists in the GLB directory, all files created by version
	3.0.3 of Microsoft Mail for PC Networks, Macintosh workstation will be created
	with lowercase filenames.
	
	NOTE: The file LOWRCASE.GLB is not included with the product or with the
	self-extracting file MACLIENT.HQX or MACLIENT.SEA, available on the Microsoft
	Download Center.
	
	Some network operating systems will not allow a file to be created in all
	uppercase letters. Version 3.0.3 (or later) of the Macintosh client file has
	been modified for these types of networks to allow the client to create
	filenames in lowercase letters if LOWRCASE.GLB exists in the GLB subdirectory of
	the Mail postoffice.
	
	MORE INFORMATION
	================
	
	This file must be manually created, either by copying an existing file or
	creating a new file with the name LOWRCASE.GLB in the GLB subdirectory of the
	Mail for PC Networks postoffice.
	
	To create the file LOWRCASE.GLB, change to the GLB subdirectory of the postoffice
	and type:
	
	  "copy populate.msm lowrcase.glb" (without the quotation marks)
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :(all),3.2
	
	=============================================================================
	
