---
layout: page
title: "Q192764: HOWTO: Provide Inverse AT() Functionality"
permalink: kb/192/Q192764/
---

## Q192764: HOWTO: Provide Inverse AT() Functionality

	Article: Q192764
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AT(), RAT() and equivalent functions can be used to return the beginning
	numeric position of the first occurrence of a character expression within
	another character expression. However, FoxPro does not provide a function to
	find the first occurrence of a character that is not the character that was
	passed as a parameter. In other words, suppose that you have a string "AAAAB"
	and you wish to find the first occurrence of a character that is not "A". This
	article demonstrates how to provide this functionality.
	
	MORE INFORMATION
	================
	
	Save the following code to a program file and run the program. The NotAt()
	function returns the second occurrence of a character that is not a "0" (zero).
	Here is the sample code:
	
	     *-- Code begins here.
	     CLEAR
	     ? NotAt("0", "0x00CCAF77A", 2)
	
	     *-----------------------------------------------------------------
	     *- Function:    NotAt
	     *- Summary:     From within a passed string, finds the first
	     *-              occurence of a character that is not the character
	     *-              specified.  In other words, this function works
	     *-              opposite of the manner that AT() does.
	     *- Parameters:  lsNotString -    What we don't want.  The function
	     *-                               finds the first character that is
	     *-                               not lsNotString.
	     *-              lsSearchString - The string in which to search.
	     *-              liOccurence -    Indicates that NotAt should find
	     *-                               the liOccurence of a character
	     *-                               that is not lsNotString.
	     *-----------------------------------------------------------------
	     FUNCTION NotAt
	     PARAMETERS lsNotString, lsSearchString, liOccurrence
	
	     llFound       = .F.  && Flag indicates if we've found a character that
	                          && is NOT lsNotString.
	     llEndOfString = .F.  && Flag to indicate that we've reached the end
	                          && of the string.
	     lnCounter     = 0    && Tracks position during the search.
	     lnLength      = LEN(lsSearchString)
	     liOccurCount  = 0    && Tracks how many occurrences have been found.
	
	     *-- Loop until the desired character is found or the end of
	     *-- the string is reached.
	     DO WHILE NOT llFound AND NOT llEndofString
	        lnCounter = lnCounter + 1
	        lsCompare = SUBSTR(lsSearchString, lnCounter, 1)
	        IF lsCompare <> lsNotString
	           liOccurCount = liOccurCount + 1
	
	           *-- Have we found the occurrence we want?
	           IF liOccurCount = liOccurrence
	              llFound = .T.
	           ENDIF
	        ENDIF
	        IF lnCounter = lnLength
	           llEndOfString = .T.
	        ENDIF
	     ENDDO
	     RETURN lnCounter
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: kbVFp300b kbVFp500a kbVFp500 kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.6a,3.0b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
