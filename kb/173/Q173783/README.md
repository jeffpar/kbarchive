---
layout: page
title: "Q173783: WD97: Web Browser Cannot Open a Mailed or Routed HTML File"
permalink: /kb/173/Q173783/
---

## Q173783: WD97: Web Browser Cannot Open a Mailed or Routed HTML File

{% raw %}

	Article: Q173783
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Hypertext Markup Language (HTML) document icon that was
	sent to you in Microsoft Word 97 using the "Send To Mail Recipient" or "Send To
	Routing Recipient" command, you may receive the following error message:
	
	  Internet Explorer cannot open file: <Path>
	  Internet Explorer cannot open file: <Path>
	
	CAUSE
	=====
	
	When you send an HTML document in Word with the "Send To Mail Recipient" or
	"Send To Routing Recipient" command, the full HTML format is not preserved;
	therefore, Microsoft Internet Explorer does not recognize the file format.
	
	WORKAROUND
	==========
	
	To work around this problem, save and close the HTML file and send it to the
	recipient as an e-mail attachment. To do this, follow these steps:
	
	1. In Word, click Save As on the File menu.
	
	2. In the Save As Type list, click to select HTML Document. Type a name in the
	  File Name box, and then click Save.
	
	3. On the File menu, click Close to close the document.
	
	4. In your e-mail program, create a new message, insert the HTML file from step
	  2 as an attachment, and then send the message to the recipient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	For additional information about Web page authoring, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q159948 WD97: General Information About Web Page Authoring
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kberrmsg word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
