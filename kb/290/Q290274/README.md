---
layout: page
title: "Q290274: SMS: Window Drag Operation Slow After You Enable Acceleration"
permalink: /kb/290/Q290274/
---

## Q290274: SMS: Window Drag Operation Slow After You Enable Acceleration

{% raw %}

	Article: Q290274
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbRemote kbsms200 kbHelpDesk kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server 2.0 includes functionality that you can use to enable
	remote control acceleration for video drivers that are not listed on the default
	list of drivers that are known to accelerate. When you enable acceleration for a
	Microsoft Windows NT 4.0 computer that uses a S3Trio3d video driver, when you
	drag or move a window on the desktop, the action may be very slow. If you remove
	the Idisntkm value from the registry for that video driver, you can drag the
	window at the usual speed; however, acceleration is lost.
	
	CAUSE
	=====
	
	This issue can occur if you are using an S3 video driver version 3.26.35 or
	3.26.36.
	
	WORKAROUND
	==========
	
	To work around this issue, obtain the latest video driver for the S3Trio3d video
	card. If you experience this issue if you are using a different video card,
	contact the manufacturer of the hardware or video card to obtain the latest
	driver. If you still experience this issue after you install the updated driver,
	you may need to remove this video driver from the list of drivers in the SMS
	Administrator console.
	
	MORE INFORMATION
	================
	
	For additional information about acceleration for third-party drivers, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q248989 SMS: Support for Third-Party Video Drivers with Remote Control Video
	  Acceleration
	
	For additional information about how to enable video acceleration in the SMS
	Administrator console, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q200430 SMS: Explanations of Remote Control Screen Acceleration
	
	Additional query words: prodsms idisntkm accelerate performance
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbRemote kbsms200 kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
