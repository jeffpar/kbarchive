---
layout: page
title: "Q147577: PC Mac: Inserts Carriage Return Before Last Word of Paragraph"
permalink: /kb/147/Q147577/
---

## Q147577: PC Mac: Inserts Carriage Return Before Last Word of Paragraph

{% raw %}

	Article: Q147577
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a message from either Microsoft Mail for Windows or Microsoft Mail
	for PC Networks, MS-DOS or Macintosh workstations, and the last word of a
	paragraph appears on a line by itself, the message was composed by a Mail for PC
	Networks Macintosh workstation on a Mail for PC Networks postoffice.
	
	CAUSE
	=====
	
	The DELETE key was used in the middle of a line or paragraph in which a RETURN
	or "\0" was not entered at the end. The program will add a return to the end of
	the line or paragraph before the last word causing the last word to appear on a
	line of its own.
	
	RESOLUTION
	==========
	
	Press ENTER after you type the last word of a paragraph before you edit the body
	text of the mail message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	for PC Networks, Macintosh workstation. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.5
	
	=============================================================================
	

{% endraw %}
