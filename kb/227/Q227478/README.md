---
layout: page
title: "Q227478: WD97: Invalid Page Fault When Printing in Photo Editor"
permalink: kb/227/Q227478/
---

## Q227478: WD97: Invalid Page Fault When Printing in Photo Editor

	Article: Q227478
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Photo Editor, version 3.0.2.3 97 
	-------------------------------------------------------------------------------
	
	For a Microsoft Office 2000 version of this article, see Q256901.
	
	SYMPTOMS
	========
	
	When you attempt to print a graphic while in Microsoft Photo Editor (on the File
	menu, click Print), the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  PHOTOED caused an invalid page fault in UNKNOWN at address.
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	This problem occurs when any installed printer on your system has a network
	share name that is longer than 48 characters. This problem is not limited to the
	printer that you set as the default printer in Microsoft Windows.
	
	NOTE: The length of the printer share name also includes the path.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Rename the Printer Share to a Shorter Name
	----------------------------------------------------
	
	You can rename the printer share name that has been set on the network print
	server to a name (including the network path) that is shorter than 48
	characters. Please see your network administrator.
	
	Method 2: Use the Print Icon on the Toolbar
	-------------------------------------------
	
	You can use the Print icon on the Microsoft Photo Editor toolbar instead of
	printing by using Print on the File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem was first corrected in Microsoft Office 2000 Service Pack 2.
	
	Additional query words: Crash Dialog toolbar IPF
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbPhotoEd97
	Version           : :97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
