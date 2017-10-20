---
layout: page
title: "Q149045: XCLN: RPC Files Installed w/ Windows 3.x &amp; MS-DOS Clients"
permalink: /kb/149/Q149045/
---

## Q149045: XCLN: RPC Files Installed w/ Windows 3.x &amp; MS-DOS Clients

{% raw %}

	Article: Q149045
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange 4.0 clients use Remote Procedure Calls (RPC) to communicate
	with the Microsoft Exchange server. The support for RPC is built into the
	operating system for both Windows NT and Windows 95. In MS- DOS and Windows 3.x
	however, the supporting files are installed when the Microsoft Exchange client
	is installed.
	
	MORE INFORMATION
	================
	
	Following is a list of the RPC files that are installed with the Microsoft
	Exchange clients for MS-DOS and Windows 3.x:
	
	RPC Transport    MS-DOS Client    Windows 3.x Client
	-------------    -------------    ------------------
	Named Pipes      RPC16C1.RPC      RPC16C1.DLL
	TCP/IP           RPC16C3.RPC      RPC16C3.DLL
	SPX              RPC16C6.RPC      RPC16C6.DLL
	UDP              RPC16DG3.RPC     RPC16DG3.DLL
	IPX              RPC16DG6.RPC     RPC16DG6.DLL
	NetBIOS          RPC16C5.RPC      RPC16C5.DLL
	DECNet           RPC16C4.RPC      RPC16C4.DLL
	Banyan Vines                      RPC16C8.DLL
	
	NOTE: In the list, the C after the 16 indicates that the file is for client side
	RPC using the listed transport. The DG indicates Data Grams. The last number in
	the file name indicates the transport. You can use this to locate the RPC files
	on Windows NT and Windows 95.
	
	If one of the client-side RPC files is deleted, the client may not be able to use
	the listed transport to communicate with the Microsoft Exchange Server by way of
	RPC.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
