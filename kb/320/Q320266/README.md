---
layout: page
title: "Q320266: HOWTO: Convert a Visual FoxPro 7.0 Menu to a Visual FoxPro 6.0 F"
permalink: /kb/320/Q320266/
---

## Q320266: HOWTO: Convert a Visual FoxPro 7.0 Menu to a Visual FoxPro 6.0 F

{% raw %}

	Article: Q320266
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open a menu that was created in Visual FoxPro 6.0 in Visual FoxPro 7.0,
	try to convert it to the Visual FoxPro 7.0 format, and try to run the menu in
	Visual FoxPro 6.0, you receive the following error message:
	
	  Menu file is invalid.
	
	This article describes how you can convert the menu back to the Visual FoxPro 6.0
	format.
	
	NOTE: Visual FoxPro 7.0 allows you to have pictures on the menu. Visual FoxPro
	6.0 did not have this feature; as a result, if you convert the menu back to
	Visual FoxPro 6.0 format, any picture information will be lost.
	
	MORE INFORMATION
	================
	
	1. Start Visual FoxPro, and then set the default directory to the directory that
	  contains the menu that you want to convert.
	
	2. Create a program from the following code, and then run it from a command
	  window.
	
	NOTE: Change any instances of YourMenu in the following code to reflect the name
	of the menu that you want to convert.
	
	  * Save a copy of the menu before converting to VFP 6 format.
	  COPY FILE YourMenu.* TO YourMenuSave.*
	  * Delete the fields that VFP 7 adds to the menu.
	  ALTER TABLE YourMenu.mnx DROP COLUMN SYSRES DROP COLUMN RESNAME
	  USE
	
	3. You can now use this menu in Visual FoxPro 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
