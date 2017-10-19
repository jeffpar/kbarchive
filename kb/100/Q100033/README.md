---
layout: page
title: "Q100033: Mac Wkst: Color Icons Do Not Appear in Summary Window"
permalink: /kb/100/Q100033/
---

## Q100033: Mac Wkst: Color Icons Do Not Appear in Summary Window

	Article: Q100033
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.1 of Microsoft Mail for AppleTalk Networks, the color icons for
	forms may not display in the Summary window.
	
	CAUSE
	=====
	
	This problem occurs if you have an older version of the workstation software, or
	if the form has been recompiled and reinstalled.
	
	RESOLUTION
	==========
	
	Color icons for forms are not supported when the version 3.0 workstation
	software is connected to a version 3.1 server. To display color icons in this
	situation, upgrade the workstation to version 3.1.
	
	This problem may also occur if you modify and recompile a form using the Forms
	Designer HyperCard stack. This will cause the icon to appear in black and white
	when you reinstall the form using the Form Mover button. The icons will install
	properly; however, none of the screens in the form are recompiled. If you have
	modified and compiled the form, the only way to reset the color icons is to
	install the form from the original disk, without modifying it in any way.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
