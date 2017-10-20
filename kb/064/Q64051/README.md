---
layout: page
title: "Q64051: Stopping Winpopup Can Produce Unpredictable Results"
permalink: /kb/064/Q64051/
---

## Q64051: Stopping Winpopup Can Produce Unpredictable Results

{% raw %}

	Article: Q64051
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When you choose to close the Winpopup service from within the Windows version
	3.0 or 3.1 interface, the following warning box appears:
	
	  This will STOP the message popup service.
	
	This message is a bit misleading. Although Winpopup is stopped, the message
	service and the Netpopup service are still fully functional. If the machine
	receives a message in this state, unpredictable behavior can result:
	
	- The pop-up may not display correctly (it may be in 43-line mode, 40-column
	  mode, or another undesirable format).
	
	- Windows may hang when the pop-up clears.
	
	- The screen colors may change when the pop-up clears.
	
	- A blank Windows error box may appear when the pop-up clears. The Window's
	  focus will be completely directed at the OK button in this error box.
	  Choosing the OK button may clear the error box, but Windows will hang,
	  usually with multicolored vertical bars painted across the screen.
	
	Even when Windows hangs, the message service and Netpopup services generally
	remain active. The machine is essentially hung--it will not respond to either
	keyboard or mouse input. However, it will still field messages and display them
	on the screen.
	
	To work around this problem, don't unload Winpopup if Netpopup is active.
	
	Additional query words: 2.00 2.10 2.10a 2.20 3.00 3.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
