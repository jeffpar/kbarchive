---
layout: page
title: "Q163411: BUG: Class Based on Grid Does Not Maintain FontBold Property"
permalink: /kb/163/Q163411/
---

## Q163411: BUG: Class Based on Grid Does Not Maintain FontBold Property

{% raw %}

	Article: Q163411
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600bug
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a grid class has the FontBold property set to True (.T.), changing the
	ColumnCount of a grid class on a form causes the grid's columns, headers, and
	textboxes to lose their FontBold property settings. The grid object itself
	maintains its proper FontBold property value; however, the objects contained in
	the grid do not inherit this property value. These objects revert to the default
	value (False) for the FontBold property.
	
	In Visual FoxPro 3.0b, changing the ColumnCount property does not affect the
	FontBold property of the grid's columns, headers, and text boxes. Therefore, you
	may notice this behavior on forms that are created in Visual FoxPro 3.0b and
	then executed in Visual FoxPro 5.0 for Windows.
	
	RESOLUTION
	==========
	
	In the Init of the grid class, add the following code:
	
	        FOR i=1 TO This.ColumnCount
	           This.Columns(i).FontBold=This.FontBold
	           This.Columns(i).Header1.FontBold=This.FontBold
	        ENDFOR
	
	This code resets the FontBold property of the columns and column headers after
	instantiation of the class. The ColumnCount property determines the number of
	columns the grid contains.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The steps listed below assume a working knowledge of creating classes and forms
	and setting the properties of objects contained within a form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class based on a grid and name it zgridtest.
	
	2. In this class, set the FontBold property to True (.T.).
	
	3. Save the class.
	
	4. Create a form called ztest.
	
	5. Place a table in the data environment of the form.
	
	6. Add the zgridtest class to the Form Control toolbar and add it to the form.
	
	7. Run the form. The grid's textboxes and headers appear in a bold font.
	
	8. Modify the form and select the zgridtest object in the Properties sheet.
	
	9. Change the ColumnCount property to 2.
	
	10. Run the form and note that the grid's textboxes and headers now appear in
	  normal font.
	
	11. Modify the form and select the zgridtest object. Choose the grid's column,
	  header, or textbox objects. Note that the FontBold property of each of these
	  objects is now set to False instead of True.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
