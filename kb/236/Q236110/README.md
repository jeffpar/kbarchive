---
layout: page
title: "Q236110: OLE DB for DB2 Provider Hangs on Non-Trusted Windows 95/98"
permalink: /kb/236/Q236110/
---

## Q236110: OLE DB for DB2 Provider Hangs on Non-Trusted Windows 95/98

{% raw %}

	Article: Q236110
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows 95 or Windows 98 client isn't participating in the same Windows
	NT domain (or trusted domain) as the SNA Server, and you choose the Test
	Connection option through the Microsoft OLE DB Provider for DB2, the Data Link
	Properties dialog box may stop responding (hang).
	
	To Reproduce the Problem
	------------------------
	
	1. Install the SNA Server 4.0 Service Pack 2 (SP2) Windows 95 or Windows 98
	  client on a Windows 95 or Windows 98 computer.
	
	2. In the Windows 95 or Windows 98 Control Panel, double-click Network, click
	  the Configuration tab, click "Client for Microsoft Network", and click
	  Properties.
	
	3. Click to clear the "Log on to Windows NT Domain" check box, which causes
	  Windows 95 or Windows 98 to not participate in any domain, and restart the
	  computer.
	
	4. Create a new Data Link to connect to DB2.
	
	5. Click Test Connection. This causes the SNA Windows 95 or Windows 98 SnaBase
	  logon dialog box to appear (if SnaBase is not already running), prompting you
	  to enter your Windows NT user ID, password, and domain. Enter the logon
	  information, and click OK.
	
	6. The Data Link Property dialog box hangs.
	
	CAUSE
	=====
	
	The SNA Server 4.0 SP2 version of the OLE DB Provider for DB2 supports
	connectivity over APPC (over SNA LU6.2) or TCP/IP, while previous versions only
	supported APPC. As part of this change, Db2wappc.dll (the APPC transport for the
	OLE DB Provider for DB2) was modified so that the APPC interface (Wappc32.dll)
	is loaded and initialized within its DLL_PROCESS_ATTACH entry point, which
	causes a deadlock under certain timing conditions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Change the Windows 95 or Windows 98 networking configuration so that the
	computer is participating in the same Windows NT domain as the SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0 SP2.
	This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
