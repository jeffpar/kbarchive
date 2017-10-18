---
layout: page
title: "Q185971: XCLN: Err Msg: Unable to Display Folder. You Do Not Have ..."
permalink: kb/185/Q185971/
---

## Q185971: XCLN: Err Msg: Unable to Display Folder. You Do Not Have ...

	Article: Q185971
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Calendar folder for a mailbox that you have been given
	permission on an untrusted Windows NT domain, you will not be able to open the
	folder and you will receive the following message:
	
	  Unable to display the folder. You do not have permission to log on.
	
	CAUSE
	=====
	
	You do not have permission to access any resource on an untrusted Windows NT
	domain.
	
	WORKAROUND
	==========
	
	To work around this problem, establish a trust relationship so that the user's
	Windows NT domain is trusted by the Windows NT domain where the mailbox is
	located.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
