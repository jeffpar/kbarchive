---
layout: page
title: "Q178312: XADM: Removing the Active Server Component Fails"
permalink: kb/178/Q178312/
---

## Q178312: XADM: Removing the Active Server Component Fails

	Article: Q178312
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Setup, selecting "Reinstall" or "Add/Remove" to
	remove the Active Server Component will fail with one or both of the following
	pop-up error messages:
	
	  Processing file "D:\setup\I386\webcon.uns" at or near line 16.
	  The system cannot find the file specified.
	  Microsoft Windows NT
	  ID No: 0xc0020002
	
	  System cannot find the file specified.
	  Microsoft Windows NT
	  ID No: 0xc0020002
	
	This also applies to applying Service Pack 2 to Exchange Server 5.5 in a
	clustered environment, on the second node. The server had Microsoft Internet
	Information Server (IIS) 3.0, and Outlook Web Access (OWA) installed (OWA is not
	supported in a clustered environment).
	
	CAUSE
	=====
	
	The Active Server Pages (ASP) in Windows NT were removed before the Active
	Server Component was removed from Exchange. A registry key that is required for
	the Exchange Server Setup program to operate is deleted when the ASP is removed.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps: WARNING: If you use
	Registry Editor incorrectly, you may cause serious problems that may require you
	to reinstall your operating system. Microsoft cannot guarantee that you can
	solve problems that result from using Registry Editor incorrectly. Use Registry
	Editor at your own risk.
	
	1. Reinstall Active Server Pages on the server.
	
	2. On the Start menu, click Run.
	
	3. In the Open box, type "Regedt32" (without the quotation marks).
	
	4. In the Windows Registry Editor, click HKEY_Local_Machine on Local Machine on
	  the Window menu.
	
	5. Select System\CurrentControlSet\Services\MSExchangeWEB\Parameters.
	  a. If MSExchangeWEB or Parameters does not exist, Highlight the folder to add
	     it to (Services or MSExchangeWEB).
	
	  b. On the Edit menu, select Add Key and enter the name "MSExchangeWEB or
	     Parameters" (without the quotation marks).
	
	  c. Click OK.
	
	6. With Parameters selected, select Add Value from the Edit menu.
	
	7. Type "Server" (without the quotation marks) in the Value Name field.
	
	8. Set the type to REG_SZ and click OK.
	
	9. In the String dialog box, enter the server's name (all in capital letters)
	  and click OK.
	
	10. Start the Exchange Server Setup program and select Add/Remove and deselect
	  Active Server Components.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
