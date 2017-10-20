---
layout: page
title: "Q84122: Setting Allowing Each User to Have Personal Default Directory"
permalink: /kb/084/Q84122/
---

## Q84122: Setting Allowing Each User to Have Personal Default Directory

{% raw %}

	Article: Q84122
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to use %VARIABLES% in Microsoft Windows version 3.1
	so that one computer can be used by more than one person, yet can allow each
	person to have his/her own default data directory for the application he/she is
	working with when running Windows.
	
	This can be done because both Windows 3.1's PIF editor and File, Properties
	fields can accept MS-DOS environment variables.
	
	Note: Microsoft Office Manager does not support MS-DOS environment variables.
	
	MORE INFORMATION
	================
	
	To configure a group of 15 diskless workstations to be used by 30 different
	people and set them up so that each person has his/her own data directory used
	by default when he/she logs onto any of the machines, do the following.
	
	For MS-DOS Applications
	-----------------------
	
	Example: Using Novell NetWare and WordPerfect for MS-DOS.
	
	1. System Administrator maps drive Y:=SYS:DOSAPPS/WP51 using MAP ROOT command in
	  the login script for all users. This sets up a false root for the WP51
	  directory:
	
	  MAP ROOT Y:=SERVER/SYS:DOSAPPS/WP51
	
	2. System Administrator maps drive P:=SYS:DATA/WP51 using MAP ROOT command in
	  the login script for all users. SYS:DATA\WP51 contains subdirectories for
	  each user (such as \terri \gail \tom \carrie), where each user's own specific
	  WordPerfect files reside.
	
	  MAP ROOT P:=SERVER/SYS:DATA/WP51
	
	3. Each user who logs in, executes the following MS-DOS command
	
	  SET USER=<username>
	
	  either in his/her own personal login script or via a batch file, where
	  <username> is a unique name that corresponds to the subdirectories in
	  the DATA\WP51 directory (see step 2). For example:
	
	  SET USER=terri
	
	4. The WordPerfect PIF should contain the following:
	
	     PROGRAM FILENAME:               Y:\WP.EXE
	     Window Title:
	     Optional Parameters:
	     Start-up Directory:             P:\%user%
	
	This allows any of the users who login, to choose the WordPerfect icon, and have
	WordPerfect start in the user's own specific WordPerfect data directory, which
	contains the user's own files.
	
	For Windows Application
	-----------------------
	
	Example: Using Novell NetWare, and Excel for Windows.
	
	1. System Administrator maps X:=SYS:WINAPPS\EXCEL using MAP ROOT command in the
	  login script for all users. This sets up a false root for the EXCEL
	  directory:
	
	  MAP ROOT X:=SERVER/SYS:WINAPPS/EXCEL
	
	2. System Administrator maps drive R:=SYS:DATA\EXCEL using MAP ROOT command in
	  the login script for all users. SYS:DATA\EXCEL contains subdirectories for
	  each user (such as \terri \gail \tom \carrie), where each user's own specific
	  Excel files reside.
	
	  MAP ROOT R:=SERVER/SYS:DATA/EXCEL
	
	3. Each user who logs in, executes the following MS-DOS command
	
	  SET USER=<username>
	
	  either in his/her own personal login script or via a batch file, where
	  <username> is a unique name that corresponds to the subdirectories in
	  the DATA\EXCEL directory (see step 2). For example:
	
	  SET USER=terri
	
	4. Modify the properties of the Excel icon by choosing Properties from File menu
	  in Program Manager. The properties should reflect the following:
	
	     Description:            Excel
	     Command Line:           X:\EXCEL.EXE
	     Working Directory:      R:\%user%
	     Shortcut Key:
	
	This allows any of the users who login, to choose the Excel icon, and have Excel
	start in their own specific Excel data directory, which contains their own
	files.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.1, pages 262-263
	
	Additional query words: 3.10 3.11 lan manager network environment mom
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
