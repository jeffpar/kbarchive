---
layout: page
title: "Q153015: TTS - Release Physical Record Does Not Work with CSNW"
permalink: /kb/153/Q153015/
---

## Q153015: TTS - Release Physical Record Does Not Work with CSNW

	Article: Q153015
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MS-DOS application that uses the Novell Transaction Tracking System (TTS)
	will fail when run on Windows NT using Client Services for NetWare (CSNW). The
	failure will occur when the application makes a Release Physical Record request.
	
	CAUSE
	=====
	
	There is a problem with the way the 16-bit API is implemented.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.5 and 3.51. This
	problem was corrected in Windows NT 4.0.
	
	
	Additional query words: TTS CSNW GSNW NETWARE NOVELL
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
