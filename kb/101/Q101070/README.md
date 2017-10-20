---
layout: page
title: "Q101070: ADK: How to Make Custom Application Name Appear in Task List"
permalink: /kb/101/Q101070/
---

## Q101070: ADK: How to Make Custom Application Name Appear in Task List

{% raw %}

	Article: Q101070
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	In order for the title of your custom Microsoft Access application to
	appear in the Microsoft Windows Task List, you need to provide a Title
	Bar setting in the application's .INI file. The setting should be
	included in the [Run-Time Options] section of the .INI file and should
	have the following format:
	
	  [Run-Time Options]
	  TitleBar=<MyApplicationName>
	
	Substitute the name of your custom application for <MyApplicationName>
	in the example above.
	
	Restart your custom application after making this change to the .INI
	file. The application's name will appear in the Task List.
	
	Additional query words: nxml
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbAccessSearch kbAccessDistKit110
	Version           : WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
