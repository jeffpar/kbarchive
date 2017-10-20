---
layout: page
title: "Q191359: SMS: Win95 OpenGL Screen Saver May Cause Computer to Stop"
permalink: /kb/191/Q191359/
---

## Q191359: SMS: Win95 OpenGL Screen Saver May Cause Computer to Stop

{% raw %}

	Article: Q191359
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers that are running Microsoft Windows 95 may lose their ability to safely
	shut down after the OpenGL or Mystify Your Mind screen saver is started and
	stopped several times. This may occur on computers that have the ATI 64 and ATI
	Rage Series video adapters installed.
	
	CAUSE
	=====
	
	After the Open GL screen saver starts and stops several times, the Microsoft
	Windows 95 OEM Service Release 2 (OSR2) Quick Window Viewer becomes disabled and
	stops responding (hangs). This may cause the computer to lose its ability to
	safely shut down remotely or it may cause the system to stop completely.
	
	This occurs on computers that have Microsoft Systems Management Server version
	1.2 client software installed.
	
	To confirm whether your computer has this problem, perform the following steps:
	
	1. Install Systems Management Server version 1.2 with SP3 (U.S., German, or
	  Japanese edition).
	
	2. Open the Quick Viewer window.
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Display icon and click the Screen Saver tab.
	
	  c. Change the OpenGL or Mystify Your Mind screen saver settings several times
	     by clicking the Settings and/or Preview buttons and modifying the values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack.
	
	For additional information on obtaining the service pack, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q158864 How to Obtain Systems Management Server 1.2 Service Pack 4
	
	RESOLUTION
	==========
	
	After applying Microsoft Systems Management Server version 1.2 Service Pack 4,
	modify the Sms.ini file as follows:
	
	1. In the [sight] section, add the line "SyncSends=1" (without the quotation
	  marks).
	
	2. Save the file and restart the computer.
	
	Additional query words: prodsms SP SP4 hang hangs reboot
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
