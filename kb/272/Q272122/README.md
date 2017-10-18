---
layout: page
title: "Q272122: Error Message: &quot;Username not found&quot; when trying to logon on fro"
permalink: kb/272/Q272122/
---

## Q272122: Error Message: &quot;Username not found&quot; when trying to logon on fro

	Article: Q272122
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Novell NetWare Directory Services (NDS) is installed on the primary domain
	controller (PDC) and the backup domain controller (BDC), the BDC may be unable
	to authenticate users. The following error message may appear when users attempt
	to log on:
	
	  Username not found
	
	CAUSE
	=====
	
	This behavior can occur because of a problem with Novell NDS.
	
	RESOLUTION
	==========
	
	To correct this problem, contact Novell to obtain the following patch:
	
	NDSNTI2.EXE; Updates for NDS for NT v1.0
	
	MORE INFORMATION
	================
	
	For information about how to contact Novell, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
