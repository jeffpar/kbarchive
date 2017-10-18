---
layout: page
title: "Q101724: Drive Mappings with NWShareHandles and RestoreDrives"
permalink: kb/101/Q101724/
---

## Q101724: Drive Mappings with NWShareHandles and RestoreDrives

	Article: Q101724
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Novell NetWare in conjunction with Microsoft Windows and you
	try to change drive mappings inside a virtual machine (VM), the condition of
	those drive mappings after you exit the VM depends on two Novell Netware
	switches: NWshareHandles and RestoreDrives.
	
	Both these switches are set in the 386 Enhanced section of the Network dialog box
	in Control Panel. Changing these settings modifies the following lines in the
	NetWare section of the SYSTEM.INI file:
	
	  NWShareHandles= <true> or <false>
	  RestoreDrives= <true> or <false>
	
	MORE INFORMATION
	================
	
	The default setting of NWShareHandles=FALSE causes NetWare to behave with the
	Inherited-visibility method. The optional setting of NWShareHandles=True makes
	the 386 enhanced mode NetWare driver use the Global-visibility method instead.
	
	The NWShareHandles setting is a function of the Novell redirector.With this
	setting set to False, new virtual machines (VMs) inherit mappings from the
	MS-DOS environment. However, if you add a mapping, it appears only in that VM.
	Base mappings remain untouched and new ones in each VM are unique.
	
	When you exit Windows and RestoreDrives is set to True, Windows restores your
	mappings to the way things were before you started Windows. This is important
	because mappings change as you use them, especially if they are not map rooted.
	
	Additional query words: 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
