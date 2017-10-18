---
layout: page
title: "Q139095: DOCERR: RAT() Command Doesn't Count from Rightmost Character"
permalink: kb/139/Q139095/
---

## Q139095: DOCERR: RAT() Command Doesn't Count from Rightmost Character

	Article: Q139095
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; UNIX:2.6; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RAT() Command is described as follows in the Language Reference:
	
	  Returns the beginning numeric position of the first occurrence of one
	  character expression or memo field within another character expression or
	  memo field, counting from the rightmost character.
	
	This is misleading.
	
	MORE INFORMATION
	================
	
	This description leads you to believe that the number being returned is the
	character position counted from the right and moving left. This is an incorrect
	assumption. The number returned is the character position counting from the left
	and moving right but the RAT() Command starts its search from the right and
	moves left which is the opposite of the AT() Command. For example:
	
	     Store 'abracadabr' to string
	     ?RAT('a',string)    && Returns 8, not 3
	     ?RAT('a',string,3)  && Returns 4, not 7
	
	Additional query words: VFoxWin FoxWin FoxDos FoxMac FoxUnix 2.50 2.50a 2.50b 2.50c
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; UNIX:2.6; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
