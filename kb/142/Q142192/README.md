---
layout: page
title: "Q142192: PRB: Abnormal Termination When Instantiate Object from VCX"
permalink: /kb/142/Q142192/
---

## Q142192: PRB: Abnormal Termination When Instantiate Object from VCX

{% raw %}

	Article: Q142192
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After instantiating an object from a corrupt .vcx file, Visual FoxPro may stop
	responding and return to Program Manager in Windows 3.x and Windows for
	Workgroups 3.x. Under Windows 95 and Windows NT, the following error messages
	are displayed respectively:
	
	Windows 95:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Windows NT:
	
	  An application error has occurred and an application error log is being
	  generated. VFP.exe Exception: access violation
	
	CAUSE
	=====
	
	The Visual Class Library Files (.vcx and .vct files) may be corrupt.
	
	RESOLUTION
	==========
	
	Replace or recreate the corrupted Visual Class Library files.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set CLASSLIB to CorruptVCX.
	
	2. Assign oObject to CREATEOBJECT("ClassName").
	
	-or-
	
	1. Create a new form.
	
	2. Click the View Classes tool, and choose Add.
	
	3. Select the CorruptVCX.
	
	4. Add an object from the CorruptVCX to the form.
	
	Additional query words: VFoxWin bad
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	

{% endraw %}
