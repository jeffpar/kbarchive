---
layout: page
title: "Q286754: PRB: Three-Tiered Service Model Is Not Visible in Visual Modeler"
permalink: /kb/286/Q286754/
---

## Q286754: PRB: Three-Tiered Service Model Is Not Visible in Visual Modeler

	Article: Q286754
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbVBp600 kbVMod kbGrpDSVBDB kbDSupport kbvbpSearch
	Last Modified: 19-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new .mdl file in Visual Modeler, the Three-Tiered
	Service Model is not visible under the Logical View. This prevents the user from
	seeing the User, Business, and Data Services components.
	
	CAUSE
	=====
	
	The option in Visual Modeler to display the logical view as a 3-Tier Diagram is
	not selected.
	
	RESOLUTION
	==========
	
	To resolve this problem, on the Tools menu, choose Options, and then enable the
	3 Tier Diagram option in the Diagram tab.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Follow these steps to turn on the Visual Modeler option to display the logical
	view as a 3 Tier Diagram:
	
	1. On the Visual Modeler menu, click Tools, and then click Options.
	
	2. Select the Diagram tab.
	
	3. Select the check box for the option 3 Tier Diagram, and then click OK.
	
	4. Restart Visual Modeler for the setting to take effect, and note that the
	  logical view as a 3 Tier Diagram is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbVMod kbGrpDSVBDB kbDSupport kbvbpSearch 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4
	Version           : :6.0,6.0 SP3,6.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
