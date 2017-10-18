---
layout: page
title: "Q190538: PRB: Cannot Directly Put Active Document on Active Desktop"
permalink: kb/190/Q190538/
---

## Q190538: PRB: Cannot Directly Put Active Document on Active Desktop

	Article: Q190538
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to place a Visual FoxPro Active Document application on the Windows
	Active Desktop fails.
	
	CAUSE
	=====
	
	The Windows Active Desktop is not a valid Active Document container.
	
	RESOLUTION
	==========
	
	Active Documents must be hosted in Internet Explorer 3.0 or 4.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	You must have the Windows Active Desktop component of Internet Explorer 4.0 or
	Windows 98 installed to reproduce this behavior.
	
	1. Run the following line of code to build the sample Active Document
	  application (actdoc.app) that ships with Visual FoxPro:
	
	        BUILD APP actdoc.app FROM HOME(2)+"solution\tahoe\actdoc.pjx"
	
	2. Choose the Display icon from the Windows Control Panel.
	
	3. Select the Web tab in the Display Properties dialog box.
	
	4. If there is no Web tab in the Display Properties dialog box, the following
	  steps will install the Active Desktop component of Internet Explorer 4.0 and
	  add the Web tab to the Display Properties dialog box:
	
	  a. Click the Add/Remove Programs icon from the Windows Control Panel.
	
	  b. Select Microsoft Internet Explorer 4.0 and select the Add/Remove button.
	
	  c. Select Add the Windows Desktop Update component from Web site radio
	     button.
	
	  d. Select Windows Desktop Update check box on the Microsoft Internet Explorer
	     4.0 Component Download Web page.
	
	5. Make sure the "View my Active Desktop as a Web page" check box is checked.
	
	6. Click the New button and type the path and file name of the Active Document
	  application that was built in step 1 into the Location: textbox of the New
	  Active Desktop Item dialog box.
	
	7. Click Apply or OK.
	
	The Active Document application does not appear correctly on the Windows Active
	Desktop, instead a window with the text Navigation Cancelled appears.
	
	Additional query words: kbVFp kbVFp600 kbActiveDesktop kbActiveDocs
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
