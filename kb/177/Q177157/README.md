---
layout: page
title: "Q177157: PRB: Disabled Items in List Box Become Enabled"
permalink: /kb/177/Q177157/
---

## Q177157: PRB: Disabled Items in List Box Become Enabled

{% raw %}

	Article: Q177157
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Items disabled in a list box become enabled when the list box receives focus and
	the RowSourceType property of the list box is set to anything other than
	5-Array.
	
	CAUSE
	=====
	
	This is caused by the refreshing of the list box values from the data source.
	
	RESOLUTION
	==========
	
	Set RowSourceType for the list box to 5-Array.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a table to the DataEnvironment of the form.
	
	3. Add a list box object to the form.
	
	4. In the Click method of the list box, type the following code to disable an
	  item that is clicked on:
	
	        This.List(This.ListItemId)="\"
	
	5. Set the following properties of the list box:
	
	        RowSource = <Tablename>
	        RowSourceType = 2 - Alias
	
	6. Add a command button to the form.
	
	7. Save and run the form.
	
	8. Click on several items in the list box to disable them.
	
	9. Click the command button created in Step 6.
	
	10. Click or Tab into the list box to set focus to the list box.
	
	NOTE: As soon as the focus returns to the list box all the disabled items are
	enabled.
	
	REFERENCES
	==========
	
	For more information on this, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129329 How to Populate a Form's ListBox Object from an Array
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
