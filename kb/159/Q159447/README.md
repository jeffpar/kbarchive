---
layout: page
title: "Q159447: Applications Testing for Directory Existence Fail"
permalink: /kb/159/Q159447/
---

## Q159447: Applications Testing for Directory Existence Fail

{% raw %}

	Article: Q159447
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application does a test to see if a directory exists on the Windows NT 4.0
	file server, and an MS-DOS error 3 "Path Not Found" is returned. This same
	application worked fine in Windows NT 3.51.
	
	CAUSE
	=====
	
	This error only occurs when the server evaluates the server message block (SMB)
	command 81 (Search Directory) sent across the wire and only when search
	attributes of 1016 are used. Because search attributes can only occupy the first
	8 bits of the word, the bits beyond 8 were previously ignored. But in Windows NT
	4.0, these bits were not ignored, causing the server to return an error to the
	client.
	
	RESOLUTION
	==========
	
	The code has been changed to now ignore bits that are not relevant. Install the
	updated file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
