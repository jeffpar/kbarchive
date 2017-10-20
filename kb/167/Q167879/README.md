---
layout: page
title: "Q167879: WD97: Can't Run OCX Control After Converting to Inline Object"
permalink: /kb/167/Q167879/
---

## Q167879: WD97: Can't Run OCX Control After Converting to Inline Object

{% raw %}

	Article: Q167879
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbtool word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you convert an OCX control (for example, a command button) that has
	
	Visual Basic for Applications code attached to the control event procedure, from
	a floating object to an inline object, you cannot run, edit, or view the code.
	
	NOTE: To convert an object from a floating object to an inline object, select the
	object. On the Edit menu, point to "<Object Type> Object," click Convert,
	and then click to clear or select the Float Over Text check box.
	
	CAUSE
	=====
	
	When you convert the OCX control from a floating object to an inline object, the
	Name property of the OCX control changes. As a result, the Visual Basic for
	Applications code is no longer associated with the event procedure.
	
	WORKAROUND
	==========
	
	To work around this problem, use these steps:
	
	1. On the View menu, point to Toolbars, and click Control Toolbox.
	
	2. Select the control. Click the Properties button on the Control Toolbox.
	
	3. In the Properties window, change the Name property to its original name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: wordcon 8.0 vb vbe vba
	
	======================================================================
	Keywords          : kbprogramming kbtool word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
