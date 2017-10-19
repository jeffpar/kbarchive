---
layout: page
title: "Q94309: Unable to Share Printer when SUBST Is Used for TEMP Directory"
permalink: /kb/094/Q94309/
---

## Q94309: Unable to Share Printer when SUBST Is Used for TEMP Directory

	Article: Q94309
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears if a Windows for Workgroups server is
	attempting to share a printer in Print Manager and the TEMP directory is set to
	a drive that was created using the MS-DOS SUBST command:
	
	  The specified drive letter or device is invalid. If you specified a drive, it
	  may be past the value specified by the LASTDRIVE command in the CONFIG.SYS
	  file.
	
	CAUSE
	=====
	
	The SUBST command allows specifying a drive letter for a PATH, which enables
	easier access to programs and data files. In Windows for Workgroups, these
	virtual drives cannot be shared, and because the TEMP directory is used during
	printing, TEMP also cannot be shared.
	
	WORKAROUND
	==========
	
	To work around this problem, assign the TEMP variable to a valid (not virtual)
	directory. For example, if Windows is installed on the local drive C in the
	WINDOWS directory, add the following line in the AUTOEXEC.BAT file:
	
	  SET TEMP=C:\WINDOWS\TEMP (or any other valid directory)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add the following lines to the AUTOEXEC.BAT file:
	
	        SUBST X: C:\WINDOWS\TEMP
	        SET TEMP=X:
	
	2. Add the following command to the CONFIG.SYS file if it is not already
	  present:
	
	  LASTDRIVE=Z
	
	3. Restart the computer and then start Windows for Workgroups.
	
	4. From the Main Group, run Print Manager.
	
	5. Select the printer to be shared.
	
	6. From the Printer menu, choose Share Printer As.
	
	7. Choose the OK button.
	
	8. The above error message appears.
	
	For more information on Windows for Workgroups and the SUBST command, query on
	the following words in the Microsoft Knowledge Base:
	
	  subst and wfwg
	
	Additional query words: 3.10 ms-dos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
