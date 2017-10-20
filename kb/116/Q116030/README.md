---
layout: page
title: "Q116030: BUG: Help Compiler Indents Text Laid Out Above Bulleted Text"
permalink: /kb/116/Q116030/
---

## Q116030: BUG: Help Compiler Indents Text Laid Out Above Bulleted Text

{% raw %}

	Article: Q116030
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have bulleted text in your help file, the Help Compiler indents the
	paragraph preceding the paragraph that contains the bulleted text as if both
	paragraphs were bulleted. This problem occurs only with version 3.10.505 of the
	Help Compiler.
	
	CAUSE
	=====
	
	Version 3.10.505 of the Help Compiler does not compile the Help file correctly.
	
	WORKAROUND
	==========
	
	To work around the problem, edit the .RTF source file using Microsoft Word for
	Windows or another .RTF file editor. Use the indent markers on the ruler to
	change the indention of the blank line immediately preceding the bulleted text.
	This causes the indention for the blank line to be modified instead of the
	indention for the previous paragraph.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Microsoft Word for Windows and open the ICONWRKS.RTF file located in
	  \VB\HC.
	
	2. Below the line that reads "To learn how to use Help, press F1 or choose Using
	  Help from the Help menu," add a new paragraph that extends across more than
	  one line. Then press the ENTER key twice, and enter bulleted text.
	
	3. Save the file, and go to the MS-DOS prompt. Type the following to compile the
	  Help file:
	
	  HC ICONWRKS.HPJ
	
	4. Double-click the resulting Help file in File Manager to open it. You will see
	  that the formatting for the bulleted text affected the preceding paragraph.
	
	5. To solve the problem, reopen the ICONWRKS.RTF file in Microsoft Word. Adjust
	  the indention for the blank line immediately preceding the bulleted text.
	  Compile the modified .RTF file. Then double-click it in File Manager to view
	  it. You will see that the alignment now looks correct.
	
	Additional query words: buglist3.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
