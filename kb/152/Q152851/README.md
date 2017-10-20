---
layout: page
title: "Q152851: Cannot Change System File Attribute in Windows Explorer"
permalink: /kb/152/Q152851/
---

## Q152851: Cannot Change System File Attribute in Windows Explorer

{% raw %}

	Article: Q152851
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Explorer to view or change File or Directory properties,
	the option for the system attribute is always grayed out.
	
	To change the attributes of a file or directory, select the file in Windows NT
	Explorer and right-click the mouse. This brings up the Properties dialog. Under
	the General tab, there are check boxes for the file attributes. The checkbox for
	the system attribute is always grayed out.
	
	RESOLUTION
	==========
	
	To change the system attribute of a file or directory, use File Manager or the
	Attrib command line program. In File Manager, click the file name, choose File,
	Properties, then check or uncheck the System box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: greyed gray grey
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
