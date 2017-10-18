---
layout: page
title: "Q124125: How to Create Your Own Base Class for Custom Default Form"
permalink: kb/124/Q124125/
---

## Q124125: How to Create Your Own Base Class for Custom Default Form

	Article: Q124125
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Form Builder in Visual FoxPro version 3.0, a generic form is
	created for you by default. You can then modify or change this generic default
	form to make a custom default form. Then this customized template can be used
	with the Form Builder.
	
	This article shows by example how to create a custom default form.
	
	MORE INFORMATION
	================
	
	When you create your own Base Class, you are creating a subclass of Visual
	FoxPro's base class. A Form is a Base Class in Visual FoxPro. You can create a
	new subclass of the Base Class Form that can act as the default Form. This
	allows you to set a form the way you like it (background, color, logo, fonts,
	and so on). Then you can have Visual FoxPro call your design as the default
	(base) form whenever you create a new form.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form the way you want it. Then from the File menu, choose Save As
	  Class. In the next dialog, select the the Current Form check box, and give
	  the name of the class and the .VCX file where it will be stored.
	
	2. Choose Options From the Tools Menu.
	
	3. Select the Controls Tab, and add the Class library in which this form class
	  is stored. This process is called "registering" the class library.
	
	4. Select the Forms Design tab. The registered library should appear in the Form
	  edit box of the Template Classes region. If no libraries are listed, click
	  the check box next to 'Form:' and select your class library. If you have more
	  than one form class, select the one you want to be the default. (Look for it
	  on the right-hand side, under Class Name.)
	
	5. Click OK.
	
	6. Create a new form. It should have the properties of your template.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	
