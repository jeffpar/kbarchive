---
layout: page
title: "Q182518: XADM: Exchange Server Setup.log File Is Unreadable In Wordpad"
permalink: /kb/182/Q182518/
---

## Q182518: XADM: Exchange Server Setup.log File Is Unreadable In Wordpad

{% raw %}

	Article: Q182518
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to open the Exchange Server Setup.log file in any other word-
	processing application other than Notepad, the file will appear unreadable.
	
	CAUSE
	=====
	
	The format of the Exchange Server Setup.log file was intended to be opened in
	Notepad with the Fixedsys font.
	
	WORKAROUND
	==========
	
	To make the Exchange Server Setup.log file partially readable, you can change
	the font to a non-true type font (such as System or Fixedsys) by following these
	steps:
	
	1. In Wordpad (Write.exe), choose Select All from the Edit menu.
	
	2. From the Format menu, select Font.
	
	3. In the Font dialog box, choose the System font.
	
	MORE INFORMATION
	================
	
	If the Exchange Server Setup.log file is too large to be opened in Notepad, the
	system will default to open the file in Wordpad if it is installed.
	
	Additional query words: word boxes write.exe wordpad.exe notepad.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
