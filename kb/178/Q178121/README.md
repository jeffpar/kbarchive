---
layout: page
title: "Q178121: WD97: No Password Prompt for &quot;Modify&quot; in Mail Client"
permalink: /kb/178/Q178121/
---

## Q178121: WD97: No Password Prompt for &quot;Modify&quot; in Mail Client

{% raw %}

	Article: Q178121
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a document protected with a "modify" password, you may not be
	prompted for the password if the document exists in a Microsoft Exchange or
	Microsoft Outlook mail folder.
	
	NOTE: To protect a document against unauthorized modifications, in Word, click
	Save As on the File menu, click Options, and type a password in the Password To
	Modify box.
	
	WORKAROUND
	==========
	
	To work around this problem, save or move the document to a directory on a disk
	drive. To do this, follow these steps:
	
	1. In Microsoft Exchange or Microsoft Outlook, open the Mail message containing
	  the word document.
	
	2. Click to select the document.
	
	3. On the File menu, click Save Attachments.
	
	4. Switch to the directory where you want to save the document.
	
	5. Click Save.
	
	When you open the document from this new location, you will be prompted for a
	password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about protecting documents, click the Office Assistant,
	type "restrict access," click Search, and then click to view "Protect a
	document."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	  Additional query words:
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
