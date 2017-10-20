---
layout: page
title: "Q299521: McAfee NetShield Service Conflicts with Shared Folder Service"
permalink: /kb/299/Q299521/
---

## Q299521: McAfee NetShield Service Conflicts with Shared Folder Service

{% raw %}

	Article: Q299521
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SNA Server Shared Folder Gateway service and the Network Associates
	McShield service are set to automatically start after a server has been
	restarted, a conflict arises. The Shared Folder Gateway service and Network
	Associates McShield start without errors; however, the following error occurs
	when accessing drives that are mapped to an AS/400 by the Shared Folder Gateway
	service:
	
	  the drive is not accessible, the parameter is not correct
	
	This problem occurs when you install Network Associates McAfee NetShield for
	Windows NT and Windows 2000 version 4.5 on a Windows NT 4.0 system that has the
	SNA Server 4.0 Shared Folders Gateway service installed.
	
	WORKAROUND
	==========
	
	To work around this problem, set the Network Associates McShield service to
	start manually by using the Control Panel Services applet. You can then manually
	start the Network Associates McShield service to enable virus scanning.
	
	MORE INFORMATION
	================
	
	Network Associates has released a formal issue on May 17, 2001 that states,
	"NetShield for Windows NT 4.5 is not supported in Microsoft Windows NT 4.0 SNA
	Server."
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	

{% endraw %}
