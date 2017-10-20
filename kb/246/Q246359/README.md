---
layout: page
title: "Q246359: Differences in Microsoft Visual C/C++ 5.0"
permalink: /kb/246/Q246359/
---

## Q246359: Differences in Microsoft Visual C/C++ 5.0

{% raw %}

	Article: Q246359
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the 2 items that have changed in Microsoft Visual C/C++
	5.0 from the previous releases.
	
	MORE INFORMATION
	================
	
	Different File Hierarchy
	------------------------
	
	The file hierarchy in Microsoft Visual C/C++ 5.0 is different from that of
	previous releases in that .dll files were moved from the BIN folder into
	sub-folders.
	
	Different Default Installation Path
	-----------------------------------
	
	The default installation path is now in the "Program Files" (including the space)
	folder. Many UNIX utilities (Makedepend) handle spaces in file names poorly, if
	at all. If there are spaces in the folder name, there are spaces in the value of
	PATH. The most common symptom that occurs because of this change is that the
	shell cannot find cc or c89.
	
	To make the Interix SDK work with Microsoft Visual C/C++ 5.0 you must modify your
	PATH:
	
	1. Add all of the necessary Microsoft Visual C/C++ folders to your PATH.
	
	2. Change any pathname component that includes spaces to the 8.3 version of the
	  file name.
	
	For a complete description of the MSVC and Interix topic, see the "Working with
	MSVC 5.0" Tech Note at the following Interix Web site:
	
	  http://www.interix.com/newinterix/main_technotes.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
