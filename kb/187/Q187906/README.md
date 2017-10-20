---
layout: page
title: "Q187906: IIS Does Not Let You Save Changes to Web Page"
permalink: /kb/187/Q187906/
---

## Q187906: IIS Does Not Let You Save Changes to Web Page

{% raw %}

	Article: Q187906
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open an .htm file in WordPad and make a change to the file, and then open
	the .htm file in Internet Explorer and try to save the changes made in WordPad,
	the following error message appears:
	
	  The Document <your_page.htm> is in use by another application and
	  cannot be accessed.
	
	CAUSE
	=====
	
	Internet Information Server (IIS) 4.0 caches file handles. If no one requests
	the file or the page is not refreshed for one minute, IIS releases the handle.
	This behavior is by design.
	
	NOTE: IIS opens the page read-only.
	
	WORKAROUND
	==========
	
	To work around this problem, use another editing tool to make the necessary
	changes. Notepad and Visual InterDev are two alternative Microsoft editors.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : 4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
