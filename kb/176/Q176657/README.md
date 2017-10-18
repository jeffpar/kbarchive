---
layout: page
title: "Q176657: PRB: SET FILTER Command Behaves Differently in a Method or Event"
permalink: kb/176/Q176657/
---

## Q176657: PRB: SET FILTER Command Behaves Differently in a Method or Event

	Article: Q176657
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp500a
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SET FILTER command to control data while in a form, most of the
	objects in the form disappear or do not display data properly after the SET
	FILTER command is issued. This problem occurs when you use a variable in the
	evaluation clause of the SET FILTER command and the command is executed in an
	object's method or event. Text and combo boxes may disappear while grids and
	list boxes do not show any records. Tabbing or clicking the location of the
	objects on the form restores them to their original values.
	
	CAUSE
	=====
	
	When you use a variable in a method or event, the variable goes out of scope
	unless the variable was available before the form was run.
	
	RESOLUTION
	==========
	
	- Use macro substitution in the SET FILTER command. An example is below:
	
	     xyz = "'M'"             && Use double quotation marks outside of single
	                             && quotation marks.
	     SET FILTER TO <fieldname> = &xyz    && Using macro substitution.
	
	  -or-
	
	- Create the variable as public before you use it so that the variable does not
	  go out of scope after leaving the event that it was created in.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Normally, a query would be used to create a subset of a table based on some
	value. The SET FILTER command can also be used to view that subset of data.
	Using a variable in the SET FILTER command in one of the object's methods or
	events is a problem because the variable goes out of scope after returning from
	the method or event. Therefore, the filter is invalid and the data resets back
	to all the records.
	
	Trying to use a property of the form in the SET FILTER command results in this
	error:
	
	  Property <property name> is not found.
	
	The SET FILTER command does not recognize a property of the form; therefore, a
	variable must be used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with a text box and a list box.
	
	2. Add a table into the form's DataEnvironment.
	
	3. Set the following properties of the list box:
	
	        RowSource = <tablename>
	        RowSourceType = Alias
	
	4. Set the ControlSource of the text box to a field in the table.
	
	5. Create a command button and place the following code in the Click event:
	
	        xyz = "M"  && Depending upon you filter, "M" is just an example.
	        SET FILTER TO <fieldname> = xyz && Use a character field.
	        Thisform.List1.Requery
	        GO TOP  && Reposition record pointer so SET FILTER takes effect.
	        Thisform.Refresh
	
	6. Run the form and click the command button. The text box may disappear and the
	  list box has no records showing. Click each object to populate them with the
	  original data.
	
	7. Change the code in the Click event to one of the two options described in the
	  Resolution section and run the form. The text and list box are now populated
	  with the new data.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
