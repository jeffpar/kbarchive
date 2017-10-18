---
layout: page
title: "Q225461: Outlook Contacts Are Not Accessible from Fax Send Utility on SBS"
permalink: kb/225/Q225461/
---

## Q225461: Outlook Contacts Are Not Accessible from Fax Send Utility on SBS

	Article: Q225461
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Outlook 2000 is installed on a computer running Microsoft
	BackOffice Small Business Server, the Address Book button in the Compose New Fax
	dialog box becomes available (normally, it is unavailable). When you click
	Address Book, the program starts, however, Outlook contacts are not displayed in
	the list.
	
	Faxes sent from Outlook can use contacts and function normally. The problem
	occurs only on the server and only when using the Fax Send utility or the Office
	2000 "Send as Attachment" commands.
	
	CAUSE
	=====
	
	This problem occurs because of a design change in Outlook 2000. For non-Outlook
	programs to use Outlook contacts, a special version of MAPI must be installed.
	The Small Business Server-based computer has Microsoft Exchange Server
	installed. Exchange Server installs its own version of MAPI. For performance
	reasons, the Exchange Server version of MAPI is not replaced by the Outlook
	version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
