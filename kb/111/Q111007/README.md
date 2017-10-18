---
layout: page
title: "Q111007: BUG: MoveTo/LineTo Causes Divide by 0 Error"
permalink: kb/111/Q111007/
---

## Q111007: BUG: MoveTo/LineTo Causes Divide by 0 Error

	Article: Q111007
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 19-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using MoveTo() or LineTo() with a delta X or delta Y greater than 16K to draw
	within a complex clipping region, causes the system to display the following
	error message in a system modal dialog box appears:
	
	  Application Error integer divide by 0
	
	CAUSE
	=====
	
	If the change in x or the change in y in the MoveTo/LineTo calls is greater than
	16K, and if the line is being drawn to a complex clipping region, a divide
	overflow error occurs in GDI.exe. This problem does not occur for smaller
	changes in x or y, and it also does not occur if the line is being drawn to a
	noncomplex clipping region.
	
	RESOLUTION
	==========
	
	This bug can be worked around by avoiding complex clipping regions, or if
	complex regions are critical, by ensuring that the changes in x and y in
	MoveTo/LineTo calls are always less than 16K.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
