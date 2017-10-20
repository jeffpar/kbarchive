---
layout: page
title: "Q168096: Windows 95 SNA Server Client And Encryption Requirements"
permalink: /kb/168/Q168096/
---

## Q168096: Windows 95 SNA Server Client And Encryption Requirements

{% raw %}

	Article: Q168096
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 SNA Server version 3.0 and 4.0 clients require one of the
	following to support the Data Encryption feature introduced with SNA Server
	3.0:
	
	- Client for Microsoft Networks
	
	  -or-
	
	- DCOM for Windows 95
	
	If one of these components is not installed, and encryption is enabled for the
	user trying to access the SNA Server, the connection attempt will fail. The
	applets included with SNA Server will return errors similar to the following
	when this occurs.
	
	5250 Applet:
	
	  There are no SNA Servers running in your domain.
	
	  [F004][010000F0]
	
	3270 Applet:
	
	  ERROR - Reading SNA Server Configuration.
	
	MORE INFORMATION
	================
	
	- The Data Encryption feature of SNA Server 3.0 requires that SNA Server
	  clients are validated using the NTLM logon process. Third-party network
	  redirectors such as Novell Netware Client 32 which do not provide the NTLM
	  security interface will cause the user logon to fail when encryption is
	  used.
	
	  The Microsoft Network Client and DCOM for Windows 95 install the necessary
	  NTLM security components to allow the user logon to succeed when encryption
	  is used.
	
	  DCOM for Windows 95 is a Windows 95 addon that provides support for
	  distributed object computing. For more information on DCOM for Windows 95,
	  please refer to the following Microsoft Web Page:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	- SNA Server 2.x client software does not support encryption. If encryption is
	  enabled for any users/groups that are running SNA Server 2.x clients, those
	  clients will not be able to connect to SNA Server.
	
	- Encryption can be used over any of the client/server LAN transports supported
	  by SNA Server.
	
	- The Windows 95 user does not need to logon to the Windows NT domain that the
	  SNA Server belongs or or to any trusted domain in order to use encryption.
	
	- If the Client for Microsoft Networks is not installed, the Windows 95 SNA
	  Server client needs to be configured so that the "Use Windows NT domain
	  password" option is not selected under the Advanced tab in the client
	  configuration. If this option is not selected, the Logon Domain has to be
	  entered to specify which Windows NT Domain will be used to validate the user
	  account. This also applies if the Client for Microsoft Networks is installed
	  and a non-Named Pipe transport (in other words, TCP/IP or IPX/SPX) is
	  selected for the SNA Server client.
	
	Additional query words: snaencrypt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	

{% endraw %}
