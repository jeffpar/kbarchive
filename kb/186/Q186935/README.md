---
layout: page
title: "Q186935: XWEB: Saving Attachment in OWA Causes File Size to Increase"
permalink: /kb/186/Q186935/
---

## Q186935: XWEB: Saving Attachment in OWA Causes File Size to Increase

{% raw %}

	Article: Q186935
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you save a file attachment in the Microsoft Outlook Web Access (OWA) client,
	the file size may increase by two or three bytes from the original file size.
	
	CAUSE
	=====
	
	This behavior is due to the manner in which the Web browser handles saving ASP
	files. Microsoft Internet Explorer adds two bytes, a carriage return and line
	feed (CR+LF), to the end of the file when it is saved. Netscape Navigator adds
	three bytes (CR+LF+LF) to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: bigger grow
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
