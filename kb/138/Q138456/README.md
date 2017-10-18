---
layout: page
title: "Q138456: HOWTO: Use Visual FoxPro Builders"
permalink: kb/138/Q138456/
---

## Q138456: HOWTO: Use Visual FoxPro Builders

	Article: Q138456
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains what Visual FoxPro Builders are and outlines some of the
	points about Builders.
	
	MORE INFORMATION
	================
	
	Visual FoxPro Builders are tools that help you set properties for a specific
	control. For example, you can use a ListBox Builder to set the properties for a
	list box or a Grid Builder to set properties for a grid. Builders facilitate the
	process of setting up objects with the proper set of attributes (property
	values).
	
	Builders are different from wizards in that builders are re-entrant. That is, a
	builder can be used repeatedly on an object without altering or destroying the
	original attributes the object possesses. For example, when you are creating a
	screen that has a command button group and you decide to add an extra command
	button, you can reuse the builder to do it.
	
	Wizards, however, are not re-entrant. They are intended to be used once to create
	a usable item such as a simple data entry screen. Runnning a wizard a second
	time using the file name of an existing object will destroy the original work of
	the same name, including any and all modifications you made previously.
	
	While you can edit a container object manually to add a new command button and
	set its properties individually, it is usually easier to run the builder over
	the CommandButton Group to add the new button. The builder asks a series of
	questions about the control you are modifying and then sets the appropriate
	properties to make the control work the way you want it to work.
	
	You can also use builders to add objects to a form, not just to modify existing
	objects. If you want to add a new text box to a form, the builder will ask a
	series of questions to help define the object's attributes. When you finish the
	definition, the builder adds the object to the form.
	
	Builders can be started in two ways. You can click the Builder button on the
	Properties window. Or you can click the Builder Lock button on the Form Controls
	toolbar, and then click another button on the Controls toolbar to both create a
	new control and automatically start the builder for that control.
	
	Visual FoxPro supports the following Builders:
	
	- Text Box Builder
	
	- Edit Box Builder
	
	- Command Group Builder
	
	- Option Group Builder
	
	- Combo Box Builder
	
	- List Box Builder
	
	- Grid Builder
	
	- Form Builder - AutoFormat Builder - Referential Integrity Builder
	
	To find out the specific attributes available under each builder, place the
	desired object on a form, and activate the builder for the object. All other
	objects not listed here (such as the Page Frame or Spinner controls) do not have
	native builders. If you want to have such functionality for an unlisted object,
	you can use Visual FoxPro to write your own builder for that object.
	
	To add a control by using a builder, follow these steps:
	
	1. In the Form Controls toolbar, click the Builder Lock button.
	
	2. Select the control you want from the Form Controls toolbar, and drop it on
	  the form.
	
	3. Fill in the information on the builder tabs.
	
	In summary, builders are useful and powerful tools that help take some of the
	drudge work out of defining object attributes.
	
	Additional query words: builder list supported reentrant
	
	======================================================================
	Keywords          : kbBuilder kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
