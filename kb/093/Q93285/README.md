---
layout: page
title: "Q93285: Windows Err Msg: The ATI FlexDesk Drivers Require 386 Enhanced"
permalink: kb/093/Q93285/
---

## Q93285: Windows Err Msg: The ATI FlexDesk Drivers Require 386 Enhanced

	Article: Q93285
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter the following error message when you start Microsoft Windows
	in standard mode or during the graphical portion of the Setup procedure:
	
	  The ATI FlexDesk drivers require Windows to be running in 386 Enhanced Mode.
	
	CAUSE
	=====
	
	The ATI Windows display drivers for the Mach32 series of video cards (Graphics
	Ultra Plus and Graphics Ultra Pro) require that Windows 3.1 or Windows for
	Workgroups 3.1 be running in 386 enhanced mode. This can cause problems if you
	run the Windows 3.1 or Windows for Workgroups 3.1 Setup programs to upgrade or
	reinstall, or if you run Windows in standard mode for testing purposes.
	
	WORKAROUND
	==========
	
	Change the display driver to VGA or 8514/A before running Setup or starting
	Windows in standard mode. This also means that you cannot install this driver
	when installing Windows for the first time or to a new directory.
	
	MORE INFORMATION
	================
	
	For additional information contact ATI technical support.
	
	The ATI products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 gateway 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
