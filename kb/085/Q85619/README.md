---
layout: page
title: "Q85619: Installing an Application from a Network Drive"
permalink: /kb/085/Q85619/
---

## Q85619: Installing an Application from a Network Drive

	Article: Q85619
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows provides an option to set up applications. You can set up
	applications located on network drives if the network is connected and included
	in the PATH environment variable.
	
	MORE INFORMATION
	================
	
	Applications can automatically be installed for Windows with Windows Setup. The
	Windows Setup icon is located in the Main group.
	
	Windows searchs the specified drive for applications and creates an icon for each
	application you select. In Windows 3.1, the search path defaults to "Path" in
	the Setup Applications dialog box. Path represents the directories listed in the
	path of the AUTOEXEC.BAT file (or the PATH variable).
	
	Other drives may be selected; however, if a network directory needs to be
	searched, that drive must be connected and included in the PATH variable.
	
	To connect to a network drive in Windows, from the File Manager Disk menu, choose
	Network Connections (Connect to Network in Windows 3.0). You can also connect to
	network drives at the MS-DOS level.
	
	Once the network drive is connected, it must be included in the path. From the
	MS-DOS command prompt, type
	
	  set path=%path%;x:
	
	where x is the active (connected) network drive.
	
	When viewing the list of drives from the Setup Applications dialog box, the
	network drives will be noted as [unknown drive]. Hard disk drives are noted as
	[local drive].
	
	Additional query words: 3.00 3.0 3.0a 3.1 3.11 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
