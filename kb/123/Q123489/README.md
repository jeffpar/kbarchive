---
layout: page
title: "Q123489: Incorrect Keystrokes Reported in Character Map"
permalink: /kb/123/Q123489/
---

## Q123489: Incorrect Keystrokes Reported in Character Map

{% raw %}

	Article: Q123489
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An incorrect keystroke is reported when you are using Character Map and are
	trying to select a character in any of the following locations:
	
	  row 3 col. 32
	  row 4 col.  1
	  row 4 col. 31
	  row 4 col. 32
	
	The incorrect keystroke is reported as CTRL+<character>, where
	<character> can be any alphanumeric character.
	
	This problem occurs with ALL fonts.
	
	
	WORKAROUND
	==========
	
	To generate the proper characters, use the following key combinations:
	
	For this character   Type
	-------------------------
	
	Row 3 column 32      ALT+0127
	Row 4 column  1      ALT+0128
	Row 4 column 31      ALT+0158
	Row 4 column 32      ALT+0159
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.1 and 3.11 of
	Microsoft Windows and Microsoft Windows for Workgroups. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 3.10 font CTRL control
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
