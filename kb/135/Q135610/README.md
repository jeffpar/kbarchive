---
layout: page
title: "Q135610: How to Use the MoverLists Object Class with a Table Field"
permalink: /kb/135/Q135610/
---

## Q135610: How to Use the MoverLists Object Class with a Table Field

{% raw %}

	Article: Q135610
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro ships with a MoverLists object in the Samples.vcx class library.
	The MoverLists object is used in the Controls sample application. You can use it
	to display information from a table field.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	To use the MoverLists object to display information from a table field, follow
	these steps:
	
	1. Create a new form. On the File menu, click New, and select Form from the New
	  dialog box.
	
	2. On the Form Control toolbar, click the View Classes button, and select Add.
	  Then select Samples.vcx from the Vfp\Samples\Controls directory. Click the
	  MoverLists button on the toolbar.
	
	3. Add the MoverLists class to the form. Make sure the name of the Add object to
	  the form is MoverLists1.
	
	4. In the Init event procedure for the form, add this code:
	
	     candropicon=.f. &&Do not rename or remove this one it is
	                     &&used by the moverlists object
	     nodropicon=.f. &&Do not rename or remove this one it is
	                     &&used by the moverlists object
	     SET ORDER TO contact
	     SCAN
	     THISFORM.moverlists1.lstsource.additem(customer.contact)
	     ENDSCAN
	
	5. Add the customer table to the form's data enviornment by clicking the
	  secondary (right) mouse button and selecting the Customer table from
	  Vfp\Samples\Data directory.
	
	6. Save the form and run it.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
