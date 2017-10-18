---
layout: page
title: "Q256003: SMS: Cannot Remotely Control Mouse with Toshiba Driver"
permalink: kb/256/Q256003/
---

## Q256003: SMS: Cannot Remotely Control Mouse with Toshiba Driver

	Article: Q256003
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,4.0
	Operating System(s): 
	Keyword(s): kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are remotely controlling a client computer that uses the Toshiba mouse
	driver version 2.4.3, the mouse pointer on the client computer moves to a
	different screen location than in the administrator's Remote Control window.
	When you move the mouse, the scale of the mouse pointer movement is also
	incorrect. For example, moving the mouse pointer one inch in the administrator's
	Remote Control window moves the corresponding mouse pointer on the client
	computer by two inches.
	
	CAUSE
	=====
	
	The unit of mouse movement (known as a "mickey") is scaled up by the Toshiba
	mouse driver.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Uninstall the Toshiba mouse driver on the client computer and install a
	  standard Windows NT mouse driver.
	
	- Adjust the mouse movement speed to the slowest setting.
	
	MORE INFORMATION
	================
	
	The Remote Control agent uses the virtual keyboard/mouse driver (Kbstuff.sys) to
	send information to the Windows NT keyboard and mouse drivers during a Remote
	Control session. This driver sends the viewer's mouse and keyboard movement
	directly to the client's keyboard and mouse driver for processing. A unit of
	mouse movement (called a "mickey") is used by all mouse drivers to determine how
	far to move a mouse pointer on the screen. The Systems Management Server (SMS)
	virtual keyboard driver sends the number of "mickeys" that have been generated
	by the viewer's mouse to the client's mouse driver where it is processed. The
	mouse pointer is moved the appropriate distance on the the client's screen.
	
	The "mickeys" that are passed to the Toshiba mouse driver version 2.4.3 by the
	SMS virtual keyboard driver are scaled up by the Toshiba mouse driver to a
	larger number than is being sent. The Toshiba mouse driver multiplies the number
	of "mickeys" passed by the SMS viewer by some scaling factor, resulting in a
	corresponding increase in mouse movement on the target client's screen.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
