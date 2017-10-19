---
layout: page
title: "Q103893: Encarta MindMaze Err Msg: Invalid Property Value"
permalink: /kb/103/Q103893/
---

## Q103893: Encarta MindMaze Err Msg: Invalid Property Value

	Article: Q103893
	Product(s): Microsoft Home Kids Products
	Version(s): 1993 edition,1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run MindMaze from Encarta 1993, the following error message may
	occur if Visual Basic version 3.0 is also installed on your system:
	
	  Invalid Property Value
	
	Note that this error can also occur in Encarta 1994 if Visual Basic 2.0 (or a
	Visual Basic 2.0 application) is installed on your system.
	
	RESOLUTION
	==========
	
	Copy the following files from the ENCARTA directory on the CD to your Windows
	SYSTEM subdirectory:
	
	  VBRUN200.DLL (Encarta 1993 only)
	  VBRUN300.DLL (Encarta 1994 only)
	  ANIBUTON.VBX
	  CMDIALOG.VBX
	  MCI.VBX
	  SBC.VBX
	  THREED.VBX
	
	MORE INFORMATION
	================
	
	Visual Basic 2.0 does not cause this error message. This error is caused by
	Visual Basic 3.0 files (listed above) which are not backward-compatible to
	applications written with Visual Basic 2.0.
	
	Additional query words: 1993 1994 multi media multimedia multi- VB mind maze game cd rom cd-rom disc Usage Viewer 2.0 MediaView
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1993 edition,1994 edition
	
	=============================================================================
	
