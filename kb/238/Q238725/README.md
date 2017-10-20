---
layout: page
title: "Q238725: PRB: ShowColor Method Might Not Work on Palm-Size Devices"
permalink: /kb/238/Q238725/
---

## Q238725: PRB: ShowColor Method Might Not Work on Palm-Size Devices

{% raw %}

	Article: Q238725
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual C++ version 3.0, on platform(s):
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the ShowColor method of the Common Dialog control on some Palm-size
	PC devices, you receive the following error:
	
	  Application Error
	  An error was encountered while running this program: Object doesn't support
	  this action.
	
	STATUS
	======
	
	This behavior is by design. Not all manufacturers have implemented this option
	on their devices.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE Palm-size PC project in either Visual Basic or
	  eMbedded Visual Basic. Form1 is created by default.
	
	2. Add a Command button and a Microsoft CE Common Dialog control to the form.
	
	3. Paste the following code into Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     CommonDialog1.ShowColor
	  End Sub
	
	4. Run the project, targeting the Windows CE device.
	
	5. Click the Command button.
	
	The following error message appears:
	
	  Application Error
	  An error was encountered while running this program: Object doesn't support
	  this action.
	
	Additional query words: vbce wce vbce6 eVB PsPC
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbVCeMb
	Version           : :1.0,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
