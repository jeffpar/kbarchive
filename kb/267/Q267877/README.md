---
layout: page
title: "Q267877: Error Message: Username Not Found"
permalink: kb/267/Q267877/
---

## Q267877: Error Message: Username Not Found

	Article: Q267877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When "down-level" clients (Microsoft Windows 95 or Windows 98 clients) log on to
	the domain, they may receive the following error message:
	
	  The username cannot be found.
	
	If the user tries several times, the user may eventually log on correctly.
	
	When Windows 95 or Windows 98 clients receive this error message, the clients may
	be becoming authenticated by an unauthorized ("rogue") domain or domain
	controller (DC) with the same NetBIOS domain name as the normal Microsoft
	Windows 2000 domain, but the domain Security Identification Number (SID) is
	different.
	
	CAUSE
	=====
	
	There may be an unauthorized domain or domain controller on the network with the
	same NetBIOS name as your domain, but with a different SID.
	
	Or, there may be a previously given domain controller with the correct SID, but
	with no valid computer account in the domain. Therefore, the rogue DC is not
	generating errors on the valid DC's and not synchronizing with the primary
	domain controller (PDC), but is still trying to authenticate users.
	
	This domain controller responds to client logon requests and has registered with
	Windows Internet Name Service (WINS), and clients are getting its address when
	requesting 1C information from WINS.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Choose one of the clients that is receiving the error message. On this
	  client, implement the following instructions contained in the following
	  article:
	
	  For additional information about displaying domain logon confirmation in
	  Windows, click the article number below to view the article in the Microsoft
	  Knowledge Base:
	
	  Q150898 How to Display Domain Logon Confirmation in Windows
	
	  This article can help you to determine which domain controllers are validating
	  users correctly.
	
	2. Check all WINS servers for the 1C entry. Obtain the list of domain
	  controllers and check to see if all the entries in WINS are valid.
	
	3. If this still does not locate the rogue domain controller, you must obtain a
	  network trace of the client logging in and obtaining the error message.
	
	4. Once you discover the domain controller that is validating the clients, check
	  the role of the computer by typing the following at a command line:
	
	  net accounts
	
	5. Disconnect the computer from the network and see whether you continue to have
	  client logons. If the clients stop obtaining the error messages while the
	  computer is offline you found the computer.
	
	6. More than likely the unauthorized computer is a Windows NT 3.51 or 4.0 domain
	  controller. The only way to remove it is to reinstall the server. Take the
	  necessary precautions to save data, shares, and files. If the computer is a
	  Microsoft Windows 2000 domain controller, you can Domain Controller Promotion
	  (DCPROMO) it down and DCPROMO it back up to join the correct domain.
	
	MORE INFORMATION
	================
	
	For additional information about saving and restoring existing Windows NT
	shares, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q125996 Saving and Restoring Existing Windows NT Shares
	
	For additional information about restoring share definitions to another server,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q141589 How to Restore Share Definitions to Another Server
	
	Additional query words: win9x
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
