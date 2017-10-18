---
layout: page
title: "Q134330: Logon Script Window Switches to Full Screen Under Windows 95"
permalink: kb/134/Q134330/
---

## Q134330: Logon Script Window Switches to Full Screen Under Windows 95

	Article: Q134330
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a computer running Windows 95, when the Inventory Agent is started either
	from a logon script or by manually running RUNSMS.BAT, the video mode may change
	from a window to a full screen. The user then must change this back to a window
	after the script has completed.
	
	CAUSE
	=====
	
	This problem occurs on computers that have older versions of the Compaq VGA
	BIOS. Newer computers do not exhibit this symptom.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
