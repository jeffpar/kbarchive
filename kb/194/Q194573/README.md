---
layout: page
title: "Q194573: BUG: Grid Shows Only Two Added Records When Buffering/Order Set"
permalink: kb/194/Q194573/
---

## Q194573: BUG: Grid Shows Only Two Added Records When Buffering/Order Set

	Article: Q194573
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a grid with its RecordSource property set to a table with buffering
	enabled and an order set. If you add more than two records to the table, the
	records do not display in the grid until the grid gets focus.
	
	RESOLUTION
	==========
	
	Issue one of the following commands after adding the record:
	
	     GO BOTTOM
	
	-or-
	
	     THISFORM.grid1.SCROLLBARS = THISFORM.grid1.SCROLLBARS
	
	Note that the second command requires modification depending on the exact
	location of the grid in the object hierarchy.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        CREATE TABLE junk (f1 c(8))
	        INDEX ON f1 TAG f1
	        SET MULTILOCKS ON
	        =CURSORSETPROP('buff', 5)   && anything > 1
	
	        PUBLIC oform
	        oform = CREATEOBJECT('form1')
	        oform.SHOW()
	
	        DEFINE CLASS form1 AS FORM
	           AUTOCENTER = .T.
	           HEIGHT = 315
	           WIDTH = 415
	           CAPTION = "Form1"
	
	           ADD OBJECT grid1 AS GRID WITH ;
	              LEFT = 26, ;
	              RECORDSOURCE = "junk", ;
	              RECORDSOURCETYPE = 1, ;
	              TOP = 19
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 252, ;
	              LEFT = 156, ;
	              HEIGHT = 27, ;
	              WIDTH = 84, ;
	              CAPTION = "Add Record"
	
	           PROCEDURE UNLOAD
	              =TABLEREVERT(.T.)
	              USE IN junk
	           ENDPROC
	
	           PROCEDURE command1.CLICK
	              INSERT INTO junk VALUES (SYS(3))
	
	              * The following GO BOTTOM command will cause the records
	              *    to appear
	              * GO BOTTOM
	
	              * Setting the value of the  grid ScrollBars property to itself
	              *    will also cause the records to appear
	              * THISFORM.grid1.SCROLLBARS = THISFORM.grid1.SCROLLBARS
	              THISFORM.REFRESH()
	           ENDPROC
	
	        ENDDEFINE
	
	2. Click the Add Record button several times.
	
	  The first two added records show, the third and subsequent records do not.
	  Clicking in the grid to place the focus in the grid will allow all the
	  records to be displayed.
	
	  To demonstrate the workaround, you may uncomment either the GO BOTTOM command
	  or the ThisForm.Grid1.scrollbars = ThisForm.Grid1.scrollbars command. This
	  will cause all the records to be displayed.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbDSupport KBDSE kbVFP600bug kbVFp300bbug kbVFp500abug kbVFp600bug kbNoKeyWord
	
	======================================================================
	Keywords          : kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	
