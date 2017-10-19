---
layout: page
title: "Q134957: Systems Management Server 1.1 Requires WinNT 3.5 Service Pack 2"
permalink: /kb/134/Q134957/
---

## Q134957: Systems Management Server 1.1 Requires WinNT 3.5 Service Pack 2

	Article: Q134957
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Systems Management Server fails to install as a Central, Primary or Secondary
	Site and as Logon or Helper Servers on Windows NT 3.1 or Windows NT 3.5 (without
	SP2 or greater).
	
	CAUSE
	=====
	
	Systems Management Server version 1.0 and 1.1 can only be installed on a server
	running Windows NT 3.5 Service Pack 2 (build 807) or higher.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here as it becomes available.
	
	MORE INFORMATION
	================
	
	When adding a logon or distribution server (that is not build 807 or greater)
	SMS will fail to set up the directories or install the SMS services on the
	server but SMS Administrator will show that the logon server has been setup and
	will not log any errors.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
