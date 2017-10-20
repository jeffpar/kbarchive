---
layout: page
title: "Q262011: Allegiance: Stand-Alone Server Is Not Updated Automatically"
permalink: /kb/262/Q262011/
---

## Q262011: Allegiance: Stand-Alone Server Is Not Updated Automatically

{% raw %}

	Article: Q262011
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you uninstall a Microsoft Allegiance stand-alone server, the server may not
	be updated automatically when you reinstall the server.
	
	CAUSE
	=====
	
	This behavior can occur if the Filelist.txt file remains in the Server folder
	after you uninstall the stand-alone Allegiance server.
	
	This file contains the previous server information, and is not updated
	automatically with the new server information.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Delete the Filelist.txt file from the following folder
	
	  <drive>:\Program Files\Microsoft Games\Allegiance\Server
	
	  where <drive> is the drive letter of the hard disk on which Allegiance
	  is installed.
	
	2. Reinstall the Allegiance stand-alone server.
	
	3. Connect to the Allegiance stand-alone server. The Auto Update process should
	  run as expected.
	
	Additional query words: 1.00 msgame igz msngz auto-update fails
	
	======================================================================
	Keywords          : kbnetwork kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
