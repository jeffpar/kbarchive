---
layout: page
title: "Q159452: SNA Shared Folders Gateway Shows Large Free Disk Space"
permalink: /kb/159/Q159452/
---

## Q159452: SNA Shared Folders Gateway Shows Large Free Disk Space

	Article: Q159452
	Product(s): Microsoft SNA Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are connected to an AS/400 shared folders drive using the SNA Server
	Shared Folders Gateway, a DIR command may show 2 terabytes of free disk space.
	For example:
	
	   E:\>dir
	   Volume in drive E is RAINIER
	   Volume Serial Number is 1234-5678
	
	   Directory of E:
	   08/16/96  11:57a             5,765,232 MSDEBUG.DDM
	                 1 File(s)      5,765,232 bytes
	                         2,199,019,441,152 bytes free
	
	CAUSE
	=====
	
	The Shared Folders Gateway is configured to run under a specific AS/400 user
	account. If this AS/400 user account has no disk space limitations on the
	AS/400, then the AS/400 returns the maximum disk size that it supports, which is
	2 Terabytes (TB). In order for a more meaningful number to be displayed, the
	user account must be limited to a specific disk quota on the AS/400. The shared
	folders gateway is returning the correct value to the DIR command as returned by
	the AS/400.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	KBCategory: kbthirdparty kbprb
	KBSubcategory: snasharedfolders
	
	Additional query words: prodsna 3.00
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ400NT
	Version           : winnt:3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
