---
layout: page
title: "Q118542: Dangerous Creatures: Choosing Back Button Skips a Screen"
permalink: /kb/118/Q118542/
---

## Q118542: Dangerous Creatures: Choosing Back Button Skips a Screen

{% raw %}

	Article: Q118542
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you choose the Back button in Dangerous Creatures, you may not return to
	the screen you saw most recently. Choosing Back may skip a screen.
	
	MORE INFORMATION
	================
	
	This occurs because the Back feature does not include pop-up screens. Instead,
	Dangerous Creatures returns to the most recently viewed main screen.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Main screen, click Weapons.
	
	2. In the Weapons screen, click Jaws.
	
	3. In the Jaws screen, click Wolf.
	
	4. In the Wolf screen, click the Back button.
	
	Instead of returning to the Jaws screen, Dangerous Creatures returns to the
	Weapons screen.
	
	This occurs because the Back feature does not include pop-up screens. The Jaws
	screen is a pop-up screen, whereas the Weapons screen is a main screen.
	
	Additional query words: kbhowto 1994 multi media multimedia multi-media popup jump omit include doesn't does not bring
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeProdSearch kbZNotKeyword kbDangerousCreatures
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
