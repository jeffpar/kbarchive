---
layout: page
title: "Q138650: DOCERR: Setup Shows Incorrect Required Disk Space"
permalink: /kb/138/Q138650/
---

## Q138650: DOCERR: Setup Shows Incorrect Required Disk Space

	Article: Q138650
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While setting up Visual FoxPro 3.0, the setup program states that a full
	installation of the Professional version requires 107,569K (approximately 105
	megabytes). However, a complete installation of Visual FoxPro actually requires
	less than that -- between 70 and 80 megabytes of disk space. The setup program
	incorrectly calculates the required disk space because some components of the
	installation are calculated more than once.
	
	MORE INFORMATION
	================
	
	The actual amount of disk space required by Visual FoxPro may vary depending on
	the operating system and the shared Microsoft components are already installed.
	When installed onto a 16-bit platform, such Windows 3.1 or Windows for
	Workgroups, Visual FoxPro installs the Win32s subsystem. This subsystem is not
	required on 32-bit platforms. Also, the setup program may or may not install
	Microsoft Graph and the spelling checker. These components may already be
	present on the computer due to a previous installation of a Microsoft Office
	product.
	
	Setup may also report that the Space Available is less than the Space Required
	but setup allows the user to proceed with the installation. For more information
	about this issue, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q117639 In Setup, the "Space Required On Drive" Value Is Not Exact
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
