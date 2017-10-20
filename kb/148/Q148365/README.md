---
layout: page
title: "Q148365: PC Forms: Characters Following a Tab Are Not Retrieved"
permalink: /kb/148/Q148365/
---

## Q148365: PC Forms: Characters Following a Tab Are Not Retrieved

{% raw %}

	Article: Q148365
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Electronic forms (E-forms) designed to include text with imbedded tabs will not
	be able to retrieve the text following the tab character.
	
	CAUSE
	=====
	
	This problem occurs if the E-form has used the MEFReadText function to retrieve
	the string from the E-form package.
	
	RESOLUTION
	==========
	
	When you use the E-forms function MEFWriteText to write data directly to an
	E-forms package, do not use the tab character within character strings.
	
	If you must use tab delimited data in an E-form, the workaround is to use the
	MEFWriteItem function with the data type of MEF_BINARY. By using the MEF_BINARY
	type, a different mechanism is used to include the data with the package, and
	the problem is avoided.
	
	MORE INFORMATION
	================
	
	The implementation of MEFWriteText and MEFReadText is done through calls to
	WritePrivateProfileString and GetPrivateProfileString. The
	GetPrivateProfileString function treats the tab character as a separator between
	the parameter and an optional comment. The comment is not retrieved.
	
	This problem exists on Microsoft Windows for Workgroups and Microsoft Windows 95.
	The Microsoft Windows NT operating system implements GetPrivateProfileString
	differently and will return text after the tab character.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q132180 Using Tabs with Initialization File APIs
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
