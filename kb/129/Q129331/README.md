---
layout: page
title: "Q129331: How to Preserve Index Expressions to Rebuild CDX and Tags"
permalink: /kb/129/Q129331/
---

## Q129331: How to Preserve Index Expressions to Rebuild CDX and Tags

	Article: Q129331
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00| 2.5x 2.60
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often, a utility menu is included in an application that enables the user to
	perform functions such as reindexing or backing up files. One very useful
	function to include on such a utility menu is a way to recreate the .CDX file
	with all of the tags rebuilt programatically. This keeps the .CDX file in
	optimum condition if done routinely. This article shows by example how to do
	this.
	
	MORE INFORMATION
	================
	
	You first need to store the tag names and index expressions in a utility table.
	Then you need some code to read the utility file that will use the values to
	reindex the table.
	
	Sample Code
	-----------
	
	The following sample code uses the tutorial table CUSTOMER.DBF to demonstrate how
	to create a utility file, read it, and use the values to reproduce the .CDX
	file.
	
	  * Make the CDX Expression table.
	
	  CREATE TABLE cdxexp ;
	     (TAG C(10),expression C(254))
	
	  * Insert three index expressions into the table.
	  * Below is a simple index expression on one field.
	
	  INSERT INTO cdxexp ;
	     (TAG,expression) ;
	     VALUES ;
	     ("COMPANY","company")
	
	  * Below is a concantenated index expression.
	
	  INSERT INTO cdxexp ;
	     (TAG,expression) ;
	     VALUES ;
	     ("STATE_CO","ALLTRIM(UPPER(state))+ALLTRIM(company)")
	
	  * Below is a complex index expression that correctly orders a numeric
	  * field concantenated with a character field. Indexing on the STR() of
	  * a numeric alone will yield incorrect ordinal values of the numeric
	  * field. This expression uses PADL and ALLTRIM with STR to put the
	  * numeric characters into the correct location in the string.
	
	  INSERT INTO cdxexp ;
	     (TAG,expression) ;
	     VALUES ;
	     ("YTDP_ST","PADL(ALLTRIM(STR(ytdpurch,20,2)),20,'0') + ;
	     ALLTRIM(UPPER(state))")
	
	  * Use the library FoxTools for the MessageBox function.
	
	  SET LIBRARY TO foxtools
	  SET DEFAULT TO c:\fpw26a\tutorial
	
	  * Delete the current CDX file in order to rewrite the header.
	
	  IF USED('CUSTOMER')
	     SELECT CUSTOMER
	     USE
	  ENDIF
	  DELETE TAG ALL
	
	  * Open the table to reindex (CUSTOMER.DBF) in the second Workarea.
	
	  SELECT B
	  USE C:\FPW26A\TUTORIAL\CUSTOMER
	
	  * Call the MsgBox function from FoxTools with "Yes/No" buttons, option 4.
	  * The MsgBox function will need to be replaced with a GET object for
	  * versions other than Windows.
	
	  msg="Ready to rebuild the CDX file?"
	  answer=MSGBOX(msg,"",4)
	
	  * If the user clicks the Yes button, the return value will be 6.
	
	  IF answer=6
	     SELECT A                  && index expression file called "cdxexp"
	     GO TOP
	     DO WHILE NOT EOF()        && process the whole file
	        mtag=cdxexp.tag        && read the values from the record
	        mexp=cdxexp.expression
	        SELECT B
	        INDEX ON &mexp TAG &mtag   && index on the variable expressions
	        SELECT A
	        SKIP                   && go to the next record
	     ENDDO
	  ENDIF
	
	  * End of program.
	
	Additional query words: VFoxWin FoxWin FoxDos FoxMac FoxUnix
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00| 2.5x 2.60
	
	=============================================================================
	
