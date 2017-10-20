---
layout: page
title: "Q185046: Golf 98/99: Setup Does Not Start When You Insert the Golf CD-ROM"
permalink: /kb/185/Q185046/
---

## Q185046: Golf 98/99: Setup Does Not Start When You Insert the Golf CD-ROM

{% raw %}

	Article: Q185046
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup kbtlc kbimu msgame golf98kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert the Microsoft Golf CD-ROM into your CD-ROM drive, Golf Setup may
	not start automatically.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a 16-bit (real-mode) driver for your
	CD-ROM drive.
	
	RESOLUTION
	==========
	
	To work around this issue, run Golf Setup manually. To do this, follow these
	steps:
	
	1. Insert the Golf CD-ROM into the CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup.exe
	
	  where <drive> is the drive letter of your CD-ROM drive.
	
	4. Follow the instructions on the screen to install Golf.
	
	MORE INFORMATION
	================
	
	We recommend you contact your hardware manufacturer to inquire about how to
	obtain a 32-bit (protected-mode) driver for your CD-ROM drive.
	
	Additional query words: msgame golf98 cdrom installs
	
	======================================================================
	Keywords          : kbsetup kbtlc kbimu msgame golf98 kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbGolf98 kbGolf99 kbGolfSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
