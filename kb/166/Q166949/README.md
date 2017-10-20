---
layout: page
title: "Q166949: WD97: Unable to Fax When You Start Word the First Time"
permalink: /kb/166/Q166949/
---

## Q166949: WD97: Unable to Fax When You Start Word the First Time

{% raw %}

	Article: Q166949
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have Outlook 97 and Word 97 installed on your computer and you try to fax
	to an Outlook Contact without starting Word 97 at least once, Word appears to
	stop responding (hang) during the faxing process.
	
	CAUSE
	=====
	
	The first time you start Word (or any Office 97 program), you are prompted for
	the user name and initials. If Word is started for the first time from a fax
	request, the dialog box requesting user information is displayed. However, Word
	does not have the focus, so Word appears to hang (in actuality, Word is waiting
	for the user information).
	
	RESOLUTION
	==========
	
	To resolve this problem, switch to Word 97, type the user information, and click
	OK in the dialog box. The fax will continue to be sent.
	
	Future faxing will not have this problem, because Word only needs the user
	information to be entered the first time it is started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about faxing, click the Office Assistant, type "faxing,"
	click Search, and then click "Create and send a fax with the fax wizard."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information on troubleshooting faxing problems, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q137161 Isolating Fax Problems in Word
	
	
	Additional query words: ol97
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
