---
layout: page
title: "Q149000: PRB: REQUERY Function Reopens a View's Table Exclusively"
permalink: kb/149/Q149000/
---

## Q149000: PRB: REQUERY Function Reopens a View's Table Exclusively

	Article: Q149000
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you requery a view to refresh it with new data, the table with which the view
	is associated will be opened exclusively -- if it has been closed after the view
	was opened. This occurs even if SET EXCLUSIVE is off. Requerying a view opens
	the associated table if that table is not already open.
	
	WORKAROUND
	==========
	
	To make sure that the table that is associated with the view stays open in
	shared mode, do not close the table after the view has been opened. For example,
	a form may close the table; and then the view gets requeryed.
	
	Another possible resolution to repopulating a control with new data is to set the
	rowsource (or recordsource) to an empty string, perform the requery and then set
	the rowsource or recordsource to the original value, as follows:
	
	     ThisForm.Combo1.Rowsource=""
	     Requery()
	     ThisForm.Combo1.Rowsource="<path and name>".
	
	STATUS
	======
	
	This problem has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	If a view is opened and its associated table is not already open, the table will
	be opened exclusively or shared depending on current Visual FoxPro settings. For
	example, if EXCLUSIVE is set to Off, the table will be opened shared. If the
	table is closed while the view is still open, requerying the view with the
	REQUERY() function will open the table exclusively no matter what the EXCLUSIVE
	setting.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure EXCLUSIVE is set On by typing the following in the Command window.
	  Creating a view requires that EXCLUSIVE be set on.
	
	  " SET EXCLUSIVE ON " (without the quotation marks)
	
	2. Open the \Vfp\Samples\Data\Testdata.dbc database.
	
	3. On the File menu, click New. Then click View, and click the New File button.
	
	4. Select the Customer table from the Add Table or View dialog box.
	
	5. Click the Fields tab, and then click the Add All button. On the File menu,
	  click Save, and save the view with the name View_Customer. Close the view.
	  Now the view is created.
	
	6. On the Window menu, click View Window. Observe the tables as they are opened
	  and closed as you type the following commands in the Command window:
	
	     CLOSE TABLES
	     SET EXCLUSIVE OFF
	     USE view_customer
	     SELECT customer
	     WAIT WINDOW IIF(ISEXCLUSIVE("customer"),"Exclusive", "Shared")
	     USE
	     SELECT view_customer
	     =REQUERY()
	     SELECT customer
	     WAIT WINDOW IIF(ISEXCLUSIVE("customer"),"Exclusive", "Shared")
	
	After you reopen the view, the View_Customer view is open exclusively because
	that is the only way a view can be opened. The Customer table will be
	automatically opened when the View_Customer view is opened, and because
	EXCLUSIVE is set Off, the WAIT WINDOW command shows it as being opened shared.
	After you close the Customer table and call the REQUERY() function on the view,
	the Customer table is opened exclusively even though EXCLUSIVE is set OFF.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
