---
layout: page
title: "Q82895: Klotski Uses Wrong Font Under Windows 3.1"
permalink: /kb/082/Q82895/
---

## Q82895: Klotski Uses Wrong Font Under Windows 3.1

{% raw %}

	Article: Q82895
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The game Klotski (from the Microsoft Windows Entertainment Pack, Volume 3)
	appears differently under Microsoft Windows operating system version 3.1 than it
	does under Windows version 3.0. This difference is due to the font type Klotski
	uses to display titles, and appears only after new TrueType fonts are
	installed.
	
	When new TrueType fonts have been installed, Klotski chooses a new font to use in
	its titles. This font will be the font that is highest in alphabetical order.
	This can produce very unpredictable titles, and usually is unreadable.
	
	If the new font is then removed, Klotski then chooses the next font appearing in
	alphabetical order.
	
	This is a problem with Klotski, not Windows 3.1. The font that Klotski is
	requesting is being supplied correctly. To work around this problem, remove all
	"new" TrueType fonts.
	
	Additional query words: 3.00 3.0 3.10 3.1 WEP True Type uninstalled un-installed uninstall
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
