---
layout: page
title: "Q146478: XCLN: Exchange Requires Client for Microsoft Networks"
permalink: /kb/146/Q146478/
---

## Q146478: XCLN: Exchange Requires Client for Microsoft Networks

	Article: Q146478
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Windows 95 client fails to connect to Microsoft Exchange
	Server if the client computer is running only the Windows 95 client for NetWare
	Networks and the Microsoft Exchange Server-based computer is running Windows NT
	File and Print Sharing for NetWare.
	
	WORKAROUND
	==========
	
	It is possible to work around this problem by installing DCOM95, which provides
	secure remote procedure calls (RPCs) by means of an updated Secur32.dll file.
	DCOM95 is available from:
	
	  http://www.microsoft.com/com/dcom/dcom1_2/dcom1_2.asp
	
	If DCOM95 is installed, it is no longer necessary to install the Client for
	Microsoft Networks to use the Microsoft Exchange Client with the Microsoft
	Exchange Server service.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Windows 95 client requires secure RPCs to communicate
	with a Microsoft Exchange Server. The Client for NetWare Networks provided with
	Windows 95 does not support secure RPC.
	
	To establish a session to a Microsoft Exchange Server from a Microsoft Exchange
	Windows 95 client, the Client for Microsoft Networks will also need to be
	installed. In addition, the option to log on to Windows NT Domain as well as the
	domain name need to be enabled in properties of the Client for Microsoft
	Networks. This will in no way affect the performance of the Windows 95
	networking services nor impair its ability to communicate with Windows NT FPNW
	and/or Novell NetWare servers on the network.
	
	The order in which the network clients load will not affect the Microsoft
	Exchange Windows 95 client's ability to communicate with Microsoft Exchange
	Server either.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: ipx spx VLM NETX
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
