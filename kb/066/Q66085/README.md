---
layout: page
title: "Q66085: Dictful Error in Freedom of Press with Windows 3.0"
permalink: kb/066/Q66085/
---

## Q66085: Dictful Error in Freedom of Press with Windows 3.0

	Article: Q66085
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a PostScript file created in Microsoft Windows version 3.0
	or 3.0a with Freedom of Press, the following error message is displayed:
	
	  %[Error dictful, offending command: .....]%
	
	CAUSE
	=====
	
	This error can occur if the PostScript file was created by a PostScript printer
	driver assigned to the FILE: port in the printer configuration window.
	
	WORKAROUND
	==========
	
	Use the following steps to create an encapsulated PostScript file (EPS) for use
	with Freedom of Press:
	
	1. From the Main group of Program Manager, choose Control Panel.
	
	2. From Control Panel, choose Printers.
	
	3. Choose the PostScript printer driver.
	
	4. Select Configure, then Setup, then Options.
	
	5. Choose Encapsulated Postscript File in the Print To: box and enter a filename
	  beneath it.
	
	6. Print from your Windows application. This creates a file with the name
	  provided in step 5.
	
	7. Print this file using Freedom of Press.
	
	MORE INFORMATION
	================
	
	Freedom of the Press is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
