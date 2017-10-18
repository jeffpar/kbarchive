---
layout: page
title: "Q234000: Error 649 Dialing Server with Service Pack 4 or Later Installed"
permalink: kb/234/Q234000/
---

## Q234000: Error 649 Dialing Server with Service Pack 4 or Later Installed

	Article: Q234000
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a user account named System to dial a computer running Windows NT
	4.0 Server Service Pack 4 or later, you receive one of the following error
	messages.
	
	Dialing from a computer running Microsoft Windows 95 or Microsoft Windows 98:
	
	  Error 649: You do not have dial-in permission. Change the permissions on the
	  computer you are dialing in to, or contact your network administrator.
	
	Dialing from a computer running Microsoft Windows NT Workstation or Windows NT
	Server:
	
	  Error 649: The account does not have remote access permission.
	
	
	RESOLUTION
	==========
	
	To prevent this behavior from occurring, use any of the following methods:
	
	- Rename the user account named System to something else.
	
	- Do not upgrade the server to Service Pack 4 or later.
	
	Additional query words: dom ras
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400xsearch kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.0 SP4,4.0 SP5,4.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
