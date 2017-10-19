---
layout: page
title: "Q108156: WinPopup Cannot Run... Error with VREDIR.386"
permalink: /kb/108/Q108156/
---

## Q108156: WinPopup Cannot Run... Error with VREDIR.386

	Article: Q108156
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run WinPopup in Windows for Workgroups 3.11, you may receive the
	following error message:
	
	  WinPopup cannot run because the VREDIR.386 redirector is not started.
	
	CAUSE
	=====
	
	This error occurs when the MS-DOS redirector loads before Windows for Workgroups
	3.11.
	
	RESOLUTION
	==========
	
	To avoid the error message, do not start the MS-DOS redirector before running
	Windows for Workgroups 3.11, or remove WinPopup from the LOAD= line or Startup
	group.
	
	Additional query words: 3.11 err msg Workstation pop up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
