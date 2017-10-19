---
layout: page
title: "Q118574: Err Msg with Word or Excel Installed: Cannot Read from Drive C"
permalink: /kb/118/Q118574/
---

## Q118574: Err Msg with Word or Excel Installed: Cannot Read from Drive C

	Article: Q118574
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run some Windows-based applications under Windows for Workgroups, the
	following error message is displayed on some systems:
	
	  Cannot Read from Drive C
	
	This error occurs with the following applications:
	
	- Microsoft Excel 5.0 for Windows
	
	- Microsoft Word 6.0 for Windows
	
	- Microsoft Works 3.0 for Windows
	
	CAUSE
	=====
	
	This error can occur if the following Device= line is missing from the
	CONFIG.SYS file:
	
	       device=c:\windows\ifshlp.sys
	
	RESOLUTION
	==========
	
	Open the CONFIG.SYS file in a text editor (such as Windows Notepad) and add the
	following line
	
	  device=<c:\windows>\ifshlp.sys
	
	where <c:\windows> is your Windows for Workgroup program directory.
	
	MORE INFORMATION
	================
	
	The IFSHLP.SYS file is used to provide real-mode support for the Installable
	File System (IFS) Manager, which is responsible for passing data to the
	appropriate device, whether the device is installed locally or elsewhere on the
	network.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
