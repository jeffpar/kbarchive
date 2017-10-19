---
layout: page
title: "Q106708: How to Generate Unique Key Field Values"
permalink: /kb/106/Q106708/
---

## Q106708: How to Generate Unique Key Field Values

	Article: Q106708
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.6x 3.00 | 1.02 2.00 2.5x
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	There are several ways to generate a unique string for a key field value. One
	method of doing this is described below.
	
	MORE INFORMATION
	================
	
	The following code is adapted from the "FoxPro 2.5 Advanced Developer's
	Handbook" by Adams and Powell, Chapter 18, page 644.
	
	The following function accepts a numeric parameter to specify the length of the
	key desired. If no parameter is passed, the function will generate a unique key
	that is 8 characters long. The maximum key length that can be generated is 18
	characters.
	
	     FUNCTION ukey
	     PARAMETER lenkey
	     IF PARAMETERS()=0
	          lenkey=8
	     ENDIF
	     IF lenkey=1
	          RETURN RIGHT(SYS(3),1)
	     ENDIF
	     len1=FLOOR(lenkey/2)
	     len2=lenkey-len1
	     key1= RIGHT(SYS(3),len1)
	     key2= RIGHT(SYS(2015),len2)
	
	     RETURN key1+key2
	
	Theoretically, this method allows more possible keys than FoxPro can store
	records, without a duplicate; however, there is the possibility of duplication
	because of the cyclic nature of the algorithm (which is based on the system time
	and date).
	
	The default 8-character return from UKEY() will be sufficient for most systems
	and the chance of a duplicate is significantly less than 1:10**18. (The actual
	figure is estimated here: 36**8*10**10). To ensure uniqueness, a SELECT SQL
	statement can be used. For example, if you were using a database alias of
	MYDATA, and a key field of KEYFIELD C(8), you would use the following SELECT SQL
	statement:
	
	     goodkey=.F.
	     DO WHILE !goodkey
	        newkey= UKEY()
	        SELECT KEYFIELD from MYDATA WHERE KEYFIELD=newkey
	        goodkey=IIF(_TALLY=0,.T.,.F.)
	     ENDDO
	
	This method will slow down as the data grows, but should be sufficient for
	databases with less than 16 million records. For larger databases, use a key
	length greater than 8.
	
	REFERENCES
	==========
	
	"FoxPro 2.5 Advanced Developer[ASCII 146]s Handbook," Pat Adams and Jordan
	Powell, Brady Publishing, New York, NY., 1993, Chapter 18, page 644
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60 unique key avoid duplicate record
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300
	Version           : 2.5x 2.6x 3.00 | 1.02 2.00 2.5x
	
	=============================================================================
	
