---
layout: page
title: "Q156411: ENDIF Does Not Work in NetWare Login Script with CSNW/GSNW"
permalink: kb/156/Q156411/
---

## Q156411: ENDIF Does Not Work in NetWare Login Script with CSNW/GSNW

	Article: Q156411
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In NetWare login scripts that have an ENDIF command, Client Services for NetWare
	(CSNW) or Gateway Services for NetWare (GSNW) will report the following error
	when executing the login script:
	
	  Script error: Could not interpret line
	  The original line was :
	  Endif.
	
	ENDIF will work when executed from a Novell NetWare client.
	
	Login script example:
	
	     IF MEMBER OF "SUPERVISORS" THEN
	         WRITE "blah....."
	     ENDIF
	
	RESOLUTION
	==========
	
	CSNW and GSNW will work properly with the END command instead of the ENDIF
	command.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
