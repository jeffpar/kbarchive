---
layout: page
title: "Q160771: PRB: Setup Unable to Register an .ocx File Error"
permalink: kb/160/Q160771/
---

## Q160771: PRB: Setup Unable to Register an .ocx File Error

	Article: Q160771
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using setup disks created by the Setup Wizard to install an executable
	file, the set up process does not complete because the following error appears:
	
	  <filename.ocx> was unable to register itself in the System Registry
	
	followed by the message:
	
	  Setup not completed successfully.
	
	The Setup process then terminates.
	
	CAUSE
	=====
	
	The Setup program is unable to register the .ocx file because it is corrupted or
	the incorrect version.
	
	RESOLUTION
	==========
	
	Ensure that the .ocx file is located in the same folder as the executable file
	before the Setup Wizard compresses the files.
	
	Next, check the version of the .ocx file being used with the executable file
	against the corresponding .ocx file located in the either the Windows\System or
	Windows\System32 folder. On Windows 95, the Windows\System folder contains the
	.ocx files that shipped with Visual FoxPro 5.0. On Windows NT 3.51 or 4.0, they
	reside in the Windows\System32 folder. To determine the version of an .ocx file,
	on Windows 95 or Windows NT 4.0, start Windows Explorer or My Computer,
	highlight the .ocx file, right-click (secondary click) and click Properties on
	the menu that appears, and press the Version tab. On Windows NT 3.51, highlight
	the file, and press the Alt and Enter keys.
	
	The General tab provides information on the file size in bytes. This information
	is useful if you suspect file corruption. Again, compare the file being
	compressed with the file in the appropriate Windows\System folder.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro Help file provides a list of .ocx controls that shipped with
	Visual FoxPro 5.0. Type "Help ActiveX Controls Overview" (without quotations
	marks) in the Command window.
	
	NOTE: The Help documentation incorrectly refers to the Comctrl32.ocx file. The
	correct file name is Comctl32.ocx.
	
	Below is a list of the .ocx controls that ship with Visual FoxPro 5.0 and their
	corresponding version number:
	
	Control File Name             Version
	-------------------------------------
	
	Comctl32.ocx                  1.0.2908
	
	This control contains:
	
	  ImageList
	  ListView
	  ProgressBar
	  Slider
	  StatusBar
	  TabStrip
	  Toolbar
	  TreeView
	
	Comdlg32.ocx                  1.0.2415
	
	Dblist32.ocx                  1.0.2926
	This control contains:
	
	  MSDataCombo
	  MSDataList
	
	Foxhwnd.ocx                   1, 5, 0, 0
	
	Foxtlib.ocx                   5, 0, 0, 344
	
	Grid32.ocx                    1.0.2908
	
	Mci32.ocx                     1.0.2815
	
	Msacal70.ocx                  7.0
	
	Mscomm32.ocx                  1.0.2805
	
	Msmapi32.ocx                  1.0.2815
	This control contains:
	
	  Microsoft MAPI Message
	  Microsoft MAPI Session
	
	Msoutl32.ocx                  1.0.2922
	
	Picclp32.ocx                  1.0.2415
	
	Richtx32.ocx                  1.0.2922
	
	Sysinfo.ocx                   1.0.001
	
	Tabctl32.ocx                  4.01.0000
	
	Threed32.ocx                  1.0.0041
	This control contains:
	
	  3D Check box
	  3D Command button
	  3D Frame
	  3D Group Push Button
	  3D Option Button
	  3D Panel
	
	REFERENCES
	==========
	
	For more information about the ActiveX Controls Overview Help topic, please see
	the following article(s) in the Microsoft Knowledge Base:
	
	  Q157193 DOCERR: ActiveX Controls Help Topic Lists Incorrect File
	
	
	Additional query words: VFoxWin kbdsd
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.00
	Issue type        : kbprb
	
	=============================================================================
	
