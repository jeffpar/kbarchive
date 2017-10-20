---
layout: page
title: "Q143245: How to Strip Quotation Marks from an ASCII Delimited Text File"
permalink: /kb/143/Q143245/
---

## Q143245: How to Strip Quotation Marks from an ASCII Delimited Text File

{% raw %}

	Article: Q143245
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Typical methods of generating ASCII text files place double quotation marks
	around character fields. Sometimes these quotation marks aren't wanted. This
	article presents a way to remove the quotation marks programmatically. If there
	are double quotation marks embedded in the data itself, however, this method
	cannot be used.
	
	MORE INFORMATION
	================
	
	To remove quotation marks from an ASCII text file programmatically, you must
	first place the file in a memo field. Then the STRTRAN() function can be used to
	replace each instance of double quotations with a blank space. The corrected
	contents of the memo field can then be copied to an ASCII text file.
	
	To demonstrate this technique, type and run the following program named
	Myprog.prg.
	
	    * myprog.prg
	     SET SAFETY OFF
	
	     * Create a table named "mymemo" with one memo field named "notes"
	     * Append a blank record to the table
	     CREATE TABLE mymemo ( notes M(10))
	     APPEND BLANK
	
	     IF !USED("mymemo")
	          USE mymemo IN 0
	     ENDIF
	
	     IF !USED("customer")
	          USE customer IN 0
	     ENDIF
	
	     * copy the company and CONTACT fields to an ASCII tab-delimited text
	     * file
	     SELECT CUSTOMER
	     COPY TO mytext.txt FIELDS company, contact TYPE DELIMITED WITH TAB
	
	     * Place the ASCII file, Mytext.txt, into the memo field notes in the
	     * mymemo table
	     SELECT mymemo
	     APPEND MEMO mymemo.notes FROM mytext.txt OVERWRITE
	
	     * Replace each instance of  double quotes with a blank
	     REPLACE notes WITH STRTRAN(notes,'"',"")
	
	     * Copy the corrected quoteless text back into another ASCII text file
	     COPY MEMO notes TO quoteles.txt
	
	     * Close tables
	     USE
	     SELECT customer
	     USE
	     * end program
	
	Using any text editor, open Mytext.txt and observe the double quotation marks
	around the character fields. Then open Quoteles.txt to confirm that the
	quotation marks have been removed.
	
	Additional query words: FoxWin FoxDos FoxMac VFoxWin quotes
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260a kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0,3.0b
	
	=============================================================================
	

{% endraw %}
