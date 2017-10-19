---
layout: page
title: "Q225333: FIX: Clussvc.exe Hits 100% CPU Utilization Doing Group Failover"
permalink: /kb/225/Q225333/
---

## Q225333: FIX: Clussvc.exe Hits 100% CPU Utilization Doing Group Failover

	Article: Q225333
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbClustServSearch kbClustServ100bug kbClustServ100fix kbOSWinNT400 kbWinNT4sp6fix kbGrp
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server, included with:
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When failing over certain cluster resource groups, Clussvc.exe may consume 100
	percent of the CPU time for an extended period of time, which starves the
	resource monitors of CPU time. As a result, resources in the group may not
	failover properly. This bug is present up through Windows NT 4.0 Service Pack 5
	(SP5).
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: hotfix hot fix qfe quick engineering patch bug cluster server mscs
	
	======================================================================
	Keywords          : kbClustServSearch kbClustServ100bug kbClustServ100fix kbOSWinNT400 kbWinNT4sp6fix kbGrpDSPlatform 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
