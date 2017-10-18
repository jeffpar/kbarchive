---
layout: page
title: "Q138747: Error Message When Trying to Play Pinball2.mid File"
permalink: kb/138/Q138747/
---

## Q138747: Error Message When Trying to Play Pinball2.mid File

	Article: Q138747
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play the Pinball2.mid file in the Program Files\Plus!\ Pinball
	folder, you receive the following error message:
	
	  MMSYSTEM296, the file cannot be played on the specified MCI device. The file
	  may be corrupt or not in the correct format.
	
	CAUSE
	=====
	
	The Pinball2.mid file is not a valid midi-format file. This file is not used
	when you play the 3D Pinball game.
	
	RESOLUTION
	==========
	
	3D Pinball includes two midi files, Pinball.mid and Pinball2.mid. The
	Pinball.mid file is a valid midi file, and is used by the 3D Pinball game. You
	can delete the Pinball2.mid file if you want.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
