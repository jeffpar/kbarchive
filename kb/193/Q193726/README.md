---
layout: page
title: "Q193726: PRB: Problems Using the Graph Wizard in Visual FoxPro 6.0"
permalink: /kb/193/Q193726/
---

## Q193726: PRB: Problems Using the Graph Wizard in Visual FoxPro 6.0

{% raw %}

	Article: Q193726
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Graph Wizard in Visual FoxPro 6.0 may cause the following error
	message to occur:
	
	  Microsoft Graph does not appear to be installed properly. The latest version
	  of Graph is available from Microsoft Office.
	
	CAUSE
	=====
	
	Microsoft Graph is not included with Visual FoxPro 6.0.
	
	RESOLUTION
	==========
	
	Microsoft Graph ships with previous versions of Visual FoxPro and with Microsoft
	Office. You must install Microsoft Graph from one of these products in order for
	the Graph Wizard to work properly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Applications that use Microsoft Graph can still be distributed with the Graph
	8.0 run-time to customers that do not own Microsoft Office 97 or any other Graph
	version. The Graph 8.0 run-time is included with Visual FoxPro 6.0 and there is
	a check box in Step 2 of the Setup Wizard for selecting to include the Graph 8.0
	run-time on the distribution diskettes.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 6.0 on a computer that does not have a version of
	  Microsoft Graph installed.
	
	2. Launch Visual FoxPro 6.0.
	
	3. Start the Graph Wizard.
	
	The above message will be displayed.
	
	Additional query words: kbVFp600 kbWizard kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
