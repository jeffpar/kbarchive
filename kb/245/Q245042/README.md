---
layout: page
title: "Q245042: XFOR: Invalid PO Name or Pwd Error Migrating cc:Mail Mobile User"
permalink: kb/245/Q245042/
---

## Q245042: XFOR: Invalid PO Name or Pwd Error Migrating cc:Mail Mobile User

	Article: Q245042
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are migrating a Lotus cc:Mail Mobile (cc:Mobile) user, the Exchange
	Server Migration wizard generates an error that indicates that the post office
	name and/or password is invalid.
	
	RESOLUTION
	==========
	
	If the cc:Mobile user's database has been copied to a network or local drive and
	the Migration wizard is pointed to the correct path of the user's database, then
	you need to type the post office name and password information as follows:
	
	  postoffice name = LOCALPO
	
	  password = <the user's cc:Mobile mailbox password>
	
	MORE INFORMATION
	================
	
	For additional migration strategies, refer to the "Lotus cc:Mail and Exchange
	Server Coexistence and Migration" white paper located at the following Web
	site:
	
	  http://www.microsoft.com/exchange/techinfo/deployment/default.asp
	
	Additional query words: ccmc, cc:Mail, migrate, remote
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
