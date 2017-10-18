---
layout: page
title: "Q168907: SMS: Using the &quot;Gold-Key&quot; May Cause a Blue Screen STOP 1E"
permalink: kb/168/Q168907/
---

## Q168907: SMS: Using the &quot;Gold-Key&quot; May Cause a Blue Screen STOP 1E

	Article: Q168907
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP1,1.2 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP1, 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When remote controlling a Windows NT client computer running Systems Management
	Server 1.2 Service Pack 1 or 2, you may receive a STOP 1E Blue Screen error, or
	the system on the client may stop responding when you attempt to run the
	"gold-key" from the Quick Windows Viewer.
	
	CAUSE
	=====
	
	This problem appears to be very hardware-dependent, and only occurs if a Windows
	NT client computer is not restarted after the Remote Control Agent is installed.
	
	WORKAROUND
	==========
	
	The problem does not occur after the Windows NT client computer is restarted.
	The Client Configuration Manager in Systems Management Server 1.2 Service Pack 2
	now requests a restart after the Remote Control Agent is installed. To gain full
	functionality, client computers running Windows NT should be restarted after the
	Remote Control Agent is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.2 Service Pack 1 and 2. This problem was corrected in the latest
	Microsoft Systems Management Server 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the hotfix installed, the "gold-key" is not functional on Windows NT
	clients that have not been restarted since the Remote Control Agent was
	installed.
	
	Additional query words: prodsms kbdriver hung dead frozen reboot rebooted CCM sp sp1 sp2
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120SP2 kbSMS120SP1
	Version           : :1.2 SP1,1.2 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
