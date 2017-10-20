---
layout: page
title: "Q191545: Urban Assault Err Msg: Please Insert the Urban Assault CD"
permalink: /kb/191/Q191545/
---

## Q191545: Urban Assault Err Msg: Please Insert the Urban Assault CD

{% raw %}

	Article: Q191545
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Urban Assault, you may receive the following
	error message:
	
	  Please insert the Urban Assault CD.
	
	This error message is displayed even if the Urban Assault CD is in the CD-ROM
	drive.
	
	If you click OK, the error message reappears on the screen.
	
	If you click Cancel, the game does not start and you are returned to the Windows
	desktop.
	
	CAUSE
	=====
	
	This behavior can occur if you installed Urban Assault from a network location.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, remove the InstalledFrom and InstalledGroup values from
	the following registry key:
	
	  
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Microsoft Games\Urban Assault\1.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Urban Assault, version
	1.0.
	
	Additional query words: 1.00 msgame ua cdrom
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbZNotKeyword kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
