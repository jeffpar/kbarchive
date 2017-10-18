---
layout: page
title: "Q246286: XADM: Exchange Server Setup Stops When You Stop System Attendant"
permalink: kb/246/Q246286/
---

## Q246286: XADM: Exchange Server Setup Stops When You Stop System Attendant

	Article: Q246286
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are installing Microsoft Exchange Server 5.5, the installation process
	may halt when Setup attempts to stop the System Attendant service. The following
	error messages may appear:
	
	  The requested control is not valid for this service.
	  Microsoft Windows NT ID NO: 0xc002041c
	
	  Microsoft Exchange Server was interrupted before the new software was fully
	  installed. You can run Exchange setup in its entirety at another time.
	
	When you try to stop the service manually, the following error message may
	appear:
	
	  The requested pause or stop is not valid for this service.
	
	WORKAROUND
	==========
	
	To work around this behavior, completely remove and then reinstall Exchange
	Server.
	
	MORE INFORMATION
	================
	
	When you remove Exchange Server, you may need to delete some registry keys. For
	more proper instructions, please contact Microsoft Product Support Services.
	
	NOTE: Technical support charges may apply.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q259158 XADM: How to Manually Remove Exchange Server 5.5 Completely
	
	Additional query words: SA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
