---
layout: page
title: "Q305581: Golfer Animations Run Too Fast"
permalink: /kb/305/Q305581/
---

## Q305581: Golfer Animations Run Too Fast

{% raw %}

	Article: Q305581
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Links 2001 
	- Microsoft Crimson Skies 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Links 2001, the running speed of the golfer animations
	may be far too fast. Other game elements, such as the swing gauge, sounds, and
	so on, run at normal speed and otherwise behave normally.
	
	When you play Microsoft Crimson Skies, the fighters appear to surge forward,
	pause, and then surge forward again. Videos may run at a faster-than-normal rate
	or appear choppy.
	
	CAUSE
	=====
	
	This behavior can occur if your computer has been running continuously for
	approximately 24 days or more. When the games mentioned above are started, the
	game's internal timing is based on how long Microsoft Windows has been running
	(uptime). A system that has been running without a restart for a long period of
	time can experience this behavior in which animations run too fast.
	
	RESOLUTION
	==========
	
	To eliminate this issue, download and install the Links 2001 1.21 update from
	Microsoft's web site at:
	
	  http://www.microsoft.com/games/links2001/downloads.asp
	
	To work around this issue:
	
	Run your computer for two hours or more, after a cold startup and before you
	start the game, the computer's system clock will automatically countdown to zero
	uptime (0:00). The game will then behave normally.
	
	MORE INFORMATION
	================
	
	
	In rare cases, some computer systems report that they have been running
	continuously for 24 or more days, even if they have just been restarted. In
	these rare instances, Links 2001 is not able to display animations properly
	under any circumstances.
	
	Some newer Dell computer systems, manufactured after approximately May of 2001,
	do not report the system uptime properly, even after a complete shutdown and
	restart. If you suspect that your system is incorrectly reporting uptime, there
	are several freeware and shareware utilities that allow you to verify this
	behavior.
	
	For additional information about uptime-reporting tools, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q232243 Uptime.exe Tool Allows You to Estimate Server Availability with
	  Windows NT 4.0 SP4 or Higher
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability. The third-party products discussed
	in this article are manufactured by vendors independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: msgame links2001 crimson skies fast annimations dell uptime choppy graphics
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbLinkGolfSearch kbGamesSearch kbGolfSearch kbCrimsonSkiesSearch kbCrimsonSkies kbLinks2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
