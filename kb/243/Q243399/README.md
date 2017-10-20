---
layout: page
title: "Q243399: FIX: .FRM files Not Converted with MODIFY REPORT Command"
permalink: /kb/243/Q243399/
---

## Q243399: FIX: .FRM files Not Converted with MODIFY REPORT Command

{% raw %}

	Article: Q243399
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbReportWriter kbVBp600bug kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to modify a FoxBASE+ report form (.FRM file), the Visual FoxPro
	Converter Dialog box does not appear and a blank report with an extension of
	.FRM.FRX is created.
	
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
	
	1. Launch FoxBASE+.
	
	2. Open a table and create a new report named "TESTDATA."
	
	3. Save the report and exit FoxBASE+.
	
	4. Launch Visual FoxPro 6.0 (version 6.00.8167), and set the default directory
	  to the directory containing TESTDATA.FRM.
	
	5. From the Command window, issue the following command:
	
	  MODIFY REPORT TESTDATA.FRM
	
	6. A blank report entitled TESTDATA.FRM.FRX appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbReportWriter kbVBp600bug kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
