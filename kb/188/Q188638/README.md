---
layout: page
title: "Q188638: XCLN: Equations in Msg. from cc:Mail PO Appear Wrong in Outlook"
permalink: kb/188/Q188638/
---

## Q188638: XCLN: Equations in Msg. from cc:Mail PO Appear Wrong in Outlook

	Article: Q188638
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Formulas in the body of a message sent from a user on a cc:Mail postoffice to a
	mailbox in Exchange are not displayed correctly for the Exchange user. If the
	message is composed with an equation in cc:Mail (for example: 44+55=099) and
	sent to Exchange, an Exchange client converts the equation to:
	
	   44+55    9
	
	when the message is opened.
	
	CAUSE
	=====
	
	The autoformat of plain text documents causes the client to do the conversion.
	This problem only occurs when you are using Outlook with Word as your e-mail
	editor and receive a message from a cc:Mail postoffice.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Open Microsoft Word.
	
	2. On the Tools menu, select AutoCorrect.
	
	3. Click the AutoFormat tab.
	
	4. Clear the "Plain text WordMail documents" check box.
	
	5. Click OK after clearing this check box.
	
	The equation in the message will no longer be converted.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : WINDOWS:; winnt:4.0,5.0,5.5; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
