---
layout: page
title: "Q194205: Err Msg: WAOL Caused an Invalid Page Fault in Module MSVCRT.DLL"
permalink: /kb/194/Q194205/
---

## Q194205: Err Msg: WAOL Caused an Invalid Page Fault in Module MSVCRT.DLL

	Article: Q194205
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbimukbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta for Windows 
	- Microsoft Encarta Virtual Globe 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install one of the programs listed earlier in this article, you may
	receive the following error message when you attempt to log on to America
	Online:
	
	  WAOL caused an invalid page fault in module MSVCRT.DLL
	
	CAUSE
	=====
	
	This error message can occur if the Msvcrt.dll file installed by one of the
	programs listed earlier in this article is a different version than the version
	of the Msvcrt.dll file installed by America Online.
	
	NOTE: The Microsoft Encarta 2000 products ship with the updated version of the
	Msvcrt.dll file. Therefore, this issue does not occur with the Encarta 2000
	products. To obtain the updated version of the Msvcrt.dll file, follow the
	instructions listed below, or upgrade your version of the products listed above.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest version of the America Online
	software, and then remove and reinstall the program(s) listed at the top of this
	article. You can obtain the latest version of the America Online software from
	America Online Technical Support or from the following America Online Web site:
	
	  http://www.aol.com
	
	For information about how to contact America Online, query in the Microsoft
	Knowledge Base for the following article:
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	NOTE: If you are using Microsoft Windows 98, you can install a version of the
	Msvcrt.dll file from the Windows 98 CD-ROM that works with America Online 4.0.
	Installing this version of the Msvcrt.dll may enable you to connect to America
	Online so you can download the software update. To reinstall the Msvcrt.dll
	file, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sfc" (without the quotation marks), and then click OK.
	
	3. Click "Extract one file from installation disk".
	
	4. In the text box, type "msvcrt.dll" (without the quotation marks), and then
	  click Start.
	
	5. Click OK, and then follow the instructions on backing up the existing file
	  before you overwrite it.
	
	6. If you are prompted to restart your computer, click Yes.
	
	7. Test to see if you can connect to America Online. If you can connect to
	  America Online, download and install the latest American Online software. If
	  you cannot connect to America Online, contact America Online Technical
	  Support.
	
	MORE INFORMATION
	================
	
	For additional information about this error message, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q191621 Err Msg: WAOL Caused an Invalid Page Fault in Module MSVCRT.DLL
	
	For information about how to connect to America Online, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q188654 Cannot Connect to America Online or Install America Online 4.0
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: multi media multi-media mmtitles mm kbimu
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1999 kbEncartaEnCyc1999 kbEncartaReference99
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
