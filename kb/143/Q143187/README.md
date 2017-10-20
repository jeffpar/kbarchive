---
layout: page
title: "Q143187: HTTP Server MIB definitions"
permalink: /kb/143/Q143187/
---

## Q143187: HTTP Server MIB definitions

{% raw %}

	Article: Q143187
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Hyper Text Transfer Protocol MIB (HTTP.MIB) for Internet Information Server
	contains 16 objects specifically designed to support computers running Internet
	Information Server on Windows NT 3.51. This article lists the HTTP.MIB objects
	and description.
	
	MORE INFORMATION
	================
	
	The following lists the HTTP MIB objects and a description of each object. The
	objects are collecting Http Server Statistics:
	
	TotalBytesSent_HighWord:
	
	  This is the high 32-bits of the total number of of BYTEs sent by the
	  Http Server.
	
	TotalBytesSent_LowWord:
	
	  This is the low 32-bits of the total number of
	  of BYTEs sent by the Http Server.
	
	TotalBytesReceived_HighWord:
	
	  This is the high 32-bits of the total number of
	  of BYTEs received by the Http Server.
	
	TotalBytesReceived_LowWord:
	
	  This is the low 32-bits of the total number of
	  of BYTEs received by the Http Server.
	
	TotalFilesSent:
	
	  This is the total number of files sent by this
	  Http Server.
	
	CurrentAnonymousUsers:
	
	  This is the number of anonymous users currently
	  connected to the Http Server.
	
	CurrentNonAnonymousUsers:
	
	  This is the number of nonanonymous users currently
	  connected to the Http Server.
	
	TotalAnonymousUsers:
	
	  This is the total number of anonymous users that
	  have ever connected to the Http Server.
	
	TotalNonAnonymousUsers:
	
	  This is the total number of nonanonymous users
	  that have ever connected to the Http Server.
	
	MaxAnonymousUsers:
	
	  This is the maximum number of anonymous users
	  simultaneously connected to the Http Server.
	
	MaxNonAnonymousUsers:
	
	  This is the maximum number of nonanonymous users
	  simultaneously connected to the Http Server.
	
	CurrentConnections:
	
	  This is the current number of connections to the
	  Http Server.
	
	MaxConnections:
	
	  This is the maximum number of simultaneous
	  connections to the Http Server.
	
	ConnectionAttempts:
	
	  This is the number of connection attempts that
	  have been made to the Http Server.
	
	LogonAttempts:
	
	  This is the number of logon attempts that have
	  been made to this Http Server.
	
	TotalGets:
	
	  This is the number of requests using the GET method
	  that have been made to this Http Server.
	
	TotalPosts:
	
	  This is the number of requests using the POST method
	  that have been made to this Http Server.
	
	TotalHeads:
	
	  This is the number of requests using the HEAD method
	  that have been made to this Http Server.
	
	TotalOthers:
	
	  This is the number of requests not using the GET,
	  POST or HEAD method that have been made to this Http
	  Server.
	
	TotalCGIRequests:
	
	  This is the number of Common Gateway Interface (CGI)
	  requests that have been made to this Http Server.
	
	TotalBGIRequests:
	
	  This is the number of Binary Gateway Interface (BGI)
	  requests that have been made to this Http Server.
	
	TotalNotFoundErrors:
	
	  This is the number of requests the Http server could
	  not satisfy because the requested resource could not be found.
	
	The HTTP.MIB file is available on the Internet Information Server compact disc in
	the SDK directory.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
