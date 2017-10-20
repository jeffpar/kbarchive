---
layout: page
title: "Q129935: PRB: Non-Reserved Word w/ Colon Behaves Differently in VB 4.0"
permalink: /kb/129/Q129935/
---

## Q129935: PRB: Non-Reserved Word w/ Colon Behaves Differently in VB 4.0

{% raw %}

	Article: Q129935
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
	
	Using Non-reserved keywords followed by a colon may produce different results in
	Visual Basic version 4.0.
	
	A reserved keyword in Visual Basic cannot be used as the name of a user-defined
	function. However, a non-reserved keyword may be used as the name of a
	user-defined function.
	
	In Visual Basic version 4.0 a non-reserved word followed by a colon is
	interpreted as a line label. Previous versions of Visual Basic checked to see if
	this is a statement followed by another statement on the same line.
	
	Similar behavior occurs when you use a user-defined subroutine with no parameters
	followed by a colon and another statement.
	
	RESOLUTION
	==========
	
	To avoid the confusion that this could potentially cause, Microsoft recommends
	that you use colons only for line labels. Write each individual statement on a
	separate line. Not only does this allow you to avoid confusion, it also makes
	your code easier to read.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a command button (Command1) on the form.
	
	3. Place the following code inside the Command1 click event:
	
	     Print "Hello"
	     Cls: Beep
	
	4. Run the program by choosing Start from the Run menu.
	
	5. Click the Command1 button.
	
	In Visual Basic version 4.0, the word Hello is printed on the form and a beep
	sounds. In previous Visual Basic versions, Hello is printed, and then erased;
	then the beep sounds.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
