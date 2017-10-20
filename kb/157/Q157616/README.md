---
layout: page
title: "Q157616: WD97: Error Using Documents.Open to Open Non-Word File"
permalink: /kb/157/Q157616/
---

## Q157616: WD97: Error Using Documents.Open to Open Non-Word File

{% raw %}

	Article: Q157616
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the following statement,
	
	  Documents.Open FileName:= "test", Format:= wdOpenFormatRTF
	
	to open the file "test.rtf", the following error message may appear:
	
	  Run-time error '5174': This file could not be found.
	
	Or, if the file "test.doc" exists in the same folder as "test.rtf":
	
	  Run-time error '5121': Word cannot open this document.
	
	CAUSE
	=====
	
	If a file extension is not specified when using the FileName argument, Word
	tries to open the file assuming a .doc extension, not by what is specified in
	the Format argument. The Format argument does not specify the file extension or
	type of file to open; instead, it specifies the file converter to use to open
	the file. In this example:
	
	  "Format:= wdOpenFormatRTF"
	
	opens the file using the Rich Text Format (RTF) converter.
	
	WORKAROUND
	==========
	
	Specify the file name and extension when using the statement:
	
	  Documents.Open FileName:= "test.rtf", Format:= wdOpenFormatRTF
	
	MORE INFORMATION
	================
	
	The same problem arises when using:
	
	  Application.Options.DefaultOpenFormat = wdOpenFormatRTF
	  Documents.Open FileName:= "test"
	
	STATUS
	======
	
	This behavior is by design of Microsoft Word and Visual Basic for Applications.
	
	
	Additional query words: macro debug method vba vbe visual basic word97
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
