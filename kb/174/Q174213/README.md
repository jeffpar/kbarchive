---
layout: page
title: "Q174213: BUG: Blank Window Appears Instead of Help File Contents"
permalink: /kb/174/Q174213/
---

## Q174213: BUG: Blank Window Appears Instead of Help File Contents

{% raw %}

	Article: Q174213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the HelpCommand property of a Common Dialog control to
	cdlHelpContents and then use the ShowHelp method to display the contents of a
	Help file, Windows Help appears with a blank window. The contents of the Help
	file is not displayed. The same behavior is exhibited if you set the HelpCommand
	property to cdlHelpIndex to display the index of a Help file.
	
	RESOLUTION
	==========
	
	Workaround #1
	-------------
	
	To display the contents or index of your Help file with the ShowHelp method,
	first set the HelpCommand property of the Common Dialog control to the value
	&HB. This value corresponds to the HELP_FINDER constant 0x000b in WINUSER.H.
	When you use this constant, the Help window appears with the last active tab.
	For example, if the Index tab was selected when this window was last shown, then
	it will be the active tab when help is shown again:
	
	        CommonDialog1.HelpFile = _
	           "C:\Program Files\DevStudio\VB\Samples\Samples.hlp"
	        CommonDialog1.HelpCommand = &HB
	        CommonDialog1.ShowHelp
	
	Workaround #2
	-------------
	
	To display the Index tab of your Help file, regardless of which tab was active
	when the Help file was last shown, set the HelpCommand property of the Common
	Dialog control to cdlHelpPartialKey:
	
	        CommonDialog1.HelpFile = _
	           "C:\Program Files\DevStudio\VB\Samples\Samples.hlp"
	        CommonDialog1.HelpCommand = cdlHelpPartialKey
	        CommonDialog1.ShowHelp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic.
	
	2. Click Components on the Project menu. Check "Microsoft Common Dialog 5.0" and
	  click OK.
	
	3. Add a Common Dialog control to Form1.
	
	4. Add the following code to the Form_Click event of Form1:
	
	        CommonDialog1.HelpFile = _
	           "C:\Program Files\DevStudio\VB\Samples\Samples.hlp"
	        CommonDialog1.HelpCommand = cdlHelpContents
	        CommonDialog1.ShowHelp
	
	5. Press the F5 key to run the application.
	
	6. Click the form and note that Windows Help appears but the Help file contents
	  are not displayed.
	
	Additional query words: cmdlg kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
