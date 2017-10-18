---
layout: page
title: "Q131213: PRB: Grid Behavior Isn't Consistent w/ that of List/Combo Box"
permalink: kb/131/Q131213/
---

## Q131213: PRB: Grid Behavior Isn't Consistent w/ that of List/Combo Box

	Article: Q131213
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUGkbbuglist
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro allows list boxes, combo boxes, and grids within a form to be
	based on the output of a query (.QPR) file. The list box and combo box controls
	support a Requery method that causes the query to be updated. The grid does not
	support a Requery method to update the results of a query. Therefore, if the
	list box or combo box and the grid are populated with the results of the QPR
	file, the grid looses its data when the Requery method is used on the list box
	or combo box.
	
	RESOLUTION
	==========
	
	Set the RecordSource of the grid back to itself as shown in the following code:
	(See step 7 in the Steps to Reproduce section for an example)
	
	     Thisform.Grid1.RecordSource = Thisform.Grid1.RecordSource
	
	NOTE: By changing the RecordSource of the grid, all the properties of the grid
	and its columns are set back to their default. Please follow the workaround
	listed in the REFERENCES section of this article if custom properties of the
	grid need to be saved.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the C:\Vfp\Samples\Mainsamp\Data\Tastrade.dbc database.
	
	2. Create a new form named Frmmyfrm.
	
	3. Add a list box to the form. Set the following properties in the properties
	  sheet:
	
	        List1.RowSourceType = 4 (QPR)
	        List1.RowSource = qryTest.qpr
	
	4. Add a grid to the form. Set the following properties in the properties
	  sheet:
	
	        Grid1.RecordSourceType = 3 (QPR)
	        Grid1.RecordSource = qryTest.qpr
	
	5. Add two command buttons to the form. Set the caption of the first button to
	  "List Requery", and the caption of the second to "Grid RecordSource".
	
	6. Add the following code to the Click event of the List Requery command
	  button:
	
	        Thisform.List1.Requery()
	
	7. Add the following code to the Click event of the Grid RecordSource command
	  button and to the Activate event of the form:
	
	        Thisform.Grid1.RecordSource = Thisform.Grid1.RecordSource
	
	  NOTE: This command does not need to be in the Activate event of the form in
	  Visual FoxPro 3.0 but is needed in Visual FoxPro 5.0.
	
	8. Close and save the form. Create a new program file with the following code.
	  Save this file as Qrytest.qpr (be sure to add the .QPR extension) and close
	  the file.
	
	        SELECT contact_name, customer_id FROM customer INTO CURSOR curTest
	
	9. Enter the following command in the FoxPro Command window:
	
	         DO FORM frmmyfrm
	
	10. Click the List Requery button and note that the data in the grid disappears.
	  Click the Grid RecordSource button and the data reappears.
	
	  NOTE: Do not base your grid on a .QPR file if the data in the grid needs to
	  be modified. Data created with a .QPR file is read-only. Creating a view
	  would be a better alternative if data needs to be modified. This requires
	  setting the RecordSourceType of the grid to "2 - Alias" and the RecordSource
	  to the name of the view. The data in the grid could then be refreshed using
	  the REQUERY() function. This is a Visual FoxPro function that can be issued
	  on a command line by itself. The function should be preceded by an equal
	  sign, as in the following example, to update the view with new data:
	
	            =REQUERY()
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Developer's Guide, Chapter 8
	
	For more information on this topic, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q140653 Cursor-Based Grid Goes Blank If SQL SELECT Resets Cursor
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
