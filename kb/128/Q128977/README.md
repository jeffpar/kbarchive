---
layout: page
title: "Q128977: RASPHONE Hangs After Making PPP Connection To Server"
permalink: /kb/128/Q128977/
---

## Q128977: RASPHONE Hangs After Making PPP Connection To Server

	Article: Q128977
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 3.5 Remote Access application (RASPHONE.EXE) hangs after
	connecting to a service provider using PPP. You are able to exit RASPHONE by
	choosing End Task from the Task List, but you can continue to use RASPHONE until
	you shutdown and restart Windows NT. Additionally, the modem remains connected
	to the remote PPP server after you have forced RASPHONE application to end. You
	are unable to use the modem with either RASPHONE or another communications
	application until you shutdown and restart Windows NT.
	
	CAUSE
	=====
	
	This problem occurs if the remote PPP server sends an LCP echo request packet
	with an illegal length. RASPPPEN.DLL performs no length checking on an echo
	request.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
