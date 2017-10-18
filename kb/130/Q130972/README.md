---
layout: page
title: "Q130972: Installing Windows Sound System Proofreader Menu in Lotus 5.0"
permalink: kb/130/Q130972/
---

## Q130972: Installing Windows Sound System Proofreader Menu in Lotus 5.0

	Article: Q130972
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows Sound System, Setup does not add a Proof menu to the
	Lotus version 5.0 menu bar.
	
	CAUSE
	=====
	
	When you install the proofreader files for Lotus, the proofreader files are
	installed in the Windows Sound System directory rather than the Lotus add-in
	directory.
	
	RESOLUTION
	==========
	
	To add a Proof menu to Lotus 5.0, follow these steps:
	
	1. Verify that the 123RDRV4.ADW file is in the SNDSYS directory. This file is
	  added by Windows Sound System Setup.
	
	2. Run Lotus 5.0.
	
	3. From the Tools menu, choose Add-In.
	
	4. In the Add-In dialog box, choose the Load button.
	
	5. Double-click the SNDSYS directory.
	
	6. In the Filenames list box, select the 123RDRV4.ADW file, and then choose OK.
	
	7. Choose OK in the Add-Ins dialog box to close it.
	
	After a short time, the Lotus menu bar will be redrawn with a Proof menu.
	
	MORE INFORMATION
	================
	
	Windows Sound System version 1.0 does not contain the proofreader for Lotus
	version 4.0 and above. To use the proofreader for Lotus, you must install
	Windows Sound System version 2.0.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	
