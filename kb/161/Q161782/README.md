---
layout: page
title: "Q161782: SMS: Stop 0xC000021a Error with SMS Remote Agent Installed"
permalink: /kb/161/Q161782/
---

## Q161782: SMS: Stop 0xC000021a Error with SMS Remote Agent Installed

{% raw %}

	Article: Q161782
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,3.5,3.5 SP1,3.5 SP2,3.5 SP3,3.51,3.51 SP1,3.51 SP2,3.51 SP3,3.51 SP4,3.51 SP5
	Operating System(s): 
	Keyword(s): kbdisplay kbnetwork kbtshoot smsremtshoot smsgeneral kbArtTypeINF kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Systems Management Server Remote Agent, a blue screen with
	a stop error code of 0xC000021a (or E11E1968, C0000005, 77FA4395, or 0021F10C)
	occurs on a computer running Windows NT Server 3.5x or Windows NT Workstation
	3.5x at startup. The service does not need to be started for the error to
	occur.
	
	
	CAUSE
	=====
	
	This error may occur if there is a conflict with the video card or chipset and
	the Systems Management Server Accelerated Screen Transfer (Idisnt.dll). When
	remotely controlling client computers running Windows NT Server or Windows NT
	Workstation version 3.51, you can increase the performance of the display in the
	Quick Windows Viewer by setting this client option in the Site Properties dialog
	box. When this option is enabled, data sent from the client to the viewer
	contains only those lines of pixels that have changed (rather than all pixels),
	and the data is compressed.
	
	WORKAROUND
	==========
	
	Remove the affected video card driver from the "Accelerate with These Video
	Drivers" list in the Remote Troubleshooting Options (found in Clients under Site
	Properties).
	
	MORE INFORMATION
	================
	
	To determine the display driver the client is using, open the Display Control
	Panel, click Change Display Type, and look at the driver listed under Driver
	Information.
	
	For more information on how the Systems Management Server Accelerated Screen
	Transfer works, please refer to the Systems Management Server 1.2 documentation.
	
	Additional query words: prodsms C21a blue screen NT351
	
	======================================================================
	Keywords          : kbdisplay kbnetwork kbtshoot smsremtshoot smsgeneral kbArtTypeINF kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2,3.5,3.5 SP1,3.5 SP2,3.5 SP3,3.51,3.51 SP1,3.51 SP2,3.51 SP3,3.51 SP4,3.51 SP5
	
	=============================================================================
	

{% endraw %}
