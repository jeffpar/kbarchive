---
layout: page
title: "Q130055: Character Sets Supported by Hangeul (Korean) Windows Versions"
permalink: /kb/130/Q130055/
---

## Q130055: Character Sets Supported by Hangeul (Korean) Windows Versions

	Article: Q130055
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:1.2,3.5
	Operating System(s): 
	Keyword(s): kbIntl kbSDKWin32 kbOSWin32s kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	- Microsoft Win32s version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hangeul (Korean) Windows version 3.1 supports the Wansung code set only. However
	Hangeul Windows 95 will support the XWansung code set.
	
	MORE INFORMATION
	================
	
	Two different Hangeul character standards exist in Korea. One is Wansung, and
	the other is Johap. The Korean government issued a Korean standard code set
	(KSC5601-1987), which is Wansung code set. Hangeul Windows version 3.1 supports
	this character set only.
	
	Later, the Korean government amended and added to the standard and issued a new
	one (KSC5601-1992), which contains both Wansung and Johap code sets.
	
	Hangeul Windows version 3.1 and Hangeul Windows 95 will not support the
	KSC5601-1992 standard. Instead, Hangeul Windows 95 will support the XWansung
	(Microsoft Extended Wansung) standard, which is an extended version of the
	KSC5601-1987 standard.
	
	The XWansung Code system contains some Johab characters (not all the Johap
	codes). Johab characters were added into the vacant Range of old Wansung Code of
	Hangeul Windows version 3.1. Here are the details on the XWansung code set:
	
	Number of characters:
	
	    Exisitng Wansung    = 8,836
	    Additional Assigned = 8,822 (Johab)
	    Additional Reserved = 4,770
	    ------------------------------
	    Total characters    = 22,428
	
	Leading byte range:    0x81-0xFE
	Trailing byte range:   0x41-5A,0x61-0x7A,0x81-0xFE
	
	Additional query words: 1.20 3.10 4.00 3.50 Hangul Chohap kbinf
	
	======================================================================
	Keywords          : kbIntl kbSDKWin32 kbOSWin32s kbIntlDev 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWin32s120 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:1.2,3.5
	
	=============================================================================
	
