---
layout: page
title: "Q142293: Why Some Methods/Properties Do Not Appear in Object Browser"
permalink: /kb/142/Q142293/
---

## Q142293: Why Some Methods/Properties Do Not Appear in Object Browser

{% raw %}

	Article: Q142293
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most, but not all, of the functions and procedures available in Visual Basic 4.0
	can be viewed by selecting the "VBA - Visual Basic For Applications" library in
	the Object Browser. For example, the StrConv function is visible, but the
	StrComp and InStr functions are not. The subroutines that are not visible do not
	support named arguments.
	
	MORE INFORMATION
	================
	
	This behavior is caused by a difference in the internal representation of
	different statements and procedures. All of the subroutines available in Visual
	Basic 4.0 are a part of Visual Basic for Applications, and are included in the
	VBA type library. However, some functions and procedures were also implemented
	internally in either Vb32.exe or Vb.exe to improve performance.
	
	While VBA functions and procedures support named arguments, internal functions do
	not. This can be shown by executing the following line of code:
	
	     Debug.Print ABS(Number := -5)
	
	Because the ABS function is implemented in two places, and because Visual Basic
	uses the internal version by default, the above line of code generates the
	error:
	
	  'Expected: )'
	
	The use of the VBA version of the function (as well as of named arguments) can be
	forced by explicitly referencing the VBA type library in the call to the
	function or subroutine. For example, the following works properly:
	
	     Debug.Print VBA.ABS(Number := -5)
	
	In this case the function used resides in the type library.
	
	Because the subroutines that have been implemented internally do not support
	named arguments by default, they were removed from the Object Browser to prevent
	copying and pasting of calls with incorrect syntax. Named arguments can still be
	used, as long as each call includes the "vba." prefix to tell Visual Basic to
	use the Visual Basic for Applications version of the function.
	
	Additional query words: 4.00 vb4win vb4all vba
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
