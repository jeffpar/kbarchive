---
layout: page
title: "Q168772: SMSINST: Uninstall Does Not Restore Autoexec.bat or Config.sys"
permalink: /kb/168/Q168772/
---

## Q168772: SMSINST: Uninstall Does Not Restore Autoexec.bat or Config.sys

{% raw %}

	Article: Q168772
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsinst
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Uninstall.exe does not remove lines added by the Systems Management Server
	Installer program in the Autoexec.bat and Config.sys files.
	
	CAUSE
	=====
	
	The Autoexec.bat and Config.sys files are shared by all applications. The
	Systems Management Server Installer does not modify these files during
	uninstallation because doing so may adversely impact other applications
	installed after the original modification.
	
	
	WORKAROUND
	----------
	
	To work around this problem, use the Rollback feature, which will replace the
	original versions of the Autoexec.bat and Config.sys files.
	
	Additional query words: prodsms SMS
	
	======================================================================
	Keywords          : kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : :1.0,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
