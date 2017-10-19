---
layout: page
title: "Q318863: HOW TO: Modify AuthPersistence Controls w/Authenticated Clients"
permalink: /kb/318/Q318863/
---

## Q318863: HOW TO: Modify AuthPersistence Controls w/Authenticated Clients

	Article: Q318863
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the metabase. Before you edit the metabase, verify that you have a backup copy that you can restore if a problem occurs. For information about how to do this, see the "Configuration Backup/Restore" Help topic in Microsoft Management Console (MMC).
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Description of Authentication Persistence Settings
	- Modify the Metabase
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to modify the metabase to control
	authentication persistence.
	
	HTTP Keep-Alives allow Web browsers to reuse the same TCP connection to make
	multiple requests to a Web server such as Internet Information Server (IIS). If
	a Web server requires authentication such as Basic, Kerberos, or Microsoft
	Windows NT Challenge/Response, a Web browser is challenged for authentication by
	the server. The Web browser must send authentication information to the Web
	server. After the Web browser is authenticated by the server, the Web browser
	can only be challenged again by the server when it opens a new connection from a
	different TCP port. This is known as authentication persistence.
	
	Authentication persistence can be controlled by the metabase property
	AuthPersistence. Microsoft recommends that you set this property by setting the
	corresponding subflag to TRUE, which automatically sets a binary value for
	AuthPersistence.
	
	Description of Authentication Persistence Settings
	--------------------------------------------------
	
	- AuthPersistSingleRequest: If this metabase property is set to TRUE,
	  authentication persists only for a single HTTP request.
	
	- AuthPersistSingleRequestIfProxy: If this metabase property is set to TRUE,
	  authentication persists only for a single HTTP request if it is a proxy
	  request and the request is not handled by Microsoft Proxy Server (that is, if
	  Proxy Server and IIS are running on the local computer, and the request is
	  targeted to a remote server.)
	
	- AuthPersistSingleRequestAlwaysIfProxy: If this metabase property is set to
	  TRUE, authentication is valid for a single HTTP request if the request is by
	  proxy.
	
	NOTE: Only one subflag of AuthPersistence can be TRUE at one time. By default,
	AuthPersistSingleRequestIfProxy is set to TRUE. The metabase entries that are
	turned on by default do not appear on enumeration of the metabase until you
	specifically set them.
	
	Modify the Metabase
	-------------------
	
	WARNING: If you edit the metabase incorrectly, you can cause serious problems
	that may require you to reinstall any product that uses the metabase. Microsoft
	cannot guarantee that problems that result if you incorrectly edit the metabase
	can be solved. Edit the metabase at your own risk.
	
	NOTE: Always back up the metabase before you edit it.
	
	For additional information about how to back up the metabase, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q300675 HOW TO: Create a Metabase Backup by Using Internet Information Server
	  4.0 in Windows NT
	
	  Q300672 HOW TO: Create a Metabase Backup in IIS 5
	
	To modify the metabase properties as described in this article, run the following
	at a command prompt:
	
	  CSCRIPT.EXE ADSUTIL.VBS SET W3SVC/AuthPersistSingleRequest TRUE
	
	NOTE: Adsutil.vbs is generally located at Winnt\System32\Inetsrv\Adminsamples
	(for IIS 4.0) or at Inetpub\Adminscripts (for IIS 5.0).
	
	NOTE: Setting AuthPersistence values can cause the IIS server performance to
	decrease. Based on the subflag set, the IIS server may challenge each Web
	browser for each HTTP request that is made to the server. This also may require
	the IIS server to make authentication requests to the domain controller for each
	domain account making a new HTTP request.
	
	REFERENCES
	==========
	
	For more information about authentication persistence, see the IIS 5.0 online
	documentation at the following Microsoft Web site:
	
	  Getting Started with Internet Information Services (IIS)
	  http://www.microsoft.com/windows2000/en/server/iis/
	
	For more information, visit the following Microsoft Developer Network (MSDN) Web
	site:
	
	  AuthPersistence
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/iisref/html/psdk/asp/apro03hh.asp
	
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
