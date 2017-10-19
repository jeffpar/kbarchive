---
layout: page
title: "Q183632: INFO: How to Add &quot;Generate Report&quot; Menu Item in Visual Mode"
permalink: /kb/183/Q183632/
---

## Q183632: INFO: How to Add &quot;Generate Report&quot; Menu Item in Visual Mode

	Article: Q183632
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The report generation feature, which generates a data dictionary from a model
	using Microsoft Word OLE Automation objects in Visual Modeler 1.0 and 1.1 was
	removed from the menu in version 2.0. The functionality can be enabled by
	modifying the vs.mnu file. This article explains how to add/enable the report
	generation feature manually; however, it is not a supported feature and should
	be used at your own risk.
	
	MORE INFORMATION
	================
	
	To enable the report generation menu option, use Notepad to edit the file
	vs.mnu, found in the Visual Modeler installation directory. Add the following
	lines to the top of the file:
	
	     Menu Report
	     {
	        Separator
	           Option "&Generate Report..."
	           {
	              RoseScript .\ReportGen.ebx
	           }
	     }
	
	Save the file.
	
	If Visual Modeler is running, you will need to shut it down and restart so the
	new settings can take effect.
	
	The Generate Report option now appears under Report on the Visual Modeler menu
	bar.
	
	Additional query words: Visual Modeler Report kbdse kbDSupport kbVBp kbVMod kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
