---
layout: page
title: "Q151378: PRB: CStatic::SetBitmap Doesn't Display Bitmap on Win NT 3.51"
permalink: /kb/151/Q151378/
---

## Q151378: PRB: CStatic::SetBitmap Doesn't Display Bitmap on Win NT 3.51

	Article: Q151378
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbBitmap kbMFC kbOSWinNT351 kbStaticCtrl kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	4.00 4.10
	WINDOWS NT
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CStatic::SetBitmap() does not display the bitmap correctly on a picture control
	in Windows NT 3.51 if the picture control is subclassed.
	
	This problem is restricted to Windows NT 3.51 and does not appear on Windows 95.
	
	RESOLUTION
	==========
	
	Do not subclass the picture control either directly, by using SubClassWindow()
	or SubClassDlgItem(), or indirectly, by associating a CStatic control variable
	with it. Instead, call SetBitmap() using a pointer to the picture holder
	obtained by calling GetDlgItem()
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Embed a picture control on a dialog, form view, or property page using the
	resource editor, and associate it with a bitmap type. Change the ID from
	IDC_STATIC to something else. Associating the picture control with a bitmap ID
	is optional. Using Class Wizard, associate a CStatic control variable with this
	picture control. Note that when you try to display a bitmap or change the old
	bitmap on the picture holder using CStatic::SetBitmap(), the new bitmap is not
	displayed.
	
	Sample Code
	-----------
	
	     // IDC_PICHOLD is the picture holder's ID
	     ((CStatic*)GetDlgItem(IDC_PICHOLD))->SetBitmap(/* handle to bitmap */);
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbBitmap kbMFC kbOSWinNT351 kbStaticCtrl kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : :4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
