---
layout: page
title: "Q149744: 3D Movie Maker: Copy, Paste Path Varies by Actor or Prop Used"
permalink: /kb/149/Q149744/
---

## Q149744: 3D Movie Maker: Copy, Paste Path Varies by Actor or Prop Used

{% raw %}

	Article: Q149744
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In 3D Movie Maker, the Copy and Paste Path function copies and pastes the
	position and orientation in space that the actor follows. In most instances,
	copying a path from one actor to another causes the second actor to follow the
	same route that the original actor followed. There are instances, however, when
	this does not occur.
	
	MORE INFORMATION
	================
	
	In some cases, the Copy and Paste Path function may be used for the actors to
	follow the same path, but one arrives at the end sooner than the other. In these
	instances, actors may have a different action or a different step size.
	
	For example, lets say Actor 1 is running and Actor 2 is walking. The running
	actor takes larger steps than the walking actor and covers a longer distance in
	the same number of steps or the same amount of time. If Actor 1 is placed next
	to Actor 2 and they are given the same path with the Copy Path function, they
	will start off together, but the running actor will pull ahead and finish the
	path before the walking actor.
	
	The same situation occurs if the actors are both performing the same action, but
	are of different size. The larger actor, who is taking larger steps, covers the
	path faster than the smaller actor. A similar situation occurs with props and 3D
	words when an actor's path is copied and pasted to them.
	
	If you want to have actors follow the same path in the same amount of time:
	
	- Make sure that they are performing the same action.
	
	- Make sure that the actors are the same size.
	
	Doing so ensures that the Copy and Paste Path function keeps them synchronized.
	
	Additional query words: kids mczee kbmm director animated movies melanie 3-d three dimensional 3d 3dmm synchronize in-step in sync homekids homekid
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
