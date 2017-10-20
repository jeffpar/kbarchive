---
layout: page
title: "Q170752: PRB: The Internet Transfer Control Causes &quot;Invalid Callee&quot; Error"
permalink: /kb/170/Q170752/
---

## Q170752: PRB: The Internet Transfer Control Causes &quot;Invalid Callee&quot; Error

{% raw %}

	Article: Q170752
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Internet Transfer ActiveX control in Visual FoxPro 5.0, the error
	"Invalid Callee" occurs when issuing the control's Execute command. This error
	occurs if the control is either used on a form inside of Visual FoxPro or run in
	a distributed executable.
	
	RESOLUTION
	==========
	
	Placing the SYS(2333,0) function in the Load event of the form eliminates the
	error.
	
	MORE INFORMATION
	================
	
	Sometimes an ActiveX control may register itself incorrectly as supporting a
	dual interface: a combination of IDispatch and Vtable binding. When this occurs,
	Visual FoxPro has the capability to turn off the dual interface support using
	the SYS(2333), ActiveX Dual Interface Support, function.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Transfer.scx.
	
	2. From the Form Controls toolbar, click the OLE Container control.
	
	3. After clicking on the form, select the "Insert Control" radio button located
	  in the Insert Object dialog box.
	
	4. Select the Microsoft Internet Transfer control from the list box.
	
	5. Place a command button on the form and place the following code in the Click
	  event:
	
	        THISFORM.OLECONTROL1.EXECUTE("ftp://host.com/pub")
	
	6. Run the form and click on the command button. Note that the "Invalid Callee"
	  error occurs. Place the "=SYS(2333,0)" statement in the Load event of the
	  form and note that the error does not occur.
	
	REFERENCES
	==========
	
	For more information about ActiveX controls and dual interface, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158765 NODUALINTERFACE Entry is Placed in Registry by VFP 5.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
