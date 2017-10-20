---
layout: page
title: "Q137955: PRB: &quot;Error loading file...&quot; When Opening a Form"
permalink: /kb/137/Q137955/
---

## Q137955: PRB: &quot;Error loading file...&quot; When Opening a Form

{% raw %}

	Article: Q137955
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to open a form for modification, the following error
	appears:
	
	  Error loading file - ControlSource - record number x (where x is an integer).
	  Parent will not allow this property setting for
	  form1.grid1.column1.text1.controlsource.
	
	You can't change the setting because the form will not open.
	
	CAUSE
	=====
	
	The form will not open if any errors are detected.
	
	RESOLUTION
	==========
	
	1. In the Command window, use the USE Myform.scx command to open the form as a
	  table. Then use the BROWSE command to browse the table.
	
	2. Go to the appropriate record that caused the error as indicated in the error
	  message.
	
	3. Modify the Properties memo field by double-clicking it and removing the line
	  that says ControlSource=.
	
	4. Close the Browse window.
	
	5. Type USE in the Command window to close the table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form called Myform.scx.
	
	2. Add a table to the data environment
	
	3. Create a grid by dragging the table from the data environment to the form.
	
	4. Change the properties in the following order:
	
	  Object                  Property          Value
	  ---------------------------------------------------
	  Grid1                   ColumnCount       1
	  Grid1.Column1           Bound             .F.
	  Grid1.Column1.Text1     ControlSource     <anyfield>
	  Grid1.Column1           Bound             .T.
	
	5. Save and close the form.
	
	6. Open the form. The error message appears.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
