---
layout: page
title: "Q126544: NOINT Virus Causes Unusual Network Error Messages in WFWG"
permalink: /kb/126/Q126544/
---

## Q126544: NOINT Virus Causes Unusual Network Error Messages in WFWG

	Article: Q126544
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups, you receive the following error
	messages:
	
	  Windows File Server
	  Unable to initialize server services.
	
	Followed by the error message
	
	  You cannot run this application in a window or in the background
	
	or:
	
	  You cannot run this application while other high-resolution applications are
	  running fullscreen. The application will be suspended until a low-resolution
	  or text application is running fullscreen. Check the PIF settings to ensure
	  they are correct.
	
	Windows then continues to load with server services disabled.
	
	CAUSE
	=====
	
	These error messages can be caused by the NOINT virus.
	
	RESOLUTION
	==========
	
	Microsoft Anti-Virus (MSAV) can properly detect and remove this virus. To run
	MSAV, boot your computer from a clean floppy disk (such as the MS-DOS Setup
	disk) and then type MSAV at the command prompt.
	
	MORE INFORMATION
	================
	
	The NOINT virus is a boot-sector virus that is 512 bytes in size. It infects
	diskette boot sectors and hard disk partition tables. This virus remains
	resident in memory. This virus can also cause damaged file linkages, changes to
	system run-time operation, and changes to the boot sector.
	
	kbcategory: kberrmsg
	kbsubcategory: wfwg winboot
	
	Additional query words: 3.11 msav
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
