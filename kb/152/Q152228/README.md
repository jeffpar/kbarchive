---
layout: page
title: "Q152228: Office95 Toolbar Auto Hide Inoperative During SMS Remote Control"
permalink: /kb/152/Q152228/
---

## Q152228: Office95 Toolbar Auto Hide Inoperative During SMS Remote Control

{% raw %}

	Article: Q152228
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot smsgeneral kbArtTypeINF kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you enable the Auto Hide feature in the Office 95 Toolbar in a Windows client
	computer and perform remote control with the Systems Management Server, the Auto
	Hide feature is disabled.
	
	NOTE: This problem does not occur on a Windows 95 client computer.
	
	CAUSE
	=====
	
	The SMS Remote Control Agent (Wuser.exe) when loaded under Windows disables Auto
	Hide in the Office 95 Toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms Auto hide sms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot smsgeneral kbArtTypeINF kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
