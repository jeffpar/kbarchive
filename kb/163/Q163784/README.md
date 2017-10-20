---
layout: page
title: "Q163784: FIX: Form Wizard Ignores Design Area Limitation"
permalink: /kb/163/Q163784/
---

## Q163784: FIX: Form Wizard Ignores Design Area Limitation

{% raw %}

	Article: Q163784
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Form Wizard to design a form for a table that contains a
	particular mixture of fields of different data types and lengths, the Form
	Wizard may ignore the limits of the design area, producing a form that does not
	show the last few fields or the navigation buttons at the bottom of the form.
	
	When the design area is 640x480 pixels and the horizontal and vertical spacing
	are both 12 pixels, the form will display 17 rows of fields and labels, but any
	additional fields, up to enough for 22 rows, will not be visible in the design
	area.
	
	In other cases, the Form Wizard will issue a message that there are too many
	fields and that there are three alternative workarounds. The "Add Pages"
	alternative is already checked, but is ignored by the Wizard.
	
	There are two alternative, incorrect results. One shows the same 17 rows of
	fields and labels, but will not show the additional fields or navigation
	buttons.
	
	The resulting page of the other alternative shows 10 fields and the navigation
	buttons. This usually occurs when the fields have captions.
	
	NOTE: Not all installations of Visual FoxPro 5.0 will exhibit any form of this
	behavior. Multiple tests made on Windows 95 and Windows NT 4.0 exposed the
	problem but other tests on similarly loaded systems did not.
	
	
	RESOLUTION
	==========
	
	In either of the above cases, the simplest workaround is to add several dummy
	fields to the table structure. The number will vary depending on the particular
	table and may run as high as 22 additional fields. After the form is designed,
	those fields may be deleted from the pages that hold them. In some cases, the
	extra fields can even be deleted from the table structure, and the Form Wizard
	will operate correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database named "Pages.dbc."
	
	2. To the .dbc, add a table named "Pages.dbf" that contains 18 ten-character
	  fields named field1, field2, field3, etc.
	
	3. Select Options from the Tools menu. In the Options dialog box, set the design
	  area on the "Form" page to 640x480 pixels, and both horizontal and vertical
	  spacing to 12 pixels. Choose "Set As Default."
	
	4. Ensure that the Pages.dbf is in the currently-selected work area.
	
	5. From the Tools menu, select Wizards, and then select Form.
	
	6. In the Wizard Selection dialog box, select the default, Form Wizard, and
	  click OK.
	
	7. Select all fields from the Pages table.
	
	8. Choose "Finish."
	
	9. In step 4, note that the "Add Pages" checkbox is checked. Select the "Save
	  form and modify it in the Form Designer" option, and then choose "Finish."
	
	10. The Form Wizard will build a form with only 17 fields and their names
	  showing, but the property box will list label and text for field 18 and the
	  BUTTONS1 command button group.
	
	11. Close the form and modify the database by issuing the following command:
	
	        MODIFY DATABASE Pages.dbc
	
	  Within the database designer, modify the Pages.dbf table. On the first 18
	  fields, add captions, specifically "Long Caption n" (without the quotes),
	  where "n" is the field number. Add 12 more ten-character fields named
	  field23, field24, etc.
	
	12. Save the table definition.
	
	13. Build a new form with the Form Wizard, using all the fields of Pages.dbf.
	  Save and open the form in the form designer for modification. Accept the
	  default check in the "Add Pages" checkbox.
	
	  The Form Wizard will proceed until it stops with a dialog box advising that
	  you have too many fields and suggests the following options:
	   - Click the Add Pages Checkbox
	
	   - Remove some of your selected fields
	
	   - Increase the maximum design area setting in the options dialog
	
	  When you click OK, the Form Wizard will finish.
	
	14. Observe the form.
	
	15. Add 8 more fields with the same characteristics and build a new form.
	
	16. Observe the form.
	
	17. Add 4 more fields with the same characteristics and build a new form.
	
	18. Observe the form.
	
	19. Modify the table by removing the last 4 rows, then build a new form.
	
	20. The new form should show pages even though the form you built in step 15 did
	  not show pages.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
