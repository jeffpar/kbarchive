---
layout: page
title: "Q272079: IIS Search Method May Allow Unauthorized Users a  Directory List"
permalink: kb/272/Q272079/
---

## Q272079: IIS Search Method May Allow Unauthorized Users a  Directory List

	Article: Q272079
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may be possible for an outside user to use the search functionality in Web
	Distributed Authoring and Versioning (WebDAV) to get a directory listing of a
	Web site's content area.
	
	NOTE: This is only a problem if Index Server is used on the server (which is not
	enabled by default), and the directory lists can only be generated if the Web
	site (or resource such as a virtual directory or file) has the Index property
	set.
	
	The implications of this are that an outside user may be able to discover a
	hidden directory or an include file (such as a .inc). By using the search
	feature, a use may be able to get a directory listing, which would make
	discovery much easier. This may expose your Web site to a malicious attack (for
	example, if a .inc file includes a database user name and password).
	
	RESOLUTION
	==========
	
	To secure your Web site(s) from a possible attack, perform the following
	checklist on your Web site(s):
	
	- If you are not using Index Server (for example, you don't have content on
	  your Web site that you want to have searched), disable or uninstall the
	  service.
	
	  -OR-
	
	- In directories that contain sensitive information, make sure to disable the
	  Index this resource option on the appropriate tab (for example, a virtual
	  directory on the Virtual Directory tab).
	
	MORE INFORMATION
	================
	
	Internet Information Services (IIS) 5.0 offers a new technology named WebDAV
	(see RFC2518). Web Distributed Authoring and Versioning (WebDAV) extends the
	HTTP/1.1 protocol to allow clients to publish, lock, and manage resources on the
	Web. Integrated into IIS, WebDAV allows clients to do the following:
	
	- Manipulate resources in a WebDAV publishing directory on your server. For
	  example, with this feature, users with the correct permissions can copy and
	  move files around in a WebDAV directory.
	
	- Modify properties associated with certain resources. For example, a user can
	  write to and retrieve a file's property information.
	
	- Lock and unlock resources so that multiple users can read a file
	  concurrently, but only one person at a time can modify the file.
	
	- Search the content and properties of files in a WebDAV directory.
	
	Additional query words: iis 5 webdav security
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
