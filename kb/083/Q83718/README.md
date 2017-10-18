---
layout: page
title: "Q83718: Brother HL-8e Prints TrueType Incorrectly in Landscape"
permalink: kb/083/Q83718/
---

## Q83718: Brother HL-8e Prints TrueType Incorrectly in Landscape

	Article: Q83718
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Windows version 3.1, if you print TrueType fonts in landscape
	orientation on some early versions of the Brother HL-8e printer, the text prints
	incorrectly. This occurs with the universal printer driver (UNIDRV.DLL) version
	3.1 and the Brother HL-8e mini-driver version 1.0. Portrait orientation is not
	affected and prints TrueType fonts correctly.
	
	CAUSE
	=====
	
	The Brother printers that do not print TrueType fonts correctly in landscape
	mode have a ROM version dated between 10/27/1988 and 7/20/1989.
	
	This problem occurs because some of the earlier versions of this printer are
	Hewlett-Packard (HP) LaserJet compatible; the current versions of the HL-8e are
	HP LaserJet Series II compatible.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run the Control Panel.
	
	2. Choose the Printers icon.
	
	3. Select the Brother HL-8e printer.
	
	4. Choose the Setup button.
	
	5. Choose the Options button.
	
	6. Select the Print TrueType As Graphics check box.
	
	MORE INFORMATION
	================
	
	The following is an example of the printing problem:
	
	Portrait (correct)      Landscape (incorrect)
	------------------      ---------------------
	
	---------------         ---------------------------
	|TEST         |         |T                        |
	|             |         |E                        |
	|             |         |S                        |
	|             |         |T                        |
	|             |         |                         |
	|             |         |                         |
	|             |         |                         |
	|             |         ---------------------------
	|             |
	|             |
	---------------
	
	The HP and Brother products included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: 3.10 win31 true type hl8e hl8-e UniDriver
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
