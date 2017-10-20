---
layout: page
title: "Q135154: Login Script GOTO Command Finds Wrong Target Label"
permalink: /kb/135/Q135154/
---

## Q135154: Login Script GOTO Command Finds Wrong Target Label

{% raw %}

	Article: Q135154
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Novell NetWare login script contains a GOTO command, processing may
	continue at the wrong label.
	
	CAUSE
	=====
	
	The labels are not being parsed correctly.
	
	RESOLUTION
	==========
	
	Your NetWare administrator should examine the login scripts and change the
	labels so that no label name is a subset of another.
	
	MORE INFORMATION
	================
	
	The parsing error occurs if one label is identical to the right-most characters
	of another. For example, the following will be parsed incorrectly:
	
	  WRONG_LABEL:
	  GOTO LABEL
	  LABEL:
	
	In this example, the GOTO command will cause processing to jump to the line above
	the GOTO command, rather than the line below.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
