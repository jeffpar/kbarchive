---
layout: page
title: "Q117619: Cannot Use UNC Names for Working or Startup Directory"
permalink: kb/117/Q117619/
---

## Q117619: Cannot Use UNC Names for Working or Startup Directory

	Article: Q117619
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows and Microsoft Windows for Workgroups, you cannot specify a
	universal naming convention (UNC) name as the working directory for an
	application in the Program Item Properties dialog box. This limitation also
	applies to the startup directory specified in program information files (PIFs)
	for MS-DOS-based applications.
	
	MORE INFORMATION
	================
	
	Network users can refer to a network resource by its UNC name (typically in the
	form \\<SERVER>\<SHARE> for Microsoft networks) without associating
	that connection with a drive letter. Although this is valid for some
	applications, Windows and Windows for Workgroups use the working (or startup)
	directory by attempting to change to that directory. Since it is not valid to
	change the directory to a UNC name, the operation fails.
	
	If a UNC name is listed as the working directory in the Program Item Properties
	dialog box, Windows may generate an error message indicating that the working
	directory is invalid. If a UNC name is used in the startup directory of an
	MS-DOS-based application's PIF, Windows may generate an error message indicating
	that the startup directory was not found.
	
	If you must have a working or startup directory pointing to a network share,
	associate a drive letter with the connection and then use the associated drive
	letter rather than the UNC as the working or startup directory. Note that when a
	network drive is used as the working directory, Windows or Windows for
	Workgroups may generate warning messages indicating that the application may not
	always be available (because the network is unavailable, the network drive
	letter is changed or deleted, and so forth.)
	
	Additional query words: start-up start up 3.10 3.1 3.11 3.0 3.00 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
