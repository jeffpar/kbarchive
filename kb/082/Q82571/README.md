---
layout: page
title: "Q82571: IdleWild Loses all Screen Savers Except Blackness"
permalink: /kb/082/Q82571/
---

## Q82571: IdleWild Loses all Screen Savers Except Blackness

{% raw %}

	Article: Q82571
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If IdleWild is launched from a directory other than the one it is stored in,
	only the Blackness screen saver may be displayed in the list of available screen
	savers. This problem can occur with versions 3.0 and 3.1 of the Microsoft
	Windows operating system.
	
	MORE INFORMATION
	================
	
	IdleWild builds a list of all the screen savers it can find, adding them to its
	list of screen savers. The first entry in this list is always Blackness, as this
	screen saver is built into IdleWild and is not stored separately on the hard
	drive. IdleWild then searches the current directory, looking for IdleWild screen
	saver files (files with .IW extension). If IdleWild was started in a directory
	with no screen saver files, it may display only the Blackness screen saver as
	available.
	
	Additional query words: 1.0 idle wild wep
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
