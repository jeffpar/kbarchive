---
layout: page
title: "Q157723: HOWTO: Extend the Visual FoxPro Solutions Sample"
permalink: kb/157/Q157723/
---

## Q157723: HOWTO: Extend the Visual FoxPro Solutions Sample

	Article: Q157723
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbnokeyword kbPrinting kbvfp500 kbvfp600
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can easily extend the Visual FoxPro Solutions.exe sample by adding new
	components. This article describes the steps required to add a new form, query,
	view, or report to the Solutions sample.
	
	MORE INFORMATION
	================
	
	Adding a New Component to Solution.dbf
	--------------------------------------
	
	To add a new component to the Solutions sample, add a new record to Solution.dbf
	and fill in the following fields.
	
	The Key Field:
	
	The Key field must be unique, and it must be a number followed by an underscore,
	205_ for example. The Key field is used to populate the treeview control
	(oleTree) in Solution.scx.
	
	The Parent Field:
	
	The Parent field must match the Key value of the record for the parent node of
	the sample in the treeview. For example, if you want to add a new component to
	be displayed under "ActiveX\ActiveX Controls" in the Solution.scx treeview,
	replace the Parent field with 101_. A Parent of 0_ indicates that the item is
	added to the root level of the treeview control.
	
	The Text Field:
	
	The text you enter in the Text field is displayed in the treeview control and the
	filtered list view in Solution.scx.
	
	The Image Field:
	
	The Image field specifies the picture to be displayed beside the component in the
	treeview. If you are adding a component to be run, set the picture to "dot."
	
	To see all the images, right-click oleImages in Solution.scx and choose ImageList
	Control Properties.
	
	The File Field:
	
	The File field contains the name of the new sample file.
	
	The Type Field:
	
	Fill in the Type field as follows:
	
	  N -- Not a sample
	  F -- Form
	  V -- View
	  Q -- Query
	  R -- Report
	
	The Path Field:
	
	The path of the new sample file, relative to the directory that Solution.scx is
	located in.
	
	The Descript Field:
	
	The Descript field contains the description that is displayed in Solution.scx
	when the sample is selected in the treeview or in the list box.
	
	The Method Field (for forms only):
	
	If you want a form to be opened in design mode with a particular method opened by
	default, specify the method in the Method field.
	
	Customizing a Form for the Solutions Sample
	-------------------------------------------
	
	Queries, reports, and views don't need any special coding to be good Solution
	application citizens, but forms do need a little customization.
	
	1. Add the c_solutions class from VFP\Samples\Solution\Solution.vcx in Visual
	  FoxPro 5.0 or the MSDN directory under Samples\vfp98\Solution\Solution.vcx in
	  Visual FoxPro 6.0 to your form. Keep the default name of c_solutions1.
	
	2. Add the following lines to the Activate event of the form:
	
	          IF TYPE('THIS.c_solutions1') = "O"
	        THISFORM.c_solutions1.SaveHelp
	          ENDIF
	
	
	3. Add the following lines to the Deactivate event of the form:
	
	          IF TYPE('THIS.c_solutions1') = "O"
	        THIS.c_solutions1.RestoreHelp
	          ENDIF
	
	4. Add the behindscenes class from Vfp\Samples\Solution\Solution.vcx or the MSDN
	  directory under Samples\vfp98\Solution\Solution.vcx in Visual FoxPro 6.0 to
	  your form, and make sure the HelpContextID of the form is set to 0, the
	  default. This opens the solutions overview topic when a user chooses the
	  Behind the Scenes button or presses F1.
	
	If you want to provide a Help topic for your component, you need to make a change
	to c_solution and make sure that the user gets the updated copy. The cHelpFile
	property of c_solution is protected, but it should not be. When you create a
	help file for your new component, set the cHelpFile property of c_solutions1 to
	the name of your help file.
	
	
	Adding a New Component to the Filtered List View
	------------------------------------------------
	
	The filtered list isn't a filtered list at all: the list displays one side of a
	many-to-many relationship. Each Solutions component can be listed under multiple
	"filters" and each "filter" can contain many components. The tables involved in
	the relationship are as follows:
	
	  Solution.dbf--The list of components
	  Reftext.dbf--The list of "filters" and an ID
	  Xref.dbf--A juncture table between Solution and Reftext
	
	If your new component belongs under one or more of the existing filters, add
	records to Xref.dbf with the ID of the filter in Reftext.dbf and the Key value
	for your component from Solution.dbf. If you want to add another filter, add the
	new filter to Reftext.dbf.
	
	REFERENCES
	==========
	
	For a sample form that can be used to facilitate the adding of new components
	and filters to the sample, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q158051 SAMPLE: Solution.exe Extends the Visual FoxPro Solutions Sample
	
	Extract the form Filtrlst.scx from Solution.exe. For best results, these files
	Filtrlst.scx and Filtrlst.sct should be placed in the Vfp\Samples\Solution
	directory. The form itself contains instructions about its use.
	
	All components in Solution.dbf are listed when the filter is set to "All,"
	whether you have added your component to other filters or not.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbnokeyword kbPrinting kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
