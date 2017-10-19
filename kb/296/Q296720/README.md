---
layout: page
title: "Q296720: IIS Faults on Startup if Password Exceeds 14 Characters"
permalink: /kb/296/Q296720/
---

## Q296720: IIS Faults on Startup if Password Exceeds 14 Characters

	Article: Q296720
	Product(s): Internet Information Server
	Version(s): 2000,2000 SP1,5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set an IWAM_ account password to one that exceeds 14 characters in
	length, IISAdmin may fault on startup.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000. This
	problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch kbWin2000AdvServSP1 kbWin2000ProSP1 kbwin2000ServSP1
	Version           : :2000,2000 SP1,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
