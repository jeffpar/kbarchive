---
layout: page
title: "Q323440: Dungeon Siege: Gom Character Does Not Respond to Attack"
permalink: /kb/323/Q323440/
---

## Q323440: Dungeon Siege: Gom Character Does Not Respond to Attack

{% raw %}

	Article: Q323440
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to fight (by clicking) the character Gom in Microsoft Dungeon Siege
	1.0, Gom may not move to fight back, and the following balloon may appear:
	
	  A quest has been updated in your journal.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1: Install the Dungeon Siege Update
	------------------------------------------
	
	Install the latest Dungeon Siege Update. For additional information about the
	Dungeon Siege Update, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q324477 Dungeon Siege 1.0: Availability of the Dungeon Siege Update and the
	  Fixes Included in the Update
	
	Method 1: Use a Spell to Fight Back
	-----------------------------------
	
	1. On the Main menu, click Single Player.
	
	2. Click Load Game.
	
	3. Click the game in which your character is about to fight Gom, and then click
	  Load.
	
	4. When the game is in progress, if you have magic spells in your weapon
	  inventory, click to make a spell that will do area damage your active
	  weapon.
	
	  NOTE: The weapon inventory is in the upper-left corner of the screen.
	
	5. Click Gom to fire the spell.
	
	Method 2: Start the Game from the AutoSave File
	-----------------------------------------------
	
	1. On the Main menu, click Single Player.
	
	2. Click Load Game.
	
	3. Click the game in which your character is about to fight Gom, and then click
	  Load.
	
	4. When Gom attacks, note the AutoSave text at the top of the screen.
	
	5. Click Menu in the lower-right corner of the screen, and then click Exit
	  Game.
	
	  When you are prompted to exit the game without saving it, click Yes.
	
	6. On the Main menu, click Load Game.
	
	7. In the list of AutoSave files, click the game that you just exited, and then
	  click OK.
	
	  NOTE: Automatically saved files are named [Auto-Save]. User saved games are
	  named Character (X-XX-XX). For example, Simon 0-00-00.
	
	8. Press ESC to bypass the noninteractive video sequence.
	
	9. Click Gom to fight.
	
	Method 3: Add the Maxfps Parameter
	----------------------------------
	
	NOTE: This procedure affects only the game that is started from the shortcut that
	you edit. If you want to start Dungeon Siege from a different shortcut, repeat
	the "Part 2 - Add Parameter" section of this method for the shortcut that you
	want to use.
	
	Part 1 - Create Shortcut:
	
	1. Start Internet Explorer, and then locate and open the following folder:
	
	  C:\Program Files\Microsoft Games\Dungeon Siege
	
	2. Right-click Dungeon Siege, and then click Create Shortcut.
	
	3. Right-click the newly created Dungeon Siege shortcut, and then click Copy.
	
	4. Right-click a blank space on your Desktop, and then click Paste.
	
	5. Right-click the newly created shortcut on the Desktop, and then click Rename.
	
	6. In the box that appears, type Dungeon Siege Test, and then press ENTER.
	
	Part 2 - Add Parameter:
	
	1. On the desktop, right-click Dungeon Siege Test, and then click Properties.
	
	2. Click the Shortcut tab.
	
	3. In the Target box, click the end of the current text, press SPACEBAR, type
	  "maxfps=10" (without the quotation marks), click Apply, and then click OK.
	
	  NOTE: Do not delete any text that is present in the Target box. By default,
	  the Target box includes the following text:
	
	  "C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe"
	
	  The Target box, with the added parameter, now includes the following text:
	
	  "C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe" maxfps=10
	
	  Other parameters may exist.
	
	Part 3 - Start the Game from the Shortcut:
	
	1. On the desktop, double-click Dungeon Siege Test.
	
	2. On the Main menu, click Single Player.
	
	3. Click Load Game.
	
	4. Click the game in which your character is about to fight Gom, and then click
	  Load.
	
	5. When Gom attacks, click to fight back.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
