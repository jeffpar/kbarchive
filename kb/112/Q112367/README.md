---
layout: page
title: "Q112367: Deleted MSMAIL.INI Creates Embedded WGPO Directory"
permalink: kb/112/Q112367/
---

## Q112367: Deleted MSMAIL.INI Creates Embedded WGPO Directory

	Article: Q112367
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to send or receive mail after you delete the MSMAIL.INI file
	and re-create a local post office. Also, address books may appear to be empty.
	
	CAUSE
	=====
	
	The first time you set up Windows for Workgroups Mail with the "Create a New
	Post Office" option, Mail creates a workgroup post office (WGPO) directory
	within the Windows directory and creates the MSMAIL.INI file in the Windows
	directory.
	
	Deleting the MSMAIL.INI file causes Mail Setup to prompt you to either connect to
	an existing post office or create a new workgroup post office. If you choose to
	create a new post office, a WGPO directory is created in
	<drive>:\<Windows directory>\WGPO.
	
	In Setup, you cannot select the Windows directory as the parent of the WGPO
	directory, and there is no option to use the previously created post office.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Open the MSMAIL.INI file located in the Windows directory with an ASCII text
	  editor, such as Windows Notepad.
	
	2. Change the ServerPath= entry in the [Microsoft Mail] section to indicate the
	  first WGPO directory. For example
	
	  change
	
	     [Microsoft Mail]
	     ServerPath=C:\WINDOWS\WGPO\WGPO\ 
	
	  to:
	
	     [Microsoft Mail]
	     ServerPath=C:\WINDOWS\WGPO\ 
	
	3. Delete the C:\WINDOWS\WGPO\WGPO directory.
	
	Additional query words: 3.11 postoffice po
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
