---
layout: page
title: "Q106714: NET Command Returns Error in VM While Network Setup Is Active"
permalink: kb/106/Q106714/
---

## Q106714: NET Command Returns Error in VM While Network Setup Is Active

	Article: Q106714
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Windows for Workgroups 3.11, the NET command is unavailable
	in MS-DOS virtual machines (VMs) if Network Setup is active.
	
	MORE INFORMATION
	================
	
	When you run any NET command (other than NET/?) at the MS-DOS command prompt,
	the following error message is displayed:
	
	  Error 32: The process cannot access the file because it is being used by
	  another process.
	
	  An error occurred accessing the security-settings file.
	
	To run NET commands in an MS-DOS VM, first exit the Network Setup program in
	Windows for Workgroups.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
