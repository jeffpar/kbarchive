---
layout: page
title: "Q93235: Kodak Ekta Plus 7008 TrueType Problems in Landscape Mode"
permalink: kb/093/Q93235/
---

## Q93235: Kodak Ekta Plus 7008 TrueType Problems in Landscape Mode

	Article: Q93235
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Printing TrueType fonts on the C. Itoh CI-4, or Kodak Ekta Plus 7008 printer in
	landscape orientation while emulating the Hewlett-Packard (HP) LaserJet IIP
	results in incorrect output. Portrait orientation is not affected and TrueType
	fonts print correctly.
	
	CAUSE
	=====
	
	There is no specific driver available for this printer from either Microsoft or
	Kodak. According to Kodak technical support, the problem occurs when the printer
	is using the primary emulation of the HP LaserJet IIP. It does not occur when
	using the HP LaserJet Series II driver supplied with Windows 3.1.
	
	WORKAROUND
	==========
	
	Kodak recommends two workarounds: using the HP LaserJet Series II driver, or
	selecting Print TrueType As Graphics.
	
	Selecting Print TrueType As Graphics
	------------------------------------
	
	1. Run the Control Panel.
	
	2. Choose the Printers icon.
	
	3. Select the HP LaserJet IIP.
	
	4. Choose the Setup button.
	
	5. Choose the Options button.
	
	6. Select the Print TrueType As Graphics check box.
	
	MORE INFORMATION
	================
	
	The Kodak product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 Kodac ECTA 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
