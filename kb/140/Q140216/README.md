---
layout: page
title: "Q140216: Encarta 96 Error Message: Call to Undefined Dynalink"
permalink: kb/140/Q140216/
---

## Q140216: Encarta 96 Error Message: Call to Undefined Dynalink

	Article: Q140216
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 13-JUN-2001
	
	1996
	WINDOWS
	kbmm kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Encarta Encyclopedia for Windows, 1996 edition on
	Windows 3.0 or later, you receive the following error message:
	
	  Call to Undefined Dynalink
	
	This message appears when you attempt to access the following options:
	
	- Word Processor in Encarta (by pressing CTRL+W)
	- File, Open in Microsoft Write
	- File, Run, Browse from Program Manager
	
	CAUSE
	=====
	
	This problem can be caused by duplicate versions of Commdlg.dll (one in the
	Windows folder and one in Windows\System folder).
	
	This problem also occurs when there is an incorrect or outdated dynamic link
	library (.DLL) on the system. When the Encarta Encyclopedia is installed, it may
	incorrectly update Commdlg.dll and cause this error.
	
	RESOLUTION
	==========
	
	Problem: Duplicate Versions of Commdlg.dll
	------------------------------------------
	
	If you have duplicate versions of Commdlg.dll, search the entire drive for
	Commdlg.dll and remove the duplicate file(s).
	
	Problem: Incorrect or Outdated Dynamic Link Library (.DLL)
	----------------------------------------------------------
	
	If you have an incorrect or outdated dynamic link library (.DLL) on the system,
	expand and overwrite the existing Commdlg.dll, located in the Windows System
	folder, with the Commdlg.dll file from the original Windows disks (located on
	disk 4 of both the 1.44-MB 3.5-inch disk set and the 1.2-MB 5.25-inch disk
	set).
	
	Exit Windows, and do this at the MS-DOS command prompt by typing the following
	
	  expand [drive1]:\commdlg.dl_ c:\windows\system\commdlg.dll
	
	where [drive1] is the drive designating the location of the Windows disk (usually
	a or b), and c:\windows is the location of Windows. Change the command
	appropriately if your installation of Windows is located elsewhere.
	
	MORE INFORMATION
	================
	
	If Encarta overwrites Commdlg.dll it will be dated 6/5/95 with a size of 22,096
	bytes. In Windows 3.1, Commdlg.dll should be dated 3/10/92 with a size of 89,248
	bytes. In Windows for Workgroups 3.11, it should be dated 11/1/93 with a size of
	97,936 bytes.
	
	The manual installation batch file, Manual96.bat, included on the Encarta CD-ROM,
	incorrectly overwrites the Commdlg.dll file used by Windows. The regular Encarta
	96 Setup program avoids this problem by checking version numbers when deciding
	whether or not to overwrite. However, if the existing version of Commdlg.dll is
	older than version 3.10, Setup will attempt to update it, causing the error
	specified above.
	
	For more information about "Undefined Dynalink" error messages, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q87934 Definition and Explanation of a .DLL File
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm kbhowto dyna link
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996 kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
