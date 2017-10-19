---
layout: page
title: "Q161068: Publishing Both Default.asp and Default.htm Within IIS"
permalink: /kb/161/Q161068/
---

## Q161068: Publishing Both Default.asp and Default.htm Within IIS

	Article: Q161068
	Product(s): Internet Information Server
	Version(s): winnt:3.0; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Active Server Pages, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) defines a default publication
	document in the IIS Server Manager under the Directories tab. This document is
	defined as Default.htm on an initial installation of IIS. This default
	publication document is defined globally for all the IIS publication
	directories. When a remote user does not specify a particular file, the default
	document in that publication directory is displayed.
	
	MORE INFORMATION
	================
	
	When Active Server Pages (ASP) is installed, you may want to have some
	additional publication directories that are defined as a Default.asp file.
	However, you will need a Default.htm file to redirect the browser to the
	Default.asp file.
	
	A webmaster could include a Default.htm file to redirect the refresh of the
	client browser to the Default.asp page included in the ASP publication
	directory.
	
	For example:
	
	  <HTML>
	  <HEAD>
	  <META HTTP-EQUIV="refresh" CONTENT="0;URL=default.asp">
	  </HEAD>
	  </HTML>
	
	
	Additional query words: asp default.htm default.asp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis300 kbASP100
	Version           : winnt:3.0; :1.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
