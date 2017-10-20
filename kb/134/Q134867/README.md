---
layout: page
title: "Q134867: &quot;Cannot Find File&quot; When Object Clicked to Run Interactively"
permalink: /kb/134/Q134867/
---

## Q134867: &quot;Cannot Find File&quot; When Object Clicked to Run Interactively

{% raw %}

	Article: Q134867
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a drawn object or imported graphic during a slide show to run it,
	you may get the following error message:
	
	  (application) cannot find the file (c:\(path)\(filename.xxx)
	
	CAUSE
	=====
	
	With some computers, long filenames can cause this problem. When you configured
	the object's interactive settings, you may have specified the location of this
	program with long filenames.
	
	RESOLUTION
	==========
	
	If you encounter this problem, you can do one of the following:
	
	1. Select the object and click Interactive Settings on the Tools menu.
	
	2. In the Run Program box, change the path so that it uses the MS-DOS short
	  filenames. For example:
	
	  c:\office\winword\winword.exe c:\mydocu~1\docume~1.doc
	
	  Or, enclose the path that includes long filenames in quotation marks. For
	  example:
	
	  c:\office\winword\winword.exe "c:\my documents\document.doc"
	
	STATUS
	======
	
	Microsoft is researching this problem, and we will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 7.00 ppt95 Powerpnt Interactive settings Long file names
	
	======================================================================
	Keywords          : kbinterop kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
