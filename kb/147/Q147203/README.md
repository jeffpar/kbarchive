---
layout: page
title: "Q147203: SMTP TCP/IP Port Hangs in Windows NT 3.51"
permalink: kb/147/Q147203/
---

## Q147203: SMTP TCP/IP Port Hangs in Windows NT 3.51

	Article: Q147203
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows NT 3.51, an SMTP TCP/IP socket port stops responding (hangs).
	
	CAUSE
	=====
	
	This problem occurs when a client computer sends a request to open the socket
	port, but the request contains information of an invalid endpoint to be opened.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To work around this problem, shut down and restart Windows NT.
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
