---
layout: page
title: "Q165151: Help File Terminates Unexpectedly with Error"
permalink: /kb/165/Q165151/
---

## Q165151: Help File Terminates Unexpectedly with Error

{% raw %}

	Article: Q165151
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbotherkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Help file in Windows NT 4.0, the Help file will randomly terminate
	with the following message:
	
	  The instruction at <address> referenced memory at <address>. The
	  memory could not be written. Click on OK to terminate the application.
	
	CAUSE
	=====
	
	The contents of the associated .cnt file have long strings that exceed the right
	border of the help topic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: helpfile error sp2
	
	======================================================================
	Keywords          : kbother kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
