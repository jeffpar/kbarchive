---
layout: page
title: "Q101639: Setting Permissions for a Drop Folder and its Contents"
permalink: /kb/101/Q101639/
---

## Q101639: Setting Permissions for a Drop Folder and its Contents

{% raw %}

	Article: Q101639
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	A drop folder is a folder in which a user has only Make Changes
	permission. Because of the differences in the manner Windows NT
	supports Advanced Server and Macintosh-style permissions, Windows NT
	supports drop folder permissions only for the immediate contents of
	the drop folder.
	
	To ensure consistent access to subdirectories of drop folders,
	recursively apply drop folder permissions to all enclosed
	subdirectories. You can do this in the File Manager by choosing
	Directory Permissions from the MacFile menu, or in the Sharing dialog
	box on the Macintosh client. If you subsequently add a subdirectory to
	a drop folder, you must update its permissions to reflect drop folder
	access.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
