---
layout: page
title: "Q235154: SMS: 16-Bit Remote Control Components Remain After WIN Upgrade"
permalink: /kb/235/Q235154/
---

## Q235154: SMS: 16-Bit Remote Control Components Remain After WIN Upgrade

{% raw %}

	Article: Q235154
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbRemote kbsms200 kbsms200bug kbHelpDesk kbUpgrade kbRemoteP
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Microsoft Windows 3.11 to Microsoft Windows 95 or Windows
	98, the 16-bit remote control client components for Microsoft Systems Management
	Server (SMS) 2.0 remain on the client.
	
	CAUSE
	=====
	
	SMS 2.0 installs Windows 3.11 as a 16-bit system, but Windows 95 and Windows 98
	are installed as 32-bit systems. Both versions of the remote control components
	can not co-exist on the same computer.
	
	WORKAROUND
	==========
	
	Before upgrading Windows 3.11 to Windows 95 or Windows 98, manually remove the
	16-bit client components by using Smsman16, which can be found on the
	SMSlogon\x86.bin\0000409\ share of any SMS 2.0 logon point.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbRemote kbsms200 kbsms200bug kbHelpDesk kbUpgrade kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
