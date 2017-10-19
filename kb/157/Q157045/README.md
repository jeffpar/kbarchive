---
layout: page
title: "Q157045: INFO: Read-Only Control Takes on DisabledBackColor"
permalink: /kb/157/Q157045/
---

## Q157045: INFO: Read-Only Control Takes on DisabledBackColor

	Article: Q157045
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 5.0 and 6.0 for Windows, several read-only controls take on the
	DisabledBackColor property. The ListBox and ComboBox controls display that color
	at all times, while the TextBox control displays the DisabledBackColor when
	focus is moved to it. Regardless of the settings of the DisabledBackColor and
	ReadOnly properties, a TextBox control within a column of a Grid does not assume
	the DisabledBackColor. An EditBox displays the DisabledBackColor unless the
	EditBox also has a BackStyle property of Transparent, in which case it shows the
	colors of the Windows Display 3D Object setting of Windows Control Panel.
	
	This behavior is in contrast to the colors displayed in Visual FoxPro for Windows
	3.0 and 3.0b, where the colors of the controls are not affected by the settings
	of the ReadOnly property.
	
	This change is in accord with the standards established with Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
