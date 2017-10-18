---
layout: page
title: "Q231938: BUG: ResetToDefault Doesn't Work on Events and Methods in VFP 6"
permalink: kb/231/Q231938/
---

## Q231938: BUG: ResetToDefault Doesn't Work on Events and Methods in VFP 6

	Article: Q231938
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbContainer kbCtrl kbOOP kbvfp600bug kbGrpDSFox
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the ResetToDefault method at run-time in Visual FoxPro 6.0, the
	following error occurs:
	
	  Property does not have a default value.
	
	This error only occurs when resetting events or methods. Resetting properties
	does not produce the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When calling the ResetToDefault method, it resets the property, event, or method
	that it is referencing back to its default value. For example, issuing the
	following code sets the FontBold property of the form back to the default value
	of False:
	
	  Thisform.ResetToDefault("FontBold")
	
	In Visual FoxPro 6.0, setting properties back to their default works correctly
	but setting events and methods back to their defaults causes the error described
	above. Of course, properties that are not available at run-time or design-time
	will always return the error, as they should.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the code into a program file:
	
	       PUBLIC oform1
	       oform1=NEWOBJECT("form1")
	       oform1.Show
	
	       DEFINE CLASS form1 AS form
	                 Caption = "Form1"
	                 Name = "Form1"
	
	                 ADD OBJECT command1 AS commandbutton WITH ;
	                               Top = 120, ;
	                               Left = 184, ;
	                               Height = 27, ;
	                               Width = 99, ;
	                               Caption = "ResetToDefault", ;
	                               Name = "Command1"
	
	                 PROCEDURE Click
	                               WAIT WINDOW "In the Form Click event."
	                 ENDPROC
	
	                 PROCEDURE command1.Click
	                               Thisform.ResetToDefault("Click")
	                 ENDPROC
	  ENDDEFINE
	
	2. Run the program and click the command button.
	
	The error above occurs and the form's Click event is not set back to its default
	because the WAIT WINDOW command still fires.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbContainer kbCtrl kbOOP kbvfp600bug kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
