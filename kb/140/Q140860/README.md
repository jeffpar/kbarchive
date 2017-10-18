---
layout: page
title: "Q140860: HOWTO: Refresh a Graph"
permalink: kb/140/Q140860/
---

## Q140860: HOWTO: Refresh a Graph

	Article: Q140860
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp300b kbvfp500
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Previous versions of FoxPro could call procedures (refreshgrph, updategrph) that
	were built into the Graph Wizard to redraw a chart to reflect changes in data.
	While this functionality was never officially supported, the information was
	made available to customers and many developers used it.
	
	This article gives example code for the equivalent functionality using Visual
	FoxPro and the new Graph Wizard. Of course, it is only intended as an example,
	your tables and so will be different.
	
	MORE INFORMATION
	================
	
	Assumptions
	-----------
	
	- A form exists and that there is an olebound control on the form with its
	  ControlSource property set to a table that has charts in a General field.
	- The Spcgrph table is opened exclusively.
	- The tables used are Phonz.dbf which contains the data and Spcgrph.dbf which
	  has a general field called olegraph that contains the chart.
	
	Using the Code
	--------------
	
	You could place this code in the Click event of a button marked "Refresh Chart."
	
	  ** Select the work area and turn off the console
	  SELECT PHONZ
	  SET CONSOLE OFF
	  SELECT email,  avg_time, FROM PHONZ INTO CURSOR SPCRES
	
	  **  Now the data is in the cursor SPCRES. The table with the graph in it
	  **  needs to have the current record deleted. The following code
	  **  adds the updated chart in a new record. The operation seems to
	  **  confuse the olebound control, so you should lock the screen, so
	  **  you won't see it. Then set the controlsource of the olebound control
	  **  to null for the duration.
	  **
	  **  Note that the wizard does not just modify the chart that you are
	  **  on, it appends a new record with a new chart. If you don't want
	  **  your table to grow every time that you do this, you must delete
	  **  the current record.
	  **
	  **  The spcgrph table must be packed after deletion, so it must
	  **  be opened exclusivly. Because the Wizard leaves spcgrph opened
	  **  non-exclusivly, it needs to be closed and re-opened.
	
	  select spcgrph
	  delete
	  pack
	  use
	  thisform.lockscreen = .T.
	
	  thisform.oleboundcontrol1.controlsource = ""
	
	  **  Load the New chart
	
	      SELECT SPCRES
	      DO (_GENGRAPH) WITH "AUTOGRAPH", 4, 1, "Test1",,,,"spcgrph",.T.
	
	  ** NOTE: If you are using Visual FoxPro 6.0, make sure to add a .dbf
	  ** extension to "spcgrph" or the data is written to a .scx file.
	  ** After using this wizard, the graph table (spcgrph) is open, but it
	  ** is not open exclusively. Note that if you had more than one chart
	  ** in the table, you would have to do some fancy shuffling at this point
	  ** to make sure that you were on the right record. (the one that you want
	  ** to show in the form.
	
	  select spcgrph
	  use
	  use spcgrph.dbf in 0 exclusive
	
	  **  Close the cursor and go back where you came from
	
	      SELECT SPCRES
	      USE
	      SELECT PHONZ
	
	      thisform.oleboundcontrol1.controlsource = "spcgrph.olegraph"
	      thisform.lockscreen = .F.
	
	  ** Refresh the Form
	  <BR/><BR/>
	  THISFORM.REFRESH
	  THISFORM.OLEBOUNDCONTROL1.REFRESH
	
	  ******************* End Of Code ******************************
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp300b kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
