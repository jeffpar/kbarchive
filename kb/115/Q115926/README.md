---
layout: page
title: "Q115926: Network Driver Error 7212 Sharing a Drive in File Manager"
permalink: kb/115/Q115926/
---

## Q115926: Network Driver Error 7212 Sharing a Drive in File Manager

	Article: Q115926
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
	
	When you try to share a drive in File Manager, you receive the following error
	message:
	
	  Network Drivers Error 7212
	
	When you receive this error, you are unable to set up any additional shared
	resources. However, you still have full network access, and other users can
	still access your previously shared resources. Also, if you remove a shared
	drive, you cannot set it up again as a shared drive.
	
	CAUSE
	=====
	
	This error occurs when:
	
	- Your password file is corrupted.
	
	- You have deleted and re-created a shared network fax directory. After the
	  error message occurs, Windows for Workgroups does not let you rename or
	  delete the .PWL files from File Manager.
	
	- You add a new hard disk drive and then attempt to share it, but the drive
	  letter conflicts with a letter previously used for a network connection.
	
	RESOLUTION
	==========
	
	Delete or rename the *.PWL files located in your Windows directory (SHARES.PWL
	and <username>.PWL). You should then be able to share additional
	directories.
	
	NOTE: If you are using a personal certificate, you should export it before
	renaming your .pwl file. If you do not do so, it may be unavailable when you
	send e-mail. For more information, see the following article in the Microsoft
	Knowledge Base:
	
	  Q190296 Unable to Use Personal Certificates in Outlook Express
	
	MORE INFORMATION
	================
	
	Typing "net help 7212" (without the quotation marks) at an MS-DOS command prompt
	in Windows for Workgroups 3.11 generates the following message:
	
	  Error 7212: The password-list file is already open.
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
