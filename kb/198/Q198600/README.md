---
layout: page
title: "Q198600: INFO: Differences Between DCOM95 and DCOM98"
permalink: kb/198/Q198600/
---

## Q198600: INFO: Differences Between DCOM95 and DCOM98

	Article: Q198600
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbVBp kbVBp600 kbVS600 kbGrpDSVB _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable the latest DCOM components for Windows 95 and Windows 98 computers,
	Microsoft has made DCOM98.exe and DCOM95.exe available.
	
	The Visual Basic and Visual Studio installation programs install DCOM98.exe.
	DCOM95.exe version 1.3 is available for download from the Microsoft Web site.
	This article describes the key differences between these two versions.
	
	MORE INFORMATION
	================
	
	Distributed COM (DCOM) enables applications to communicate between two machines.
	DCOM is native to the Windows 2000, Windows NT (beginning with version 4.0) and
	Windows 98 operating systems. DCOM must be installed on Windows 95 computers to
	enable this functionality.
	
	DCOM98.exe and DCOM95.exe are installation utilities that install or update DCOM
	components.
	
	The following sections provide specifics about each version.
	
	DCOM98
	------
	
	- DCOM98 installs the DCOM components on both Windows 95 and Windows 98
	  computers. The components that DCOM installs on Windows 98 computers are
	  newer than those that ship with Windows 98 and are required by some
	  components of Visual Basic to run properly.
	
	- DCOM98 ships with Microsoft Visual Basic 6.0.
	
	- DCOM98 can be installed automatically by the Visual Basic installation
	  program.
	
	- DCOM98 is available on the Visual Basic installation CD-ROM in the DCOM98
	  folder.
	
	DCOM95
	------
	
	- DCOM95 version 1.3 installs the latest DCOM components ONLY on Windows 95
	  computers. DCOM95 is not intended to and will not install on Windows 98
	  computers. If you have installed DCOM95 version 1.3, you do not need to
	  install DCOM98 on the client computer.
	
	
	- DCOM95 is newer than DCOM98. If you would like your Windows 95 clients to run
	  the latest DCOM components be sure they install DCOM95 version 1.3.
	
	- DCOM95 version 1.3 is available for download from the following Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	Some applications that were created with Visual Basic need to have DCOM installed
	to ensure that some components run properly. Use DCOM98 or DCOM95 to install
	these necessary components.
	
	For more details about the specific differences between DCOM95 and DCOM98, please
	refer to the Release notes (RelNotes.Txt) for each version. The Release notes
	are installed to the following directory after installation:
	
	  \\Windows\System\DCOMxx
	
	where "xx" is 95 or 98. The Release notes for DCOM95 are also available on the
	following Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/relnotes.asp
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196208 INFO: DCOM98 Release Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbVBp kbVBp600 kbVS600 kbGrpDSVB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
