---
layout: page
title: "Q114864: How to Find the Hard Disk Drive Name Using FoxPro for Mac"
permalink: kb/114/Q114864/
---

## Q114864: How to Find the Hard Disk Drive Name Using FoxPro for Mac

	Article: Q114864
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Using the sample program below, you can programmatically determine the name of
	the current hard disk drive for functions such as SET DEFAULT TO in situations
	where you will not know this information ahead of time.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	NOTE: SYS(16) returns the full path of the currently executing program.
	
	     *Procedure to determine the hard drive name in FoxPro/Mac
	     SET TALK OFF              && stop echo to screen
	     PRIVATE x, datafolder
	     datafolder="Apps:Data:"   && folder structure depends on the system
	     x=LEFT(SYS(2027,SYS(16)),AT(":",SYS(2027,SYS(16))))
	     * Variable X now contains the hard drive volume name
	     x=x+datafolder            && set up the DEFAULT path
	     SET DEFAULT TO (x) && sets default even though we didn't know HD name
	     SET TALK ON
	
	Method 2
	--------
	
	The following commands will place a list of all mounted volume names (delimited
	with semicolons) in the memory variable "vol_list":
	
	     SET LIBR to foxtools
	     vol_list=fxVolume()
	
	Method 3
	--------
	
	The following command will place the volume name FoxPro started from in the
	memory variable "start_vol":
	
	     start_vol=SET('DEFAULT')
	
	Additional query words: VFoxMac FoxMac volume name SYS(2027) SYS(16)
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
