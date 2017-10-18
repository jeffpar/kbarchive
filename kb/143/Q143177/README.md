---
layout: page
title: "Q143177: FTP Server MIB Definitions"
permalink: kb/143/Q143177/
---

## Q143177: FTP Server MIB Definitions

	Article: Q143177
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The File Transfer protocol MIB (FTP.MIB) for Internet Information Server (IIS)
	contains 16 objects specifically designed to support computers running IIS on
	Windows NT 3.51. This article lists the FTP MIB objects and description.
	
	MORE INFORMATION
	================
	
	The following lists the FTP MIB objects and a description of each object:
	
	FTP Server Statistics:
	
	- TotalBytesSent_HighWord      This is the high 32-bits of the total
	                               number of BYTEs sent by the FTP Server.
	
	- TotalBytesSent_LowWord       This is the low 32-bits of the total
	                               number of BYTEs sent by the FTP Server.
	
	- TotalBytesReceived_HighWord  This is the high 32-bits of the total
	                               number of BYTEs received by the FTP Server.
	
	- TotalBytesReceived_LowWord   This is the low 32-bits of the total number
	                               of BYTEs received by the FTP Server.
	
	- TotalFilesSent               This is the total number of files sent by
	                               this FTP Server.
	
	- TotalFilesReceived           This is the total number of files received
	                               by this FTP Server.
	
	- CurrentAnonymousUsers        This is the number of anonymous users
	                               currently connected to the FTP Server.
	
	- CurrentNonAnonymousUsers     This is the number of non-anonymous users
	                               currently connected to the FTP Server.
	
	- TotalAnonymousUsers          This is the total number of anonymous users
	                               that have ever connected to the FTP Server.
	
	- TotalNonAnonymousUsers       This is the total number of non-anonymous
	                               users that have ever connected to the FTP
	                               Server.
	
	- MaxAnonymousUsers            This is the maximum number of anonymous
	                               users simultaneously connected to the FTP
	                               Server.
	
	- MaxNonAnonymousUsers         This is the maximum number of non-anonymous
	                               users simultaneously connected to the FTP
	                               Server.
	
	- CurrentConnections           Current number of connections to the FTP
	                               Server.
	
	- MaxConnections               The maximum number of simultaneous
	                               connections to the FTP Server.
	
	- ConnectionAttempts           Number of connection attempts made to the
	                               FTP Server.
	
	- LogonAttempts                The number of logon attempts that have been
	                               made to the FTP Server.
	
	The FTP.MIB file is available in the IIS CD-ROM in the SDK directory.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	Issue type        : kbhowto
	
	=============================================================================
	
