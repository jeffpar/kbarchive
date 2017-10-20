---
layout: page
title: "Q176950: Age of Empires: Setup Stops Responding"
permalink: /kb/176/Q176950/
---

## Q176950: Age of Empires: Setup Stops Responding

{% raw %}

	Article: Q176950
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbhw aoe kbHardware
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for Age of Empires, the computer may stop
	responding (hang) when the installation is from 3 to 13 percent complete.
	
	RESOLUTION
	==========
	
	Reducing the caching on the CD-ROM drive may resolve this issue.
	
	To reduce CD-ROM data caching, you must determine whether you are using real-mode
	or protected-mode drivers to access the CD-ROM drive. To determine this, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	If a CD-ROM device is listed, you are using protected-mode drivers. Follow the
	steps in the "Reducing Protected-Mode CD-ROM Drive Caching" section later in
	this article. If a CD-ROM device is not listed, follow the steps in the
	"Reducing Real-Mode CD-ROM Drive Caching" section.
	
	Reducing Real-Mode CD-ROM Drive Caching
	---------------------------------------
	
	To reduce CD-ROM data caching using real-mode drivers, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click File System.
	
	4. Click the CD-ROM tab.
	
	5. In the Optimize Access Pattern For box, click No Read-Ahead.
	
	6. Click OK, and then click Close.
	
	7. If you are prompted to restart the computer, click Yes.
	
	Reducing Protected-Mode CD-ROM Drive Caching
	--------------------------------------------
	
	To reduce CD-ROM data caching using protected-mode drivers, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click File System.
	
	4. Click the CD-ROM tab.
	
	5. In the Optimize Access Pattern For box, click No Read-Ahead.
	
	  NOTE: Selecting a faster speed than is appropriate for your CD-ROM drive does
	  not necessarily increase performance.
	
	6. Make sure that the Supplemental Cache Size slider is set all the way to the
	  left (the Small setting), and then click OK.
	
	7. Click OK, and then click Close.
	
	8. If you are prompted to restart the computer, click Yes.
	
	
	Additional query words: aoe agesofempire ageogempires ageofempire empire compact disc crash lock percentage install set up
	
	======================================================================
	Keywords          : kbdisplay kbenv kbhw aoe kbHardware 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
