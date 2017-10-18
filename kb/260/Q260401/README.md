---
layout: page
title: "Q260401: XADM: Install Doesn't Work on Stand-Alone Windows 2000 Server"
permalink: kb/260/Q260401/
---

## Q260401: XADM: Install Doesn't Work on Stand-Alone Windows 2000 Server

	Article: Q260401
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 on a stand-alone Windows 2000
	Server-based computer, the following error message may be displayed:
	
	  This computer must belong to a Windows NT domain before Microsoft Exchange
	  can be installed.
	
	CAUSE
	=====
	
	This issue can occur because the computer that you want to install Exchange
	Server on must be a member of either a Microsoft Windows NT or Windows 2000
	domain, and cannot be part of a workgroup.
	
	A stand-alone server, by definition, is a computer that runs Windows 2000 Server
	but does not participate in a domain. A stand-alone server has only its own
	database of users, and it processes logon requests by itself. It does not share
	account information with any other computer and cannot provide access to domain
	accounts.
	
	RESOLUTION
	==========
	
	To resolve this issue, add your Windows 2000 Server to an existing Windows NT
	4.0 or Windows 2000 domain:
	
	1. On the desktop, right-click My Computer.
	
	2. On the Network Identification tab, click Properties.
	
	3. Under Member Of, click Domain.
	
	4. Type the name of the domain that you want to join.
	
	  NOTE: You may be prompted for the user name and password of an account that
	  has permissions to join the domain.
	
	5. Click OK.
	
	6. A message is displayed that states the following:
	
	  Welcome to the <your_domain_name> domain.
	
	7. Click OK. You are prompted to restart the server to complete the process of
	  joining the domain.
	
	If you want to create a new domain with your Windows 2000 Server-based computer,
	you can run the dcpromo command (click Start, and then click Run). For
	additional information about the Dcpromo utility and the Windows 2000 Active
	Directory, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q238369 How to Promote and Demote Domain Controllers in Windows 2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
