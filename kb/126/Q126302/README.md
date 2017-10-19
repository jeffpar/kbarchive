---
layout: page
title: "Q126302: PRB: Excluded Encrypted App in Project Makes New App Encrypted"
permalink: /kb/126/Q126302/
---

## Q126302: PRB: Excluded Encrypted App in Project Makes New App Encrypted

	Article: Q126302
	Product(s): Microsoft FoxPro
	Version(s): 2.6a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Options on the Project menu, the Encrypted check box is selected
	even though it was never selected.
	
	CAUSE
	=====
	
	You have included in your project, as an excluded object, an application (.app
	file) that was built with encryption.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem:
	
	- If you want to include a reference to another application in your project,
	  and that project was built with encryption, rebuild the referenced project
	  without encryption.
	
	- Remove the referenced application from your project. Then, on the Project
	  menu, click Options, and make sure that you clear the Encryption check box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two projects named ProjectA and ProjectB.
	
	2. Build ProjectB with encryption turned on.
	
	3. In ProjectA, click Add, and add a reference to the ProjectB application file.
	
	4. The resultant A.APP file is built with encryption turned on. To check this,
	  on the Project menu, click Options; the Encryption check box is selected.
	
	Additional query words: FoxWin encrypted
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP500 kbVFP600
	Version           : :2.6a,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
