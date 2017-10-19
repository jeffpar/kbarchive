---
layout: page
title: "Q156108: Encarta 97: Lookup Reference Fails with Office, Works, Word"
permalink: /kb/156/Q156108/
---

## Q156108: Encarta 97: Lookup Reference Fails with Office, Works, Word

	Article: Q156108
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Office for Windows 95 Professional edition 
	- Microsoft Office for Windows 95, Standard edition 
	- Microsoft Works for Windows 95, version 4.0, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Lookup Reference tool in Microsoft Office or Microsoft Works to
	open Encarta, the feature does not work. In Works, you may hear a system error
	"ding" sound.
	
	In Word, the following error message appears:
	
	  Encarta Encyclopedia cannot start
	  Unable to complete this action while Encarta Encyclopedia windows are open.
	  Close any open dialog boxes or screens in Encarta Encyclopedia, then try
	  again.
	
	CAUSE
	=====
	
	Encarta is displaying a modal (active) dialog box. You need to close Modal
	dialog boxes before you open other dialog boxes, such as the Encyclopedia
	screen. An example of a modal dialog is the Encarta Media Gallery. You must
	close this box before Lookup Reference works.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Click OK to clear the error message. If you do not see the error message,
	  press and hold down the ALT keyboard key then press the TAB key (ALT+TAB)
	  repeatedly until you see the error message. Click OK.
	
	2. Close the open dialog box or Encarta screen, for example, the Media Gallery.
	
	3. Use the ALT+TAB key combination to return to the referring program. Try the
	  Lookup Reference feature again.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm hang stay current reef w_works
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbOffice95Search kbZNotKeyword3 kbWorks400 kbEncartaEnCyc1997
	Version           : :1997 edition; WINDOWS:4.0
	
	=============================================================================
	
