---
layout: page
title: "Q111018: Adding the Proof Menu Item to the Excel 5.0 Menu Bar"
permalink: kb/111/Q111018/
---

## Q111018: Adding the Proof Menu Item to the Excel 5.0 Menu Bar

	Article: Q111018
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Sound System Setup does not add a Proof menu to the Excel 5.0 for
	Windows menu bar.
	
	RESOLUTION
	==========
	
	To add a Proof menu, do the following:
	
	1. Verify that the PROOF.XLA file is in the EXCEL\LIBRARY directory. This file
	  is added by Windows Sound System Setup.
	
	2. Run Excel 5.0.
	
	3. From the Tools menu, choose Add-Ins.
	
	4. In the Add-Ins dialog box, choose the Browse button.
	
	5. Double-click the LIBRARY directory.
	
	6. The file PROOF.XLA appears in the filenames list box on the left. Select the
	  file and choose OK.
	
	7. If the message "Replace existing 'PROOF.XLA'?" appears, choose Yes.
	
	8. Choose OK in the Add-Ins dialog box to close it.
	
	After a short period of time, the Excel menu bar will redraw and add a Proof
	menu.
	
	Additional query words: 2.00 2 1 1a 5 proofreader read reader install xl5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
