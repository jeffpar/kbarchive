---
layout: page
title: "Q164184: Associating Index Server File Types for Filtering"
permalink: /kb/164/Q164184/
---

## Q164184: Associating Index Server File Types for Filtering

{% raw %}

	Article: Q164184
	Product(s): Internet Information Server
	Version(s): winnt:1.1; :
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a query, the abstract shows HTML code instead of useful data.
	
	CAUSE
	=====
	
	If an HTML file is filtered, but it does not have an .html, .htm, .asp, .htx
	file extension, then the file will not be filtered with the HTML file filter.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	NOTE: These registry entries are ONLY FOR HTML files.
	
	Using the registry editor, create a file association for the file type under
	HKEY_CLASSES_ROOT. Create a key for the file extension, and place the following
	values in the key.
	
	Name: (Default) <-- Note that this entry is blank
	String Value = "htmlfile"
	
	Name: Content Type
	String Value = "text/html"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110
	Version           : winnt:1.1; :
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
