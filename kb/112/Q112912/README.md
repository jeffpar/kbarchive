---
layout: page
title: "Q112912: PC Win: Duplicate Header of WELCOME.GLB Message"
permalink: /kb/112/Q112912/
---

## Q112912: PC Win: Duplicate Header of WELCOME.GLB Message

{% raw %}

	Article: Q112912
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.2 of Microsoft Mail for Windows will display duplicate header
	information in the body of the welcome message if there are fewer than 78 dashes
	separating the header information from the message text in the WELCOME.GLB
	file.
	
	In addition, if the subject was modified and there are fewer than 78 dashes, the
	modified subject will appear in the duplicated header information, but the
	original subject, "Welcome to the Mail System," will still be displayed in the
	header.
	
	If the number of dashes is greater than 78, the header will not be duplicated and
	the modified subject will appear in the header; however, the additional dashes
	will appear as the first characters in the welcome message.
	
	This behavior only exists in Mail for Windows.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
