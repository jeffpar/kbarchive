---
layout: page
title: "Q228976: Midtown Madness: Stops Responding (Hangs) When You Start a Race"
permalink: /kb/228/Q228976/
---

## Q228976: Midtown Madness: Stops Responding (Hangs) When You Start a Race

	Article: Q228976
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbimu msgame
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a race in Microsoft Midtown Madness, the program may stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- Midtown Madness is configured to use the software renderer to display 3D
	  graphics.
	
	- Rendering and lighting options in the game are enabled or set to Medium or
	  High.
	
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. On the Midtown Madness startup screen, click Options.
	
	2. Click Graphics Options.
	
	3. In the Renderer box, click your 3D accelerator card or 3D display adapter.
	
	  If the only setting in the Renderer box is Software Renderer, reduce the other
	  graphics options in the game. To do this:
	
	   - Click to clear all check boxes.
	
	   - Move the Far Clip Distance and Lighting Quality sliders to the left.
	
	   - Click lower settings in the Texture Resolution, Object Detail, Resolution,
	     and Shadows boxes.
	
	4. Click Done, and then click << (Back).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 1.00 midmad msgame crash lock freeze
	
	======================================================================
	Keywords          : kbdisplay kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
