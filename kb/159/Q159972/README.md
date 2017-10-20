---
layout: page
title: "Q159972: WinNT 4.0 May Not Return Valid Response for SMB Search Command"
permalink: /kb/159/Q159972/
---

## Q159972: WinNT 4.0 May Not Return Valid Response for SMB Search Command

{% raw %}

	Article: Q159972
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When applications try to locate a file that does not have a 3-digit extension
	(no extension or 1-2 character extension), they may fail.
	
	For example, a simple Qbasic application, which uses the Qbasic Kill command,
	will report Error 53, computer name not found, when it tries to delete a file
	with no extension located on a Windows NT 4.0 server.
	
	CAUSE
	=====
	
	When a Windows NT 4.0 server receives a service message block (SMB) search
	command for a file name with no extension, the server returns an SMB search
	response in which the file name field is not correctly populated.
	
	This problem does not occur if the file name has an extension.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
