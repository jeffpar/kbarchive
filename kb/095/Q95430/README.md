---
layout: page
title: "Q95430: BUG: GPF/UAE If Multi-Select Controls w/ No Common Properties"
permalink: /kb/095/Q95430/
---

## Q95430: BUG: GPF/UAE If Multi-Select Controls w/ No Common Properties

{% raw %}

	Article: Q95430
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault or unrecoverable application error (UAE) may
	occur when you select multiple custom controls that have no properties in
	common.
	
	For example, if you add the VBSQL.VBX custom control from the Microsoft SQL
	Server Programmer's Toolkit for Visual Basic and then select it and the Timer
	control while holding down the CTRL key, you will encounter a GP fault or UAE.
	
	CAUSE
	=====
	
	The problem occurs because there are no properties in common between the Timer
	control that comes with Visual Basic and the VBSQL.VBX control. This usually
	isn't a problem because most custom controls contain at least the Tag property.
	There are only a few exceptions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in both the Standard and Professional
	Editions of Microsoft Visual Basic versions 2.0 and 3.0 for Windows. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist2.00 buglist3.00 2.00 3.00 GPF multiselect
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
