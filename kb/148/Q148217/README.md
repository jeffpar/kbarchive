---
layout: page
title: "Q148217: Mastering VB Err Msg: Run Time Error 438"
permalink: /kb/148/Q148217/
---

## Q148217: Mastering VB Err Msg: Run Time Error 438

	Article: Q148217
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm kbsetup
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual Basic 4.0 ISBN 1-55615-913-7, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you complete the Mastering Microsoft Visual Basic 4.0 and attempt to start
	the program, you receive the following error message:
	
	  Run Time Error 438
	  Object doesn't support this property or method.
	
	CAUSE
	=====
	
	A newer version of VideoSoft's VBX is installed on your computer.
	
	The correct file version information is:
	
	  Filename       Version
	  --------       -------
	
	  Vsvbx.vbx      5.00.016
	
	RESOLUTION
	==========
	
	Rename or delete the newer version of Vsvbx.vbx from the Windows\System folder
	and reinstall Mastering Visual Basic 4.0.
	
	Reinstalling Mastering Visual Basic 4.0 installs Vsvbx.vbx version 5.00.016.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles v-b vb mastering
	
	======================================================================
	Keywords          : kbmm kbsetup 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0
	
	=============================================================================
	
