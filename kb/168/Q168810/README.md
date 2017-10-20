---
layout: page
title: "Q168810: WD97: Cannot Type in Floating Text Box with Protected Document"
permalink: /kb/168/Q168810/
---

## Q168810: WD97: Cannot Type in Floating Text Box with Protected Document

{% raw %}

	Article: Q168810
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtool kbui kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert an ActiveX Text Box control as a floating object in a document
	that is protected for forms, one of the following symptoms occurs:
	
	- You cannot type text into the text box.
	
	  -or-
	
	- You can type some text immediately upon clicking in the text box, but then
	  the text box becomes unavailable.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to convert the ActiveX Text
	Box control to an inline object:
	
	1. If the document is protected, click Unprotect Document on the Tools menu.
	
	2. If the Control Toolbox is not visible, point to Toolbars on the View menu,
	  and then click Control Toolbox.
	
	3. In the Control Toolbox, click Design Mode.
	
	4. Right-click the ActiveX Text Box Control.
	
	5. On the shortcut menu, point to Text Box Object, and then click Convert.
	
	6. In the Convert dialog box, clear the Float Over Text check box.
	
	7. Click OK.
	
	8. In the Control Toolbox, click Exit Design Mode.
	
	When you reprotect the document, you can enter text into the ActiveX Text Box
	control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbtool kbui kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
