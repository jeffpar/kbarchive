---
layout: page
title: "Q303912: MechCommander 2.0: Err Msg: STOP Error -3 UnCompressing File"
permalink: /kb/303/Q303912/
---

## Q303912: MechCommander 2.0: Err Msg: STOP Error -3 UnCompressing File

{% raw %}

	Article: Q303912
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you view stats recap and return to Mission Parameters, you may receive the
	following error message:
	
	  STOP Error -3 UnCompressing File data missions mc2_m01.pak from FastFile
	  mission.fst.txt
	
	CAUSE
	=====
	
	This behavior can occur if you are playing in a multiplayer game across a
	network, and your installation of Microsoft MechCommander 2.0 has become
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall the game, remove the folder, and then
	reinstall.
	
	Workaround
	----------
	
	1. Delete the file "textures.fst" from the directory where you installed MC2.
	  (Normally C:\Program Files\Microsoft Games\MechCommander 2.)
	
	2. Copy a clean "textures.fst" from the root of the MC2 CD, to your MC2
	  directory on your hard drive.
	
	3. Go ahead and try the game again.
	
	If these steps do not resolve the issue, proceed to the steps later in this
	article.
	
	Uninstall MechCommander
	-----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. On the Install/Uninstall tab, double-click MechCommander 2.
	
	3. Select Uninstall, and then click OK.
	
	4. Click OK again.
	
	Delete MechCommander Folder
	---------------------------
	
	Microsoft Windows 95 and Microsoft Windows 98
	
	1. Click Start, point to Find, and then click "Files or Folders"
	
	2. In the Named box, type "MechCommander2" (without the quotation marks).
	
	3. In the drop-down list in the "Look in" box, select My Computer.
	
	4. Click Find Now.
	
	5. Right-click the found folder, and then click Delete.
	
	6. Click Yes to confirm the deletion.
	
	Microsoft Windows Millennium Edition (Me) and Microsoft Windows 2000
	
	1. Click Start, point to Search, and then click "For Files or Folders".
	
	2. Under "Search for files or folders named", type "MechCommander2" (without the
	  quotation marks).
	
	3. In the drop-down list in the "Look in" box, select My Computer.
	
	4. Click Search Now.
	
	5. Right-click the found folder, and then click Delete.
	
	6. Click Yes to confirm the deletion.
	
	Reinstall MechCommander 2
	-------------------------
	
	Insert the MechCommander 2.0 compact disc in your computer's CD-ROM or DVD-ROM
	drive, and then follow the instructions.
	
	Additional query words: msgame mech commander mech2
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
