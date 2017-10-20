---
layout: page
title: "Q104349: PRB: SetupWizard .INF File Contains a Bad Description Line"
permalink: /kb/104/Q104349/
---

## Q104349: PRB: SetupWizard .INF File Contains a Bad Description Line

{% raw %}

	Article: Q104349
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when you attempt to run a setup routine that
	was created using the FoxPro SetupWizard. This message will appear after the
	details have been entered on the first setup screen.
	
	  Error: INF file contains a badly formed file description line - too few
	  fields (commas)
	
	Also, Visual FoxPro produces the following error:
	
	  Object ID 0: Invalid ObjID field: 240.00....
	
	CAUSE
	=====
	
	This error occurs because the SetupWizard has written decimal places to a field
	in the .INF file.
	
	RESOLUTION
	==========
	
	To eliminate this error, issue the following command before running the
	SetupWizard:
	
	  SET FIXED OFF
	
	The .INF files will now be correctly written.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxWin 2.50 distribution kit setup wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	

{% endraw %}
