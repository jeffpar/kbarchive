---
layout: page
title: "Q235204: SMS: %sys% Variable Differs for 16-bit and 32-bit Executables"
permalink: /kb/235/Q235204/
---

## Q235204: SMS: %sys% Variable Differs for 16-bit and 32-bit Executables

{% raw %}

	Article: Q235204
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbsms200bug kbsmsInst kbSoftwareDist
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a Microsoft Systems Management Server (SMS) Installer script on
	a Microsoft Windows NT 4.0 or Microsoft Windows 2000-based computer, the %sys%
	variable may report different values when run on Win16-based systems than when
	run on Win32-based systems.
	
	For example, when you select "32-bit Windows (32-bit EXE)" as the destination
	platform under the Advanced Configuration settings, the %sys% variable is set to
	%systemroot%\system32. However, when the same script is compiled with the
	destination platform set to "16/32-bit Windows (16-bit EXE)", the variable is
	set to %systemroot%\system.
	
	STATUS
	======
	
	This behavior is by design and is the default behavior of the
	GetSystemDirectory() function.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbsms200bug kbsmsInst kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
