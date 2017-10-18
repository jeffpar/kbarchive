---
layout: page
title: "Q68647: Windows Code to Parse MS-DOS Environment Variables"
permalink: kb/068/Q68647/
---

## Q68647: Windows Code to Parse MS-DOS Environment Variables

	Article: Q68647
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PATH is a sample application for the Windows environment that demonstrates how
	to parse MS-DOS environment variables. PATH will accept any environment variable
	and the name of a file. A search path is a null-terminated string that consists
	of a sequence of directory specifications separated by semicolons (;). PATH
	searches for the named file by searching each directory (one directory at a
	time) in the order in which the directories are listed in the environment
	variable.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Path.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: softlib PATH.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
