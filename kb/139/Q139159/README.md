---
layout: page
title: "Q139159: How to Use a Builder to Change a Text Box Name to a Field Name"
permalink: kb/139/Q139159/
---

## Q139159: How to Use a Builder to Change a Text Box Name to a Field Name

	Article: Q139159
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Usually, when you want to change the name of a text box control, you must select
	each control, and then change the Name property of each control. However, it is
	possible to create a Builder that changes the name of multiple controls at once.
	The example presented in this article assumes that you want to change the name
	of the text box controls to the name of the field specified as the control
	source.
	
	MORE INFORMATION
	================
	
	There are several ways to register and call a custom builder. This article
	explains a method that includes two basic steps.
	
	1. Create a new program file that executes the desired changes by entering the
	  following code:
	
	     * Builder code to change name of selected text boxes
	     * to underlying control
	     x =""
	     nObjects = 0
	
	     *The ASELOBJ() function creates an array referencing the selected
	     *controls. It also returns the number of selected controls
	     *Hence, nObjects is the number of selected controls
	     *aSelobjects is the name of the array created by ASELOBJ()
	
	     nObjects = ASELOBJ(aSelobjects)
	
	     *The FOR loop cycles through the array of selected controls
	     IF nObjects > 0
	       FOR nCnt = 1 TO nObjects
	          *store the name of the table and field to a variable x
	          x = ASELOBJECTS(nCnt).ControlSource
	          *The ATC() function locates the decimal separating the
	          *table name and field name.
	          *The SUBSTR() function then extracts the field name
	          *and resets the control's name to that of the field
	          ASELOBJECTS(nCnt).Name = SUBSTR(x,ATC('.',x)+1)
	       NEXT
	     ENDIF
	
	2. Register the program properly in the Builder.dbf table. The program must be
	  properly registered before the builder becomes available in the Form
	  Designer.
	
	  a. Open the Builder.dbf table located in the \Vfp\Wizards directory.
	
	  b. Append a new blank record. Three fields in the table must be filled: in:
	     Name, Type, and Program. The Name field is the name you want to give to
	     the builder. For example, the Name field can contain "Field name builder."
	
	  c. Enter Multiselect in the type field. With this keyword, the builder is
	     used when multiple controls are selected.
	
	  d. Enter the name of the program including the path in the program field.
	
	  e. Close the Builder.dbf table. When you select multiple text box controls
	     and call a builder, your new builder should appear as one of the available
	     choices.
	
	NOTE: as mentioned previously, this builder is designed to change the name of the
	text box control to the field name specified as the control source. It derives
	the field name from the entry in the ControlSource property, assuming that the
	entry is of the type:
	
	     table.field
	
	You could modify the code to rename the controls differently.
	
	Additional query words: VFoxWin wizard
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
