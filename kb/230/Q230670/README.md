---
layout: page
title: "Q230670: XCLN: URL to PFs Doesn't Work w/Clients of Different Languages"
permalink: /kb/230/Q230670/
---

## Q230670: XCLN: URL to PFs Doesn't Work w/Clients of Different Languages

{% raw %}

	Article: Q230670
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Outlook, you can send a pointer to a public folder in the following format:
	
	  outlook://Public Folders/All Public Folders/testfolder/~test.doc
	
	If this link is sent to a client that uses another language than English, the
	user cannot open the link.
	
	CAUSE
	=====
	
	Unified Resource Locators (URL) to public folders are language-dependent. When
	Outlook opens a URL, it tries to find the folders by name. For an English
	client, it looks for "Public Folders;" on a German client, it looks for
	"Oeffentliche Ordner."
	
	NOTE: This example uses the German translation for the URL, so "Oe" or "oe"
	stands for the letter "O" or "o" with Dieresis.
	
	RESOLUTION
	==========
	
	Use localized URLs when sending Outlook public folders links to users that use
	other language clients.
	
	
	MORE INFORMATION
	================
	
	For example: An English user sends a link of a document called Test.doc to a
	German user and includes the following URL:
	
	  outlook://Public Folders/All Public Folders/testfolder/~test.doc
	
	If the German user tries to open the URL, he or she receives an error message
	that the folder cannot be found.
	
	This happens because the German client is looking for "Public Folders," which
	does not exist for the German client. On the German client, only a URL of
	outlook://Oeffentliche Ordner/Alle oeffentlichen Ordner/testfolder/~test.doc
	would succeed.
	
	Additional query words: OL2K
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
