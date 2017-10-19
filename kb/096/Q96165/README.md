---
layout: page
title: "Q96165: Adding Extensions to the Windows File Manager"
permalink: /kb/096/Q96165/
---

## Q96165: Adding Extensions to the Windows File Manager

	Article: Q96165
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows File Manager and Microsoft Windows for Workgroups File Manager
	both support add-on extensions.
	
	MORE INFORMATION
	================
	
	Extensions are special dynamic-link libraries (DLLs) that can be added to the
	Windows 3.1 File Manager menu or the Windows for Workgroups File Manager
	toolbar. To install these extensions, edit the WINFILE.INI file based on the
	example listed below. The .DLL files normally reside in the Windows SYSTEM
	subdirectory.
	
	Example
	-------
	
	To integrate Mail and File Manager utilities with File Manager, add the ADDONS=
	entry in the [SETTINGS] section of the WINFILE.INI. In addition, add a section
	called [ADDONS] and the appropriate extensions to the WINFILE.INI. WINFILE.INI:
	
	  [Settings]
	  Addons=Mail,FMUtils
	   :
	   :
	  [Addons]
	  Mail Extensions=C:\WINDOWS\SYSTEM\SENDFILE.DLL
	  FMUtils Extensions=C:\WINDOWS\SYSTEM\FMUTILS.DLL
	
	If File Manager cannot load or set up an extension, no error message is
	displayed, and File Manager removes the extension from the toolbar or menu.
	
	These entries provide additional options on the File Manager menu or toolbar,
	depending on the version of Windows you are using.
	
	NOTES:
	
	- In Windows 3.1 and Windows for Workgroups 3.11, the maximum number of DLLs
	  that you can add to File Manager is six; however, one of those DLLs must be
	  the Undelete feature. If you do not add Undelete, the maximum number of DLLs
	  is five.
	
	- In Windows for Workgroups 3.1, the Maximum number of DLLs that you can add to
	  File Manager is five; however one of those DLLs must be the Undelete feature.
	  If you do not add Undelete, the maximum numberof DLLs is four.
	
	The .DLL files used in the above example are found in the following products:
	
	SENDFILE.DLL
	------------
	
	Windows for Workgroups version 3.1 Disk 7 (3.5-inch disks)
	Windows for Workgroups version 3.1 Disk 8 (5.25-inch disks)
	
	FMUTILS.DLL
	-----------
	
	Windows for Workgroups version 3.1 Resource Kit Setup and Utilities Disk
	
	More information about File Manager extensions and developing these type of DLLs
	is available in the Microsoft Windows 3.1 Software Development Kit (SDK).
	
	Additional query words: 3.10 3.11 Mail FMUtils extensible
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
