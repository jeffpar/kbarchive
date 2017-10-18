---
layout: page
title: "Q182712: Err Msg: &quot;Unable to Connect to &lt;Web site&gt;&quot; Over SSL Connection"
permalink: kb/182/Q182712/
---

## Q182712: Err Msg: &quot;Unable to Connect to &lt;Web site&gt;&quot; Over SSL Connection

	Article: Q182712
	Product(s): Internet Information Server
	Version(s): WINNT: 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Web site with a large number of concurrent users using Secure Sockets Layer
	(SSL), the client may randomly receive the following error message:
	
	  Unable to connect to '<Web site>' a connection with the server could
	  not be established.
	
	Refreshing the page can recover the session.
	
	CAUSE
	=====
	
	The more complex the page, the longer it takes to download the page; therefore,
	the fewer people who can enter the site at one time. If you have a site with
	complex pages, you will encounter this problem with only a small number of
	concurrent users more frequently than will a site with simpler pages.
	
	This problem arises because each individual object on a page creates a separate
	session to download this object to the client. By default, the SSL component has
	only sufficient cache to maintain 100 sessions. This limitation is associated
	with the schannel component (Schannel.dll), used for SSL/PCT.
	
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To increase the size of the SSL server cache, modify the following registry
	entry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL
	
	Value Name: ServerCache
	Data Type: REG_DWORD
	Data: 1000 (Default = 100)
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WINNT: 3.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
