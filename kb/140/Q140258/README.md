---
layout: page
title: "Q140258: Incomplete Server List in File Manager Connection Dialog Box"
permalink: /kb/140/Q140258/
---

## Q140258: Incomplete Server List in File Manager Connection Dialog Box

{% raw %}

	Article: Q140258
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Workstations and Servers do not see all the Servers available in a
	domain from the Connect Network Dive dialog box in File Manager. Attempts to
	browse the domain from a command prompt with the NET VIEW command succeed with
	all the servers shown correctly.
	
	CAUSE
	=====
	
	The Shared Directories list box generated in the Connect Network Drive dialog
	box fails to enumerate a complete list of servers. The enumeration of servers is
	incomplete because the buffer passed from MPRUI.DLL (responsible for filling the
	list box) to NTLANMAN.DLL (responsible for enumerating the servers) to retrieve
	the list of server names is too small. NTLANMAN.DLL returns a status code
	indicating that a larger buffer size is required to hold the server names, but
	also returns some unexpected server names in the small buffer. MPRUI.DLL resizes
	the buffer, but does not add any of the unexpected server names returned from
	NTLANMAN.DLL in the original, smaller buffer to the Shared Directories list
	box.
	
	The incomplete list of servers is caused by NTLANMAN.DLL returning server name
	entries while requesting a larger buffer size from MPRUI.DLL. The set of
	circumstances that cause NTLANMAN.DLL to return server names, and request a
	larger buffer size are very infrequent resulting in about six server names being
	dropped from a potential list of three hundred.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
