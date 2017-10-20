---
layout: page
title: "Q123076: Creative Writer Err Msg: Integer Divide by Zero"
permalink: /kb/123/Q123076/
---

## Q123076: Creative Writer Err Msg: Integer Divide by Zero

{% raw %}

	Article: Q123076
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbprint kbimu kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a card to a Hewlett-Packard (HP) DeskJet 500 series printer, you
	may receive the following error message:
	
	  Integer divide by zero.
	
	This behavior can occur if you did not select a paper size when you installed the
	driver for the HP DeskJet 500 series printer.
	
	RESOLUTION
	==========
	
	To resolve this issue, select a paper size for the printer you are using. To do
	this, follow these steps:
	
	1. In the Main program group, double-click Control Panel.
	
	2. Double-click Printers.
	
	3. In the list of installed printers, click the HP DeskJet 500 series printer
	  you are using.
	
	4. Click Setup.
	
	5. Under Paper Size, click Letter - 8.5 x 11, and then click OK.
	
	6. Close the Printers window, and then close Control Panel.
	
	MORE INFORMATION
	================
	
	The error message may also occur when you enter the Writing Studio and no
	printer driver is installed. Because Creative Writer queries the printer driver
	when it displays the Writing Studio, there must be a printer driver installed,
	even if there is no printer. To resolve this issue, install a printer driver.
	
	This issue does not occur in Microsoft Windows 95 or Microsoft Windows 98.
	
	Additional query words: mskids cw birthday greeting cards
	
	======================================================================
	Keywords          : kberrmsg kbprint kbimu kbPrinting 
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
