---
layout: page
title: "Q197059: XFOR: POP3 Clients Cannot Log In with CTA via Membership Server"
permalink: /kb/197/Q197059/
---

## Q197059: XFOR: POP3 Clients Cannot Log In with CTA via Membership Server

	Article: Q197059
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55sp2fea
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	POP3 clients cannot gain access to a Microsoft Exchange Server information store
	when logging on using clear text authentication and the authentication type for
	the POP3 interface in Exchange Server is configured to be MCIS Authentication
	(meaning it will use Membership Server). In Exchange Server 5.5, there is
	currently no provision to allow clear text authentication through Membership
	Server.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for POP3 clients to be authenticated with clear
	text authentication through Membership Server. We have modified Exchange Server
	5.5 so that it is now possible for POP3 clients to access an Exchange Server
	using clear text authentication through Membership Server.
	
	To obtain this feature, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this feature should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2445.0
	  Mdbmsg.dll   5.5.2445.0
	  Store.exe    5.5.2445.0
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	In addition to the new files noted above, the following registry changes must be
	made to enable this functionality. To make the registry changes, perform the
	following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Stop the Microsoft Exchange Information Store service.
	
	2. Apply the fixed files noted above.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. Go to the following location in the registry:
	
	    HKEY_LOCAL_MACHINE\CurrentControlSet\Services\MSExchangeIS
	    \ParametersSystem
	
	5. On the Edit menu, click Add Value.
	
	6. In the Value Name box, type MBS Package.
	
	7. Set the Data Type to REG_SZ.
	
	8. Click OK.
	
	9. In the String box type MBS_BASIC.
	
	10. Click OK.
	
	11. Again, on the Edit menu, click Add Value.
	
	12. In the Value Name box, type MSB Broker.
	
	13. Set the Data Type to REG_SZ.
	
	14. Click OK.
	
	15. In the String box, type the instance ID of the MBIS broker instance (for
	  example, 3).
	
	16. Click OK, and quit Registry Editor.
	
	17. Restart the Microsoft Exchange Information Store service.
	
	Additional query words: MCIS Site Server
	======================================================================
	Keywords          : kbFEA exc55sp2fea 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
