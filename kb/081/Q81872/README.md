---
layout: page
title: "Q81872: Detecting Multimedia Extensions and Drivers"
permalink: kb/081/Q81872/
---

## Q81872: Detecting Multimedia Extensions and Drivers

	Article: Q81872
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Nommdll.exe is a file in the Microsoft Download Center that demonstrates how to
	determine whether the Multimedia Extensions to Microsoft Windows and its
	associated drivers are installed. NOMMDLL has two parts: the PLAYWAV application
	and the PLYSND dynamic-link library (DLL).
	
	PLAYWAV indicates that the Multimedia Extensions are installed when its Sound
	menu option is available. When this menu item is grayed or unavailable, the
	Extensions are not installed. By default, PLAYWAV also determines if the sound
	driver is loaded. You can modify the code to look for other drivers if desired.
	
	An application can use the PLYSND DLL to play sounds. The functions in PLYSND are
	useful to control the Media Control Interface (MCI).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Nommdll.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: NOMMDLL uses the LASER.WAV file distributed with the Multimedia Extensions.
	To use NOMMDLL, verify that the MMDATA directory is listed in the MS-DOS PATH
	environment variable, or copy the LASER.WAV file into the same directory as
	NOMMDLL.EXE.
	
	Additional query words: NOMMDLL
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : :3.0
	
	=============================================================================
	
