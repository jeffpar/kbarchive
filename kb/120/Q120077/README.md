---
layout: page
title: "Q120077: Files Missing in File Manager After Running Search Command"
permalink: /kb/120/Q120077/
---

## Q120077: Files Missing in File Manager After Running Search Command

{% raw %}

	Article: Q120077
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In File Manager, it appears as if most of the files on a drive have disappeared.
	The directory structure for the drive appears correctly, and running a DIR
	command at an MS-DOS prompt displays all the files.
	
	CAUSE
	=====
	
	File Manager has a filter function that allows you to see only files meeting the
	filter specification (such as, *.BAT or *.DOC). To set this filter, you choose
	By File Type from the View menu. If you use the Search command from the File
	menu and then select another drive, however, File Manager uses the search filter
	as a global filter. If the Save Settings On Exit option has been activated on
	the Options menu, this global filter is saved and used each time you run File
	Manager.
	
	WORKAROUND
	==========
	
	To work around this problem, choose By File Type from the View menu and specify
	*.* as the Name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 3.10 3.1 missing deleted
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
