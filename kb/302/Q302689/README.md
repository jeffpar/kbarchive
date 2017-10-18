---
layout: page
title: "Q302689: PRB: Webfolders Does Not Work if Content (UNC) Stored On Novell"
permalink: kb/302/Q302689/
---

## Q302689: PRB: Webfolders Does Not Work if Content (UNC) Stored On Novell

	Article: Q302689
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use WebFolders to connect to an Internet Information Services (IIS)
	computer that has content that is mapped to a Novell server by using Universal
	Naming Convention (UNC), you may receive the following error message:
	
	  Internet Explorer could not open http://WebSiteName as a Web Folder.
	
	CAUSE
	=====
	
	WebFolders was not designed to work when content is stored on UNC.
	
	RESOLUTION
	==========
	
	Store files locally on the IIS Web server if you want to use Web Distributed
	Authoring and Versioning (WebDAV) or WebFolders.
	
	
	STATUS
	======
	
	This is a known limitation with WebFolders.
	
	Additional query words: web folders novell dav iis fpse
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
