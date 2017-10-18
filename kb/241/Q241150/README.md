---
layout: page
title: "Q241150: TPU: Err Msg: Unable to Register All Files That Were Installed"
permalink: kb/241/Q241150/
---

## Q241150: TPU: Err Msg: Unable to Register All Files That Were Installed

	Article: Q241150
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Team Productivity Update (TPU), you may receive the
	following error message:
	
	  Unable to register all files that were installed.
	
	  Please review any documentation accompanying your setup for more information
	  on why setup may not be working properly. You might also try closing any open
	  applications and run setup again.
	
	You may also see the following error message in the Results window when the
	wizard finishes:
	
	  Unable to register all files that were installed.
	
	CAUSE
	=====
	
	This error message can occur if the Manages.dll file does not exist or cannot be
	found, or if the currently logged-on user does not have permissions to access
	the file. This file is used by the TPU installation wizard to self-register the
	TPU dynamic-link libraries (DLLs) needed to complete the installation.
	
	RESOLUTION
	==========
	
	The Manages.dll file is installed during the installation of the BackOffice
	Server 4.5 components in the following folder:
	
	  %SystemRoot%\Program Files\Microsoft BackOffice\Admin
	
	To reinstall TPU, manually uninstall the installed components and then run Setup
	again:
	
	1. Remove the TPUWeb virtual directory from the default Web site.
	
	2. Uninstall Microsoft Outlook 2000 Team Folders Wizard by using the Add/Remove
	  Programs tool in Control Panel.
	
	3. Delete the TPUWeb, TeamDocs, and TeamFolders folders in the
	  %SystemRoot%\Inetpub\Wwwroot folder.
	
	4. Delete the %SystemRoot%\Public folder. This removes the TPU client share.
	
	5. Start SQL Enterprise Manager and delete the MSTWS and TFConfig databases.
	
	6. Delete the new public folder in the location specified during Setup.
	
	7. Run TPU Setup again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
