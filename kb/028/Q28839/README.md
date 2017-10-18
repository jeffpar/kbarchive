---
layout: page
title: "Q28839: Case Sensitivity of Search Change... Command in Windows Write"
permalink: kb/028/Q28839/
---

## Q28839: Case Sensitivity of Search Change... Command in Windows Write

	Article: Q28839
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows Write Replace dialog box (called Change in earlier
	versions), the Find What text box is case-sensitive only when the Match Case
	(Match Upper/Lowercase in earlier versions) check box is selected. However, the
	Change To text box is case-sensitive always, regardless of the status of the
	Match Case check box.
	
	MORE INFORMATION
	================
	
	Case sensitivity is best demonstrated by doing the following:
	
	1. Clear the Match Case check box.
	
	2. In the Find What and Change To text boxes, type:
	
	  ^P
	
	  (Press SHIFT+6, uppercase P.)
	
	3. When you choose the Change All button, all the carriage returns, ^p (SHIFT+6,
	  lowercase p), are replaced with an uppercase letter P.
	
	Additional query words: 3.00 3.00a 3.10 3.11 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
