---
layout: page
title: "Q123331: HOWTO: Compile Large Chinese or Korean Help Files"
permalink: /kb/123/Q123331/
---

## Q123331: HOWTO: Compile Large Chinese or Korean Help Files

	Article: Q123331
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbIntl kbSDKWin32 kbDBCS kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Extended Help Compiler is not available in Traditional/Simplified Chinese
	Windows version 3.1 SDK extension or in the Korean Windows version 3.1 SDK
	extension. Therefore, large help files in Chinese or Korean cannot be compiled
	under Windows version 3.1 using the extended help compiler.
	
	However, large Chinese or Korean help files can be compiled under Windows NT, by
	using Chinese or Korean Help Compiler (HC31.EXE). Make sure the directory
	containing the appropriate HC31.EXE is in the path.
	
	If the .HPJ file contains Compress=YES, change it to compress=MEDIUM or to
	compress=FALSE.
	
	The resulting .HLP files cannot be displayed correctly under Windows NT. If you
	try it, you'll see random symbols in place of the Chinese or Korean characters.
	To examine the result of the compilation, exit from Windows NT, and start
	Chinese or Korean Windows. Then display the help files.
	
	Additional query words: fesdk hcp
	
	======================================================================
	Keywords          : kbIntl kbSDKWin32 kbDBCS kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbhowto
	
	=============================================================================
	
