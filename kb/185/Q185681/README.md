---
layout: page
title: "Q185681: WD97: Error Msg. Selecting Button on Inactive Style Box"
permalink: kb/185/Q185681/
---

## Q185681: WD97: Error Msg. Selecting Button on Inactive Style Box

	Article: Q185681
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have the Format list in the Modify Style dialog box open (on the Format
	menu, click Style, and then click Modify), and you click the Organizer, Apply,
	or Cancel button on the inactive Style dialog box, Word quits without giving you
	the choice of saving your work.
	
	In Windows 95 and Windows 98, the following error message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, Word displays the following message:
	
	  WINWORD caused an invalid page fault in module MSO97.DLL at <address>.
	
	In Windows NT 4.0, the following error message appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Winword.exe
	
	  Exception: access violation (0xc0000005), Address: <address>
	
	WORKAROUND
	==========
	
	When you have the Format list box open, make sure that you select an item in the
	Modify Style dialog box rather than in the Style dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem has been corrected in Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
