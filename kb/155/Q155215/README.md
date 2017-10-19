---
layout: page
title: "Q155215: External Library Procedure Error When Installing SP4"
permalink: /kb/155/Q155215/
---

## Q155215: External Library Procedure Error When Installing SP4

	Article: Q155215
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Update.exe in Windows NT 3.51 Service Pack 4 on the SYS volume of a
	FPNW server you might receive the following error:
	
	  External library procedure IsFileOpenedExclusive reported the following
	  error: failed to generate a temporary file.
	
	RESOLUTION
	==========
	
	Service Pack 4 is trying to update files in the PUBLIC and LOGIN directories for
	FPNW. The permissions on these directories must be set to EVERYONE: Full Control
	for the Update program to apply the new files.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q147642
	  TITLE : NetWare Files Overwritten When Updating To Windows NT 3.51 SP4
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 4. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
