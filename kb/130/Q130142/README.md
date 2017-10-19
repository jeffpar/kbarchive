---
layout: page
title: "Q130142: HOWTO: Install SourceSafe on a Windows NT Client Workstation"
permalink: /kb/130/Q130142/
---

## Q130142: HOWTO: Install SourceSafe on a Windows NT Client Workstation

	Article: Q130142
	Product(s): Microsoft SourceSafe
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 26-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to install SourceSafe on a client workstation when
	the data is on a network drive.
	
	MORE INFORMATION
	================
	
	With SourceSafe for Windows installed on a network server, do the following on
	the Windows NT workstation:
	
	1. Create a directory structure that looks like this:
	
	  \SS
	  \SS\USER
	  \SS\TEMP
	
	2. Copy the SSNT.EXE and SSNT.HLP files from the server's \SS\WINNT directory.
	
	3. Map the server where SourceSafe is installed to a named drive letter, such as
	  Z:, making sure that the Reconnect at logon box is checked.
	
	4. In the Windows NT Control Panel/System section, add the following environment
	  variable:
	
	  Variable: SSDIR Value: Z:\<path to \SS>
	
	5. Edit the USERS.TXT file to change this line:
	
	  USER_NAME=\USERS\USER_NAME\SS.INI
	
	  to this line:
	
	  USER_NAME=<local drive>\SS\USER\SS.INI
	
	6. Copy the SS.INI file from the \SS\USERS\USER_NAME\ to the local \SS\USER
	  directory.
	
	7. Edit the \SS\USER\SS.INI file, and add this line:
	
	  TEMP_PATH=\SS\TEMP
	
	8. Set up the program icon in Program Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310NT
	Version           : :3.1
	Issue type        : kbhowto
	
	=============================================================================
	
