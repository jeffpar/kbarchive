---
layout: page
title: "Q132658: Shortcut to Deleted NetWare File May Open Wrong File"
permalink: /kb/132/Q132658/
---

## Q132658: Shortcut to Deleted NetWare File May Open Wrong File

{% raw %}

	Article: Q132658
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a shortcut for a file on a NetWare 3.x or 4.x server, or on a
	Windows 95-based computer running the File And Printer Sharing For NetWare
	Networks component, if the file has been removed or renamed the shortcut may
	open another similarly named file in the same folder without prompting you. This
	behavior can occur with shortcuts that user either mapped drives or UNC paths.
	
	CAUSE
	=====
	
	The shortcut facility in Windows 95 deals with missing files by searching for a
	file with similar characteristics and prompting you. One of the most prominent
	characteristics is the file creation date and time. On NetWare 3.x and 4.x
	servers, and Windows 95-based computers running the File And Printer Sharing For
	NetWare Networks component, the creation date is set with a resolution of two
	seconds. This means that two files copied to the server within a two-second span
	may have the same file creation date and time. This can cause the shortcut
	facility's missing file detection process to misdetect the file.
	
	RESOLUTION
	==========
	
	The only workaround for this problem is to change the shortcut to point to the
	proper file.
	
	Additional query words: novell
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
