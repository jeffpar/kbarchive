---
layout: page
title: "Q236815: INFO: Effects of Column and CurrentControl ControlSource Setting"
permalink: /kb/236/Q236815/
---

## Q236815: INFO: Effects of Column and CurrentControl ControlSource Setting

	Article: Q236815
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFo
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how the ControlSource property of the grid column and the
	ControlSource property of the column's CurrentControl affect the display and
	manipulation of data.
	
	MORE INFORMATION
	================
	
	The display value for a grid's column is determined as follows:
	
	- If CurrentControl.ControlSource, Column.ControlSource, and Grid.RecordSource
	  are not specified, the grid displays the fields from the table that is open
	  in the current work area. If a table is not open, nothing is displayed.
	
	- If the column and the ControlSource of its CurrentControl is not specified,
	  the display value is based on the respective fields in the table. (The fields
	  are pulled from a table as described in the first above scenario.) For the
	  first column, the default is the first field in the table. For the second
	  column, it is the second field, and so on.
	
	- With the second above scenario, if a column already has an explicit
	  ControlSource, the respective table field is assigned to the next column that
	  does not have a ControlSource specified.
	
	- If the Column.ControlSource and the CurrentControl.ControlSource properties
	  are different and the Bound property of the column is set to .F., the
	  following behaviors occur based on the setting of the Sparse property of the
	  column:
	
	   - If Sparse = .F., the column always displays the value in the field that is
	     specified as the ControlSource of the CurrentControl.
	
	   - If Sparse = .T., the column displays the ControlSource of the column when
	     the column does not have the focus. When the column has focus, the
	     ControlSource of the CurrentControl is displayed.
	
	The data is updated based on the settings of ControlSource and Bound properties
	as follows:
	
	- If the Bound property of the grid's column is set to .T., the ControlSource
	  of the column overrides the ControlSource of the column's CurrentControl.
	  Therefore, data changes in the column are written to the table/field
	  specified as the column's ControlSource.
	
	- If the Bound property of the column is set to .F., the ControlSource of the
	  CurrentControl is in effect and updates are written to the field/table that
	  is specified as the ControlSource of the CurrentControl.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
