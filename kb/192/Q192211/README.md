---
layout: page
title: "Q192211: PRB: Controls Not Getting Focus After Clicking IE Address Area"
permalink: kb/192/Q192211/
---

## Q192211: PRB: Controls Not Getting Focus After Clicking IE Address Area

	Article: Q192211
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbIE kbvfp600
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The edit or text region of any control (including text boxes, edit boxes,
	spinners and combo boxes) in an ActiveDocument does not regain focus after
	selecting the Address region in Internet Explorer.
	
	RESOLUTION
	==========
	
	Try clicking outside of Internet Explorer. For instance, click the Windows
	Desktop, and then select the text or edit region of the control again in the
	ActiveDocument to regain focus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project, named Myactivedoc.
	
	2. Create a form, named Myform.
	
	3. Add a few controls to the form, like text boxes, edit boxes, spinners and
	  combo boxes.
	
	4. Save and add the form to the project.
	
	5. Create a class, named Myclass, based on ActiveDoc.
	
	6. Place the following code in the Run event of the ActiveDoc class:
	
	     DO FORM myform
	     READ EVENT
	
	7. Place the following code in the ContainerRelease event:
	
	     CLEAR EVENT
	
	8. Save the class as Myactivecls.vcx and add it to the project.
	
	9. Make sure Myactivecls.vcx is "Set To Main" before you build the application.
	
	10. Now, click the Build button and select Build Application to build an
	  application.
	
	11. From the Tools menu, select Run Active Document and type in Myactivedoc.app.
	
	12. Once Myactivedoc.app is hosted in Internet Explorer, click around all the
	  controls and try typing something in the controls. You can type into the
	  text or edit region and move from control to control.
	
	13. Now, click the Address drop-down or type something in the Address text box
	  region in Internet Explorer.
	
	The cursor remains in the last control that you clicked or typed in and cannot be
	moved to the Address region even if you have selected the Address region. Now,
	click back on the last control used before you clicked the Address region and
	start typing again. The text that you type appears in the Address region in
	Internet Explorer and not in the actual control that contains the cursor.
	
	Additional query words: activedoc
	
	======================================================================
	Keywords          : kbActiveDocs kbIE kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
