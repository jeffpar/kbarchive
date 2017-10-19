---
layout: page
title: "Q93114: DOCERR: HELP_PARTIALKEY Doesn't List Topics in Dialog Box"
permalink: /kb/093/Q93114/
---

## Q93114: DOCERR: HELP_PARTIALKEY Doesn't List Topics in Dialog Box

	Article: Q93114
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 987 of the Windows SDK "Programmer's Reference, Volume 2: Functions" manual
	incorrectly describes the HELP_PARTIALKEY command for the WinHelp API as:
	
	  Displays the topic found in the keyword list that matches the keyword passed
	  in the dwData parameter if there is one exact match. If there is more than
	  one match, displays the Search dialog box with the topics found listed in the
	  Go To list box.
	
	This statement is not correct.
	
	MORE INFORMATION
	================
	
	If the HELP_PARTIALKEY command is specified when calling the WinHelp API and
	more than one match exists, or if there is one exact match for the keyword but
	the keyword is defined for more than one topic, then the search dialog box is
	displayed. The Go To list box found in the Search dialog box does not display
	the topics as the documentation states.
	
	The first keyword that matches the dwData parameter is selected in the keyword
	combo box. If the keyword is an exact match, then the user should choose the
	Show Topics button to display the topics in the Go To list box. If there are
	multiple matches, then the user should decide which keyword is correct, select
	that keyword, and choose Show Topics in order to fill up the Go To list box.
	
	For example, if a Help file contains the following keywords
	
	  Rectangle
	  Stack
	  Stand
	  Start
	  Stop
	  Triangle
	
	and WinHelp is called using the HELP_PARTIALKEY command, with dwData pointing to
	a string containing "st", the Search dialog box will be displayed with the
	keyword "Stack" selected in the keyword combo box. The user must determine which
	of the keywords beginning with "st" is correct, select that keyword, and choose
	the Show Topics button, which causes the Go To list box to be filled.
	
	In this same example, if Stack is passed as a keyword, there is one exact match.
	If only one topic has Stack for a keyword, then that topic will be displayed in
	the Help engine. If multiple topics have Stack as a keyword, then the Search
	dialog box will be displayed with Stack selected in the keyword combo box, but
	the Go To list box will remain empty until the user chooses the Show Topics
	button. When this button is chosen, the Go To list box will be filled with the
	titles of the topics marked with the keyword Stack.
	
	Additional query words: 3.10 hc hcp listbox docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
