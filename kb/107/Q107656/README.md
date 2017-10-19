---
layout: page
title: "Q107656: Writer: GP Fault After a Random Animation Plays"
permalink: /kb/107/Q107656/
---

## Q107656: Writer: GP Fault After a Random Animation Plays

	Article: Q107656
	Product(s): Microsoft Home Kids Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Dell VGA 800 x 600 32,000-color video driver, you may
	receive a general protection (GP) fault when Creative Writer plays a random
	animation.
	
	Microsoft has confirmed this to be a problem in Creative Writer versions 1.0, 1.1
	and 1.1a. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	RESOLUTION
	==========
	
	To avoid this problem, use a different video driver supported by your card, such
	as the Dell 800 x 600 256-color (512K) driver, or use a standard VGA driver. The
	problem has not been found to occur with any other video driver.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On a system using the Dell VGA 800 x 600 32,000-color video driver, start
	  Creative Writer.
	
	2. Go to the lobby of Imaginopolis.
	
	3. Wait until a random animation plays.
	
	After the animation finishes playing, you may receive the GP fault error. This
	problem does not occur with all animations. For example, it has been found to
	occur with the swimming squid and the jumping pig, but not with Max skating
	across the screen.
	
	
	Additional query words: gpf lock crash cartoon kids win mskids s3 artist fine wm_artist display mczee
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	
	=============================================================================
	
