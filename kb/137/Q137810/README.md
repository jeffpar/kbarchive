---
layout: page
title: "Q137810: Maximum Number of Volumes a Macintosh Can Mount"
permalink: /kb/137/Q137810/
---

## Q137810: Maximum Number of Volumes a Macintosh Can Mount

	Article: Q137810
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you trying to access a computer running Windows NT Server and Services for
	Macintosh than has more that 167 volumes, the Macintosh client receives the
	following error, and not be able to access any volumes on the server:
	
	  An apple share file system error has occurred
	
	CAUSE
	=====
	
	This problem is caused by a buffer overflow condition on the Macintosh client.
	This is not a limitation of Windows NT, but the Macintosh client connecting to
	the Windows NT server.
	
	WORKAROUND
	==========
	
	To work around this problem, delete or combine some of your Windows NT volumes
	so that you do no exceed 167 volumes.
	
	Additional query words: prodnt mac macintosh
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
