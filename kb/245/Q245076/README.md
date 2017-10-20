---
layout: page
title: "Q245076: 'Access Denied' in Internet Service Manager Virtual Directory."
permalink: /kb/245/Q245076/
---

## Q245076: 'Access Denied' in Internet Service Manager Virtual Directory.

{% raw %}

	Article: Q245076
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the list of virtual directories in the 'FTP Service Properties for
	FTP' dialog box in Microsoft Internet Server Manager, 'access denied' error
	messages may appear in one or more directories in the 'Directories' box.
	
	CAUSE
	=====
	
	This behavior can occur if the System account does not have Full Control
	permission on the physical directory to which the virtual directory points.
	
	RESOLUTION
	==========
	
	To resolve this issue, grant Full Control permission to the System account for
	the physical directory to which the virtual directory points:
	
	1. In Windows NT Explorer, right-click the physical directory.
	
	2. Click Properties.
	
	3. On the Security tab, click Permissions.
	
	4. In the Directory Permissions dialog box, click Add.
	
	5. In the Names list, click System.
	
	6. In the Type Of Access box, click Full Control.
	
	7. Click Add, and then click OK until you return to the desktop.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
