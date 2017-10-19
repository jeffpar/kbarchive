---
layout: page
title: "Q139781: PRB: Converted Trans.scx 2.x Sample Must Be Modified to Work"
permalink: /kb/139/Q139781/
---

## Q139781: PRB: Converted Trans.scx 2.x Sample Must Be Modified to Work

	Article: Q139781
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Following error is generated when you try to run the Trans.app sample
	application:
	
	  No update tables are specified. Use the Tables property of the cursor. Press
	  any key to cleanup and exit...
	
	Trans.app is a FoxPro version 2.x sample program that must be converted before it
	will run in Visual FoxPro, but even after conversion, the error occurs.
	
	CAUSE
	=====
	
	The ReadShow event handler contains a call to the REFRESH user-defined function
	(UDF). Visual FoxPro now includes a built-in function by the same name that
	takes precedence over the UDF.
	
	RESOLUTION
	==========
	
	Modify the converted application, or revert to the 2.x version, make the
	modifications there, and reconvert.
	
	To modify the 2.x version of Trans.pjx:
	
	1. Start FoxPro version 2.x.
	
	2. Type the following command in the Command window:
	
	  " MODIFY SCREEN Trans.scx. " (without the quotation marks)
	
	3. Double-Click the Trans_Type popup, and edit the VALID clause. Change this
	  line:
	
	        = refresh()
	
	  to this line:
	
	        = myrefresh()
	
	4. Open the Cleanup/Procs code snippet. Rename the REFRESH function in the
	  Cleanup code to MYREFRESH.
	
	5. Open the Read Show snippet. Change this line:
	
	        = refresh()
	
	  to this line:
	
	        = myrefresh()
	
	6. Close FoxPro version 2.x, and start Visual FoxPro.
	
	7. Reconvert the application.
	
	8. Build and run the Trans.app application.
	
	To modify the already converted Visual FoxPro 3.0 version:
	
	1. Start Visual FoxPro.
	
	2. Modify the Trans.scx form. Select the frsTrans1 formset in the object popup
	  of the Properties window. Click the Methods tab.
	
	3. Edit the ReadShow method. Change this line:
	
	        = refresh()
	
	  to this line:
	
	        = myrefresh()
	
	4. Select cboTrans_Type19 in the object popup of the Properties window. Click
	  the Methods tab.
	
	5. Edit the Valid event. Change this line:
	
	         = refresh()
	
	  to this line:
	
	         = myrefresh()
	
	6. Edit the Trans.spr program from Trans.pjx. Rename the REFRESH function in
	  Trans.spr to MYREFRESH.
	
	7. Build and run the Trans.app application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Transport the FoxPro 2.x version of Trans.pjx to Visual FoxPro.
	
	2. Build Trans.pjx into an application using Visual FoxPro.
	
	3. Run Trans.app. This generates the error.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
