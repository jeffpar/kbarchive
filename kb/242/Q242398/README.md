---
layout: page
title: "Q242398: Cluster Loses Track of Custom Resource DLL Registration"
permalink: kb/242/Q242398/
---

## Q242398: Cluster Loses Track of Custom Resource DLL Registration

	Article: Q242398
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a resource monitor fails, and that resource monitor controls a resource that
	uses a dynamic-link library (DLL) resource other than Clusres.dll, the Cluster
	service may lose track of the resource DLL. When this occurs, the resource may
	not behave properly. Also, the CluAdmin tool displays a null resource type for
	the resource.
	
	RESOLUTION
	==========
	
	Windows NT Server, Cluster Server, or Workstation 4.0
	-----------------------------------------------------
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Cluster Server.
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	
	Additional query words: mcsc
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbClustServSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
