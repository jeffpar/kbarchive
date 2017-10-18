---
layout: page
title: "Q138397: Disk Space Requirements for Visual FoxPro Workstation Installs"
permalink: kb/138/Q138397/
---

## Q138397: Disk Space Requirements for Visual FoxPro Workstation Installs

	Article: Q138397
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
	
	This article outlines the disk space requirements for workstation installations
	of Visual FoxPro on various operating systems. Keep in mind that these disk
	space requirements are merely approximations, and actual disk space usage may
	vary. The values given here do not consider the possibility that these files may
	already exist on the system on which Visual FoxPro is being installed. For
	example, Visual FoxPro installs all the necessary components to support OLE 2.0.
	If another application that supports OLE 2.0 is already installed on the system,
	Visual FoxPro setup will only check the versions of these files and update them
	if necessary. Therefore, in this scenario, very little if any additional disk
	space will be needed for OLE 2.0 components. The disk space requirements given
	here assume that none of these files already exist on the system.
	
	MORE INFORMATION
	================
	
	Windows 3.1 or             Windows NT
	Component                Windows for Workgroups     or Windows 95
	-----------------------------------------------------------------
	
	Visual FoxPro            1.5 MB                     2.2 MB
	
	OLE 2.0 and ODBC         7.0 MB                     2.1 MB
	
	Win32s                   2.7 MB                       N/A
	
	Microsoft Graph and
	Spell Checker            2.7 MB                     2.7 MB
	                        ------                     ------
	
	Total                    11.2 MB                    7.0 MB
	
	In addition to these disk space requirements, 16-bit Windows platforms, such as
	Windows 3.x or Windows for Workgroups 3.x, may require more disk space to
	accommodate a larger permanent swapfile. The Win32s subsystem requires a minimum
	swapfile size of 10 MB. To check and change the swapfile size, click the
	Enhanced icon in Control Panel, and then click the Virtual Memory button.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
