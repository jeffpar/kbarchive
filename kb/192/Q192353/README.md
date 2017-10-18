---
layout: page
title: "Q192353: HOWTO: Generate Random Strings"
permalink: kb/192/Q192353/
---

## Q192353: HOWTO: Generate Random Strings

	Article: Q192353
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b; MS-DOS:2.6,2.6a; UNIX:2.6; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When testing SQL functions or creating test data, it is useful to be able to
	generate random string data. The FoxPro function SYS(2015) creates ten character
	random strings for use as procedure names. However, SYS(2015) does not allow the
	developer to specify a range of ASCII characters to use, nor does it allow the
	developer to specify the length of the string. This article demonstrates how to
	create and use the RandomString() function.
	
	MORE INFORMATION
	================
	
	Save the following code to a program file and run it. The WAIT WINDOW command
	displays a new random string each time a key is pressed. Press the ESC key to
	end the program.
	
	     *-- Code begins here.
	     SET TALK OFF
	     ON ESCAPE CANCEL
	     DO WHILE .T.  && Press the escape key to quit
	         WAIT WINDOW RandomString(65,122,1,15)
	     ENDDO
	     SET TALK ON
	
	     *----------------------------------------------------------
	     *-- Function:   RandomString()
	     *-- Summary:    Generates a string of random characters
	     *-- Usage:      RandomString(nLboundAscii, nUboundAscii,
	     *--               nLBoundLength, nUBoundLength)
	     *-- Parameters: nLBoundAscii - Lowest ASCII value to use.
	     *--             nUBoundAscii - Highest ASCII value to use.
	     *--             nLBoundLength - Shortest string to generate.
	     *--             nUBoundLength - Longest string to generate.
	     *-- Example:    lsReturn = RandomString(65,122,1,15)
	     *----------------------------------------------------------
	     FUNCTION RandomString
	     PARAMETERS liLowerBAscii, liUpperBAscii, ;
	       liLowerBLength, liUpperBLength
	
	     *-- Initialize variables.
	     lsString = ""
	     liLength = 0
	     liCounter = 0
	
	     *-- Check for valid parameters and correct if needed.
	     IF liLowerBAscii < 0
	        liLowerBAscii = 0
	     ENDIF
	     IF liLowerBAscii > 255
	        liLowerBAscii = 255
	     ENDIF
	     IF liUpperBAscii < 0
	        liUpperBAscii = 0
	     ENDIF
	     IF liUpperBAscii > 255
	        liUpperBAscii = 255
	     ENDIF
	     IF liLowerBLength < 0
	        liLowerBLength = 0
	     ENDIF
	     liLength = INT((liUpperBLength - liLowerBLength + 1) ;
	       * RAND(-1) + liLowerBLength)
	
	     FOR liCounter = 1 TO liLength
	        lsString = lsString + CHR(INT((;
	            liUpperBAscii - liLowerBAscii + 1) ;
	          * RAND() + liLowerBAscii))
	     ENDFOR
	     RETURN lsString
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: kbVFp300b kbVFp300 kbVFp500 kbVFp500a kbVFp600 kbXBase kbunix kbmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.6a,3.0b; MS-DOS:2.6,2.6a; UNIX:2.6; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
