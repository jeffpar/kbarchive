---
layout: page
title: "Q165677: WD97: Outlook Item Pasted as Text into Word or WordMail"
permalink: /kb/165/Q165677/
---

## Q165677: WD97: Outlook Item Pasted as Text into Word or WordMail

{% raw %}

	Article: Q165677
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
	
	When you paste an Outlook item into Word or a WordMail message, you get the text
	of the item header and not an embedded Outlook item object.
	
	NOTE: This functions correctly when you paste an Outlook item into an Outlook
	message (not using WordMail).
	
	CAUSE
	=====
	
	The Windows 95 Clipboard does not support the functionality necessary to embed
	Outlook items into Word or WordMail.
	
	WORKAROUND
	==========
	
	To embed the Outlook item as an object in Word, use the following steps:
	
	1. Select the item in Outlook.
	
	  For example, select a message from the Outlook inbox. Do not open the Outlook
	  message.
	
	2. Click and hold the mouse button, drag the item to Word or a WordMail message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	In Outlook, an item is the basic element that holds information (similar to a
	file in other programs). Items include mail messages, appointments, contacts,
	tasks, journal entries, and notes.
	
	Additional query words: O97 outlook object drag drop copy paste
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
