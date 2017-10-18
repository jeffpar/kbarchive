---
layout: page
title: "Q194698: FIX: ScaleMode of Foxels Interferes with ColumnWidths Property"
permalink: kb/194/Q194698/
---

## Q194698: FIX: ScaleMode of Foxels Interferes with ColumnWidths Property

	Article: Q194698
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form created with code or through the Form Designer does not retain changes to
	the ColumnWidths property of a list box or combo box when a form's ScaleMode
	property equals 0-Foxels.
	
	RESOLUTION
	==========
	
	Set the ScaleMode of the form to 3-Pixels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place a list box or combo box on it.
	
	2. Change the ScaleMode of the form to 0-Foxels.
	
	3. Click on the list box or combo box, and change the ColumnCount to 3.
	
	4. Change the Columnwidths to 1,10,15 and move off the ColumnWidths property
	  item in the Property sheet. Note that the ColumnWidths values revert to 1,1,1
	  as soon you move off the ColumnWidths property. All the values in the
	  ColumnWidths property revert to the first numeric value in the list. For
	  instance, 15,20,25 would become 15,15,15 after moving off the ColumnWidths
	  property.
	
	Additional query words: kbVFP600 kbDesigner kbCtrl kbContainer combobox listbox
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
