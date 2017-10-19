---
layout: page
title: "Q88555: HOWTO: Obtain Width and Height of a CBitmap Object"
permalink: /kb/088/Q88555/
---

## Q88555: HOWTO: Obtain Width and Height of a CBitmap Object

	Article: Q88555
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,7.0
	Operating System(s): 
	Keyword(s): kbBitmap kbGDI kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	   - Microsoft Windows XP Home Edition 
	   - Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The CBitmap class provided by Microsoft Foundation Classes (MFC), does not
	contain member functions that return the width and height of a bitmap.
	
	MORE INFORMATION
	================
	
	The width and height of a CBitmap may be obtained by using the member function
	GetObject(). GetObject() can return a BITMAP structure that contains both the
	height and the width of the bitmap, along with some additional information.
	
	The sample code below illustrates two functions that accept a CBitmap reference
	and return the width and height contained in the BITMAP structure returned by
	GetObject().
	
	Sample Code
	-----------
	
	     int GetCBitmapWidth(const CBitmap & cbm)
	     {
	        BITMAP bm;
	        cbm.GetObject(sizeof(BITMAP),&bm);
	        return bm.bmWidth;
	     }
	
	     int GetCBitmapHeight(const CBitmap & cbm)
	     {
	        BITMAP bm;
	        cbm.GetObject(sizeof(BITMAP),&bm);
	        return bm.bmHeight;
	     }
	
	Additional query words: kbMFC
	
	======================================================================
	Keywords          : kbBitmap kbGDI kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,2.0,2.1,4.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
