---
layout: page
title: "Q191362: FPNW Pass-Through Authentication from Trusted Domain May Fail"
permalink: kb/191/Q191362/
---

## Q191362: FPNW Pass-Through Authentication from Trusted Domain May Fail

	Article: Q191362
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A hotfix was built that changes the functionality of how File and Print Services
	for NetWare (FPNW) clients running login scripts that contain IF MEMBER_OF
	statements work when run from FPNW servers participating in a master domain
	model and using pass-through authentication to validate group membership. This
	validation may fail if the primary domain controller (PDC) in the trusted domain
	is down.
	
	Please see the following article in the Microsoft Knowledge Base to understand
	the functionality change of the hotfix referenced in this article that does not
	work properly when the PDC of the Trusted Domain is down:
	
	  ARTICLE-ID: Q150733
	  TITLE : FPNW Groups Not Recognized from Trusted Domain
	
	CAUSE
	=====
	
	The FPNW server queries the trusted domain's domain controller when doing
	pass-through authentication. The API that the FPNW server was calling only
	queried the primary domain controller. The FPNW server now makes an API call
	that queries any domain controller.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: passthrough passthru pass-thru thru
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetware400 kbServicesNetwareSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
