---
layout: page
title: "Q247927: XCLN: Error Message: Unable to Update Public Free/Busy Data"
permalink: /kb/247/Q247927/
---

## Q247927: XCLN: Error Message: Unable to Update Public Free/Busy Data

	Article: Q247927
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any of the following situations may occur when you work in Microsoft Outlook:
	
	- Outlook may try to write updated free and busy data to the Exchange Server
	  computer, based on the time interval that is set in Outlook.
	
	- You may quit and log off from Outlook.
	
	- You may start Outlook.
	
	When any of these situations occur, the following error message may be
	displayed:
	
	  Unable to update public free/busy data. You do not have sufficient
	  permissions to perform this operation on this object. See the folder contact
	  or your system administrator.
	
	CAUSE
	=====
	
	The default permissions have been changed to None on the Schedule+ Free Busy
	public folder object on the Exchange Server computer. The default permissions
	are set to Editor permissions during installation.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. At the Exchange Server computer, start the Exchange Server Administrator
	  program.
	
	2. Click to expand Folders.
	
	3. Click to expand System Folders.
	
	4. Click to expand Schedule+ Free/Busy.
	
	5. Click the folder for the server or site that is in question, and on the File
	  menu, click Properties.
	
	6. Click the General tab, and then click Client Permissions.
	
	7. Under Default, click Role of Editor, and then click OK.
	
	8. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	
