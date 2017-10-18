---
layout: page
title: "Q133453: How to Index an Address Field"
permalink: kb/133/Q133453/
---

## Q133453: How to Index an Address Field

	Article: Q133453
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Indexing on an address field with "Index on address to myidx" does not list the
	streets in alphabetical order if the street name is in the middle of the address
	field (i.e. 111 Main Street).
	
	MORE INFORMATION
	================
	
	The function addsort is passed a string which is converted and returns a string
	in a new form i.e. 123 Main Street -----> MAINSTREET00000123
	
	1. On the FoxPro File menu, click New. Then select Program as the file type, and
	  click New.
	
	2. Type or paste the following program into the Untitled.prg window.
	
	       FUNCTION addsort
	     PARAMETER xxx
	     xxx=ALLTRIM(UPPER(xxx))
	     wordnum=OCCURS(' ',xxx)+1  && A space between the quotation marks
	     DIMENSION mychar(wordnum)
	     mychar=''                  && No spaces between the quotation marks
	     yyy=''                     && No spaces between the quotation marks
	     x_begin=1
	     IF LEN(xxx)>0
	     *  The following FOR/NEXT breaks the address down into separate words.
	     FOR i=1 TO wordnum
	        x_end=AT(' ',xxx,i)-x_begin && A space between the quotation marks
	        IF x_end<1                  && No spaces in the string
	          x_end=LEN(xxx)
	        ENDIF
	        mychar(i)=SUBSTR(xxx,x_begin,x_end) && single word in address field
	        x_begin=x_begin+x_end+1
	        IF x_begin>LEN(xxx)
	          i=wordnum
	        ENDIF
	     ENDFOR
	     * The following FOR/ENDFOR  grabs all the character words and
	     * build a new string. (1st, 2nd, 3rd, 4th, etc. are considered
	     * character words.
	     FOR i=1 TO wordnum
	        IF ISALPHA(mychar(i))
	           yyy=yyy+mychar(i)
	        ENDIF
	        IF ISDIGIT(mychar(i))
	           IF 'ST'$mychar(i) .OR. 'ND'$mychar(i) .OR. 'RD'$mychar(i) .OR. ;
	              'TH'$mychar(i)
	              yyy=yyy+LEFT('00000000',10-LEN(mychar(i)))+mychar(i)
	              mychar(i)=''  && No spaces between the quotation marks
	           ENDIF
	        ENDIF
	     ENDFOR
	     * The following FOR/ENDFOR grabs all the numeric words and appends
	     * it to the end of the new string.
	     FOR i=1 TO wordnum
	        IF ISDIGIT(mychar(i)) .AND. .NOT. ;
	           (INLIST(mychar(i),'ST','ND','RD','TH'))
	           yyy=yyy+LEFT('00000000',8-LEN(mychar(i)))+mychar(i)
	        ENDIF
	     ENDFOR
	
	     ELSE
	        Y=" "   && A space between the quotation marks
	     ENDIF
	     RETURN(yyy)
	
	3. On the FoxPro File menu, click Close. Click Yes when prompted to save changes
	  to untitled.prg. Then type "addsort.prg" without the quotation marks when
	  prompted to "Save As." Then click Save on the "Save As" window.
	
	4. On the FoxPro Window menu, click View and then Open. Select a table to be
	  indexed, and choose Open.
	
	5. Assume the database field to be indexed is called Address. In the Command
	  window type:
	
	        INDEX ON addsort(address) TO myidx
	
	Additional query words: FoxWin FoxDos FoxMac VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
