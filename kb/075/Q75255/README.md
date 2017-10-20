---
layout: page
title: "Q75255: INFO: DBCS Support in Windows Versions 3.0 And 3.1"
permalink: /kb/075/Q75255/
---

## Q75255: INFO: DBCS Support in Windows Versions 3.0 And 3.1

{% raw %}

	Article: Q75255
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a version of Windows that is enabled for double-byte character sets (DBCS),
	all functions that take strings as arguments will work with strings of
	double-byte characters. In addition, any version of Windows that supports DBCS
	will support the IsDBCSLeadByte function. This function determines whether or
	not a byte is the leading byte of a 2-byte character. The Windows functions that
	use a string length parameter (like lstrlen and TextOut) will use a count of
	bytes, not of characters. The functions IsDBCSLeadByte, AnsiPrev, and AnsiNext
	should be used to access characters within a string.
	
	Note that DBCS-enabled Windows will typically have special methods to enter
	double-byte or composite characters. Composite character creation involves
	pressing several keys in a specified sequence to form new characters. The entry
	system is integrated into Windows by the original equipment manufacturer
	(hardware OEM). These characters are not typically directly entered into an edit
	control. Composite characters may be entered at the bottom of dialog box (as in
	OS/2). In many systems, these characters are composed at the bottom of the
	screen (in the composition window).
	
	Copies of Windows version 3.0 developed for the United States and Europe do not
	support DBCS. Copies of Windows version 3.1 developed for the United States and
	Europe, and the KANJI adaptation of Windows version 3.0 and 3.1 do support DBCS.
	The KANJI adaptation of Windows is distributed through hardware OEMs. For more
	information on KANJI Windows, search this knowledge base on the following
	words:
	
	  " KANJI " (without the quotation marks)
	
	The March, 1990, "Microsoft Systems Journal" article "Using the OS/2 National
	Language Support Services to Write International Programs" has more information
	on both DBCS and KANJI. It can be found in the Software/Data Library by
	searching on OS2NLS or S12547. OS2NLS was archived using the PKware
	file-compression utility.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
