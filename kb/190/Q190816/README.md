---
layout: page
title: "Q190816: PRB: Component Gallery - Installed ActiveX Controls Refresh"
permalink: /kb/190/Q190816/
---

## Q190816: PRB: Component Gallery - Installed ActiveX Controls Refresh

	Article: Q190816
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Component Gallery includes an ActiveX Catalog. This is a dynamic catalog
	containing either a list of all registered ActiveX Controls or a list of all
	ActiveX Controls selected in the Visual FoxPro Options dialog box. After
	selecting some controls in the Options dialog box, and refreshing this item in
	the Component Gallery, the newly selected ActiveX Controls do not appear in the
	list of installed ActiveX Controls.
	
	CAUSE
	=====
	
	The Set As Default button was not selected in the Options dialog box after
	selecting the ActiveX Controls. When the Component Gallery refreshes the list,
	it reads the registry for the list of ActiveX Controls that were selected in the
	Options dialog box. The selections that are made in the Options dialog are not
	written to the registry until the Set As Default button is selected.
	
	RESOLUTION
	==========
	
	When selecting ActiveX Controls in the Options dialog box, click the Set As
	Default button before refreshing the ActiveX Control catalog in the Component
	Gallery.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Select the Controls tab of the Visual FoxPro Options dialog box.
	
	2. Choose the ActiveX controls Option button and select several ActiveX
	  controls.
	
	3. Close the Options dialog box (do not click "Set As default").
	
	4. Open the Component Gallery.
	
	5. Right-click the ActiveX Catalog/Controls/Installed Controls item and choose
	  Refresh Controls.
	
	The list of ActiveX controls does not include the items that were just selected
	in the Options dialog box.
	
	Additional query words: kbVFp600 KBXBASE KBMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
