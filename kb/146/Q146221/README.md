---
layout: page
title: "Q146221: How to Use Wildcards in a String Search Routine"
permalink: /kb/146/Q146221/
---

## Q146221: How to Use Wildcards in a String Search Routine

	Article: Q146221
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro includes several functions, such as AT(), that you can use to determine
	if a string is contained within another string. However, no native function
	exists that will use wildcards in the string to be searched for in the larger
	string. This article shows by example how to search for a string containing
	wildcards within a larger string.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  FUNCTION wcardfind
	  PARAMETER srchstr, wildcard, longstr
	  STORE 0    TO ifoundat
	  STORE LEN(longstr) TO ilongstrlen
	  STORE LEN(ALLT(srchstr)) TO isrchstrlen
	  STORE ilongstrlen - isrchstrlen TO ilastoffset
	  STORE isrchstrlen - LEN(ALLT(STRTRAN(srchstr, wildcard, ""))) ;
	     TO inumwcards
	  STORE .F. TO lfound
	  STORE 0   TO isrchoffset
	  STORE (ilongstrlen > isrchstrlen) AND ;
	     (LEN(wildcard)=1) AND (isrchstrlen>0) TO ok
	  DO WHILE (! isrchoffset > ilastoffset) AND (! lfound) AND ok
	     STORE 0 TO imatch
	     FOR LOOP = 1 TO isrchstrlen
	        IF ASC(SUBSTR(srchstr,LOOP,1)) = ;
	             ASC(SUBSTR(longstr,LOOP+isrchoffset,1))
	           imatch=imatch+1
	        ENDIF
	     ENDFOR
	     IF imatch+inumwcards = isrchstrlen
	        lfound = .T.
	        ifoundat = isrchoffset+1
	     ELSE
	        isrchoffset=isrchoffset+1
	     ENDIF
	  ENDDO
	  RETURN IIF(lfound,ifoundat,0)
	
	Testing the Function
	--------------------
	
	Place the following code before the above function in a program file to test the
	function. The value returned in the wait window should be 4:
	
	     x1="d?f"
	     x2="?"
	     x3="abcdefgh"
	     xresult=wcardfind(x1,x2,x3)
	     wait wind str(xresult)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
