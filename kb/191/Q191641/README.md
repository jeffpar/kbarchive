---
layout: page
title: "Q191641: BUG: Deleted Event Does Not Fire When Deleting Programmatically"
permalink: /kb/191/Q191641/
---

## Q191641: BUG: Deleted Event Does Not Fire When Deleting Programmatically

	Article: Q191641
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A grid's Deleted event does not fire when a record is programmatically deleted.
	However, the event does fire if you interactively delete a record in a grid.
	
	RESOLUTION
	==========
	
	Call the grid's Deleted event explicitly using code. For the sample code in the
	MORE INFORMATION section, see step 3 for further instructions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) file that contains the following code and run the
	  program:
	
	        CREATE TABLE Ztest (A c(1), B c(1))
	        INSERT INTO Ztest (A,B) VALUES ('A', 'B')
	
	        USE 'Ztest'
	
	        F1 = CREATE('oForm')
	        F1.SHOW
	        * F1.gridcontrol.Deleted  && Remove comment to see grid's Deleted
	                                  && event fire.
	        READ EVENTS
	
	        DEFINE CLASS oForm AS FORM
	           ADD OBJECT GRIDcontrol AS myGRID
	           PROC INIT
	              DELETE
	           PROC DESTROY
	              CLEAR EVENTS
	        ENDDEFINE
	
	        DEFINE CLASS myGRID AS GRID
	           RECORDSOURCE='Ztest'
	           RECORDSOURCETYPE=1
	           PROC DELETED
	              LPARAMETERS nRecNo
	              WAIT WIND "Deleted Event Fired"
	        ENDDEFINE
	
	2. Notice that the record is marked as deleted in the grid, but the grid's
	  Deleted event never fired. Now, double-click the deletion marker in the grid
	  (the black rectangle to left of the first field in the grid) and note that
	  the grid's deleted event fires as expected.
	
	3. Remove the asterisk from the commented line of code in the example so that is
	  reads as follows:
	
	        F1.gridcontrol.Deleted
	
	  Run the example again. Note that the grid's Deleted event fires when
	  explicitly called with code.
	
	
	Additional query words: kbVFp600bug kbVFp500abug kbVFp300bbug kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
