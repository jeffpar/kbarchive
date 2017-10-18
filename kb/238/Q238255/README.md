---
layout: page
title: "Q238255: HOWTO: Install VSS to a Novell NetWare Server"
permalink: kb/238/Q238255/
---

## Q238255: HOWTO: Install VSS to a Novell NetWare Server

	Article: Q238255
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup _IK kbSSafe500 kbSSafe600 kbVS kbVS600 kbOSNovell _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell NetWare servers can be configured to handle 8.3 file names or greater
	than 8.3 file names. If the Novell NetWare server can only handle 8.3 file
	names, the regular Visual Studio installation process will not be able to
	install to the Novell NetWare server.
	
	MORE INFORMATION
	================
	
	To install to a Novell NetWare server that can only handle 8.3 file names use
	the following steps.
	
	To install from the Visual Studio CDs:
	
	- Insert Disk 2.
	- Change to the VSS_SS\ folder.
	- Run the following command: "setup.exe /F " (without the quotation marks)
	- Choose the Server Applications option.
	- When prompted for the installation location, be sure to change it to the
	  Novell NetWare Server.
	
	To install from the Visual SourceSafe standalone CDs:
	
	- Insert the Visual SourceSafe CD.
	- Run the following command: "setup.exe /F " (without the quotation marks)
	
	For more information about the Visual SourceSafe setup process, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q139358 INFO: Readme.wri: Section 1, Software Installation Information
	
	  Q130141 HOWTO: Install SourceSafe on a Windows Client Workstation
	
	REFERENCES
	==========
	
	For more information about enabling long file names on a Novell Netware server,
	please contact Novell at one of the following contact points:
	
	  Support Telephone Number: (800) 858-4000 Domestic
	  Support Telephone Number: (801) 379-5900 International
	  Support Telephone Number: (800) 638-9273 Netware
	  Support Telephone Number: (408) 729-6700 Hardware Division
	  Presale technical information: (800) 733-9673
	  World Wide Web: http://support.novell.com/
	  BBS: (801) 221-5197
	  BBS: (801) 429-7787 (9600 Baud)
	
	Additional query words: netware intranetware internetware VSS LFN setup
	
	======================================================================
	Keywords          : kbsetup _IK kbSSafe500 kbSSafe600 kbVS kbVS600 kbOSNovell _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
