---
layout: page
title: "Q158765: INFO: NODUALINTERFACE Entry is Placed in Registry by VFP 5.0"
permalink: /kb/158/Q158765/
---

## Q158765: INFO: NODUALINTERFACE Entry is Placed in Registry by VFP 5.0

{% raw %}

	Article: Q158765
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some ActiveX controls can support early binding, that is, where the control
	supports a dual interface (a combination of an IDispatch and a Vtable
	interface). If an ActiveX control registers itself incorrectly as supporting a
	dual interface, then it might produce incorrect error messages. These errors may
	include Invalid Page Fault errors under Windows 95 or Access Violation errors
	under Windows NT.
	
	MORE INFORMATION
	================
	
	Some ActiveX controls might be incorrectly registered as supporting Vtable
	binding. This might cause an error when you use an ActiveX control. Visual
	FoxPro 5.0 addresses this error in the development environment by adding the
	"NoDualInterface" key to the registry. This key lists three known controls that
	can register themselves as supporting Vtable binding. Note that there may be
	other Activex controls that register themselves as supporting Vtable binding
	when, in fact, they do not. If you add them to this list, they function
	properly.
	
	When Visual FoxPro is used to build an .exe file, it does not add the
	NoDualInterface key to the registry file upon installation. If an ActiveX
	control does not perform correctly, use the SYS(2333) function to enable or
	disable dual-interface support of an ActiveX control.
	
	You can also build a .reg file and run it as a post-executable when you install
	the .exe file. This adds the "NoDualInterface" key to the registry.
	
	Or, you can write a program in Visual FoxPro that updates the registry.
	
	REFERENCES
	==========
	
	For more information about how to write a program in Visual FoxPro to update the
	registry, please see the following article in the Microsoft Knowledge Base:
	
	  Q135398 How To Write to the Windows Registry Using API Calls
	
	For more information about early binding, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138138 Three Binding Types (Late, ID, Early) Possible in VB for Apps
	
	Currently, Visual FoxPro 5.0 is the only Microsoft product that supports the
	early Vtable binding of an ActiveX control. To disable dual-interface
	functionally of an ActiveX control, use the SYS(2333) function.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
