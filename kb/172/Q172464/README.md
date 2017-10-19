---
layout: page
title: "Q172464: SMS: PowerPoint Loses Cursor When PCMWIN16 Is Loaded"
permalink: /kb/172/Q172464/
---

## Q172464: SMS: PowerPoint Loses Cursor When PCMWIN16 Is Loaded

	Article: Q172464
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Package Command Manager (Pcmwin16.exe) is running and a new or existing
	PowerPoint presentation is being edited, the mouse cursor may disappear from the
	PowerPoint window but still show when moved to the taskbar, desktop, or another
	window. Although the mouse is invisible, it may still work (and reappear when
	you select something in the PowerPoint window). However, in most cases, you must
	shut down PowerPoint to get the mouse to reappear.
	
	
	CAUSE
	=====
	
	The Package Command Manager Polling interval interferes with the ShowCursor
	routines within PowerPoint.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Systems Management Server
	versions 1.0, 1.1, and 1.2. This issue was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodsms PPT PP task bar object embedded
	
	======================================================================
	Keywords          : kbinterop kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
