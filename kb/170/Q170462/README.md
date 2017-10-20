---
layout: page
title: "Q170462: Error Message Sharing Folder on Drive Created by SUBST Command"
permalink: /kb/170/Q170462/
---

## Q170462: Error Message Sharing Folder on Drive Created by SUBST Command

{% raw %}

	Article: Q170462
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to share a folder or drive in Windows 95, you may receive the
	following error message:
	
	  Sharing: An error occurred while trying to share <share name>. Error
	  2116. Shared resource was not created at this time.
	
	You may be able to create the share, but it is inaccessible as a network
	resource.
	
	CAUSE
	=====
	
	You are attempting to share a drive, or a folder on a drive, created using the
	SUBST command.
	
	RESOLUTION
	==========
	
	Share the folder from the original drive instead of from the drive created using
	the SUBST command.
	
	MORE INFORMATION
	================
	
	You can use the SUBST command to associate a path with a drive letter. This
	creates a "virtual drive" that can be accessed as an additional local drive. For
	example, the following sample command creates a virtual drive F that refers to
	the C:\MyFolder folder:
	
	  subst f: c:\myfolder
	
	The virtual drive you create using the SUBST command (drive F) cannot be shared
	as a network resource. You must share the folder on the local drive
	(C:\MyFolder).
	
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
