---
layout: page
title: "Q192452: SMS: Installer Doesn't Display Custom Dialog Text on Check Box"
permalink: /kb/192/Q192452/
---

## Q192452: SMS: Installer Doesn't Display Custom Dialog Text on Check Box

{% raw %}

	Article: Q192452
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 16-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Installer does not display custom dialog text on check
	boxes or buttons.
	
	WORKAROUND
	==========
	
	Declare the destination variable that the custom dialog box is writing to using
	the 'set variable' action. The variable can be set to null. This will display
	the custom dialog text when the installer package is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer 1.0.
	
	
	Additional query words: prodsms push buttons
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
