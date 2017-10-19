---
layout: page
title: "Q319795: PRB: Run-Time Error Occurs on Open of Encarta Interactivities"
permalink: /kb/319/Q319795/
---

## Q319795: PRB: Run-Time Error Occurs on Open of Encarta Interactivities

	Article: Q319795
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an Encarta Interactivities module on a localized language version
	of Windows XP, you may receive the following run-time error message:
	
	  Microsoft Visual C++ Run-Time Library
	
	  Run-time error!
	
	  Program: ...t Encarta\Encyclopedia Standard Edition 2002\ENC2002.EXE
	
	  This application has requested the run-time to terminate it in an unusual
	  way.
	  Please contact the application's support team for more information.
	
	CAUSE
	=====
	
	The Encarta Interactivities module is authored with Macromedia Shockwave. The
	version of the Shockwave runtime that is included with Encarta Encyclopedia
	Standard 2002 does not work with certain localized language versions of Windows
	XP. This problem does not occur with the English version of Windows XP.
	
	This problem has been observed with the Encarta Interactivities module of Encarta
	Encyclopedia Standard 2002 for these localized language versions of Windows XP:
	
	- Czechoslovakian
	- Polish
	
	
	RESOLUTION
	==========
	
	To work around this problem, install Macromedia Shockwave Player version
	8.5.1.98 or later before you run the Encarta Interactivities module. You can
	download the latest version of the Macromedia Shockwave Player from the
	following Macromedia Web site:
	
	  Download Macromedia Shockwave Player
	  http://www.macromedia.com/downloads/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install either the Czechoslovakian or the Polish version of Microsoft Windows
	  XP Home Edition.
	
	2. Install the English version of the Encarta Encyclopedia Standard 2002, and
	  then restart when you are prompted.
	
	3. Run Encarta Encyclopedia Standard 2002.
	
	4. Click Multimedia on the Features menu.
	
	5. Click Interactivities on the Multimedia submenu.
	
	6. Click Human Anatomy in the left navigation pane.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbMMSearch kbEncartaEncyc2002
	Version           : :1.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
