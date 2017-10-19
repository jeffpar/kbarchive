---
layout: page
title: "Q320022: XCLN: How to Use the Mdbvu32 Utility to Remove Inbox Rules"
permalink: /kb/320/Q320022/
---

## Q320022: XCLN: How to Use the Mdbvu32 Utility to Remove Inbox Rules

	Article: Q320022
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2002 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Mdbvu32 utility to remove Inbox rules that
	that you may not be able to remove by other means, including the CleanSweep
	utility.
	
	NOTE: The Mdbvu32 utility is located on the Microsoft Exchange Server CD. You run
	the Mdbvu32 utility on the computer that is running Microsoft Outlook.
	
	MORE INFORMATION
	================
	
	To use the Mdbvu32 utility to remove Inbox rules, follow these steps:
	
	1. Start the Mdbvu32.exe utility on the client computer. This utility is located
	  on your Exchange Server CD in the CD-ROM_Drive\Server\Support\Utils\I386
	  folder.
	
	2. Click OK, select your profile in the Choose Profile dialog box, and then
	  click OK.
	
	3. In the "MDB Viewer Test Application" dialog box, click OpenMessageStore on
	  the MDB menu.
	
	4. Make sure that your mailbox is selected, and then click Open.
	
	5. Click Open Root Folder on the MDB menu.
	
	6. In the MAPI_Folder-Root dialog box, double-click Top of Information Store in
	  the Child Folders list.
	
	7. In the "MAPI_Folder-Top of Information Store" dialog box, double-click Inbox
	  in the Child Folders list.
	
	8. Examine the contents of the "Associated Messages in Fld" list where all your
	  rules are listed. Click the rule that you want to delete (to examine rule's
	  properties, double-click it).
	
	9. In the "Operations available (Select operation, then push Call Function
	  button)" text box, click the down arrow to open the list of available
	  functions.
	
	10. Click "lpFld ->DeleteMessages() (ON SELECTED MSGS)", and then click Call
	  Function.
	
	11. In the "MAPI_FOLDER - Inbox ->DeleteMessages()" dialog box, click OK to
	  delete the rule that you selected.
	
	12. Click Close three times.
	
	13. In the "MDB Viewer Test Application" dialog box, click Store Logoff on the
	  MDB menu, and then click OK twice.
	
	14. In the "MDB Viewer Test Application" dialog box, click Exit on the Session
	  menu.
	
	REFERENCES
	----------
	
	For additional information about the CleanSweep tool, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q174045 Installing and Using the CleanSweep Tool
	
	For additional information about the Mdbvu32 tool, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q250338 XADM: Mdbvu32 Enhancements for Viewing/Managing Rules Messages
	
	Additional query words: outlook
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook2002 kbZNotKeyword2 kbOutlook2000Search kbOutlook2002Search kbExchange2000Search kbOutlook98Search kbZNotKeyword3 kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
