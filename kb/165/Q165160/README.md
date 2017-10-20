---
layout: page
title: "Q165160: WD97: Items Missing from Message Using &quot;Send To Mail Recipient&quot;"
permalink: /kb/165/Q165160/
---

## Q165160: WD97: Items Missing from Message Using &quot;Send To Mail Recipient&quot;

{% raw %}

	Article: Q165160
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Send To Mail Recipient in Microsoft Word, the following items
	will be not be sent as part of the e-mail message:
	
	- OLE Objects
	
	- Tables
	
	- Document Formatting
	
	- Clipart
	
	NOTE: The text of the Word document is sent to the mail recipient.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Save and close your Word document.
	
	2. In Microsoft Outlook, ensure that Word is selected as your e-mail editor.
	
	  NOTE: If you do not have Microsoft Outlook installed, you will need to run
	  Office 97 setup to install Outlook.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q159476 How to Enable, Disable Microsoft Word as the E-Mail Editor
	
	3. Start a new mail message and place the insertion point in the message area.
	  Then, on the Insert menu, click File.
	
	4. Click the document you saved in Word, clear the "As attachment" check box,
	  and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
