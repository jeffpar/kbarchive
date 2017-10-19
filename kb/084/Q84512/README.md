---
layout: page
title: "Q84512: HP LaserJet IIIP and IIID Settings Not Saved"
permalink: /kb/084/Q84512/
---

## Q84512: HP LaserJet IIIP and IIID Settings Not Saved

	Article: Q84512
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The value in the Memory list box and all other settings isn't saved for
	Hewlett-Packard (HP) LaserJet IIIP or IIID printers under Microsoft Windows
	version 3.1 if the port selected is either LPT1x.OS2, LPTx.DOS, LPTx.PRN,
	COMx.OS2, COMx.DOS, COMx.PRN, or any port name with an extension.
	
	WORKAROUND
	==========
	
	To work around this problem, connect the printer to a port without an extension,
	such as LPT1 or COM1, and then clear the Fast Printing Direct To Port check box.
	Selecting this check box has the same result as printing to a port with an
	extension such as LPT1.DOS -- Windows prints through MS-DOS instead of printing
	directly to the port through the BIOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the HP LaserJet III driver that
	ships with Windows version 3.1. We are researching this problem and will post
	new information here as it becomes available.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
