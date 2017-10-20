---
layout: page
title: "Q149429: INFO: What Is an OCA file?"
permalink: /kb/149/Q149429/
---

## Q149429: INFO: What Is an OCA file?

{% raw %}

	Article: Q149429
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp400 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For every custom control file (.OCX) that Visual Basic uses, there is an
	accompanying .OCA file of the same file name. For example, GRAPH16.OCX has an
	accompanying .OCA file called GRAPH16.OCA. An .OCA file is a binary file that
	functions as both an extended type library file and a cache for the custom
	control file.
	
	MORE INFORMATION
	================
	
	A type library is a file or component within another file that contains OLE
	Automation standard descriptions of exposed objects, properties, and methods.
	The actual working type library for a custom control used in Visual Basic is a
	combination of the type library of the control itself and the additional
	properties provided by the framework that wrap the control.
	
	Some of the properties of the control are provided by the framework and some by
	the control itself. Programmatically, the properties from the framework and the
	control all appear as properties of the control.
	
	In order for these properties to appear, Visual Basic creates an extended type
	library when the control is loaded into the toolbox. Because the process of
	reading the control's type library and creating the extended type library is
	time consuming, Visual Basic caches the extended type library information into
	an OCA file.
	
	If you delete the OCA file for a control Visual Basic recognized, Visual Basic
	will recreate the .OCA file when you load a project requiring the control. This
	recreation process comes with a time penalty.
	
	Additional query words: files
	
	======================================================================
	Keywords          : kbnokeyword kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
