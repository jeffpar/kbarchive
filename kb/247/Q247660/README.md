---
layout: page
title: "Q247660: Error When Saving Routing &amp; Remote Access Service Configuration"
permalink: /kb/247/Q247660/
---

## Q247660: Error When Saving Routing &amp; Remote Access Service Configuration

	Article: Q247660
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save your configuration in Routing and Remote Access Service
	(RRAS) Administrator, you may receive the following error message:
	
	  An error occurred while backing up the configuration: The network name cannot
	  be found.
	
	  If you are saving the configuration of a remote computer, then the directory
	  and drive in which you are saving the configuration must exist on both the
	  local and remote computers.
	
	CAUSE
	=====
	
	This behavior occurs if the ADMIN$ administrative network share is not present
	on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, re-share the %SystemRoot% folder (by default, the Winnt
	folder) and name the share ADMIN$.
	
	MORE INFORMATION
	================
	
	The ADMIN$ administrative network share is created by default in all Microsoft
	Windows NT installations.
	
	To save the configuration, RRAS Administrator creates the following files:
	
	  <Save_filename>Interfaces
	  <Save_filename>Parameters
	  <Save_filename>RouterManagers
	  <Save_filename>Phonebook
	  <Save_filename>.mpr
	
	In the situation described in this article, only the first three files are
	created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
