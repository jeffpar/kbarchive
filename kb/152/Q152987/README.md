---
layout: page
title: "Q152987: MS-DOS Apps Report Sharing Violation When Using CSNW"
permalink: /kb/152/Q152987/
---

## Q152987: MS-DOS Apps Report Sharing Violation When Using CSNW

{% raw %}

	Article: Q152987
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS application that accesses data on a NetWare server
	through Client Services for NetWare (CSNW), you get an error mesage reporting a
	sharing violation. If you run the same application on a client running Novell's
	VLMs, it works correctly. It will also work correctly from Windows NT if the
	data being accessed is moved to a Windows NT server.
	
	CAUSE
	=====
	
	When an MS-DOS application attempts to open a file using an MS-DOS compatibility
	open, CSNW will look to see if the open is for READ or not. If the open is for
	READ, CSNW sets the sharing on the file to SHARE DENY WRITE. If the file is
	being opened for anything other than READ (for example, WRITE), CSNW will set
	the sharing on the file to EXCLUSIVE ACCESS. Therefore, CSNW will only support a
	file being opened more than once through an MS-DOS compatibility open if all
	instances of the open are for read-only.
	
	RESOLUTION
	==========
	
	This is by design.
	
	STATUS
	======
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: CSNW GSNW SHARING DOS
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
