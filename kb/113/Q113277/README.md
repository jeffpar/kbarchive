---
layout: page
title: "Q113277: BUG: Popup Not Cleared in FoxPro for Windows"
permalink: /kb/113/Q113277/
---

## Q113277: BUG: Popup Not Cleared in FoxPro for Windows

	Article: Q113277
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp260bug kbvfp250bug kbvfp250aBUG kbvfp250bBUGkbbuglist
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro 2.6 for MS-DOS and in dBASE, the CLEAR command will clear (hide) a
	popup. However, in FoxPro for Windows, the CLEAR command does not clear the
	popup.
	
	RESOLUTION
	==========
	
	See "Workaround" in the "More Information" section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start FoxPro for Windows.
	
	2. Type the following in the Command window and press ENTER:
	
	        MODIFY COMMAND test
	
	3. Enter the following code in the TEST.PRG window:
	
	        SET COMPATIBLE TO DB4
	        DEFINE POPUP x FROM 10,10
	        DEFINE BAR 1 OF x PROMPT "Hello"
	        DEFINE BAR 2 OF x PROMPT "Bye"
	        ON SELECTION POPUP x DO myx
	        ACTIVATE POPUP x
	        RELEASE POPUP x
	
	        PROCEDURE myx
	        CLEAR
	        *HIDE POPUP x   && remove asterisk from this line to correct the
	        *problem
	        WAIT WINDOW "Cleared"
	
	4. Press CTRL+W to save TEST.PRG.
	
	5. In the Command window type:
	
	        DO TEST.PRG
	
	Note that the POPUP is not cleared when you press the ENTER key or the SPACEBAR.
	
	WORKAROUND
	==========
	
	Remove the asterisk from the line that reads "*HIDE POPUP X". The line should
	now read as follows:
	
	  HIDE POPUP x
	
	Additional query words: pop-up disappear kbFP250 kbFP260 kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp260bug kbvfp250bug kbvfp250aBUG kbvfp250bBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
