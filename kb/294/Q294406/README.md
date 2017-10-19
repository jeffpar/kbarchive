---
layout: page
title: "Q294406: XIMS: IMAP Cannot Open Appointment Items by Using SSL"
permalink: /kb/294/Q294406/
---

## Q294406: XIMS: IMAP Cannot Open Appointment Items by Using SSL

	Article: Q294406
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbFEA kbExchange550SP5Fea
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When an Outlook user sends a meeting request to a user who uses a Post Office
	Protocol version 3 (POP3) or Internet Message Access Protocol (IMAP) client,
	that user may not be able to open the meeting request in the POP3 or IMAP
	client. The Uniform Resource Locator (URL) for the meeting request may not
	work.
	
	This behavior occurs if Microsoft Outlook Web Access (OWA) is configured to use
	only Secure Sockets Layer (SSL); the meeting request URL that is generated for
	the POP3 or IMAP clients is stamped with "http:" rather than "https:".
	
	MORE INFORMATION
	================
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior
	described in this article and should be applied only to systems having a
	specific need for it. This feature may receive additional testing at a later
	time, to further ensure product quality. Therefore, if you are not severely
	affected by the lack of this feature, Microsoft recommends that you wait for the
	next Microsoft Exchange Server version 5.5 service pack that contains this
	feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.81 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this feature requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
	After you apply this Store.exe feature fix, if OWA is configured to use SSL only,
	you need to edit the registry on the Exchange Server computer.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	If OWA is configured to use SSL only, perform the following steps on the Exchange
	Server computer:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: OWA Url Protocol
	  Data type: Reg_SZ
	  Value data: https:
	
	4. Quit Registry Editor.
	
	NOTE: Data must end with a colon (:).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA kbExchange550SP5Fea 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
