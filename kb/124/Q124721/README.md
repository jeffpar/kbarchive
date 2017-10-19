---
layout: page
title: "Q124721: DOC: HELP Does Not Locate New Supported dBASE Commands"
permalink: /kb/124/Q124721/
---

## Q124721: DOC: HELP Does Not Locate New Supported dBASE Commands

	Article: Q124721
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6,2.6a
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 25-APR-2000
	
	2.60 2.60a
	MS-DOS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Typing HELP <topic> in the Command window does not bring up the Help topic
	on the specified command or function if that command or function is one of the
	new dBASE supported commands. Approximately 50 new commands and functions for
	dBASE compatibility were added to FoxPro since version 2.5. Most of them do not
	have Help topics.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	To locate the Help topic for these new commands, type HELP in the Command window.
	Then select "What's New Since FoxPro 2.5." Scroll through the help topics to
	locate the "New FoxPro Commands and Functions" topic. Syntax and details about
	the new commands and functions are documented there.
	
	Here are the new commands and functions not found with HELP in FoxPro for MS-DOS
	versions 2.6 and 2.6a:
	
	  @...SCROLL
	  ASSIST
	  BARCOUNT()
	  BARPROMPT()
	  FDATE()
	  FLDCOUNT()
	  FLDLIST()
	  FTIME()
	  ID()
	  ON EXIT BAR
	  ON EXIT MENU
	  ON EXIT PAD
	  ON EXIT POPUP
	  PADPROMPT()
	  PCOUNT()
	  SET DIRECTORY
	  SET MBLOCK
	  TAGCOUNT()
	  TAGNO()
	  UNIQUE()
	  WINDOW()
	
	Additional query words: docerr FoxDos 5.00 VFoxWin
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS
	Version           : MS-DOS:2.6,2.6a
	
	=============================================================================
	
