---
layout: page
title: "Q138643: PowerPoint 95 Viewer Doesn't Replace 16-Bit OLE Files"
permalink: /kb/138/Q138643/
---

## Q138643: PowerPoint 95 Viewer Doesn't Replace 16-Bit OLE Files

	Article: Q138643
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbsetup kbviewer
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint for Windows 95 or PowerPoint Viewer for Windows 95, you may
	receive the following error messages:
	
	  Sorry, either the file name is too long or PowerPoint cannot find or run the
	  viewer, which it needs to save a PowerPoint 4.0 format. If the file name is
	  correct, you should run setup and reinstall to get the viewer.
	
	  -or-
	
	  Sorry, PowerPoint cannot locate one of its components.
	
	CAUSE
	=====
	
	This problem occurs if any of the 16-bit OLE .dll files are missing or corrupt.
	This problem may occur because the PowerPoint Viewer for Windows 95 Setup
	program does not install the 16-bit versions of the OLE .dll files. You cannot
	use the Vsetup.exe program to correct problems in Windows 95 caused by missing
	or corrupt OLE files.
	
	Note, however, that when you install this program in Windows 3.x, it does install
	these .dlls.
	
	WORKAROUND
	==========
	
	There are copies of the 16-bit OLE .dll files in the following folder:
	
	  Windows\Sysbckup
	
	You can copy these files to the Windows\System folder.
	
	MORE INFORMATION
	================
	
	In Windows 95, the 16-bit and 32-bit OLE files are installed to the
	C:\Windows\System folder by default. The only file that Windows 95 Setup does
	not install is the Ole2prox.dll file. Instead, Windows 95 replaces this file
	with the 32-bit version.
	
	You should only use the 16-bit OLE files that are shipped with Windows.
	
	Additional query words: 7.00 ole2.dll ole2nls.dll storage.dll compobj.dll w_powerpt powerpnt pptview ppt95 Vsetup
	
	======================================================================
	Keywords          : kbsetup kbviewer 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
