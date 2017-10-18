---
layout: page
title: "Q84079: TrueType and Pacific Data Products PostScript Cartridge"
permalink: kb/084/Q84079/
---

## Q84079: TrueType and Pacific Data Products PostScript Cartridge

	Article: Q84079
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the PostScript printer driver (PSCRIPT.DRV version 3.5) included with
	Microsoft Windows version 3.1 is used, TrueType fonts may not print correctly on
	printers using the PostScript cartridge from Pacific Data Products.
	
	RESOLUTION
	==========
	
	To correct this problem with your existing driver, do the following:
	
	1. Run Control Panel.
	
	2. Choose the Printers icon.
	
	3. Choose the Setup button.
	
	4. Choose the Options button.
	
	5. Choose the Advanced button.
	
	6. In the Send To Printer As list box, select Bitmap (Type 3).
	
	7. Choose the OK button.
	
	When PSCRIPT.DRV version 3.51 or later is used, the following changes to the
	PostScript driver configuration should be made:
	
	1. Follow steps 1 through 5 above.
	
	2. In the Send To Printer As list box, select Adobe Type 1.
	
	3. Select the Conform To Adobe Document Structuring Conversion check box.
	
	4. Choose the OK button.
	
	
	Additional query words: 3.10 Postscript TrueType Pacific Page PSCRIP.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
