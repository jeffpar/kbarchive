---
layout: page
title: "Q166452: WD97: Table Row Height Set to &quot;At Least&quot; After Vertical Merge"
permalink: /kb/166/Q166452/
---

## Q166452: WD97: Table Row Height Set to &quot;At Least&quot; After Vertical Merge

	Article: Q166452
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you vertically merge two or more table cells, the Height Of Row property
	changes to an At Least setting. This means that if you set the Height Of Row
	property to Auto or Exactly and then vertically merge the cells, you lose the
	Auto or Exactly settings.
	
	CAUSE
	=====
	
	The Height Of Row property is reset to the At Least setting after a vertical
	merge in order to accommodate all of the text from the merged cells.
	
	RESOLUTION
	==========
	
	After you merge the table cells, reset the row height:
	
	1. With the insertion point in the merged cell, click Cell Height and Width on
	  the Table menu.
	
	2. Click the Row tab.
	
	3. In the Height Of Row drop-down list, select the setting you want.
	
	4. Optional: In the At box, select the value and type a new measurement, or
	  click the arrows to select a new value.
	
	5. Click OK.
	
	Additional query words: 97 8.0 word97 word8 ntword kbtable
	
	======================================================================
	Keywords          : kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
