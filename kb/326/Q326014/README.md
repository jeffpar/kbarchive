---
layout: page
title: "Q326014: XWEB: Error Message: Self Registration of Cdo.dll Failed"
permalink: kb/326/Q326014/
---

## Q326014: XWEB: Error Message: Self Registration of Cdo.dll Failed

	Article: Q326014
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Outlook Web Access (OWA) component of Exchange 5.5 on a
	Windows 2000-based server running Terminal Server, you may receive the following
	error message:
	
	  Self registration of cdo.dll failed
	
	RESOLUTION
	==========
	
	To resolve this issue, remove Terminal Services, install OWA, and then reinstall
	Terminal Services.
	
	NOTE: You may have to reinstall Terminal Services programs.
	
	1. Remove Terminal Services. To remove Terminal Services, follow these steps:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Add/Remove Programs.
	
	  b. Click Add/Remove Windows Components.
	
	  c. After the Windows Components Wizard starts, click to clear the Terminal
	     Services check box, and then click Next.
	
	  d. Restart the computer when you are prompted to do so.
	
	2. Install Outlook Web Access.
	
	3. Apply the latest Exchange 5.5 service pack.
	
	4. Reinstall Terminal Services.
	
	  For additional information about how to install Terminal Services, click the
	  article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q306626 HOW TO: Install Terminal Services in Application Server Mode
	
	  Q306624 HOW TO: Install Terminal Services in Remote Administration Mode
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
