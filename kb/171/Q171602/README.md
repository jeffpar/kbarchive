---
layout: page
title: "Q171602: WD97: Cannot Insert Address from Schedule+ Address Book"
permalink: /kb/171/Q171602/
---

## Q171602: WD97: Cannot Insert Address from Schedule+ Address Book

{% raw %}

	Article: Q171602
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:1.0,2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbinterop kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	- Microsoft Schedule+ for Windows, versions 1.0, 2.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Microsoft Outlook installed and you select Insert Address in
	Microsoft Word, the Microsoft Schedule+ Contact List is not available.
	
	CAUSE
	=====
	
	This behavior is by design. When Outlook is installed, it becomes the primary
	contact list provider on your system. Other lists are no longer available when
	you select the Insert Address feature from the toolbar, the Letter Wizard, or
	from the Envelope and Labels dialog box.
	
	WORKAROUND
	==========
	
	To work around this problem, import the Schedule+ Contact List into Outlook, and
	then use the Outlook Contact List to insert an address into Word.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q164271 Converting Schedule+ Files to Outlook 97
	
	  Q167337 OL97: How to Import and Export Text Data With Outlook
	
	
	MORE INFORMATION
	================
	
	You can use addresses from an electronic address book or an Outlook 97 or
	Schedule+ 95 contact list by clicking Insert Address in certain dialog boxes and
	wizards.
	
	The Schedule+ Contact List is still available when you select a mail merge data
	source in the Mail Merge Helper. This is because the Open Data Source dialog box
	uses the address book converter rather than MAPI functions to access the list.
	
	Additional query words: contacts schedule plus
	
	======================================================================
	Keywords          : kbinterop kbusage word97 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbOutlook97Search kbZNotKeyword3 kbSchedule100 kbSchedule200
	Version           : WINDOWS:1.0,2.0,7.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
