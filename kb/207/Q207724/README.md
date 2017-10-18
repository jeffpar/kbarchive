---
layout: page
title: "Q207724: Urban Assault: Game Hangs When You Load Last Saved Game"
permalink: kb/207/Q207724/
---

## Q207724: Urban Assault: Game Hangs When You Load Last Saved Game

	Article: Q207724
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbui kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Last Saved on the Single Player screen in Urban Assault, the
	program may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You last saved the game when you were on a level that contained an activated
	  Stoudson bomb.
	
	- You last saved the game when you were in the host station turret.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart your computer, and then modify your last saved
	game file. To do this, follow these steps:
	
	1. Restart your computer
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line (with quotation marks), and then
	  click OK
	
	  "<drive>:\program files\microsoft games\urban assault
	  \save\<user>\user.txt "
	
	  where <drive> is the drive letter of the hard disk on which Urban
	  Assault is installed, and <user> is the user name for the player (by
	  default, <user> is "sdu7").
	
	4. When you are prompted to use WordPad instead of Notepad to open the file,
	  click Yes.
	
	5. On the Edit menu, click Find.
	
	6. In the Find What box, type "begin_robo = 56" (without the quotation marks),
	  and then click Find Next.
	
	7. Click Cancel.
	
	8. Under the "begin_robo = 56" line, change the "viewer=" line and the "user="
	  line to match the following two lines:
	
	      viewer = yes
	      user = yes
	
	9. On the Edit menu, click Find.
	
	10. In the Find What box, type "begin_extraviewer" (without the quotation
	  marks), and then click Find Next.
	
	11. Click Cancel.
	
	12. Delete the following four lines:
	
	  begin_extraviewer
	      kind = robogun
	      number = 0
	  end
	
	13. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	14. Start Urban Assault.
	
	15. On the startup screen, click Single Player.
	
	16. On the Single Player screen, click Last Saved.
	
	To prevent this issue from occuring, exit the turret before you save the game if
	you are on a level that contains an activated Stoudson bomb.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Urban Assault,
	version 1.0.
	
	Additional query words: 1.00 msgame ua crash freeze lockup
	
	======================================================================
	Keywords          : kbui kbimu msgame 
	Technology        : kbGamesSearch kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
