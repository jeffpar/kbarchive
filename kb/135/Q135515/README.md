---
layout: page
title: "Q135515: DOC: Picture's Caption Different from Example's Caption"
permalink: /kb/135/Q135515/
---

## Q135515: DOC: Picture's Caption Different from Example's Caption

{% raw %}

	Article: Q135515
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 347 in the Developer's Guide shows a picture of a toolbar with a caption of
	"Desktop Attributes." Following the toolbar is a code example to create the
	pictured toolbar. However, the code example's caption for the toolbar is "Form
	Attributes" instead of "Desktop Attributes."
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	To have the code example produce the pictured toolbar, change:
	
	     Caption = "Form Attributes"
	
	to:
	
	     Caption = "Desktop Attributes"
	
	Additional query words: 3.00 docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
