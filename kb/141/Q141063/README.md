---
layout: page
title: "Q141063: PC MAPI: How to Find the Name of the CMC DLL to Call"
permalink: kb/141/Q141063/
---

## Q141063: PC MAPI: How to Find the Name of the CMC DLL to Call

	Article: Q141063
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to see if the Common Mail Calls (CMC) is installed on your computer
	(CMC=1), you can check the [Mail] section in the WIN.INI file for the CMCDLLNAME
	entry to find out the name of the installed CMC DLL. Then, you can either import
	the library (using a C language) or access it dynamically (using Microsoft C or
	Microsoft Visual Basic).
	
	MORE INFORMATION
	================
	
	The following is the format of the CMCDLLNAME entries:
	
	  CMCDLLNAME=full path to file to CMC DLL file
	  CMCDLLNAME32=full path to 32-bit CMC DLL file
	
	NOTE: Microsoft Windows 95 and Windows NT use of WIN.INI file for backward
	compatibility.
	
	Additional query words: 3.00 3.20 3.50 1.00 visual c mapi0 mapi1 kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
