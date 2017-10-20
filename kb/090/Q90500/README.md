---
layout: page
title: "Q90500: BUG: Makefile based on PWB Library Template Not Valid"
permalink: /kb/090/Q90500/
---

## Q90500: BUG: Makefile based on PWB Library Template Not Valid

{% raw %}

	Article: Q90500
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Programmer's Workbench (PWB) version 2.1.49, when the user opens a project
	created using the Library template, PWB displays a message box that contains the
	following error message:
	
	  Error reading project makefile line <line number>
	
	  Unexpected command
	
	After the user chooses OK to dismiss the message box, PWB displays another
	message box that contains the following message:
	
	  Error in project makefile format
	
	  C:\C700\FILE.MAK
	
	  Use it as a non-PWB makefile?
	
	PWB does not recognize the makefile in the opened project as a PWB makefile.
	
	CAUSE
	=====
	
	This error occurs because the PWB Library template contains two incorrect build
	switches.
	
	RESOLUTION
	==========
	
	Perform the following ten steps to modify the PWB Library template to remove the
	incorrect build switches:
	
	1. From the Options menu, select Project Templates, then select Set Project
	  Template.
	
	2. In the Set Project Template dialog box, select None in the Runtime Support
	  list box, and select Library in the Project Template list box. Then choose
	  OK.
	
	3. From the Options menu, select Project Templates, then select Customize
	  Project Template.
	
	4. In the Customize Project Template dialog box, select the following build
	  rule:
	
	  release command lrf_lib "$(LRF) @<<$(PROJ).lrf\n-+$(?: = &
	  ^\n-+)\n$(LIBFLAGS_G)\n$(LIBFLAGS_R);\n<<\n#$(OBJS)"
	
	5. Modify the rule to move the second "<<" delimiter to the end of the
	  rule. The changed rule is as follows:
	
	  release command lrf_lib "$(LRF) @<<$(PROJ).lrf\n-+$(?: = &
	  ^\n-+)\n$(LIBFLAGS_G)\n$(LIBFLAGS_R);\n$(OBJS)\n<<"
	
	6. Choose "Set Build Rule" to save the change.
	
	7. Select the following build rule:
	
	  debug command lrf_lib "$(LRF) @<<$(PROJ).lrf\n-+$(?: = &
	  ^\n-+)\n$(LIBFLAGS_G)\n$(LIBFLAGS_D);\n<<\n#$(OBJS)"
	
	8. Modify the rule to move the second "<<" delimiter to the end of the
	  rule. The changed rule is as follows:
	
	  debug command lrf_lib "$(LRF) @<<$(PROJ).lrf\n-+$(?: = &
	  ^\n-+)\n$(LIBFLAGS_G)\n$(LIBFLAGS_D);\n$(OBJS)\n<<"
	
	9. Choose "Set Build Rule" to save the change.
	
	10. Choose OK.
	
	After making these changes, the Library template in your project has the correct
	build rules. You may want to save this template for use in other projects. To
	save the current template settings, select Project Templates from the Options
	menu, then select Save Custom Project Template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 2.1.49. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 7.00 buglist2.1.49
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB2149DOS
	Version           : MS-DOS:2.1.49
	
	=============================================================================
	

{% endraw %}
