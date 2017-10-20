---
layout: page
title: "Q237264: Encarta Encyclopedia 2000: Setup Stops Responding"
permalink: /kb/237/Q237264/
---

## Q237264: Encarta Encyclopedia 2000: Setup Stops Responding

{% raw %}

	Article: Q237264
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbimu kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Encarta Encyclopedia 2000, Setup may stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- Your computer is using real mode (16-bit) drivers to access your CD-ROM
	  drive, or the CD-ROM drive is operating in MS-DOS Compatibility mode.
	
	- You attempt to install the Microsoft Text-to-Speech Engine or the Microsoft
	  Speech Recognition Engine components during Setup.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, use the following methods in the order in
	which they are presented.
	
	- Contact your hardware manufacturer to inquire about how to obtain a protected
	  mode (32-bit) driver for your CD-ROM drive.
	
	  For information about how to contact your hardware manufacturer, click the
	  appropriate article number below to view the article in the Microsoft
	  Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	- Do not install the Microsoft Text-to-Speech Engine or the Microsoft Speech
	  Recognition Engine during Setup.
	
	Additional query words: multi multi-media media mm ee2k installs voice control hangs tts
	
	======================================================================
	Keywords          : kbhw kbsetup kbimu kbHardware 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
