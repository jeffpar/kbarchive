---
layout: page
title: "Q68584: Avoid SetClassLong If Subclassing a Standard Control Class"
permalink: /kb/068/Q68584/
---

## Q68584: Avoid SetClassLong If Subclassing a Standard Control Class

{% raw %}

	Article: Q68584
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application should not attempt to create a window subclass for standard
	Windows controls such as combo boxes and buttons.
	
	SetClassLong() should not be used to subclass an entire standard control class.
	This would cause all controls of that type (including controls in other
	applications) created while the subclass was in effect to be subclassed.
	
	SetWindowLong() can be used to subclass individual controls in your application.
	
	In addition, standard Windows controls should only be subclassed in "non-
	intrusive" ways. Subclassing procedures that alter the appearance of a control
	or that depend on undocumented messages or message parameters could be
	incompatible with future versions of Windows.
	
	For more information on subclassing a control, please see the "Safe Subclassing"
	article on the Microsoft Developer Network (MSDN) CD.
	
	Charles Petzold's "Programming Windows" (Microsoft Press) contains a sample
	program that shows how to subclass a standard control (in this case, a scroll
	bar). In the Windows 2.x version of the book, the sample is called COLORSCR; in
	the Windows 3.0 version, the sample is called COLORS1.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
