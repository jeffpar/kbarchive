---
layout: page
title: "Q167752: XWEB: Web Client Fails with NTLM"
permalink: kb/167/Q167752/
---

## Q167752: XWEB: Web Client Fails with NTLM

	Article: Q167752
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an Internet browser to connect to a mailbox on an Exchange Server
	computer configured for Windows NT Challenge/Response (NTLM) password
	authentication, the following error message may appear:
	
	  Internet Explorer cannot open the Internet site
	  http:///logonfrm.asp?mailbox=
	  An unexpected error has occurred. Restart Internet explorer and then try
	  again.
	
	CAUSE
	=====
	
	The Microsoft Exchange Windows 95 client and Web client currently require that
	the Microsoft Client for Microsoft Networks redirector (Vredir.vxd) be installed
	on the Windows 95 client. Because Microsoft Exchange uses integrated security
	with the Windows NT Directory Services, the Microsoft Exchange client needs
	validation from a Windows NT domain controller. For NetWare-only environments
	using Microsoft Exchange Server, this means both the Microsoft Network
	redirector and a NetWare redirector must be installed on a Windows 95 client.
	
	This limitation is a result of the way the NTLM security subsystem was designed
	on Windows 95 and is not a limitation of the Microsoft Exchange Windows 95
	client. The Microsoft Exchange Windows 3.x and Microsoft Exchange Windows NT
	clients do not have this requirement.
	
	WORKAROUND
	==========
	
	An updated NTLM security DLL fixes this problem so that the Microsoft redirector
	is no longer needed for the Exchange client to get validated. It should be
	placed in the Windows\System subdirectory. This updated DLL is found in the
	Windows 95 DCOM update on:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WinNT:5.0,5.5
	
	=============================================================================
	
