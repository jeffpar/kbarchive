---
layout: page
title: "Q295330: BUG: AV in MSVBVM60.dll Using WinInet .ocx in COM DLL"
permalink: /kb/295/Q295330/
---

## Q295330: BUG: AV in MSVBVM60.dll Using WinInet .ocx in COM DLL

{% raw %}

	Article: Q295330
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbDLL kbDSupport
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter an access violation if you unload a form that contains the
	WinInet ActiveX control when that form is hosted in a Visual Basic Component
	Object Model (COM) dynamic link library (DLL) rather than in the main project.
	
	CAUSE
	=====
	
	Under certain conditions, destruction of the loaded WinInet control in a COM DLL
	may partially fail. The control creates a hidden window that is used for message
	handling. Although the control is successfully unloaded under all conditions,
	the hidden window may survive the destruction of the control. Because the
	window's callback function is destroyed when the control is unloaded, messages
	that are sent to the hidden window result in an access violation.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	                    6.00.8877            Msinet.ocx
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
