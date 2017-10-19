---
layout: page
title: "Q171625: Command-line Installation of SNA Server 3.0  and 4.0 Link Servic"
permalink: /kb/171/Q171625/
---

## Q171625: Command-line Installation of SNA Server 3.0  and 4.0 Link Servic

	Article: Q171625
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server versions 3.0 and 4.0 include the new LINKCFG command-line tool to
	install SNA Server link services. Prior to this release, link service
	installation could only be performed using the SNA Server 3.0 Manager program,
	or using the "LINKSET" program to install back-level link services.
	
	The following steps are required to install and use a link service using the SNA
	Server LINKCFG and SNACFG command-line configuration tools:
	
	1. Use LINKCFG to install the SNA Server link service. This installs the
	  necessary files in the <snaroot>\system directory, adds the required
	  Windows NT registry settings, and runs the Windows NT network control panel
	  bindings.
	
	2. Use "SNACFG LINK ..." to define the link service in the SNA Server
	  configuration file.
	
	3. Use "SNACFG CONNECTION ..." to create a new connection in the configuration
	  file and associate the new link service with the connection.
	
	MORE INFORMATION
	================
	
	The following example shows how to use the LINKCFG and SNACFG commands to
	install a distributed link service:
	
	1. Installing the remote link service using LINKCFG:
	
	  C:\>linkcfg LINKSVC "SnaRem1" /SERVER:STEVED2
	  /LSTYPE:"Distributed Link Service" /REMOTELINKTYPE:TokenRing802.2
	  /REMOTELIST:\\truth\snadlc3 /DOMAIN:STEVED2_DOMAIN /USERID:snaservice
	  /PASSWORD:snaservice
	
	  NOTE: This is a single command line. Line breaks are inserted here for
	  readability.
	
	  The above command installs a link service name of "SnaRem1" to server STEVED2
	  to run under a user account of STEVED2_DOMAIN\snaservice, pointing to a
	  distributed link on \\TRUTH\SNADLC3.
	
	2. Define the link service to the configuration file using SNACFG:
	
	  C:\>snacfg link STEVED2:SnaRem1 /ADD /LINKTYPE:Token
	
	  The above command defines the SnaRem1 link service to the SNA Server
	  configuration file.
	
	3. Define a connection to use this link service:
	
	  C:\>snacfg connection TRUTH /ADD /SERVER:STEVED2
	  /LINKSERVICE:SnaRem1 /CONNTYPE:802.2 /REMOTEEND:Host
	  /REMOTENETADDR:400017001100 /LOCALBLOCKNO:017 /LOCALNODENO:10001
	
	  NOTE: This is a single command line. Line breaks are inserted here for
	  readability.
	
	  The above command creates a new connection called TRUTH on STEVED2, and
	  associates the connection to the SnaRem1 link service. Note that the various
	  connection properties will vary depending on the host configuration settings,
	  such as /REMOTENETADDR, /LOCALBLOCKNO, and /LOCALNODENO, though these are
	  included to show a complete example.
	
	Additional query words: snafaqtop
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
