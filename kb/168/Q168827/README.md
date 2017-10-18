---
layout: page
title: "Q168827: FIX: ActiveX Control with &quot;Message&quot; Property Causes Page Fault"
permalink: kb/168/Q168827/
---

## Q168827: FIX: ActiveX Control with &quot;Message&quot; Property Causes Page Fault

	Article: Q168827
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbvfp kbvfp500 kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a form created in Visual FoxPro 5.0 or 5.0a with an ActiveX control that
	has a property called "MESSAGE" causes an Invalid Page Fault.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	An ActiveX control created in Visual Basic 5.0 with a property called "MESSAGE"
	(in either uppercase or lowercase letters) causes an Invalid Page Fault in
	Visual FoxPro 5.0 or 5.0a running on Windows 95. The error on Windows NT is an
	"Application error" with Visual FoxPro referencing memory at location 0xffffffff
	that could not be read. MESSAGEBOX is a reserved word in Visual FoxPro and may
	possibly be the cause of the behavior. ActiveX controls normally do not need to
	avoid the container's reserved words in order to work properly. The use of other
	Visual FoxPro reserved words as ActiveX control property names does not,
	necessarily, cause the same behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic 5.0, create an ActiveX control as follows:
	
	  a. Double-click the Form to open a Code window.
	
	  b. From the Tools menu, select Add Procedure.
	
	  c. On the Add Procedure dialog box, select Property and type "message" as the
	     new property name.
	
	  d. In the Code window, in both the Property Let() and Property Get()
	     procedures, change the property type from "variant" to "string."
	
	  e. Save the project and control files as "Test." Save the .ocx file as
	     "Test.ocx" (The name of the control project and the control's Name
	     property should be "Test.")
	
	2. In Visual FoxPro 5.0 or 5.0a, add the new control (Test.ocx) to the list of
	  controls in the Tools Options dialog box. The control will appear in the
	  ActiveX controls list as Project1.Test.
	
	3. Create a form and add the new ActiveX control. Run the form and an Invalid
	  Page Fault (Windows 95) or Application Error (Windows NT) will occur.
	
	NOTE: Adding new properties with names of other Visual FoxPro reserved words may
	not result in similar behavior.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbvfp kbvfp500 kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
