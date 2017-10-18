---
layout: page
title: "Q97080: PC WRmt: Mail Installation Prompts for User Data Disk"
permalink: kb/097/Q97080/
---

## Q97080: PC WRmt: Mail Installation Prompts for User Data Disk

	Article: Q97080
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation process for version 3.2 of Microsoft Mail Remote for Windows
	prompts you to install the Mail Remote data files.
	
	This disk is not provided with Mail Remote for Windows. Your mail administrator
	uses the Mail Administrator program (ADMIN.EXE) included with version 3.0 or 3.2
	of Microsoft Mail for PC Networks to create the data files appropriate for your
	system.
	
	MORE INFORMATION
	================
	
	The user data files can be stored on a floppy disk, in a directory on your local
	hard disk, or on a file server. When you are prompted for the disk during
	installation, enter the full path to the directory in which the files are
	stored. This field supports the Universal Naming Convention (UNC) so you can
	enter the name of the server immediately before the name of the file (for
	example, \\SEATTLE\MAIL\REMOTE). If your network supports UNC, Mail
	automatically creates a link to that server and location.
	
	To create the data files in the ADMIN.EXE program, select the REMOTE option from
	the main menu. Select either INIT-DISK to create a new disk for the remote user,
	or select UPDATE-DISK to quickly update an existing remote user data disk.
	
	For more information on the administrative issues related to setting up remote
	client users, please refer to chapter 11 of the Microsoft Mail for PC Networks
	"Administrator's Guide" for version 3.0.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
