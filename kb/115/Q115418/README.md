---
layout: page
title: "Q115418: INFO: Appending from a Delimited ASCII File Using Low-Level I/O"
permalink: kb/115/Q115418/
---

## Q115418: INFO: Appending from a Delimited ASCII File Using Low-Level I/O

	Article: Q115418
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are importing data from other applications into FoxPro, a delimited
	ASCII file is often used. However, if any of the data columns from the original
	database extend beyond 255 characters, any text beyond this point will be cut
	off. Text longer than 255 characters should be stored in a FoxPro memo field.
	However, the APPEND FROM command does not move data into memo fields.
	
	To work around this behavior, you can use the low-level file I/O functions in
	FoxPro to programmatically move the data from the text file into the database
	including the memo field. A sample program for doing this is provided below.
	
	MORE INFORMATION
	================
	
	The program below is provided as an example of a FoxPro program that employs
	low-level file I/O to append data from a delimited text file into character and
	memo fields. For purposes of this article, the input text file contains three
	character fields. The third field is to be placed in a memo field and might
	contain embedded carriage returns.
	
	A sample delimited text file might be constructed as follows:
	
	     "FRED","FLINTSTONE","A movie about Barney and Betty"
	     "RENO","RAINES","The Renegade"
	
	The following program will add this data to the database:
	
	     *MYMEMO.PRG
	     m.numchars=0
	     m.end=.F.
	     m.bytestoend=0
	     IF USED("mymemo")
	        SELECT mymemo
	     ELSE
	        IF FILE("mymemo.dbf")
	           USE mymemo IN 0
	           SELECT mymemo
	        ELSE
	           CREATE TABLE mymemo (first C(10), LAST C(15), details m(10))
	        ENDIF
	     ENDIF
	     H=FOPEN("mymemo.txt",10)
	     IF ! H<0
	        m.totalchars=FSEEK(H,0,2)  && how many characters in file?
	        =FSEEK(H,0,0)              && go back to start
	
	        DO WHILE (! EOF(H) ) AND (! m.end)
	           m.first=""
	           m.last=""
	           m.details=""
	           FOR m.numfields = 1 TO 3
	              DO CASE
	                 CASE m.numfields=1
	                    m.field="m.first"
	                 CASE m.numfields=2
	                    m.field="m.last"
	                 CASE m.numfields=3
	                    m.field="m.details"
	              ENDCASE
	              m.numquotes=0
	              DO WHILE m.numquotes < 2 AND (! m.end)
	                 in_char=FREAD(H,1)
	                 DO CASE
	                    CASE in_char=["]
	                       m.numquotes=m.numquotes+1
	                    CASE m.numquotes=1 AND ;
	                     (ASC(in_char)=32 OR (ASC(UPPER(in_char))>64 ;
	                     AND ASC(UPPER(in_char))<91))
	                       STORE EVALUATE(m.field)+m.in_char TO (m.field)
	                 ENDCASE
	                 m.numchars=m.numchars+1
	                 IF m.numchars = m.totalchars   && are we at the end?
	                    m.end=.T.                   && set our own EOF marker
	                 ENDIF
	              ENDDO
	           ENDFOR
	           APPEND BLANK
	           GATHER MEMVAR MEMO
	        ENDDO
	        =FCLOSE(H)
	     ENDIF
	
	For information about using low-level file commands to export data to a delimited
	ASCII file, please see the following article in the Microsoft Knowledge Base:
	
	  Q95722 How to Export Memo Fields to an ASCII File
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin import
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
