---
layout: page
title: "Q177430: Description of DirectX Setup Error Codes"
permalink: /kb/177/Q177430/
---

## Q177430: Description of DirectX Setup Error Codes

	Article: Q177430
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup win95 win98 win98se
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the error messages you might encounter as you install
	DirectX. DirectX a suite of components that enhance performance by accessing
	hardware features directly.
	
	MORE INFORMATION
	================
	
	DirectX uses Dsetup.dll to control the installation of DirectX. If there is a
	problem during installation, you can use the following error codes to begin to
	diagnose the problem. For some error messages, suggestions for troubleshooting
	are provided.
	
	1
	-
	
	(SETUP_SUCCESS-RESTART) Setup of DirectX 5.0 was successful and Setup prompts for
	a restart of the computer. This message should not be displayed.
	
	0
	-
	
	(SETUP_SUCCESS) Setup of DirectX 5.0 was successful. This message should not be
	displayed.
	
	-1
	--
	
	(BADWINDOWSVERSION) DirectX cannot be run on this version of Windows. This
	version of Windows is either Windows 3.x or a version of Windows NT that does
	not support this version of DirectX. Please do not attempt to install DirectX
	except in these operating systems.
	
	DirectX is designed to work with Windows 95 or later and Windows NT 4.0 and later
	only.
	
	This error message can also occur if the computer hardware is incompatible with
	this version of DirectX. For example, the NEC PC-98 is supported by DirectX 5.0,
	but the PC-98 drivers folder is required for installation.
	
	-2
	--
	
	(SOURCEFILENOTFOUND) Setup could not find one of the DirectX files it is trying
	to install in its source folder.
	
	This error message may occur if you remove the CD-ROM containing the DirectX
	Setup files. Replace the CD-ROM and restart the installation of DirectX.
	
	-3
	--
	
	(BADSOURCESIZE) Setup detected a file it was attempting to install with a
	different size from the file shipped with DirectX 5.0.
	
	A file may be damaged. Check with the provider of DirectX (such as the game
	manufacturer if DirectX came on a CD-ROM). If you downloaded DirectX, download
	the DirectX files again. You can download DirectX from Microsoft for free from
	the following Web site:
	
	  http://www.microsoft.com/directx/download.asp
	
	Run Setup again.
	
	-4
	--
	
	(BADSOURCETIME) Setup detected a file it was attempting to install with a
	different date from the file shipped with DirectX 5.0.
	
	A file may be damaged. Check with the provider of DirectX (such as the game
	manufacturer if DirectX came on a CD-ROM). If you downloaded DirectX, download
	the DirectX files again. You can download DirectX from Microsoft for free from
	the following Web site:
	
	  http://www.microsoft.com/directx/download.asp
	
	Run Setup again.
	
	-5
	--
	
	(NOCOPY) Setup was unable to copy a file.
	
	The DirectX source disk may not be available. A file may be damaged. Run Setup
	again.
	
	-6
	--
	
	(OUTOFDISKSPACE) Setup detected there was not enough disk space to install
	DirectX 5.0.
	
	Attempt to install to a different drive, or clear space from your destination
	drive and run DirectX Setup again.
	
	-7
	--
	
	(CANTFINDINF) Setup could not find one of the .inf files used to install DirectX
	5.0 (for example, the Directx.inf or Ddraw.inf file).
	
	The DirectX source disk may not be available. A file may be damaged. Run Setup
	again.
	
	-8
	--
	
	(CANTFINDDIR) Setup could not find a folder needed to install DirectX 5.0.
	
	Verify that the source folder still exists and is available for the DirectX
	installation files. If not, download DirectX and Run Setup again.
	
	-9
	--
	
	(INTERNAL) Setup detected an internal error. There are only two situations known
	to cause this error message:
	
	- Dsetup.dll could not load the Dsetup32.dll and Dsetup16.dll files.
	
	- Setup attempted to call a unicode version of Setup Advanced Programming
	  Interfaces (APIs), which are not implemented.
	
	If you receive this error message, rename the Dsetup16.dll and Dsetup32.dll
	files. To do so, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. Type the following line in the Named box, and then click Find Now:
	
	  dsetup16.dll
	
	3. Click the file, and then click Rename on the File menu.
	
	4. Change the name to a .dxx extension. The file name should read as follows:
	
	  Dsetup16.dxx
	
	5. Repeat steps 2-4 for the Dsetup32.dll file.
	
	6. Reinstall DirectX.
	
	
	-13
	---
	
	(NOTPREINSTALLEDONNT) Setup detected that it could not install DirectX in Windows
	NT because it did not detect an earlier version previously installed. Setup
	checks the version of Windows NT, and if it detects Windows NT 4.0 or later, it
	expects an earlier version of DirectX to be previously installed.
	
	-14
	---
	
	DirectX Installation Error -14
	
	Error -14 is generated when trying to install on a system with the same or later
	version of DirectX already installed.
	
	
	
	Additional query words: corrupt winnt
	
	======================================================================
	Keywords          : kbsetup win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
