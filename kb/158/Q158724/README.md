---
layout: page
title: "Q158724: HTTP 500 Server Error Unable to Perform a Security Operation"
permalink: /kb/158/Q158724/
---

## Q158724: HTTP 500 Server Error Unable to Perform a Security Operation

	Article: Q158724
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In IIS 2.0 and 3.0, when you choose a link that references a file for download,
	you may receive the following error message:
	
	  HTTP/1.0 500 Server Error (Unable to perform a security operation on an
	  object which has no associated security.)
	
	In IIS 4.0, you will be challenged for credentials, with no credentials working,
	and then receive a 403.1 Access Denied error.
	
	CAUSE
	=====
	
	In a directory that has both Read and Execute permissions, when you attempt to
	activate a link that references an executable file (such as in a self-
	extracting .exe file), Internet Information Server attempts to execute rather
	than download the file. If the file is a 32-bit program it will be executed,
	however, if it is a 16-bit executable IIS generates the HTTP Server Error listed
	in the Symptoms section of this article. This occurs because you cannot execute
	16-bit CGI programs.
	
	RESOLUTION
	==========
	
	Remove Execute permission on the virtual directory that the downloadable file is
	mapped to and make sure that Read permission is allowed. For security reasons,
	you should not grant Read and Execute permission at the same time on a virtual
	directory. This configuration allows users to read script files that contain
	proprietary information about settings which can compromise server security.
	
	Additional query words: download IIS
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
