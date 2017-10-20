---
layout: page
title: "Q299020: FIX: Index Corruption Updating Same Record from FoxPro"
permalink: /kb/299/Q299020/
---

## Q299020: FIX: Index Corruption Updating Same Record from FoxPro

{% raw %}

	Article: Q299020
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbvfp700fix kbvfp7
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Buffering is set to 3 (Optimistic row) and two or more users edit a record
	and commit changes, the table index may become corrupt, causing blank
	("phantom") records to appear.
	
	CAUSE
	=====
	
	Internally, FoxPro calls functions that lock a record and determine that the
	record was changed by another user. The status of current value of the record is
	adjusted, but the value for each index is not updated. As a result, an
	inconsistency is created between the index buffer and the new record.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro version 6.0 (VFP6), paste the following code in a new
	  program:
	
	  ON ERROR *
	  TABLEREVERT(.T.)
	  ON ERROR
	  CLEAR ALL
	  CLEAR
	  SET MULTILOCKS ON
	  SET SAFETY OFF
	  PUBLIC mErr
	  mErr = 0
	
	  ON ERROR mErr = ERROR()
	  USE table1 EXCLUSIVE
	  ON ERROR
	
	  IF mErr  < 2
	  	DO maketable
	  	? "Making table."
	  ELSE
	  	? "Not making table."
	  	? mErr
	  ENDIF
	
	  USE table1 ORDER 1 SHARED
	  CURSORSETPROP("Buffering",3)
	  REPLACE NAME WITH ALLTRIM(NAME) + IIF(mErr < 2,"x","y")
	  IF mErr >2
	  	? "TableUpdate: ",TABLEUPDATE(0,.T.)
	  	CLOSE DATABASES ALL
	  	RETURN
	  ENDIF
	
	  PUBLIC ox
	  ox = NEWOBJECT("myform")
	  ox.SHOW
	
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  DEFINE CLASS myform AS FORM
	  	AUTOCENTER = .T.
	  	WIDTH = 350
	  	HEIGHT = 300
	  	MINBUTTON = .F.
	  	MAXBUTTON = .F.
	  	BORDERSTYLE = 2
	  	CAPTION = []
	  	ADD OBJECT cmdUpdate AS COMMANDBUTTON
	  	ADD OBJECT grdMyGrid AS GRID
	  	PROCEDURE cmdUpdate.CLICK
	  		ACTIVATE SCRE
	  		?"TableUpdate: ",TABLEUPDATE(0,.T.)
	  	ENDPROC
	  	PROCEDURE INIT
	  		WITH THIS
	  			.grdMyGrid.TOP = 75
	  			.grdMyGrid.LEFT = 20
	  			.cmdUpdate.CAPTION = "TableUpdate(0,.T.)"
	  			.cmdUpdate.TOP = 10
	  			.cmdUpdate.WIDTH = 120
	  			.cmdUpdate.HEIGHT = 40
	  			.cmdUpdate.LEFT = 100
	  			IF mErr >2
	  				THIS.cmdUpdate.CLICK
	  			ENDIF
	  		ENDWITH
	  	ENDPROC
	  	PROCEDURE DESTROY
	  		ACTIVATE SCREEN
	  		LIST
	  		CLOSE DATABASES ALL
	  	ENDPROC
	  ENDDEFINE
	
	  PROCEDURE maketable
	  	CLOSE DATABASES ALL
	  	CREATE TABLE table1 (NAME c(10))
	  	INSERT INTO table1 VALUES ('John')
	  	INSERT INTO table1 VALUES ('Mary')
	  	INDEX ON NAME TAG NAME
	  ENDPROC
	
	2. Save the program as Repro1.prg. Then, save the program a second time as
	  Repro2.prg. Be sure to save both programs to the same folder.
	
	3. Run Repro1.prg in this instance of VFP6.
	
	4. Open a second instance of VFP6 and run Repro2.prg.
	
	5. Return to the first instance of VFP6 and click the command button on the form
	  that is displayed. Press the DOWN ARROW key to enter the grid.
	
	You now see a blank, "phantom" record in the grid. If the Status bar is
	available, note that there are only two records in the table that the grid is
	displaying, although the grid seems to contain three records.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
