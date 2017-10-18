---
layout: page
title: "Q247813: XCLN: Messages Not Saved to Drafts Folder"
permalink: kb/247/Q247813/
---

## Q247813: XCLN: Messages Not Saved to Drafts Folder

	Article: Q247813
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook can be configured to save unsent messages to a folder at specified
	intervals. If you are typing in the message for an extended period of time, this
	interval of time may elapse without the message being saved to the specified
	folder. However, when you stop typing, the message is saved to the specified
	folder within a few seconds.
	
	NOTE: The default is to save unsent messages every 3 minutes to the Drafts
	folder.
	
	CAUSE
	=====
	
	This behavior is by design. Microsoft Outlook needs some idle time to process
	the AutoSave feature.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can make use of the AutoRecover feature that
	is built into Microsoft Word by following these steps:
	
	1. Start Microsoft Word.
	
	2. On the Tools menu, click Options.
	
	3. Click the Save tab.
	
	4. Change the AutoRecover setting to 1 minute, or whatever length of time you
	  want, and then click OK.
	
	5. Quit Microsoft Word.
	
	6. Start Microsoft Outlook.
	
	7. On the Tools menu, click Options.
	
	8. Click the Mail Format tab.
	
	9. Click to select the Use Microsoft Word to edit e-mail messages check box.
	
	10. Click OK.
	
	Microsoft Outlook inherits the setting in Microsoft Word and saves unsent
	messages to the specified folder at the specified interval, even if you have
	been continuously typing through the time interval.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,98
	Issue type        : kbprb
	
	=============================================================================
	
