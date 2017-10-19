---
layout: page
title: "Q142108: 3D Movie Maker: Animation Stops While Credits Box Scrolls"
permalink: /kb/142/Q142108/
---

## Q142108: 3D Movie Maker: Animation Stops While Credits Box Scrolls

	Article: Q142108
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
	
	When you play a movie that has a Credits Box (scrolling text), other movie
	animation pauses and movie frames do not advance until the text in the box
	finishes scrolling.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Three-D objects (such as actors, props, and 3D words) and Words (Credits Boxes
	and Story Boxes) behave differently. While 3D objects can move simultaneously
	and Word Boxes can move simultaneously, the two types of objects cannot move at
	the same time.
	
	For example, you can have several Actors, Props, and 3D Words animating at the
	same time, or you can have several Credits Boxes animating at the same time.
	However, you cannot have an Actor and Credits Box animating at the same time.
	
	Any blank lines preceding or following the main text in a Credits Box are treated
	as lines of text and cause the Credits Box to continue to scroll.
	
	Additional query words: kids mczee kbmm director animated movies melanie 3-d three dimensional credit acknowledgment stop freeze people person character characters action 3dmm 3dmovie halt choppy
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	
	=============================================================================
	
