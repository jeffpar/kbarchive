---
layout: page
title: "Q93086: Okidata OL830/PS Driver Doesn't Retain Values in Printer Setup"
permalink: /kb/093/Q93086/
---

## Q93086: Okidata OL830/PS Driver Doesn't Retain Values in Printer Setup

{% raw %}

	Article: Q93086
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Okidata OL-830/PS printer driver available from the Microsoft Windows Driver
	Library does not retain changes made in the Printer Setup dialog box. Any
	changes made in this dialog box revert to the default settings after you choose
	the OK button.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the OL830525.WPD file dated 8/12/92 from Okidata
	Technical Support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Okidata OL830/PS printer
	driver. We are researching this problem and will post new information here as it
	becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install the Okidata OL-830/PS driver.
	
	2. In the Control Panel window, choose the Printers icon.
	
	3. Select the Okidata OL830/PS, and choose the Setup button.
	
	4. Change any of the options shown, and choose the OK button.
	
	5. Choose the Setup button again; note that no changes were saved.
	
	
	Additional query words: wfw wfwg 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
