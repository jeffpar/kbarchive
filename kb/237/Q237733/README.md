---
layout: page
title: "Q237733: NFL Fever 2000: Player Appears Twice in Global Substitutions"
permalink: kb/237/Q237733/
---

## Q237733: NFL Fever 2000: Player Appears Twice in Global Substitutions

	Article: Q237733
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbui kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NFL Fever 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a position under Global Substitutions in Microsoft NFL Fever
	2000, the same player with the same depth number may appear twice under the
	selected position.
	
	For example, if you click Halfback under Position in the Global Substitutions
	dialog box for the Seattle Seahawks, the following players may be listed
	
	  1) HB Waters, Ricky
	  2) HB <Last Name, First Name>
	  2) HB <Last Name, First Name>
	
	where <Last Name, First Name> is the last name and first name of the player
	who is listed twice.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You made changes to the profile of the twice listed player and at least one
	  other player in the Player Editor before you clicked OK to save the changes.
	
	- The twice listed player was originally created as a free agent, and is now a
	  member of a team.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, save the changes to the profile of each
	player that you edit in the Player Editor before you select another player to
	edit in the Player Editor.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft NFL Fever 2000,
	version 1.0.
	
	Additional query words: 1.00 msgame nflfever nfl2k football double two
	
	======================================================================
	Keywords          : kbui kbimu msgame 
	Technology        : kbGamesSearch kbNFLFever2000 kbNFLSearch kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
