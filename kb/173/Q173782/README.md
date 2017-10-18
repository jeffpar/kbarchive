---
layout: page
title: "Q173782: PRB: MouseMove Events Fires on Disabled Control in VFP"
permalink: kb/173/Q173782/
---

## Q173782: PRB: MouseMove Events Fires on Disabled Control in VFP

	Article: Q173782
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.x and 5.x, the MouseMove event fires when you move over a
	disabled control. This behavior may confuse some developers because the
	MouseMove event does not fire on a disabled control in Visual Basic 5.0 and
	Microsoft Access 97.
	
	RESOLUTION
	==========
	
	You must write code to determine the status of the Enabled property of the
	object and then conditionally perform the MouseMove event method code. The
	following code checks if the object's Enabled property is true and if so,
	permits your MouseMove method code to conditionally execute.
	
	     IF This.Enabled=.t.
	        ThisForm.Command2.Visible=.f.
	     ENDIF
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This is the desired behavior in Visual FoxPro. Since Visual FoxPro does not
	automatically disable the MouseMove event of a disabled object, it offers you
	more flexibility in application design. If you want to emulate the behavior
	found in Visual Basic or Microsoft Access 97, see the RESOLUTION section above.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form that contains two command buttons.
	
	2. In Command1, set the Enabled property to false (.F.) and add the following
	  code to the MouseMove event:
	
	        Thisform.Command2.Visible=.F.
	
	3. Run the form and move the icon over the disabled command button. The
	  MouseMove fires and the Command2 object becomes invisible.
	
	Additional query words: MouseMove Access Visual Basic
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
