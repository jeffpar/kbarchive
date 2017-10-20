---
layout: page
title: "Q130051: Use CHEV Command for Changing Mode of DOS/V"
permalink: /kb/130/Q130051/
---

## Q130051: Use CHEV Command for Changing Mode of DOS/V

{% raw %}

	Article: Q130051
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Japanese Windows 3.1 requires DOS/V (Japanese MS-DOS). DOS/V has two different
	modes, English and Japanese modes. The CHEV command is used to change between
	these two modes.
	
	MORE INFORMATION
	================
	
	MSKK of Japan released DOS5/V and DOS6/V. DOS/V has two different modes, and
	Japanese Windows 3.1 runs only on Japanese mode.
	
	CHEV.EXE is used in DOS5/V to temporarily change the display between English mode
	and Japanese mode.
	
	The CHEV command was added to Japanese DOS/V as a convenience to users. The
	command is used similarly to such MS-DOS commands as MODE, XCOPY, and so forth.
	Before running Japanese Windows, make sure that you are using the Japanese mode
	of DOS/V; otherwise, use the CHEV command to change to Japanese mode.
	
	NOTE: DOS/V EDIT.COM works only in English mode.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
