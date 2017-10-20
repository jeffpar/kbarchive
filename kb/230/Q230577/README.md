---
layout: page
title: "Q230577: Error Message &quot;The Drive Is Not Ready for Use&quot; at Startup"
permalink: /kb/230/Q230577/
---

## Q230577: Error Message &quot;The Drive Is Not Ready for Use&quot; at Startup

{% raw %}

	Article: Q230577
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  The drive is not ready for use Device/Harddisk0/partition0. Its door may be
	  open. Please check drive and make sure that a disk is inserted and that the
	  drive door is closed.
	
	CAUSE
	=====
	
	This behavior can occur if you have a Zip drive and Norton Utilities installed.
	Norton Utilities queries the Zip drive and generates the error message if there
	is no disk in the drive. You receive no error message if there is a disk in the
	drive. This apparently occurs only if the Zip drive is installed after Norton
	Utilities is installed.
	
	RESOLUTION
	==========
	
	Uninstall and reinstall Norton Utilities. Disabling Norton Utilities does not
	resolve the problem. For information about how to uninstall or reinstall Norton
	Utilities, please consult the program's documentation or manufacturer.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
