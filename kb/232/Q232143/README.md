---
layout: page
title: "Q232143: Various Errors When MSI File Creates and Modifies Files and Keys"
permalink: kb/232/Q232143/
---

## Q232143: Various Errors When MSI File Creates and Modifies Files and Keys

	Article: Q232143
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are logged on as a standard user and you run a Microsoft Installer
	(MSI) package, you may receive error messages similar to the following messages
	during the installation phase:
	
	  Error 1913, Could not update the file... Verify that the file exists and that
	  you can access it.
	
	  -or-
	
	  1321 The Installer has insufficient privileges to modify this file:
	  <filename>
	
	  -or-
	
	  1401 Could not create key: <registry key>
	
	Other error messages may occur, depending on whether the change was made in the
	registry or the file system, but the error message usually reports a lack of
	privileges on the part of the user or service to perform an action relating to
	the installation of the software.
	
	CAUSE
	=====
	
	This behavior occurs because SYSTEM has been denied access to the directory,
	file, or registry keys necessary to install the software.
	
	RESOLUTION
	==========
	
	In order for Windows Installer to finish its function with elevated privileges,
	the file system and the all registry keys must allow SYSTEM full control over
	these components to allow for installations to take place.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtool 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
