---
layout: page
title: "Q89719: WFWG Server Cannot Share Virtual Drives"
permalink: kb/089/Q89719/
---

## Q89719: WFWG Server Cannot Share Virtual Drives

	Article: Q89719
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message appears if a Windows for Workgroups server is
	attempting to share virtual drives created using the MS-DOS SUBST command:
	
	  The specified drive letter or device is invalid. If you specified a drive, it
	  may be past the value specified by the LASTDRIVE command in the CONFIG.SYS
	  file.
	
	CAUSE
	=====
	
	Sharing virtual drives is not supported under Windows for Workgroups.
	
	WORKAROUND
	==========
	
	The only way to properly share a directory with Windows for Workgroups is to
	share the actual directory as specified in the Windows for Workgroups
	documentation.
	
	
	MORE INFORMATION
	================
	
	The SUBST command allows you to specify a drive letter for a PATH, which enables
	easier access to programs and data files. In Windows for Workgroups, these
	virtual drives cannot be shared.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add the following commands to the AUTOEXEC.BAT file:
	
	        SUBST X: C:\DOS
	        SUBST Y: C:\WINDOWS
	        SUBST Z: C:\ 
	
	  (The above directories are an example; you can use any directory.)
	
	2. Add the following command to the CONFIG.SYS file:
	
	        LASTDRIVE=Z
	
	3. Restart the computer, then start Windows for Workgroups.
	
	4. From the Main Group, start File Manager. You should see drive icons for drive
	  X, Y, and Z.
	
	5. Choose the drive X icon.
	
	6. From the File menu, choose Share As.
	
	7. Choose the OK button.
	
	8. The following error message appears:
	
	  The specified drive letter or device is invalid. If you specified a drive, it
	  may be past the value specified by the LASTDRIVE command in the CONFIG.SYS
	  file.
	
	Steps to Properly Share a Directory
	-----------------------------------
	
	To share the C:\WINDOWS directory properly, do the following:
	
	1. Choose the drive C icon.
	
	2. From the directory tree, select the C:\WINDOW directory.
	
	3. From the File menu, choose Share As.
	
	4. Choose the OK button.
	
	Additional query words: dblspace 3.10 3.11 SUBST Invalid Device err msg Lastdrive
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
