---
layout: page
title: "Q130443: Form Wizard Basics and Differences from 2.6 Screen Wizard"
permalink: /kb/130/Q130443/
---

## Q130443: Form Wizard Basics and Differences from 2.6 Screen Wizard

{% raw %}

	Article: Q130443
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides additional information to help you use the Form Wizard to
	create a simple single-table form. This information adds to that already
	available under the Help menu and in the reference manuals.
	
	MORE INFORMATION
	================
	
	The process of creating a form in Visual FoxPro is similar to the same process
	in FoxPro version 2.6, but there are subtle differences, which Visual FoxPro
	users need to know about.
	
	Menu Access Differences
	-----------------------
	
	In version 2.6, you access the Screen Wizard by choosing Wizard from the Run menu
	and selecting Screen. In Visual FoxPro, you access the Wizard programs by
	choosing Wizards from the Tools menu. Also, the Screen Wizard is now called the
	Form Wizard, in keeping with the syntactical changes in Visual FoxPro.
	
	Form Type Differences
	---------------------
	
	FoxPro version 2.6 allows you to create only a single-table screen; that is, your
	screen can based on one and only one table.
	
	The Form Wizard in Visual FoxPro gives you the ability to create an additional
	form type (a one-to-many form) that involves two tables joined together in a
	parent-child relationship. For example, you can create a form based on the
	relationship between the Customer table (the parent) and the Orders table (the
	child). However, this type of form is not covered in this article.
	
	Form Creation Steps Differences
	-------------------------------
	
	There are some changes to some of the steps involved in using the Form Wizard to
	create a single-table form in Visual FoxPro. The required steps in Visual FoxPro
	are outlined below with the differences between FoxPro version 2.6 and Visual
	FoxPro noted.
	
	Step 1 - Wizard Selection:
	
	Select the Wizard you want to use. As noted earlier, you can create a simple
	single-table or a more complex multi-table form. Again, this article deals only
	with the creation and modification of a single-table form.
	
	Step 2 - Field Selection:
	
	Begin to design the finished form. This step integrates the process of selecting
	the data source for the fields on the form with that of selecting the actual
	fields to be placed on the finished form.
	
	Visual FoxPro allows you to select fields from several different data sources.
	You can choose fields from "free tables" (tables that are not part of a
	database), from tables that are part of a database, and from updatable views
	defined in a database. FoxPro version 2.6 has no database object, so all fields
	come from what are now called "free tables."
	
	You choose the form fields from those listed by the Form Wizard. Choosing a
	different field as data source after adding fields to the 'Selected Fields' box
	removes any previously-selected fields. Fields from different data sources
	cannot be combined in the Form Wizard when designing a single-table form.
	
	Step 3 - Field and Button Styles:
	
	Specify the style of field you want. As with FoxPro version 2.6, the supported
	styles are Standard, Chiseled, Shadowed, Boxed, and Embossed. In this step, you
	can also tell Visual FoxPro what type of command button (called push buttons in
	version 2.6) you want. Supported button styles are Text, Picture, or No Buttons.
	The No Buttons style does not exist in FoxPro version 2.6.
	
	Step 4 - Sort Order:
	
	Indicate how you want your data sorted. From the available fields for the data
	source, you can choose up to three sort fields. You can click a field, and then
	click the 'Add' button, or you can double-click the sort field to select it. You
	can choose the Ascending (A - Z) or Descending (Z - A) sort order. Note that the
	sort order applies to all fields selected for sorting; you can't specify that
	one field be sorted in ascending order and another field in descending order.
	
	NOTE: If the fields for the form originate from a database that was not opened
	exclusively, Visual FoxPro isn't able to create index tags. For example, if you
	chose the fields Contact_title and Customer_ID from the Customer table, which is
	part of the Tastrade database, there is, by default, no index defined for
	Contact_title. As a consequence, when you attempt to finish the form, Visual
	FoxPro returns this error message:
	
	  "The DBC containing the selected table was previously opened non-exclusively
	  and the field(s) you chose for sorting are not in an existing index tag.
	  Please select field(s) which already have an existing index tag or exit the
	  wizard and reopen the DBC exclusively."
	
	After you click the 'OK' dialog button, you are returned to the Sort Order
	definition screen. Close the database container and reopen it exclusively to fix
	this problem or manually create the needed index tags.
	
	Step 5 - Finishing the Form:
	
	Finish the design. You can save the form for later use, save and run the form, or
	save the form and modify it in the form designer. When you choose the Finish
	button, Visual FoxPro creates the form according to your definition. Depending
	on the action you specified on the last screen, you may end up running the form
	right away, modifying the form, or storing the form for later use.
	
	
	Additional query words: VFoxWin design usage
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
