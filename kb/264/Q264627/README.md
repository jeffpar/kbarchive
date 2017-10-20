---
layout: page
title: "Q264627: SMS: Video Acceleration and NetMeeting Cause Error Message"
permalink: /kb/264/Q264627/
---

## Q264627: SMS: Video Acceleration and NetMeeting Cause Error Message

{% raw %}

	Article: Q264627
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsms120bug kbsms200preSP3 kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT-based Systems Management Server (SMS) client computers that
	use the SMS Video Acceleration driver to improve Remote Control performance may
	experience a Kernel-mode "Stop 1e" exception in the video driver. The error
	message may be similar to:
	
	  STOP: 0x0000001e (0xc0000005, 0xfcbd2f36, 0x00000000, 0x0000008d)
	  KMODE Exception Not Handled in ATI.DLL
	
	This exception occurs only on computers on which the Microsoft NetMeeting display
	driver is installed. This driver is installed when the sharing features in
	NetMeeting are enabled.
	
	This exception occurs in response to any of the following actions:
	
	- Attempting to start NetMeeting.
	
	- Attempting to use an OpenGL-based screen saver.
	
	- Attempting to use Remote Control on the computer.
	
	- If a program directly or indirectly queries the DirectDraw capabilities of
	  the video driver.
	
	
	CAUSE
	=====
	
	The exception is caused by an improper driver interaction among the SMS Video
	Acceleration driver, the NetMeeting display driver, and the video adapter driver
	that is installed on the computer. During this interaction, the SMS Video
	Acceleration driver may send incorrect data to the video adapter driver. The
	hotfix that is described in this article includes a new SMS Video Acceleration
	driver (Idisntkm.dll) that corrects this issue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, use any of these methods:
	
	- Disable video acceleration.
	
	- Uninstall NetMeeting.
	
	- Switch to the VGA or SVGA video adapter driver if either is compatible.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	
	Additional query words: prodsms Idisntkm dll
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsms120bug kbsms200preSP3 kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
