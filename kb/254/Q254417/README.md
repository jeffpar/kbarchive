---
layout: page
title: "Q254417: MapPoint 2001: CD-ROM Drive Access Features Perform Slowly"
permalink: /kb/254/Q254417/
---

## Q254417: MapPoint 2001: CD-ROM Drive Access Features Perform Slowly

{% raw %}

	Article: Q254417
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbimu kbHardwarekbfaq
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the programs listed at the beginning of this article,
	features that require access to your CD-ROM drive may perform slowly.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a laptop computer, and your CD-ROM
	drive is configured to switch to sleep mode after a period of disuse.
	
	If you wake your CD-ROM drive from sleep mode while you run one of the programs
	listed at the beginning of this article (both of which require access to the
	CD-ROM drive), the program may run more slowly than usual as the CD-ROM drive
	wakes from sleep mode.
	
	RESOLUTION
	==========
	
	To work around this issue, use the appropriate method for your laptop computer.
	
	IBM ThinkPad Laptop Computers
	-----------------------------
	
	To work around this issue on an IBM Thinkpad laptop computer, increase the length
	of time that is needed for your CD-ROM drive to switch to sleep mode:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following line, and then press ENTER:
	
	  C:\ThinkPad\Ps2.exe CDT 1
	
	3. Type "exit" (without the quotation marks), and then press ENTER.
	
	4. Start and run Microsoft MapPoint 2001 or Microsoft Streets and Trips 2001.
	
	Other Laptop Computers
	----------------------
	
	To resolve this issue on other laptop computers, reinstall the program using the
	Full Installation option, so that access to the CD-ROM drive is not needed:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft MapPoint 2001 or Microsoft
	  Streets and Trips 2001.
	
	4. Click Add/Remove, and then click Next.
	
	5. Click Change, and then click Next.
	
	6. Click Full Installation, and then click Next.
	
	7. Follow the instructions on the screen to install the program.
	
	Additional query words: mp2001 st2001 expedia performs poorly
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbimu kbHardware kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
