---
layout: page
title: "Q221655: FIX: FFCs - Set Filter Dialog Does Not Show Current Filters"
permalink: /kb/221/Q221655/
---

## Q221655: FIX: FFCs - Set Filter Dialog Does Not Show Current Filters

	Article: Q221655
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Set Filter dialog in the _filterexpr class of _table.vcx class library does
	not show current filters. The filters information gets erased when the Set
	Filter dialog is closed or released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add the customer table to the data environment of the form.
	
	3. Add a command button to the form.
	
	4. Change the command button caption to Filter.
	
	5. In the Click event of the command button, place the following code:
	
	     ox=NEWOBJECT("_filterexpr","c:\program files\Microsoft Visual Studio\VFP98\ffc\_table.vcx") 
	     ox.Show
	
	6. If the path to the Class library is different from what is listed here, you
	  need to change it to the appropriate path.
	
	7. Save and run the form.
	
	8. Click on the command button.
	
	9. In the Set Filter dialog box, click the Build Expression button.
	
	10. In the Filter Conditions dialog box, type "ALFKI" (without the quotation
	  marks) in the text box next to the "equal" sign. Then click the Add button.
	
	11. Click OK to exit from the Filter Conditions dialog box and back to the Set
	  Filter dialog box.
	
	12. In the Set Filter dialog box, click the Apply button.
	
	13. Now, click the Filter button in the main form again.
	
	The edit box in the Set Filter dialog is empty.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
