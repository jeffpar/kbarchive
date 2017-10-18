---
layout: page
title: "Q259894: XCLN: Error Closing PowerPoint Presentation from Public Folder"
permalink: kb/259/Q259894/
---

## Q259894: XCLN: Error Closing PowerPoint Presentation from Public Folder

	Article: Q259894
	Product(s): Microsoft Exchange
	Version(s): 2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft PowerPoint 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you close a PowerPoint presentation that was opened from an Exchange Server
	public folder, you may receive an error message that is similar to the
	following:
	
	  Unable to save changes to the document. Your changes will be placed in the
	  temporary file, 'c:\temp\filename.ppt'. You can copy this file into the
	  original folder if you want to recover your changes to the original document.
	  The operation failed.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply Microsoft Office 2000 Service Pack 2 (SP2). For
	additional information about how to obtain Office 2000 SP2, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q276367 OFF2000: How to Obtain the Latest Office 2000 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior occurs if the following conditions exist:
	
	- You have Reviewer (read-only) permissions to the Exchange Server public
	  folder.
	
	- You did not make any changes to the PowerPoint presentation.
	
	- The PowerPoint presentation that you opened was placed in the Exchange Server
	  public folder by using the drag-and-drop method, instead of by creating the
	  PowerPoint presentation in the public folder.
	
	- You opened the PowerPoint presentation from the Folder List pane, and not the
	  Preview pane.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbPowerPtSearch kbExchangeSearch kbExchange550 kbPowerPt2000 kbPowerPt97 kbZNotKeyword2 kbPowerPt2000Search kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbPowerPt97Search kbZNotKeyword3
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
