---
layout: page
title: "Q142583: 3D Movie Maker: Inserted Sound Doesn't Play"
permalink: /kb/142/Q142583/
---

## Q142583: 3D Movie Maker: Inserted Sound Doesn't Play

	Article: Q142583
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set a long sound to play in 3D Movie Maker, the sound does not
	play.
	
	For example, if you have a long sound that you want to start playing in frame 10,
	and then you start your movie in frame 11, the sound does not play.
	
	CAUSE
	=====
	
	This occurs because 3D Movie Maker inserts a reference (pointer) to the sound
	file in frame 10.
	
	This is by design. Because 3D Movie Maker does not insert a piece of the sound
	into each frame, you can easily change the movie without affecting the sounds.
	
	RESOLUTION
	==========
	
	To play a sound in 3D Movie Maker, you need to start the movie before or at the
	frame where you inserted the sound.
	
	Additional query words: kids mczee kbmm director animated movies melanie 3-d three dimensional kbfaq 1.00 3dmm frames inserting
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	
	=============================================================================
	
