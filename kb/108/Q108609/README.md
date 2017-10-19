---
layout: page
title: "Q108609: BUG: SET MESSAGE WINDOW Command Not Working Correctly"
permalink: /kb/108/Q108609/
---

## Q108609: BUG: SET MESSAGE WINDOW Command Not Working Correctly

	Article: Q108609
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUGkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SET MESSAGE WINDOW [<window name>] command does not work as expected.
	
	This command is supposed to let you specify where to display messages created
	with the WAIT, @ ... PROMPT, DEFINE BAR, DEFINE MENU, DEFINE PAD, and DEFINE
	POPUP commands. It cannot be used to control the placement of a WAIT WINDOW.
	
	The following program demonstrates the intended usage of the SET MESSAGE WINDOW
	command:
	
	     DEFINE WINDOW X FROM 20,20 TO 23,65
	     ACTIVATE WINDOW X
	     SET MESSAGE WINDOW X
	     WAIT 'Check out the location of this message!'
	     RELEASE WINDOW x
	     CLEAR
	     SET MESSAGE WINDOW && Resets SET MESSAGE WINDOW to the default
	     WAIT 'Now look where the message appears by default'
	
	However, if you eliminate both SET MESSAGE WINDOW lines from this code sample,
	the program performs no differently.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP500a
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
