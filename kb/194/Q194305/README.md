---
layout: page
title: "Q194305: BUG: Highlighter in List Box Does Not Move with MoverBar"
permalink: /kb/194/Q194305/
---

## Q194305: BUG: Highlighter in List Box Does Not Move with MoverBar

{% raw %}

	Article: Q194305
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x and 6.0, when a list box has the MultiSelect and MoverBar
	properties both set to .T., and you click and highlight an item in the list box,
	the moverbar on the left of the list box moves up or down and the selected item
	moves with the moverbar but the highlighted bar does not move. The item that
	moved into its place in the list is highlighted instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior does not happen in Visual FoxPro 3.x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form, named MyList.
	
	2. Add the customer table to the data environment.
	
	3. In the form, add a list box control.
	
	4. In Init event of the list box, insert the following code:
	
	        SCAN
	           This.AddItem(Company)
	        ENDSCAN
	
	5. Set the MoverBars and MultiSelect properties of the list box .T..
	
	6. Save and run the form.
	
	7. Click in the list box to select an item, then click the moverbar of the
	  selected items and move the bar up or down.
	
	NOTE: Once you move the selected item using the moverbar on the left of the list
	box, the highlight for the selected item remains in the same location and does
	not move with the moverbar.
	
	Additional query words: kbVFp500abug kbVFp600bug kbCtrl kbContainer kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
