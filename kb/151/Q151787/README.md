---
layout: page
title: "Q151787: XCLN: Error Deleting Schedule+ Meeting Response"
permalink: kb/151/Q151787/
---

## Q151787: XCLN: Error Deleting Schedule+ Meeting Response

	Article: Q151787
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Inbox Client 
	- Microsoft Windows Messaging 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading the Windows 95 Messaging client using the Exupdusa.exe update
	available from http://www.msdn.microsoft.com or when using the Windows Messaging
	client shipped with Windows NT 4.0, deleting a Schedule+ Meeting Response from
	within the clients may return the following error message:
	
	  Your message could not be deleted. An error occurred.
	
	The meeting response will have actually been deleted. The error message is
	erroneous. However, the error message can be confusing. In the case where
	additional meeting requests are automatically displayed according to action
	specified by opening the Tools menu, selecting the Options command, clicking the
	Read tab, and setting the After Moving or Deleting an Open Item listbox, it
	becomes unclear which particular message the error refers to.
	
	
	WORKAROUND
	==========
	
	Upgrade the Windows Messaging client with the Windows Messaging System
	components that ship with Microsoft Exchange Server version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows Messaging client. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinNTInboxClient kbWinMessaging
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
