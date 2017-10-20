---
layout: page
title: "Q127931: Macintosh System 7.5 File Find Returns Error -5000"
permalink: /kb/127/Q127931/
---

## Q127931: Macintosh System 7.5 File Find Returns Error -5000

{% raw %}

	Article: Q127931
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Macintosh System 7.5 File Find to access a Windows NT server with
	Services for Macintosh installed, the following error message appears if you
	encounter a folder or file that you do not have access to:
	
	  Find File Reports: incorrect appletalk access for this folder.
	  Server may have gone off-line -5000.
	
	CAUSE
	=====
	
	Because Windows NT Server does not support the FpCatSearch (Catalog Search) API
	(what the Macintosh client normally calls to do the File-Find), the Macintosh
	client enumerates all files and folders on the disk (using the FpEnumerate API)
	and filters for matches itself. Under System 7.1, if the Enumerate call on a
	folder fails because a user does not have access to the folder, the Macintosh
	client keeps enumerating directories that it does have access to, and continues
	the search. A trace (sniff) shows that under System 7.5 Macintosh clients
	display the error noted above and terminate the search when they encounter a
	directory that cannot be enumerated, because the client does not have access to
	the directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.50 Macintosh Connectivity
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
