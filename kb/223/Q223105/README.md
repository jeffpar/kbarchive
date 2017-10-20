---
layout: page
title: "Q223105: FIX: DllUnregisterServer Fails on msvbvm60.dll w/Error H80029C4A"
permalink: /kb/223/Q223105/
---

## Q223105: FIX: DllUnregisterServer Fails on msvbvm60.dll w/Error H80029C4A

{% raw %}

	Article: Q223105
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbtophit kbVBp kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any attempt to unregister the Visual Basic 6.0 run-time msvbvm60.dll fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Taskbar, click the Start button, and then click Run.
	
	2. In the Run dialog, type the following command:
	
	  "Regsvr32.exe /u msvbvm60.dll" (without the quotation marks)
	
	3. Click OK.
	
	  Note that Regsvr32.exe /u msvbvm60.dll fails although running Regsvr32.exe
	  msvbvm60.dll is successful.
	
	REFERENCES
	==========
	
	For additional information about using Regsvr32.exe, please see the following
	article in the Microsoft Knowledge Base:
	
	Q198038 INFO: Useful Tools for Package and Deployment Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbtophit kbVBp kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
