---
layout: page
title: "Q112863: Letter Forms Pull Only from Upper Tray on Postscript Printers"
permalink: /kb/112/Q112863/
---

## Q112863: Letter Forms Pull Only from Upper Tray on Postscript Printers

{% raw %}

	Article: Q112863
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On certain printers (NEC SilentWriter 97, IBM 4039 PS, and HP LaserJet 4 Si
	Postscript) if you assign "Letter" form to the upper tray and "Letter 8.5 x 11"
	form to the lower tray and try to print to the lower tray, the printer pulls
	paper from the upper instead.
	
	WORKAROUND
	==========
	
	1. Go into Printer, Forms...
	
	2. Click on the form that is already there called "Letter".
	
	3. Type in a new name for the form such as "LowLetter" and press the ADD button.
	
	4. Then create a new queue for the printer and go into it's SETUP button.
	
	5. Click on the "Lower Tray" option for Paper Tray and click the CHANGE button.
	
	6. Select the new form created called "LowLetter" and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. This problem is corrected in Windows NT
	version 3.5.
	
	
	Additional query words: prodnt post script
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
