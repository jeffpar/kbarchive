---
layout: page
title: "Q179384: PRB: Installing Applications from an HPFS Formatted Drive"
permalink: kb/179/Q179384/
---

## Q179384: PRB: Installing Applications from an HPFS Formatted Drive

	Article: Q179384
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,97,97sp1,97sp2
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp400 kbVBp500 kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the application Setup Wizard from a network drive that is formatted
	as HPFS or Netware 4.x volume with the OS/2 NameSpace loaded with long
	filenames, one of the following two errors occurs:
	
	In Visual Basic 4.0:
	
	  C:\WINDOWS\ST4UNST.EXE Cannot read source file
	
	In Visual Basic 5.0:
	
	  C:\WINDOWS\ST5UNST.EXE Cannot read source file
	
	RESOLUTION
	==========
	
	To work around this problem, you can create the setup application onto floppy
	disks, or move the setup files from the HPFS volume to either a FAT or NTFS
	formatted drive.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following operating systems support HPFS:
	
	  OS2
	  OS2 Warp
	  IBM LAN Server
	  NT 3.51 Workstation/Server
	  NT 4.0 Workstation/Server
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q100108 Overview of FAT, HPFS, and NTFS File Systems
	
	
	Additional query words: hpsf
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp400 kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,97,97sp1,97sp2
	Issue type        : kbprb
	
	=============================================================================
	
