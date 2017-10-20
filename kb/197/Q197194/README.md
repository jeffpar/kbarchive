---
layout: page
title: "Q197194: WD97: Function to Test for Valid Directory Path"
permalink: /kb/197/Q197194/
---

## Q197194: WD97: Function to Test for Valid Directory Path

{% raw %}

	Article: Q197194
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a macro that attempts to change to an invalid directory path, you
	may receive following error message:
	
	  Run-time error '76': "Path not found"
	
	CAUSE
	=====
	
	Before you switch to a directory using the Visual Basic for Applications ChDir
	statement, make sure that the directory is valid.
	
	WORKAROUND
	==========
	
	Create macrocode to test whether a directory path is valid.
	
	Visual Basic for Applications
	-----------------------------
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft Support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	     Sub ChangeDir()
	        cdDir = "<Replace with a valid directory path>"
	        If Dir(cdDir, vbDirectory) <> "" then
	           ChDir cdDir
	        Else
	           MsgBox "Specified directory is invalid!", vbOKOnly + vbCritical
	        End If
	     End Sub
	
	Additional query words: wordcon ChDir
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
