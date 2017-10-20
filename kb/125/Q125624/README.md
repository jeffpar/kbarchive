---
layout: page
title: "Q125624: INVDOS Crashes AutoCAD Mouse/Tablet Driver"
permalink: /kb/125/Q125624/
---

## Q125624: INVDOS Crashes AutoCAD Mouse/Tablet Driver

{% raw %}

	Article: Q125624
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbhw kbInventory smsinv kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While using Systems Management Server to inventory MS-DOS or Windows (16-bit)
	systems that have AutoDesk's AutoCAD versions 10, 11, or 12 installed, INVDOS
	will disable the CCMOUSE driver. CCMOUSE is used to emulate a mouse while using
	a graphics tablet. The tablet becomes unusable. INVDOS will complete normally
	and not report any errors.
	
	CAUSE
	=====
	
	When INVDOS is run on systems using CCMOUSE, the mouse detection and
	identification tests disable the tablet; the tablet/mouse cursor cannot be used.
	The only recovery is to cold boot (power down) the computer and tablet, and use
	AutoCAD setup to reconfigure the tablet.
	
	NOTE: When INVDOS completes normally, any SMSSAFE.TMP file is deleted. Since this
	file doesn't show that a hardware failure has occurred, the next time INVDOS is
	run the same problem will occur.
	
	WORKAROUND
	==========
	
	Create an SMSSAFE.TMP file that contains a "MouseInfo=CRASHED" line. The next
	time INVDOS is run, it will find the MouseInfo line, and will not run the mouse
	test. It will modify the SMS.INI file, "FailedHardwareCheck" to include the
	mouse test. This will prevent INVDOS from attempting to run the mouse test on
	that client from then on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbhw kbInventory smsinv kbHardware 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
