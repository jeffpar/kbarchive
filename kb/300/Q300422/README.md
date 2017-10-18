---
layout: page
title: "Q300422: HOWTO: Rebuild the Index of the MSDN Library"
permalink: kb/300/Q300422/
---

## Q300422: HOWTO: Rebuild the Index of the MSDN Library

	Article: Q300422
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbgrpdsvc
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network Subscriptions 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary at times to rebuild the index of the MSDN Library. This
	article shows how to do so.
	
	MORE INFORMATION
	================
	
	Here are some of the reasons you might want to rebuild the MSDN Library index:
	
	- There is slow performance while searching for documents.
	
	- There is slow performance at startup.
	
	- When starting the MSDN Library there are no entries under the Index tab.
	
	- The index file is corrupt.
	
	For information on resolving other problems with the MSDN Library, see the
	"References" section of this article.
	
	Steps to Resolve Problem Behavior
	---------------------------------
	
	1. Search your local hard drives for a "*.chs" file for the problematic MSDN.
	  For example, April 2001 might be in C:\Program Files\Microsoft Visual
	  Studio\MSDN\2001JAN\1033 and be named MSDN100.chs.
	
	2. Rename the file so the extension is .old. For example, "MSDN100.old" (without
	  the quotation marks).
	
	3. Start the MSDN Library and click the Index tab.
	
	  The Index will be rebuilt and the MSDN Library should function as designed.
	
	NOTE: If the Index tab was selected when the MSDN Library was last closed, the
	Index will rebuild during startup of the Library. This process may be slow, and
	the system may appear to stop responding ("hang").
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall
	
	  Q201420 HOWTO: Manually Uninstall and Update HTML Help
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbgrpdsvc 
	Technology        : kbMSDNSearch kbMSDNSubsc
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
