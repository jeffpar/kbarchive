---
layout: page
title: "Q143295: PRB: Incorrect Error Message with CursorSetProp()"
permalink: /kb/143/Q143295/
---

## Q143295: PRB: Incorrect Error Message with CursorSetProp()

{% raw %}

	Article: Q143295
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there is no table in the currently selected work area,
	CursorSetProp('Buffering',3) returns "No table is open", which may be
	inaccurate.
	
	It is possible to have dozens of tables open and still receive this error message
	if there is no table in the current work area. The correct error message should
	be, "No table is open in the current work area."
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     SET DEFAULT TO samples\data
	     USE customer
	     SELECT 0
	     ?CursorSetProp('Buffering',3)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
