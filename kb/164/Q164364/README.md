---
layout: page
title: "Q164364: Error Adding a Second Printer in Print Manager Defined by Pserv"
permalink: /kb/164/Q164364/
---

## Q164364: Error Adding a Second Printer in Print Manager Defined by Pserv

	Article: Q164364
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Services for NetWare is installed on a backup domain controller (BDC) and a
	second logical printer is added and shared from a Novell print server running
	Pserver.nlm, you may receive the following message:
	
	  Access Denied.
	
	This happens even if the passwords under File and Print services for NetWare
	(FPNW), Print Server in Server Manager and the Print Server Account in User
	Manager are left blank or are removed and reset to be the same.
	
	This error even occurs if you follow the steps outlined in the Services for
	NetWare Administrator's Guide for version 4.0 page 60, "Setting up a Print
	Server to Service a Printer Queue on a Different File Server" exactly.
	
	Event 539 "logon failed..." is recorded in the Security Log of Event Viewer,
	indicating that the <print server account> logon was unsuccessful and the
	account is locked out.
	
	CAUSE
	=====
	
	FPNW is installed on a BDC, but not on the primary domain controller (PDC) of
	the domain.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q150540
	  TITLE : FPNW on Domain Must be Installed on PDC
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch
	Version           : WINNT:3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
