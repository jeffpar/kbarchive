---
layout: page
title: "Q146922: WD97: Selecting Multiple File Names Gives Run-time Error 5174"
permalink: /kb/146/Q146922/
---

## Q146922: WD97: Selecting Multiple File Names Gives Run-time Error 5174

{% raw %}

	Article: Q146922
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select multiple file names from the Open dialog box and then click the
	Open button, the following error message appears:
	
	  Run-time error '5174'
	
	  This file could not be found.
	
	CAUSE
	=====
	
	The Open dialog box from which you selected the file names is being displayed by
	a macro using the wdDialogFileOpen built-in Word dialog box.
	
	  Dialogs(wdDialogFileOpen).Show
	
	You can select a single file and open it, but selecting multiple files at one
	time causes the error message.
	
	MORE INFORMATION
	================
	
	You cannot select multiple files form the built-in Open dialog box in Word when
	displayed programmatically. This lack of functionality is by design in the
	previous and present versions of Word.
	
	When you record a macro in Microsoft Word of opening multiple files form the Open
	dialog box the result is a series of statments:
	
	  Documents.Open FileName:=<filename1>
	  Documents.Open FileName:=<filename2>
	  Documents.Open FileName:=<filename3>
	
	This is the functionality of the Word Visual Basic for Applications constant
	wdDialogFileOpen which is different from Microsoft Excel Open dialog box
	functionality.
	
	
	Additional query words: runtime
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
