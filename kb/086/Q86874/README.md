---
layout: page
title: "Q86874: BUG: PrintForm() Does Not Print Ink from Control"
permalink: /kb/086/Q86874/
---

## Q86874: BUG: PrintForm() Does Not Print Ink from Control

{% raw %}

	Article: Q86874
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application developed using the Visual Basic controls provided in
	version 1.0 of Microsoft Windows for Pen Computing calls the Visual Basic
	PrintForm() function, ink entered into the control does not print.
	
	CAUSE
	=====
	
	The control is set for delayed recognition. The Visual Basic controls provided
	with version 1.0 of Windows for Pen Computing do not support printing ink when
	the control is in delayed recognition mode.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the application to remove delayed
	recognition mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows for Pen Computing version
	1.0. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: buglist1.00 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
