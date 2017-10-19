---
layout: page
title: "Q242382: XADM: Installing Internet Explorer 4.0 After Exchange Server"
permalink: /kb/242/Q242382/
---

## Q242382: XADM: Installing Internet Explorer 4.0 After Exchange Server

	Article: Q242382
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to run Microsoft Internet Explorer 4.0 and Exchange Server on the
	same computer, install Internet Explorer 4.0 before you install Exchange Server.
	If you install Internet Explorer 4.0 after you install Exchange Server, Internet
	Explorer modifies the MIME registry database, which causes problems for
	international mail, especially mail with double-byte character set (DBCS)
	content. If you have installed Internet Explorer 4.0 after installing Exchange
	Server, complete the procedure in the "More Information" section to correct this
	problem. You can perform the procedure without stopping any Exchange Server
	services.
	
	NOTE: This procedure is not required if you are installing Internet Explorer 4.0
	before you install Exchange Server.
	
	MORE INFORMATION
	================
	
	Copy the Reset.inf file in the Server\Support\Mimedb folder from the Exchange
	Server compact disc to a local hard disk. Right-click on the file, and click
	Install.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
