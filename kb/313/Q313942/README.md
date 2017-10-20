---
layout: page
title: "Q313942: MechWarrior 4: &quot;Address 0x00000040&quot; Err Msg Playing Mission"
permalink: /kb/313/Q313942/
---

## Q313942: MechWarrior 4: &quot;Address 0x00000040&quot; Err Msg Playing Mission

{% raw %}

	Article: Q313942
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play (or replay) a mission while in a campaign in Microsoft
	MechWarrior 4: Black Knight, the program may stop responding (hang), and then
	you receive the following error message:
	
	  Exception: Attempt to read from address 0x00000040 in MW4X! (+0x16acd8)
	
	CAUSE
	=====
	
	This behavior can occur if there is a corrupted mission saved to your computer's
	hard disk.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the corrupted mission. To do this, follow these
	steps:
	
	1. Start Windows Explorer, and then browse to the following location
	
	  C:\Program Files\Microsoft Games\MechWarrior
	  Vengeance\Resource\Pilotsx\<Pilot name>\Games
	
	  where <Pilot name> is the name of the MechWarrior pilot that you
	  experience this error message with.
	
	2. In the right pane of Windows Explorer, right-click the file name of the
	  mission that you experience this error message with.
	
	3. On the shortcut menu that appears, click Delete.
	
	4. On the "Confirm File Delete" message that appears, click Yes.
	
	5. Quit Windows Explorer.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
