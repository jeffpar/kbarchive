---
layout: page
title: "Q118397: BUG: SETWINDOWCONFIG Returns an Invalid Configuration"
permalink: kb/118/Q118397/
---

## Q118397: BUG: SETWINDOWCONFIG Returns an Invalid Configuration

	Article: Q118397
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SETWINDOWCONFIG() function does not create a valid window configuration
	record. The second call to SETWINDOWCONFIG() fails, even though the online Help
	says that SETWINDOWCONFIG() is supposed to modify the window configuration so
	that the next call will succeed.
	
	RESOLUTION
	==========
	
	Each time SETWINDOWCONFIG() is called and fails, it makes adjustments to the
	window configuration record. If SETWINDOWCONFIG() is called enough times, it
	will eventually succeed.
	
	NOTE: Under FORTRAN PowerStation 32, version 4.0, the call to SETWINDOWCONFIG()
	never succeeds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To demonstrate this problem, compile and run the sample code below. Both the
	first and second calls to SETWINDOWCONFIG() generate a window configuration
	record that is not consistent. For example, the number of pixels needed in X
	(106) does not equal the number of text rows (13) times the row width (8). Even
	with these inconsistencies, the third call does succeed.
	
	Sample Code
	-----------
	
	  C compile options required: /MW or /MWs
	
	        include 'flib.fi'
	        include 'fgraph.fi'
	        include 'flib.fd'
	        include 'fgraph.fd'
	
	        record /windowconfig/ wc
	
	        wc.numxpixels=-1
	        wc.numypixels=-1
	        wc.numtextcols=1
	        wc.numtextrows=1
	        wc.numcolors=-1
	        wc.fontsize=-1
	
	        print *, 'Success? ',setwindowconfig(wc)
	        print *, 'numxpixels',wc.numxpixels
	        print *, 'numypixels',wc.numypixels
	        print *, 'numtextcols',wc.numtextcols
	        print *, 'numtextrows',wc.numtextrows
	        print '(A,Z8)', ' Font size: ',wc.fontsize
	        print *, 'Success? ',setwindowconfig(wc)
	        print *, 'numxpixels',wc.numxpixels
	        print *, 'numypixels',wc.numypixels
	        print *, 'numtextcols',wc.numtextcols
	        print *, 'numtextrows',wc.numtextrows
	        print '(A,Z8)', ' Font size: ',wc.fontsize
	        print *, 'Hit return to continue'
	        read *
	        print *, 'Success? ',setwindowconfig(wc)
	
	        END
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	
