---
layout: page
title: "Q192078: BUG: Exclusive Check Box Unselected After Importing/Exporting"
permalink: /kb/192/Q192078/
---

## Q192078: BUG: Exclusive Check Box Unselected After Importing/Exporting

{% raw %}

	Article: Q192078
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After importing or exporting a file in Visual FoxPro using the interface, any
	tables that are opened through the Data Session window afterward will be opened
	as shared because the Exclusive check box has been reset and cleared. This
	happens even though Exclusive is still set to On as the default setting in the
	FoxPro environment. If the files are imported or exported programmatically, the
	exclusive status is not changed in the Data Session.
	
	RESOLUTION
	==========
	
	After the Open button of the Data Session is selected, select the Exclusive
	check box to open the files exclusively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue a SET EXCLUSIVE ON in the Command window to ensure exclusive status in
	  the FoxPro environment.
	
	2. From the Window menu, choose Data Session to open the Data Session window.
	
	3. Click the Open button and make sure that the Exclusive check box is selected.
	
	4. From the Visual FoxPro File menu, choose Export. In the Export dialog box,
	  type "myfile" (without the quotation marks) in the "To:" text box.
	
	5. Select the ellipsis box located to the right of the "From:" text box and
	  choose any FoxPro table.
	
	6. Select the OK button. The table exports and you are returned to the Data
	  Session window.
	
	7. Select the Open button on the Data Session window and observe that the
	  Exclusive check box is cleared.
	
	Additional query words: kbVFp500abug kbVFp600bug kbDatabase KbDBFDBC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
