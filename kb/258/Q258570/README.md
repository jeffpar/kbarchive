---
layout: page
title: "Q258570: Baseball 2001: Program Does Not Start When You Insert CD-ROM"
permalink: /kb/258/Q258570/
---

## Q258570: Baseball 2001: Program Does Not Start When You Insert CD-ROM

{% raw %}

	Article: Q258570
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert the Microsoft Baseball 2001 CD-ROM into your CD-ROM drive, the
	program may not start.
	
	CAUSE
	=====
	
	This behavior can occur if you change the drive letter of the CD-ROM drive after
	you install Baseball 2001.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall Baseball 2001:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Baseball 2001, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove Baseball 2001.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  "<drive>:/setup.exe" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	7. Follow the instructions on the screen to reinstall Baseball 2001.
	
	Additional query words: 1.00 msgame bb2001 bball uninstall
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbBaseBall2001
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
