---
layout: page
title: "Q111864: BUG: GP Fault When Drawing on a Memory-Based DC"
permalink: /kb/111/Q111864/
---

## Q111864: BUG: GP Fault When Drawing on a Memory-Based DC

{% raw %}

	Article: Q111864
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A general protection (GP) fault can occur on a memory-based device context (DC)
	when a bitmap previously selected in the DC is selected out and another is
	selected in. This is a common problem when using the SaveDC() and RestoreDC()
	functions with a memory DC.
	
	CAUSE
	=====
	
	In a regular (nonmemory-based) DC, when the SaveDC() and RestoreDC() functions
	are used, the size of the window client area of the DC does not change. The size
	of the drawable area in a memory-based DC is dependent on the size of the
	current bitmap selected in the DC.
	
	For example, suppose the default 1 x 1 monochrome bitmap is selected in a memory
	DC and you call SaveDC(). Now, you select a 200 x 200 color bitmap into the DC
	and you perform some drawing commands. Then, you call RestoreDC() to restore the
	DC. This action will select the old 1 x 1 bitmap back into the DC.
	Unfortunately, GDI does not update the clipping region when this happens, and
	when you draw outside the 1 x 1 region, you can receive a GP fault.
	
	RESOLUTION
	==========
	
	After you call RestoreDC() on a memory-based DC, you need to call SelectObject()
	to select the bitmap that was selected in the DC before RestoreDC() was called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code exhibits the problem outlined above. When
	CreateCompatibleDC() is called, a default 1 x 1 monochrome bitmap is selected
	into the DC returned from the function. By restoring the initial 1 x 1 bitmap
	after getting a visible region of 200 x 200, GDI thinks the 1 x 1 surface has a
	clipping rectangle of 200 x 200. This is what causes the overwrite.
	
	Sample Code
	-----------
	
	     HBITMAP hbm1,hbm2;
	     HDC     hdcBits,hdcScreen;
	
	     hdcScreen = GetDC(NULL);
	     hdcBits = CreateCompatibleDC(hdcScreen);
	     hbm1 = CreateCompatibleBitmap(hdcScreen,200,200);
	     hbm2 = CreateCompatibleBitmap(hdcScreen,200,200);
	
	     SaveDC(hdcBits);
	     SelectObject(hdcBits,hbm1);
	     PatBlt(hdcBits,0,0,200,200,WHITENESS);
	     RestoreDC(hdcBits,-1);
	     SaveDC(hdcBits);
	     SelectObject(hdcBits,hbm2);
	     PatBlt(hdcBits,0,0,200,200,WHITENESS);
	     Ellipse(hdcBits,0,0,200,200);
	     RestoreDC(hdcBits,-1);
	     Rectangle(hdcBits,0,0,200,200);
	
	Additional query words: buglist3.10 3.10 gpf gp-fault 1x1 200x200
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
