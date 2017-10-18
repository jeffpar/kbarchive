---
layout: page
title: "Q143306: BUG: COLOR on @...GET Push Button Does Not Work as Expected"
permalink: kb/143/Q143306/
---

## Q143306: BUG: COLOR on @...GET Push Button Does Not Work as Expected

	Article: Q143306
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp260aBUGkbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to change various push/command button attributes by using the
	COLOR clause, even though the Help file and Language Reference states that the
	COLOR clause works only in FoxPro for MS-DOS.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Help file states that the COLOR clause is useful for FoxPro for MS-DOS only.
	This is also documented on pages 111-112 in the Language Reference for FoxPro
	for Windows 2.6 and page 114 of the FoxPro for the Macintosh Language Reference.
	@...GETs are not documented in the Visual FoxPro documentation. The following is
	taken from the Visual FoxPro and FoxPro 2.6 for Windows and Macintosh Help
	file:
	
	  In FoxPro for Window and FoxPro for Macintosh, the COLOR clause does not
	  affect the color of push buttons.
	
	In FoxPro versions 2.6a and 3.0 for Windows, it is possible to change the color
	of a disabled button prompt.
	
	In FoxPro version 2.6a for Macintosh, it is also possible to change the color of
	the entire button face, provided the height of the SIZE clause is set to 1 row.
	
	
	Example to Demonstrate Problem
	------------------------------
	
	Enter the following code into a new program, save it, and use the DO command to
	run the program:
	
	FoxPro for Windows:
	
	     CLEAR
	     @ 2,2 GET mchoice FUNCTION '* \<OK;\<CANCEL;\\DISABLED';
	        COLOR ,,,,,,,,,R+/B+  DEFAULT 1
	     READ
	
	This will display two default buttons with the disabled button's prompt in red.
	
	FoxPro for Macintosh:
	
	     CLEAR
	     @ 2,2 GET mchoice FUNCTION '* \<OK;\<CANCEL;\\DISABLED';
	        COLOR ,,,,,,,,W/BG+,R+/B+ DEFAULT 1
	
	     @ 10,2 GET mchoice FUNCTION '* \<OK;\<CANCEL;\\DISABLED';
	        COLOR ,,,,,,,,W/BG+,R+/B+ SIZE 1.5,1,1 DEFAULT 1
	     READ CYCLE
	
	The first @...GET displays three push buttons with a cyan button face. The
	disabled button text will be red. The second @...GET displays all three button
	faces with the default Macintosh Windows color because of the added SIZE clause
	that sets the height to 1.5 rows. The disabled text will be red.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp260aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.6a; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
