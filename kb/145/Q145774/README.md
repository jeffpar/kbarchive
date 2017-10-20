---
layout: page
title: "Q145774: HTML File Fails to Open from File Manager"
permalink: /kb/145/Q145774/
---

## Q145774: HTML File Fails to Open from File Manager

{% raw %}

	Article: Q145774
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you double-click an HTML file in File Manager, (for example: c:\MyPage.htm)
	Internet Explorer displays the following error message:
	
	  This program does not support the protocol for accessing
	  'Files:///c:\MyPage.htm'
	
	CAUSE
	=====
	
	When you install Internet Explorer, it adds a new association for HTML files.
	However, the association contains a syntax error.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Open File Manager.
	
	2. Select Associate from the File menu.
	
	3. From the Files with Extension menu, select HTM. You see htm(c:\<correct
	  Path>\iexplore.exe) in the "Associate With:" dialog box.
	  htm(c:\<correct Path>\iexplore.exe) is highlighted.
	
	4. Click the Change type... button.
	
	5. Change the text in the Command: text box from:
	
	  c:\<correct Path>\iexplore.exe files:///%1"
	
	  to
	
	  c:\<correct Path>\iexplore.exe file:///%1"
	
	  NOTE: Change the word "files" to "file".
	
	6. Click the OK button.
	
	7. Click the OK button.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
