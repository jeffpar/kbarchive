---
layout: page
title: "Q98582: Changes Made to Windows .INI Files by MS-DOS 6 Applications"
permalink: kb/098/Q98582/
---

## Q98582: Changes Made to Windows .INI Files by MS-DOS 6 Applications

	Article: Q98582
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	This article covers changes made to the following files by the MS-DOS 6.x
	Windows-based optional programs (Microsoft Backup for Windows, Microsoft
	Anti-Virus for Windows, and Microsoft Undelete for Windows):
	
	- SYSTEM.INI
	
	- WINFILE.INI
	
	- PROGMAN.INI
	
	MORE INFORMATION
	================
	
	SYSTEM.INI
	----------
	
	The following line is added to the [386Enh] section if you install the optional
	Windows-based programs:
	
	     device=C:\DOS\VFINTD.386
	
	MemMaker changes the SYSTEM.INI file only when certain options are selected prior
	to memory optimization. The Windows SYSTEM.INI file is only changed if you are
	running Windows 3.0. The following lists all possible changes to the Windows 3.0
	SYSTEM.INI file:
	
	       SYSTEMROMBREAKPOINT=FALSE
	     EMMEXCLUDE=A000-FFFF
	     EMMINCLUDE=<any w= regions>
	     DUALDISPLAY=TRUE                   if b000-b7ff is included
	     NOEMMDRIVER=TRUE                   if NOEMS is specified
	
	If you use a permanent swap file, DoubleSpace changes the PermSwapDOSDrive
	setting in the SYSTEM.INI file if you compress a drive that contains your
	Windows installation.
	
	WINFILE.INI
	-----------
	
	The following line is added to the [Settings] section if you install the optional
	Windows-based programs:
	
	     UNDELETE.DLL=C:\DOS\MSTOOLS.DLL
	
	The following line is added to the [AddOns] section if you install the optional
	Windows-based programs:
	
	     MS-DOS Tools Extensions=C:\DOS\MSTOOLS.DLL
	
	PROGMAN.INI
	-----------
	
	In the [Groups] section, the following line is added if you install the optional
	Windows-based programs:
	
	     Group<n>=C:\DOS\WNTOOLS.GRP
	
	Files Created
	-------------
	
	Microsoft Backup for Windows creates the following file in the Windows
	directory:
	
	  MWBACKUP.INI
	
	Microsoft Anti-Virus for Windows creates the following file in the MS-DOS 6.0
	directory:
	
	  MWAV.INI
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
