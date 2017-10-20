---
layout: page
title: "Q164426: CompuServe Mail Service Does Not Accept Your Name"
permalink: /kb/164/Q164426/
---

## Q164426: CompuServe Mail Service Does Not Accept Your Name

{% raw %}

	Article: Q164426
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are configuring the CompuServe Mail service for Microsoft Exchange
	using the Profile Wizard, you may receive the following warning after you
	complete the CompuServe Account Information page and click Next, even if all the
	fields are filled in:
	
	  Please fill in all of the information requested.
	
	CAUSE
	=====
	
	This behavior can occur if the Your Name field contains only extended
	characters. The Profile Wizard requires at least one standard ASCII character in
	the Your Name box.
	
	RESOLUTION
	==========
	
	To work around this behavior, add one character to the end of the Your Name
	field and finish configuring the profile. Start Microsoft Exchange and then
	click Services on the Tools menu. Click the CompuServe Mail service, click
	Properties, and then delete the extra character from your name.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
