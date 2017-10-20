---
layout: page
title: "Q84260: Printing Problems on an Okidata ML 380 Under Windows 3.1"
permalink: /kb/084/Q84260/
---

## Q84260: Printing Problems on an Okidata ML 380 Under Windows 3.1

{% raw %}

	Article: Q84260
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to the Okidata ML 380 from Microsoft Windows version 3.1, the
	printer stops on the last line printed and does not eject the page.
	
	RESOLUTION
	==========
	
	This is by design. The printer behaves similarly when you print from the MS- DOS
	command prompt.
	
	If this behavior is not acceptable, you can use the Epson LQ-2550 emulation and
	the LQ-2550 printer driver. This causes the last page to eject after the last
	line is printed.
	
	MORE INFORMATION
	================
	
	If an extra page is ejected after the print job is finished, make sure you have
	the correct Paper Feed option selected for your printer setup. If you have
	Tractor selected when you are using cut-sheet paper, an extra sheet is ejected
	after the print job is finished. To change the paper source:
	
	1. Run Control Panel.
	
	2. Select the Okidata printer driver you want to configure from the Installed
	  Printers list box.
	
	3. Choose the Setup button.
	
	4. From the Paper Source list box, select the correct option for your printer
	  configuration.
	
	5. Choose the OK button to save the changes.
	
	
	Additional query words: 3.10 Microline
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
