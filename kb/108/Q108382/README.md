---
layout: page
title: "Q108382: WRITE.EXE Not Added or Removed by Setup"
permalink: /kb/108/Q108382/
---

## Q108382: WRITE.EXE Not Added or Removed by Setup

{% raw %}

	Article: Q108382
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run SETUP.EXE from Windows 3.1 or 3.11, SETUP.EXE from Windows for
	Workgroups 3.1, or WINSETUP.EXE from Windows for Workgroups 3.11) and try to add
	or remove the Accessories group, WRITE.EXE is not included. This behavior is by
	design.
	
	MORE INFORMATION
	================
	
	WRITE.EXE is considered part of the system because it is required to access the
	"README" files (.WRI). It must be manually added or removed.
	
	To add the Write icon to the Accessories group, use the following steps:
	
	1. Open the Program Manager and choose Accessories from the Window menu.
	
	2. From the File menu, choose New.
	
	3. In the New Program Object dialog box, select New Item and choose OK.
	
	4. In the Program Item Properties dialog box, enter the following information:
	
	     Description: Write
	     Command Line: <C:\WINDOWS>\WRITE.EXE
	     Working Directory: <C:\WINDOWS>
	     Shortcut Key: None (default)
	
	  NOTE: Substitute the drive and directory that contains your Windows files for
	  <C:\WINDOWS> in the above example.
	
	5. Choose OK.
	
	To remove the Write icon from the Accessories group, do the following:
	
	1. Select the Write icon in the Accessories group and press the DEL key on your
	  keyboard.
	
	2. Choose Yes to confirm deletion of the Write program item.
	
	3. Run File Manager and delete the files WRITE.EXE and WRITE.HLP from your
	  Windows directory.
	
	NOTE: You may also want to delete any files that end with the extension .WRI
	since these are documents files in Write format.
	
	Additional query words: 3.10 3.11 icon
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
