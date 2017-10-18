---
layout: page
title: "Q90228: Primary File Server Suggested MS-DOS Configuration Changes"
permalink: kb/090/Q90228/
---

## Q90228: Primary File Server Suggested MS-DOS Configuration Changes

	Article: Q90228
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you dedicate a machine in a work group as a file or resource server, there
	are two MS-DOS settings you should change:
	
	- The Files= statement should be increased to 255 on a primary file server. If
	  the machine is used less, 128 may be a good value. Some adjustment may be
	  necessary.
	
	- The FCBS= statement should be added with a value of 28.
	
	MORE INFORMATION
	================
	
	Some problems may occur if the Files= statement is too low. You may receive
	error messages stating that a particular file is not available.
	
	If you are not using VSHARE.386 then you should significantly increase the number
	of handles and the buffer size of SHARE.EXE.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
