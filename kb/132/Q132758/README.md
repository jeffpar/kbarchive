---
layout: page
title: "Q132758: Netware Client Cannot Create A File"
permalink: /kb/132/Q132758/
---

## Q132758: Netware Client Cannot Create A File

{% raw %}

	Article: Q132758
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a directory on a Windows 95 NetWare-compatible peer server, you
	are unable to create a file in a directory where the NetWare or compatible
	client has create permissions and no write permissions.
	
	CAUSE
	=====
	
	This problem occurs because the CreateFile request expects a file handle to be
	returned that cannot be written to or read from. The underlying operating system
	on the server (Windows 95) does not support this type of network request.
	
	RESOLUTION
	==========
	
	To resolve this problem, give the user write permissions to the directory, as
	well as create permissions.
	
	MORE INFORMATION
	================
	
	
	Networking programs sometimes attempt to use file creation and existence as a
	method of serialization (copy-protection). This problem may occur with such
	programs. If you have a program that requires this serialization technique and
	also requires secure access to files in the same directory, you should move the
	program to a true NetWare server.
	
	Additional query words: sharing share rights
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
