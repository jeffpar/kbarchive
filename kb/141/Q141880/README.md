---
layout: page
title: "Q141880: BUG: Object Browser's Member Options Dialog Help Gives Error"
permalink: /kb/141/Q141880/
---

## Q141880: BUG: Object Browser's Member Options Dialog Help Gives Error

{% raw %}

	Article: Q141880
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
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
	
	If the Help button (or F1) is pressed when the Object Browser's Member Options
	dialog box is showing, Windows Help gives the error:
	
	  "The topic does not exist. Contact your application vendor for an updated
	  Help file. (129)"
	
	CAUSE
	=====
	
	In this case the error message is not entirely correct. If a link to a help
	topic is not complete or cannot be resolved, Windows Help will give this error
	message, even though the help topic may exist in the help file (as it does in
	this case).
	
	RESOLUTION
	==========
	
	On Visual Basic's Help menu, click "Search For Help On," and type "mem" or
	"member options" in the search dialog's initial text box. In the list box below
	the text box, the phrase "Member Options dialog box" is now highlighted.
	Double-click this phrase or click Display, click Display when the Topics Found
	dialog box appears, and watch as Windows Help displays the correct help for the
	Object Browser's Member Options dialog box.
	
	In general, searching for your topic when you receive this message is a good
	idea. It is very possible, as happened in this case, that the topic does exist,
	but that the link to the topic is bad.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic.
	
	2. From the View menu, choose Object Browser or press F2.
	
	3. In the Classes/Modules list box, select Form1. This will cause the Options
	  button to be enabled.
	
	4. Click the Options button to show the Member Options dialog box.
	
	5. Press F1 or click on the Help button. Windows will show the error mentioned
	  above.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
