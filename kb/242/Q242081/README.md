---
layout: page
title: "Q242081: NT 4.0 SP4 causes computer with Adaptec AAA-13x adapter to hang."
permalink: /kb/242/Q242081/
---

## Q242081: NT 4.0 SP4 causes computer with Adaptec AAA-13x adapter to hang.

	Article: Q242081
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
	
	After you apply Microsoft Windows NT 4.0 Service Pack 4 to a computer with an
	Adaptec AAA-13x RAID host adapter, the computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur when you use the Cda1000.sys driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the AAA Family Manager Set version
	2.2 for the AAA-131 Family, available from the Adaptec Web site at:
	
	  http://www.adaptec.com/support/overview/aaa130.html
	
	The AAA Family Manager Set version 2.2 for the AAA-131 Family contains the
	updated Cda1000.sys driver.
	
	MORE INFORMATION
	================
	
	The file has the following attributes:
	
	  File: Aaafms22.exe
	  Date: 08/27/98
	  Size: 338 KB (346,616 bytes)
	  Description: AAA Family Manager Set version 2.2 required for Windows NT 4.0
	  Service Pack 4
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nt 4.0 raid crash lock
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
