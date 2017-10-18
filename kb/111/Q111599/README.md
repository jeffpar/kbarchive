---
layout: page
title: "Q111599: BUG: Character Background Is Not Painted Correctly"
permalink: kb/111/Q111599/
---

## Q111599: BUG: Character Background Is Not Painted Correctly

	Article: Q111599
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When text is displayed on a window with a background different than the
	background of the DC (used to display the text), slivers will display between
	the characters. The slivers seem to occur only between certain character
	combinations, such as "Th".
	
	This problem is only evident with some drivers, such as the standard VGA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
