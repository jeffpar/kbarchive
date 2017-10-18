---
layout: page
title: "Q143182: Gopher Server MIB Definitions"
permalink: kb/143/Q143182/
---

## Q143182: Gopher Server MIB Definitions

	Article: Q143182
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Gopher MIB (GOPHERD.MIB) for Internet Information Server (IIS) contains 16
	objects specifically designed to support computers running IIS on Windows NT
	3.51. This article lists the Gopher MIB objects and description.
	
	MORE INFORMATION
	================
	
	The following lists the Gopher MIB objects and a description of each object:
	
	TotalBytesSent_HighWord
	
	  This is the high 32-bits of the total number of BYTEs sent by the Gopher
	  Server.
	
	TotalBytesSent_LowWord
	
	  This is the low 32-bits of the total number of BYTEs sent by the Gopher
	  Server.
	
	TotalBytesReceived_HighWord
	
	  This is the high 32-bits of the total number of BYTEs received by the Gopher
	  Server.
	
	TotalBytesReceived_LowWord
	
	  This is the low 32-bits of the total number of BYTEs received by the Gopher
	  Server.
	
	TotalFilesSent
	
	  This is the total number of files sent by this Gopher Server.
	
	TotalDirectorySent
	
	  This is the total number of directory listings sent by this Gopher Server.
	
	TotalSearchesDone
	
	  This is the total number of searches done by this Gopher Server.
	
	CurrentAnonymousUsers
	
	  This is the number of anonymous users currently connected to the Gopher
	  Server.
	
	CurrentNonAnonymousUsers
	
	  This is the number of nonanonymous users currently connected to the Gopher
	  Server.
	
	TotalAnonymousUsers
	
	  This is the total number of anonymous users that have ever connected to the
	  Gopher Server.
	
	TotalNonAnonymousUsers
	
	  This is the total number of nonanonymous users that have ever connected to
	  the Gopher Server.
	
	MaxAnonymousUsers
	
	  This is the maximum number of anonymous users simultaneously connected to the
	  Gopher Server.
	
	MaxNonAnonymousUsers
	
	  This is the maximum number of nonanonymous users simultaneously connected to
	  the Gopher Server.
	
	CurrentConnections
	
	  This is the current number of connections to the Gopher Server.
	
	MaxConnections
	
	  This is the maximum number of simultaneous connections to the Gopher Server.
	
	ConnectionAttempts
	
	  This is the number of connection attempts that have been made to the Gopher
	  Server.
	
	LogonAttempts
	
	  This is the number of logon attempts that have been made to this Gopher
	  Server.
	
	AbortedConnections
	
	  This is the number of aborted connections that have been made to this Gopher
	  Server.
	
	NOTE: The GOPHERD.MIB file is available in IIS CD-ROM in the SDK directory.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
