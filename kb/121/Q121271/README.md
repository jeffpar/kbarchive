---
layout: page
title: "Q121271: Bypassing Novell Login Scripts for Troubleshooting Purposes"
permalink: kb/121/Q121271/
---

## Q121271: Bypassing Novell Login Scripts for Troubleshooting Purposes

	Article: Q121271
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	3.30 4.x 5.00 6.00 | 3.00 3.10 3.11
	MS-DOS             | WINDOWS
	kbnetwork kb3rdparty kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are troubleshooting Novell NetWare issues, it is sometimes helpful to
	eliminate the NetWare login script as a source of possible configuration
	problems. This is consistent with the "clean boot" approach of eliminating as
	many unknown factors as possible to isolate the cause of a specific problem.
	
	MORE INFORMATION
	================
	
	Novell NetWare employs a system of login scripts. These scripts are similar to
	batch files and are executed whenever a user logs on to a NetWare file server.
	Listed below are some of the various login scripts.
	
	System Login Script
	-------------------
	
	This script is processed first and applies to all users who log on to the file
	server. It can be edited only by a NetWare Supervisor through the SYSCON
	utility.
	
	User Login Script
	-----------------
	
	This script is unique to each user and is processed after the System Login
	script. It can usually be edited by the user through SYSCON.
	
	Default Login Script
	--------------------
	
	This script is processed after the System Login script if there is no User Login
	script for the user who is currently logging on. The Default Login script is
	hard-coded into LOGIN.EXE and therefore cannot be edited.
	
	There is a parameter on the LOGIN command that allows the user to specify a text
	file to be used as an alternate login script, overriding all the standard login
	scripts listed above. The command
	
	        LOGIN /S C:\LOGIN.TXT
	
	logs the user on to the currently attached file server and processes the file
	C:\LOGIN.TXT as the login script, overriding all the standard NetWare login
	scripts.
	
	For a "clean logon" during troubleshooting, it is suggested that this login
	script contain the following command line:
	
	       MAP INSERT S16:=SYS:PUBLIC
	
	This command assigns the drive letter Z: to the PUBLIC directory on the file
	server (which contains the standard NetWare user utilities) and adds this drive
	to the search path (MS-DOS PATH) so that the standard NetWare commands are
	accessible to the user.
	
	Novell NetWare is manufactured by Novell, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	REFERENCES
	==========
	
	This information is documented in the "NetWare Help Utility" version 3.11 under
	"Commands and Utilities L - R" (Login) and "Administration, Maintenance,
	Troubleshooting, etc." (Login Script Commands).
	
	Additional query words: tshoot msdos 3.30 4.x 5.0 6.0 6.20 6.21 6.22 3.0 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	
