---
layout: page
title: "Q138696: MS Exchange Err Msg: The Set of Folders Could Not Be Opened"
permalink: /kb/138/Q138696/
---

## Q138696: MS Exchange Err Msg: The Set of Folders Could Not Be Opened

{% raw %}

	Article: Q138696
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Exchange, you may receive the following error message:
	
	  The set of folders could not be opened. You do not have sufficient privileges
	  to access the file. Personal Folders 268828929 [80070004-00000005].
	
	CAUSE
	=====
	
	This error can occur if the read-only attribute is set for the .pst file in
	which Microsoft Exchange stores your messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the read-only attribute from the .pst file. To
	do so, follow these steps:
	
	1. Click the Start button, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "*.pst" (without the quotation marks), and then click
	  Find Now.
	
	3. Use the right mouse button to click the located .pst file, and then click
	  Properties on the menu that appears.
	
	4. In the Attributes area of the file's properties, click the Read-Only check
	  box to clear it.
	
	5. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
