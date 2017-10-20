---
layout: page
title: "Q123670: Err Msg: ...Install the NWLINK IPX/SPX Compatible Transport..."
permalink: /kb/123/Q123670/
---

## Q123670: Err Msg: ...Install the NWLINK IPX/SPX Compatible Transport...

{% raw %}

	Article: Q123670
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you try to install the Gateway Service for Netware (GSNW) or the Client
	Service for Netware (CSNW) in Windows NT version 3.5, the following error
	message appears, even though the protocol is installed:
	
	  Please install the NWLINK IPX/SPX Compatible Transport before you install the
	  Client/Gateway Services for Netware
	
	CAUSE
	=====
	
	This problem occurs if an OEMNSVx.INF file (where x is a number) exists in the
	%SYSTEMROOT%\SYSTEM32 subdirectory. This file was used for the installation of
	GSNW and CSNW in Windows NT version 3.1.
	
	
	RESOLUTION
	==========
	
	To correct this problem, remove all occurrences of OEMNSVx.INF and install GSNW
	or CSNW again.
	
	Additional query words: prodnt nwc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
