---
layout: page
title: "Q137412: PRB: Fields Can Be Removed from Field Name List"
permalink: /kb/137/Q137412/
---

## Q137412: PRB: Fields Can Be Removed from Field Name List

	Article: Q137412
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating views, you can delete and add fields to the Field Name list by
	pressing the DELETE key or INSERT key respectively. This should not happen.
	
	WORKAROUND
	==========
	
	To restore your Field Name list to the correct state, click any other tab and
	then click Update Criteria. This behavior has no effect on the operation of the
	View Designer.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following commands in the Command window:
	
	     OPEN DATA SYS(2004)+"samples\mainsamp\data\TasTrade"
	     MODIFY VIEW "Orders View"
	
	2. Switch to the Update Criteria tab.
	
	3. Click the Key Field column of the Field Name list.
	
	4. Press the DELETE key.
	
	5. Press the INSERT key.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
