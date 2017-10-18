---
layout: page
title: "Q132052: Purpose of FOXRSTRT.EXE &amp; How to Troubleshoot Problems"
permalink: kb/132/Q132052/
---

## Q132052: Purpose of FOXRSTRT.EXE &amp; How to Troubleshoot Problems

	Article: Q132052
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FOXRSTRT.EXE is used when Visual FoxPro is installed under Windows and Windows
	for Workgroups. This article describes the purpose of this executable and gives
	some of the errors that can occur with FOXRSTRT.
	
	MORE INFORMATION
	================
	
	As a 32-bit application, Visual FoxPro requires a 32-bit operating environment.
	Under Windows and Windows for Workgroups, the Setup program detects that the
	native operating environment is 16-bit, so it installs Win32s along with a
	32-bit executable and 32-bit OLE custom controls (.OCX files).
	
	When the installation is complete, the system must restart Windows to register
	the 32-bit .OCX files and assign an icon to VFP.EXE. After you reboot (restart)
	your computer, it is running Win32s (32-bit environment) and FOXRSTRT.EXE is
	launched. This executable tells the 32-bit .OCX files to self register and
	assigns an icon to the 32-bit VFP.EXE and IMAGEDIT.EXE. FOXRSTRT.EXE is called
	in the Load line of the WIN.INI, and runs only once after you install Visual
	FoxPro under Windows and Windows for Workgroups.
	
	FOXRSTRT.EXE may take a few minutes to run, and restarting Windows might be
	slower than usual. If by accident you manually reboot the machine before
	FOXRSTRT has completed, the .OCX files might not be registered, and the MS-DOS
	icon might still be assigned to the VFP.EXE file. You can however perform these
	tasks manually:
	
	- To reassign a correct icon for 32-bit Visual FoxPro, select the Visual FoxPro
	  icon in Program Manager; then click Properties on the Files menu.
	
	- To register .OCX files, run REGSVR32.EXE located in the VFP\SAMPLES\OLE
	  directory. Use the following syntax for each .OCX file if FOXRSTRT fails or
	  is interrupted:
	
	        REGSVR32.EXE c:\windows\system\msoutl32.ocx
	
	The .OCX files that Visual FoxPro installs in the Windows and Windows for
	Workgroups platforms are located in the WINDOWS\SYSTEM directory and are:
	
	  Outline MSOUTL32.OCX
	  Picture Clip PICCLP32.OCX
	
	For more information about these controls, search for "OLE controls" in the
	Visual FoxPro Help menu.
	
	Troubleshooting Error Messages
	------------------------------
	
	"Load line contains more than 90 characters" Error:
	
	If the LOAD line of the WIN.INI file contains more than 90 characters after Setup
	installs Win32s, a system error related to a device driver might occur when you
	restart Windows. This behavior occurs because setup adds FOXRSTRT.EXE to the
	LOAD line. The addition of characters causes an error.
	
	"Missing or Invalid FOXSTART.DAT" Error:
	
	This error might occur if setup has not completed. When this error happens,
	FOXRSTRT is not removed from the WIN.INI file. You can safely remove
	FOXRSTRT.EXE from the LOAD line in the WIN.INI file; then follow the procedure
	described above to manually register the .OCX files and assign an icon to
	VFP.EXE and to IMAGEDIT.EXE.
	
	Additional query words: VFoxWin install acme
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
