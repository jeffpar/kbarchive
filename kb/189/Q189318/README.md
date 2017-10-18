---
layout: page
title: "Q189318: Scheduled Fax ThatIncludes Files Is Never Sent"
permalink: kb/189/Q189318/
---

## Q189318: Scheduled Fax ThatIncludes Files Is Never Sent

	Article: Q189318
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows Messaging in Microsoft Windows 95 OEM Service Release 2 to
	create a new fax that is scheduled to be sent at a certain time instead of being
	sent immediately, and you include one or more files with the fax, the fax may
	never be sent.
	
	CAUSE
	=====
	
	This problem occurs when the fax's properties are modified while the fax is
	still in the outbound queue. After the Messaging Application Programming
	Interface (MAPI) dynamic-link library (DLL) is notified that the properties have
	been modified, the DLL may indicate that the properties were modified at the
	same time as the original fax was submitted. As a result, the fax is never sent.
	
	RESOLUTION
	==========
	
	Windows 95 OEM Service Release 2
	--------------------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  ------------------------
	  Mapi.dll     4.0.834.840
	  Mapi32.dll   4.0.834.840
	
	
	Exchange Server 4.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  ----------------------
	  Mapi.dll     4.0.997.1
	  Mapi32.dll   4.0.997.1
	
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  ------------------------
	  Mapi32.dll   5.0.1461.43
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this feature should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  -----------------------
	  Mapi32.dll   5.5.2326.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: delayed
	
	======================================================================
	Keywords          : exc55sp2fix kbExchange500preSP3fix 
	Technology        : kbWin95search kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOPKSearch
	Version           : WINDOWS:; winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
