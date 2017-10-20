---
layout: page
title: "Q68733: Paradise Setup Copies OEM Version of SETUP.INF to Windows"
permalink: /kb/068/Q68733/
---

## Q68733: Paradise Setup Copies OEM Version of SETUP.INF to Windows

{% raw %}

	Article: Q68733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Paradise instructs you to copy a SETUP.INF file from the Paradise driver's disk
	to the WINDOWS directory, and then install the appropriate Paradise video
	driver. These instructions are correct. However, once the Paradise video driver
	is installed, the SETUP.INF in the Windows directory (copied from the Paradise
	disk) MUST be deleted. The original Windows SETUP.INF file should still reside
	in the SYSTEM subdirectory under the WINDOWS directory.
	
	MORE INFORMATION
	================
	
	The problem is caused by the Paradise SETUP.INF file, which only contains
	information concerning the Paradise drivers. Windows Setup uses SETUP.INF when
	configuring Windows for use with different hardware devices. By deleting
	Paradise's SETUP.INF file from the WINDOWS directory, Windows Setup is able to
	locate the Windows SETUP.INF file located in the SYSTEM subdirectory.
	
	REFERENCES
	==========
	
	Paradise Supplemental Drivers Disk
	
	Additional query words: 3rdparty 3.0 3.00 3.0a 3.00a win30 Unable to add printers windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
