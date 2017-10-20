---
layout: page
title: "Q166999: Using SetArcDirection Results in Incorrect Output"
permalink: /kb/166/Q166999/
---

## Q166999: Using SetArcDirection Results in Incorrect Output

{% raw %}

	Article: Q166999
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprintkbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT 4.0, when you use an application that creates
	arcs and then try to print, some of the arcs will print incorrectly, curving
	left to right instead of right to left, or vice versa. This problem will be seen
	on PCL printers, but non-PCL printers will print properly.
	
	CAUSE
	=====
	
	When using SetArcDirection, the call is not interpreted properly by the GDI when
	printing to a PCL printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: postscript
	
	======================================================================
	Keywords          : kbprint kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
