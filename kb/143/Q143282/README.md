---
layout: page
title: "Q143282: No Documents Appear in the File Open Dialog Box"
permalink: kb/143/Q143282/
---

## Q143282: No Documents Appear in the File Open Dialog Box

	Article: Q143282
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork win95 appscomp kbAppCompatibilitykbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a document on a Novell NetWare server, no documents may
	appear in the File Open dialog box in the program you are using.
	
	CAUSE
	=====
	
	If a 16-bit program uses the File Open dialog box from the Windows 95 version of
	the Commdlg.dll file, the program cannot view documents in a folder on a NetWare
	server if the folder has a long directory name. For example, a 16-bit program
	may not be able to view documents in a folder named "LongDirectoryName" on a
	NetWare server.
	
	RESOLUTION
	==========
	
	To access the documents, use one of the following methods:
	
	- Change the name of the folder on the NetWare server so that it does not have
	  a long directory name.
	
	- View the documents using My Computer or Windows Explorer. Double- click the
	  file you want to open.
	
	- If possible, upgrade your 16-bit program to a 32-bit version.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The following programs exhibit the behavior described in this article:
	
	- Lotus Notes (16-bit version)
	
	- Microsoft Access version 2.0
	
	- Microsoft Notepad (16-bit versions)
	
	- Microsoft Project version 4.0
	
	Note that Microsoft Word version 6.0 for Windows and Microsoft Excel version 5.0
	for Windows do not exhibit this behavior because they do not use the Windows 95
	version of the Commdlg.dll file.
	
	
	Additional query words: nwredir nwredir.vxd
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork win95 appscomp kbAppCompatibility kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
