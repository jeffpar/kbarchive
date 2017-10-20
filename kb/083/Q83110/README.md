---
layout: page
title: "Q83110: Audio CD Stops or Skips When Common Dialog Boxes Are Activated"
permalink: /kb/083/Q83110/
---

## Q83110: Audio CD Stops or Skips When Common Dialog Boxes Are Activated

{% raw %}

	Article: Q83110
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If the Microsoft Windows operating system version 3.1 common dialog boxes
	(COMMDLG.DLL) are used while playing audio CDs, the sound may phase in and out
	or skip.
	
	These problems have been traced to the ASWCDSNY.SYS driver. Replacing it with the
	TSLCDR.SYS driver corrects these problems.
	
	MORE INFORMATION
	================
	
	For example, if you choose Open from the File menu (which displays a common
	dialog box) while playing an audio CD, the CD will either stop playing or skip a
	track.
	
	Other random problems may occur while using the ASWCDSNY.SYS driver. Other
	drivers may display similar problems.
	
	KBCategory: kbmm kbdisplay kbsound kbenv
	KBSubcategory: win31 windrvr
	
	Additional query words: 3.10 3.1 CD-ROM cd rom COMMDLG
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
