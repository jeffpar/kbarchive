---
layout: page
title: "Q83089: FIX: Tracing into MOVE Startup May Cause R6915 Error"
permalink: /kb/083/Q83089/
---

## Q83089: FIX: Tracing into MOVE Startup May Cause R6915 Error

	Article: Q83089
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft CodeView Debugger (CV) version 4.0 may cause the following
	run-time error when tracing through startup code in programs that use the
	Microsoft Overlaid Virtual Environment (MOVE):
	
	  run-time error R6915 -
	  DOSX16: unhandled exception
	
	After generating this error, CodeView usually returns to MS-DOS, but may generate
	other errors or hang. Even if CodeView does not generate an error or hang, you
	may not be able to reboot your machine by hitting Ctrl-Alt- Del.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView version 4.0. This
	problem was corrected in CodeView version 4.01.
	
	MORE INFORMATION
	================
	
	MOVE allows users to overlay both code and data to run MS-DOS programs that are
	larger than available MS-DOS memory. MOVE can take advantage of EMS or XMS
	memory.
	
	The Microsoft CodeView Debugger version 4.0 is compatible with overlaid programs
	created with MOVE.
	
	
	Additional query words: 4.00 overlays lock hung
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS
	Version           : :4.0
	Solution Type     : kbfix
	
	=============================================================================
	
