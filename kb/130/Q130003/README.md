---
layout: page
title: "Q130003: Windows NT Redirector Does Not Handle Invalid TID Properly"
permalink: /kb/130/Q130003/
---

## Q130003: Windows NT Redirector Does Not Handle Invalid TID Properly

{% raw %}

	Article: Q130003
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Excessive network traffic is generated after your losing contact with shared
	resources on computers running Windows NT Workstation. For example, client A
	shares a CD-ROM drive and client B connects to the share. Client A then runs
	File Manager and removes the share without notifying client B or logging off.
	Client B is still connected and performing work. As a result, a series of
	directly addressable frames between the two machines try to figure out what
	happened. Approximately 14 minutes later, Client B receives the message that the
	network drive can no longer be found. No error message is recorded in the event
	log.
	
	CAUSE
	=====
	
	The problem appears to be caused by the Windows NT redirector, which is not
	handling invalid Tree ID messages properly in some circumstances. This problem
	usually occurs when you use File Manager, but can occur with other 32-bit
	Windows-based applications, depending on how they are calling the WNet APIs.
	This problem does not seem to occur when you use a command line utility.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.5 2.2 2.1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
