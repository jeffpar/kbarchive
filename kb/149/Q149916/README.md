---
layout: page
title: "Q149916: NWConv Does Not Convert Volumes Greater than 4 GB"
permalink: kb/149/Q149916/
---

## Q149916: NWConv Does Not Convert Volumes Greater than 4 GB

	Article: Q149916
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbtoolkbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During file conversion, the Migration Tool for NetWare (Nwconv.exe) enumerates
	the files to be moved. When it reaches four gigabytes (GB), the conversion
	utility starts over again. It does not finish the conversion process.
	
	RESOLUTION
	==========
	
	To work around this problem, select groups of files in smaller quantities to be
	migrated at a time. The amount needs to be less than four GB. You can perform as
	many migrations as needed to move all the data from the NetWare server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0.
	
	Additional query words: migrate nwconv convert
	
	======================================================================
	Keywords          : kbtool kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
