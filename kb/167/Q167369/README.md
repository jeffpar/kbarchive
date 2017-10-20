---
layout: page
title: "Q167369: WD97: Cannot Print After Canceling Using HPDJ820CXi Driver"
permalink: /kb/167/Q167369/
---

## Q167369: WD97: Cannot Print After Canceling Using HPDJ820CXi Driver

{% raw %}

	Article: Q167369
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint kbusage word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you cancel printing to a Hewlett-Packard (HP) DeskJet 820CXi printer in
	Word, and then try to print again, you may experience the following symptoms:
	
	Case 1
	------
	
	Word flashes the "Printing" dialog box.
	
	Case 2
	------
	
	You may receive the following error message when you try to print after canceling
	printing a second time
	
	  Printer Driver Busy Another software application is using the printer. Cancel
	  printing and wait until the other software program has finished. Try printing
	  again.
	
	followed by this message:
	
	  Windows cannot print due to a problem with the current printer setup.
	  Try one or more of the following:
	
	  * Check the printer by printing a test page from Windows.
	  * Make sure the printer is turned on and online.
	  * Reinstall the printer driver.
	
	Case 3
	------
	
	If you continue to try to print, and the HP Deskjet 820 is set as default, you
	may receive the following error message:
	
	  Invalid Page Fault in module unknown at 014f:30080f6c
	
	CAUSE
	=====
	
	These problems have been reported to occur when the following conditions are
	true:
	
	- Background Printing is turned off.
	
	- The HP DeskJet 820CXi driver version 8.2 is being used.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Change Printers
	-------------------------
	
	In Word, change the printer to a different installed printer, change back to the
	HP DeskJet 820CXi printer, and then try printing again.
	
	Method 2: Turn on Background Printing
	-------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the Print tab.
	
	3. Under Printing Options, click to select the Background Printing check box,
	  and then click OK.
	
	Method 3: Restart Windows
	-------------------------
	
	Save your document and quit Word. Also quit any other programs you may have open.
	Then, quit and restart Windows. Start Word, open your document, and try printing
	to the HP DeskJet 820CXi again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: hpdj dj820 dj820c hpdj820 hpdj820c
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
