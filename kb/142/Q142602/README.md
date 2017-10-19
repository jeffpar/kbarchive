---
layout: page
title: "Q142602: NBIPX: FPNW server &quot;NPRINT&quot; Returns Error If Not Logged On"
permalink: /kb/142/Q142602/
---

## Q142602: NBIPX: FPNW server &quot;NPRINT&quot; Returns Error If Not Logged On

	Article: Q142602
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you have converted and moved all your NetWare files and utilities to your
	File and Print Services for NetWare (FPNW) server, Nprint does not work from a
	DOS NetWare client. When you use Nprint to print a file, the following message
	appears:
	
	  Connection information on the destination server could not be obtained.
	
	NOTE: If you log on to the FPNW server from a DOS NetWare client (ODI), the
	NPRINT command works, but the output is incorrect.
	
	WORKAROUND
	==========
	
	This issue can be worked around by capturing the printer prior to printing. VLM
	clients are not affected by this problem.
	
	RESOLUTION
	==========
	
	This is by design.
	
	Additional query words: prodnt novell real mode netx
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
