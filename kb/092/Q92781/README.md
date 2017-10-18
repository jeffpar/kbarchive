---
layout: page
title: "Q92781: Must Use Quotation Marks if Shared Resource Names Have Spaces"
permalink: kb/092/Q92781/
---

## Q92781: Must Use Quotation Marks if Shared Resource Names Have Spaces

	Article: Q92781
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	If a shared resource name includes a space, you must use quotation
	marks around the name whenever you refer to the resource in a dialog
	box or at the command prompt. For example, if you name your computer
	"My Computer," you must use quotation marks in the NET USE command
	line as follows:
	
	       NET USE F: "\\My Computer\Public"
	
	NOTE: While this works for the NET USE command, Microsoft recommends
	that you do not put a space in your computer name. Microsoft Mail may
	fail if the computer name contains a space.
	
	Additional query words: 3.10 wfwfest 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
