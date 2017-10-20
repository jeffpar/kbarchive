---
layout: page
title: "Q138063: Effect of DoEvents in Visual Basic OLE Server DLLs"
permalink: /kb/138/Q138063/
---

## Q138063: Effect of DoEvents in Visual Basic OLE Server DLLs

{% raw %}

	Article: Q138063
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A DoEvents statement inside a inproc OLE server might cause reentrancy problems.
	
	MORE INFORMATION
	================
	
	If you make a call to an inproc OLE server by say, clicking a command button on
	a form on some client and that call uses DoEvents, Visual Basic will yield to
	process other pending messages. If now due to some user action another inproc
	call or the same one is made to the same DLL server, there is nothing to prevent
	the DLL code from being re-entered. This might cause unforeseen problems
	depending on the situation, so this scenario is best avoided. Another problem
	with DoEvents in a DLL is that you are processing messages for the host (.exe
	file) in your message loop. The host may have special code in its message loop
	to handle some messages, and problems may occur when this code is not executed.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	

{% endraw %}
