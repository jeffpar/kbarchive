---
layout: page
title: "Q85747: Using an HP LaserJet III on a LANtastic Network with Windows"
permalink: /kb/085/Q85747/
---

## Q85747: Using an HP LaserJet III on a LANtastic Network with Windows

	Article: Q85747
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing a document from Windows 3.0 using a Hewlett-Packard (HP) LaserJet III
	attached to LPT1 on a LANtastic network may generate the following error:
	
	  Cannot print to LPT1.PRN:
	
	Installing the HP LaserJet to LPT2.PRN may resolve this problem.
	
	CAUSE
	=====
	
	This problem only occurs when the document contains both text and graphics while
	trying to print to LPT1.PRN. However, printing documents with only text or only
	graphics does not cause an error.
	
	WORKAROUND
	==========
	
	The only known workaround for this problem (on network configurations that will
	support LPT2) is to configure the HP LaserJet III driver to LPT2.PRN for
	printing documents that contain both text and graphics.
	
	Printing on a LANtastic network requires printing using the LPTx.PRN ports. If
	LPT2.PRN is not an option in Control Panel, you must modify the WIN.INI file.
	Under the [ports] section, add the following line:
	
	     LPT2.PRN=
	
	This problem does not occur in Windows 3.1. Artisoft LANtastic versions 3.0 and
	later are supported under Windows 3.1.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.00a lan tastic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
