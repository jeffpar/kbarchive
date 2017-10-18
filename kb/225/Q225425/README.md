---
layout: page
title: "Q225425: WD97: Fax Fails with Check Names Dialog Box, Error Message"
permalink: kb/225/Q225425/
---

## Q225425: WD97: Fax Fails with Check Names Dialog Box, Error Message

	Article: Q225425
	Product(s): Word 97 for Windows
	Version(s): 5,97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Internet Explorer version 5 for Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send to a fax recipient from Microsoft Word (on the File menu, point to
	Send To and then click Fax Recipient), after you click Send Fax Now, the fax is
	not sent and the Check Names dialog box appears with the following error
	message:
	
	  No matches found for '[FAX:<faxnumber>]
	
	  (No Matches Found)
	
	CAUSE
	=====
	
	After you installed Microsoft Internet Explorer 5, Microsoft Outlook Express may
	have been set as the default mail client, which provides simple MAPI services.
	These simple MAPI services are incompatible when using Microsoft Fax and
	Microsoft Word 97 for Windows.
	
	RESOLUTION
	==========
	
	To correct this problem, change the default mail client using the following
	steps:
	
	1. Start Internet Explorer 5.
	
	2. On the Tools menu, click Internet Options.
	
	3. Click to select the Programs tab.
	
	4. Change the E-mail box to Microsoft Outlook.
	
	5. Click OK.
	
	NOTE: After you change the default mail client in Internet Explorer 5, you must
	restart Word and re-send your document to the fax recipient.
	
	For additional information about changing the default e-mail client, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q154359 How to Change Default Mail Client for Internet Explorer
	
	MORE INFORMATION
	================
	
	After installing Microsoft Internet Explorer 5, when Microsoft Outlook Express
	was first started, the following message was displayed:
	
	  Outlook Express is not currently your default mail client. Would you like to
	  make it your default mail client?
	
	If you answered Yes, Microsoft Outlook Express was set as your default mail
	client.
	
	For additional information about Microsoft Fax, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q187979 OL98: (CW) Windows Messaging and Microsoft Fax with Windows 98
	
	
	  Q169755 WD97: Troubleshooting Fax Problems from Word
	
	  Q166952 WD97: Unable to Send to Fax Recipient from Word
	
	
	Additional query words: ie ie5 msfax awfax
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbIEsearch kbWord97 kbWord97Search kbZNotKeyword2 kbIE500Search kbZNotKeyword3 kbIE98Search kbIE500Win98
	Version           : :5,97
	Issue type        : kbprb
	
	=============================================================================
	
