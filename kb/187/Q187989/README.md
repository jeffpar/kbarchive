---
layout: page
title: "Q187989: XCON: No Message Flow Between Servers: IDs 1097, 2124,2171"
permalink: /kb/187/Q187989/
---

## Q187989: XCON: No Message Flow Between Servers: IDs 1097, 2124,2171

{% raw %}

	Article: Q187989
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Message flow is backing up between two Exchange Server 5.0 SP1 computers in the
	same site. Message flow between different sites in the organization is fine. The
	following Event ID 2171 appears:
	
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 88. Database error code: ODXFATAL - Internal
	  or Application Error. Object at fault: 0600004F. Attribute identifier:
	  10. Value number: 1. Referenced object: 00000000 (00000000 => N/A).
	  Referenced object error 0. [DB Server DELIVER 9 26] (14)
	
	You may also see Event IDs 2124 and 1097.
	
	CAUSE
	=====
	
	The Dbserver.sch file in the MTADATA directory is pre-Service Pack 1 (46,787
	bytes). The size of the correct version is 46,777 bytes.
	
	WORKAROUND
	==========
	
	1. Check the size of the Dbserver.sch file by going to Windows Explorer,
	  clicking the File menu, clicking Properties, and clicking Size. If the file
	  size is 46,787 continue with the following steps.
	
	2. Stop the message transfer agent (MTA) and Internet Mail Service.
	
	3. Copy the Dbserver.sch file from the Exchange Server SP1 CD to
	  \exchsrvr\mtadata.
	
	4. Run mtacheck /rp. If you do not run MTACHECK, then messages may still back
	  up.
	
	5. Run mtacheck /rd.
	
	6. Restart the MTA service and Internet Mail Service.
	
	7. Send test messages.
	
	8. Watch the MTA queue between the servers to confirm that messages are not
	  backing up.
	
	9. Also, you must apply latest service pack for Exchange 5.0.
	
	MORE INFORMATION
	================
	
	Service Pack (SP1) or later for Exchange 5.0 is located on FTP.MICROSOFT.COM. It
	is also available on the TechNet CD, starting with the November 1997 version and
	later.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
