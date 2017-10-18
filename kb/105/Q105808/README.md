---
layout: page
title: "Q105808: FIX: Overflow in VB version 3.0 ICONWRKS Sample Program"
permalink: kb/105/Q105808/
---

## Q105808: FIX: Overflow in VB version 3.0 ICONWRKS Sample Program

	Article: Q105808
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ICONWRKS (Icon Works) sample program that shipped with Visual Basic version
	3.0 can fail with an "Overflow" error when you attempt to do a File+Open from
	the Editor form, on some high-resolution monitors. ICONWRKS is installed by
	default under the subdirectory \SAMPLES\ICONWRKS.
	
	CAUSE
	=====
	
	ICONWRKS fails with "Overflow" in the Extract_Image_And_Mask procedure in
	ICONWRKS.BAS on the following line:
	
	  R = SetBitmapBits(editor.Pic_Image.Image, ImageSize, Lpicon + 12 + 128)
	
	The statement DEFINT A-Z at the top of the module makes the variable R an
	integer. However, the API function SetBitmapBits returns a Long Integer when run
	on some high-resolution monitors.
	
	NOTE: This problem may also occur on other lines with other API calls.
	
	This sample program was developed under Visual Basic version 1.0 and was not
	updated for 3.0.
	
	RESOLUTION
	==========
	
	To correct the problem, add the following statement to ICONWRKS.GBL:
	
	     Global R As Long
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	Additional query words: buglist3.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
