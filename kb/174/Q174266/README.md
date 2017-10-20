---
layout: page
title: "Q174266: &quot;Print Screen&quot; from MS-DOS Application May Print Twice"
permalink: /kb/174/Q174266/
---

## Q174266: &quot;Print Screen&quot; from MS-DOS Application May Print Twice

{% raw %}

	Article: Q174266
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "Print Screen" (PrintScrn) key to print the contents of an
	MS-DOS application running on Windows NT 4.0, two copies of the screen contents
	may appear in the printer output.
	
	This problem typically occurs only on very fast computers, such as an Intel-
	based computer with a P200 processor, and only if the MS-DOS application Program
	Information File (PIF) setters are set to pass the print-screen event to the
	MS-DOS application.
	
	CAUSE
	=====
	
	The Windows NT Virtual DOS Machine (Ntvdm.exe) incorrectly initiates another
	print-screen event during the key-up event when you release the PrintScrn key,
	even though it should only initiate a print-screen event during the key-down
	event.
	
	While Windows NT processes a print-screen event, it cannot accept and queue up
	another print-screen event for later processing. Therefore, on slower computers
	the second print-screen event caused by the key-up event is initiated but never
	accepted by Windows NT because Windows NT is still busy processing the first
	print-screen event. However, on faster computers, Windows NT may have completed
	the first print-screen event by the time the key-up event initiates another
	print-screen event, resulting in two copies of the screen in the output.
	
	RESOLUTION
	==========
	
	The Virtual DOS Machine (Ntvdm.exe) has been modified to pass a single
	print-screen event when the PrintScrn key is pressed.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: prodnt prtscn prtscrn prntscrn prntscr screen shot
	
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
