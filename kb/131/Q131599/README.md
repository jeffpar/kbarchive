---
layout: page
title: "Q131599: Record Pointer Moves in BROWSE as Records Are Deleted"
permalink: /kb/131/Q131599/
---

## Q131599: Record Pointer Moves in BROWSE as Records Are Deleted

{% raw %}

	Article: Q131599
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a record is marked for deletion in a BROWSE by clicking the delete marker,
	the record pointer moves to that record.
	
	MORE INFORMATION
	================
	
	This behavior is new to Visual FoxPro. In previous versions of FoxPro, the
	record pointer doesn't move when the delete marker for a record is selected.
	
	Step-by-Step Example
	--------------------
	
	1. Pick a table and open it with the USE command:
	
	     USE <any table>
	
	2. Use the BROWSE command to browse the table.
	
	3. While the record pointer is on record #1, click the delete marker for record
	  number 2 - but don't select record number 2, just click the delete marker for
	  record number 2.
	
	4. In the Command window, type "? RECNO()" (without the quotation marks) to see
	  that the record pointer has moved to record 2. In earlier versions of FoxPro,
	  the record pointer remains at record 1.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
