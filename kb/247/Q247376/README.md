---
layout: page
title: "Q247376: WWW and FTP Virtual Directories Are Not Displayed  in Directory"
permalink: kb/247/Q247376/
---

## Q247376: WWW and FTP Virtual Directories Are Not Displayed  in Directory

	Article: Q247376
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Internet Information Services (IIS), no virtual
	directories are displayed when browsing a WWW folder with directory browsing
	enabled or displaying directory contents on an FTP site.
	
	CAUSE
	=====
	
	This behavior is by design. Physical directories appear in directory listings,
	and virtual directories do not. IIS "hides" virtual directories. This is true
	for both WWW and FTP sites.
	
	Hiding virtual directories has tremendous security advantages because users are
	required to know the virtual path that they want to access.
	
	WORKAROUND
	==========
	
	To display a WWW or FTP virtual directory in a folder, create an empty physical
	directory of the same name. When a request is made to the directory, the virtual
	directory is returned, instead of the physical directory.
	
	MORE INFORMATION
	================
	
	If you create an FTP virtual directory of the same name as a user's name on a
	server, when the user logs on through an FTP client, the user is automatically
	redirected to the virtual directory, based on their user name. Needless to say,
	if you have multiple users on a server, each with their own virtual directory,
	it can be quite advantageous to not display the virtual directories, because it
	also compromises user names on the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
