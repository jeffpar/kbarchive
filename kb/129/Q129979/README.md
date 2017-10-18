---
layout: page
title: "Q129979: How to Reinstall Win32s with Visual FoxPro"
permalink: kb/129/Q129979/
---

## Q129979: How to Reinstall Win32s with Visual FoxPro

	Article: Q129979
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro uses the Microsoft Setup program. It provides flexibility by
	letting you install Visual FoxPro as well as remove parts of the application
	components once the application has been installed. To reinstall Win32s, it is
	necessary to remove the subsystem first. Then invoke the maintenance mode of the
	Microsoft Setup. This article explains the process of reinstalling Win32s in
	detail.
	
	MORE INFORMATION
	================
	
	Visual FoxPro is a 32-bit application, so it requires a 32-bit operating system.
	The Microsoft Setup system installs the Win32s operating system under Windows
	and Windows for Workgroups to provide a 32-bit environment.
	
	If you receive a Win32s error such as "Improper Installation," you might need to
	reinstall the subsystem. However, you should use extreme caution when
	proceeding. If you believe you have a faulty installation of the Win32s
	operating system, and need to reinstall it, use the following step-by-step
	procedure.
	
	
	1. Remove Win32s from your system.
	
	  a. Remove the following line in the [386Enh] section of the SYSTEM.INI file:
	
	  device=<WINDOWS>\<SYSTEM>\win32s\w32s.386
	
	     Here <WINDOWS> and <SYSTEM> are where the Windows and System
	     directories are located.
	
	  b. Modify the following line in the [BOOT] section of the SYSTEM.INI file:
	
	  drivers=mmsystem.dll, winmm16.dll
	
	     to the following (remove winmm16.dll):
	
	  drivers=mmsystem.dll
	
	  c. Delete the following files from the <WINDOWS>\<SYSTEM>
	     subdirectory or from the SYSTEM directory in network installations:
	
	  W32SYS.DLL
	  WIN32S16.DLL
	  WIN32S.INI
	
	     NOTE: In some instances the file WINMM16.DLL, located in the System
	     subdirectory, will also need to be deleted.
	
	  d. Delete all the files in the <WINDOWS>\<SYSTEM>\WIN32S
	     subdirectory or the <SYSTEM>\WIN32S subdirectory in network
	     installations. Then delete subdirectory itself.
	
	  e. Restart Windows.
	
	  NOTE: <WINDOWS> refers to the windows installation directory. On a
	  networked Windows installation, the system directory may be located on a
	  remote share. If you are only removing Win32s from your machine, then you do
	  not need to remove the shared files (in <SYSTEM> and
	  <SYSTEM>\WIN32S). Before removing these files from the network share,
	  make sure all users that use Win32s have removed the references to Win32s
	  from the SYSTEM.INI file.
	
	
	2. Reinstall Win32s.
	
	  Because the maintenance mode of the Microsoft Setup program is also designed
	  to reinstall system files, you can run the SETUP program to reinstall Win32s.
	  The maintenance mode of SETUP is started when SETUP detects that a version of
	  Visual FoxPro has been installed. When the Setup Dialog is displayed, select
	  the Add/Remove option, click the Change Option button, and click the Win32s
	  and OLE 2.02 check box option to add Win32s.
	
	  If you prefer to have a clean installation of Visual FoxPro, you can bypass
	  the maintenance mode of the Visual FoxPro Setup by deleting the FOXSET16.STF,
	  FOXSET32.STF, or FOXSET95.STF files located in the VFP\SETUP directory. Setup
	  Table Files (STF) are text files that contain information about your Setup.
	  In particular, they report at which point a maintenance mode installation
	  should begin. Deleting the STF file will force a new installation of Visual
	  FoxPro.
	
	Additional query words: VFoxWin uninstall 3.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
