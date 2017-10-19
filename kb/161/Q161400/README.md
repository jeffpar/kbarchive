---
layout: page
title: "Q161400: Authenticated Users Cannot Query Secured Documents"
permalink: /kb/161/Q161400/
---

## Q161400: Authenticated Users Cannot Query Secured Documents

	Article: Q161400
	Product(s): Internet Information Server
	Version(s): WINNT: 1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Internet Information Server (IIS) is configured to allow
	Anonymous access and either Basic authentication or Microsoft Windows NT
	Challenge Response authentication, and it contains both a secured virtual
	directory and an authentication virtual directory, one of the following may
	occur:
	
	- You can authenticate against a secure HTML query page and perform the query,
	  but only the documents in the unsecured directory are returned as a result of
	  the query.
	
	  -Or-
	
	- You can authenticate against a secure HTML query page and retrieve the
	  documents from a secured directory, but for a certain period of time, you can
	  only retrieve unsecured documents.
	
	CAUSE
	=====
	
	If the Anonymous user has access to the .IDQ file, then the browser does not
	pass the authentication header along with the GET or POST. This causes the .IDQ
	file to be run in the context of the anonymous user account. Running the .IDQ
	file in the Anonymous user's context only allows the unsecured documents to be
	retrieved.
	
	NOTE: If you are using ASP files to query in Index Server 2.0, the ASP files also
	need to be secured.
	
	WORKAROUND
	==========
	
	Create a separate .IDQ file for the authenticated users and remove the Anonymous
	user account from the Windows NT NTFS file permissions of that file. This will
	cause the browser to send the authentication header with the GET or the POST,
	ensuring that the Index Server can identify who is logged on. Once the Index
	Server knows who is logged on, then you can retrieve secured documents reliably.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : WINNT: 1.1,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
