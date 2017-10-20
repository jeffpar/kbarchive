---
layout: page
title: "Q129938: PRB: Moving Off 'Sub' Doesn't Create 'End Sub'"
permalink: /kb/129/Q129938/
---

## Q129938: PRB: Moving Off 'Sub' Doesn't Create 'End Sub'

{% raw %}

	Article: Q129938
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
	
	SYMPTOMS
	========
	
	If you use the mouse or arrow keys to move off the statement:
	
	     Sub X ()
	
	the End Sub statement is not generated, and the Sub X() statement appears as part
	of the subroutine that follows it.
	
	CAUSE
	=====
	
	This is by design. The purpose of this behavior is to give you control over
	whether or not an End Sub is automatically generated. There are cases when it is
	desirable not to have an End Sub generated.
	
	RESOLUTION
	==========
	
	Leaving the Sub line by pressing the ENTER key automatically generates the
	appropriate End Sub. This also adds the End Sub where one did not exist if you
	previously left the line by using the mouse or arrow keys.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual Basic version 4.0 supports conditional compilation and you may want to
	take advantage of that to create more than one Sub statement for a single
	subroutine depending on various conditions.
	
	     #if WIN32 then
	     Sub MySubWin32version(x)
	     #else
	     Sub MySubWin16version(x,y)
	     #endif
	
	        ' ...
	     End Sub
	
	In this case, you would not want two End Sub statements generated for your two
	Sub statements. If you move off the first Sub statement with the ENTER key and
	the second Sub statement with the mouse or arrows, this procedure is generated
	correctly. As Visual Basic cannot anticipate which case will require End Sub and
	which will not, you are given explicit control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Type the following line of code in the General Declarations section of Form1,
	  but don't press the ENTER key:
	
	     Sub Test()
	
	3. Use the mouse or arrow keys to move off the line. Sub Test does not get its
	  own End Sub statement, but rather it is merged with the next Sub statement as
	  in this example:
	
	     Sub Test()
	     Private Sub Form_Load()
	
	     End Sub
	
	4. To add an End Sub, move to the end of the Sub Test() line, and press the
	  ENTER key to separate the Sub Test() procedure from the Sub Form_Load()
	  procedure:
	
	     Sub Test()
	
	     End Sub
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
