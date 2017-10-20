---
layout: page
title: "Q260340: Visual FoxPro Sample: Use PictureClip Control to Animate in VFP"
permalink: /kb/260/Q260340/
---

## Q260340: Visual FoxPro Sample: Use PictureClip Control to Animate in VFP

{% raw %}

	Article: Q260340
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VFPAnimate.exe is a sample application that illustrates the use of an ActiveX
	PictureClip control to provide animation in a Visual FoxPro application.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VFPAnimate.exe
	  (http://download.microsoft.com/download/vfox60/sample6/6/win98/en-us/VFPAnimate.exe)
	
	Release Date: May-24-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The ActiveX PictureClip control (PicClp32.ocx) allows you to select and display
	an area of a source bitmap. This article illustrates the use of a PictureClip
	control and a FoxHWND control (FoxHWND.ocx) to provide animation in a Visual
	FoxPro form.
	
	This sample application uses a PictureClip control to sequentially select a
	series of areas from a source bitmap and display the images in a FoxHWND
	control.
	
	PictureClip provides an efficient mechanism for storing multiple picture
	resources in a single bitmap file. Instead of using multiple bitmaps or icons,
	you can create a source bitmap that contains all of the bitmap images that are
	required by your application. When you need to display an individual bitmap, you
	can use PictureClip to select the region in the source bitmap that contains that
	desired portion of the bitmap.
	
	You can specify the clipping region in the source bitmap in one of two ways:
	
	1. Select any portion of the source bitmap as the clipping region. Specify the
	  upper-left corner of the clipping region using the ClipX and ClipY
	  properties. Specify the area of the clipping region using the ClipHeight and
	  ClipWidth properties. This method is useful when you want to view a random
	  portion of a bitmap.
	
	2. Divide the source bitmap into a specified number of rows and columns. The
	  result is a uniform matrix of picture cells numbered 0, 1, 2, and so on. You
	  can display individual cells by using the GraphicCell property. This method
	  is useful when the source bitmap contains a palette of icons that you want to
	  display individually, such as in a toolbar bitmap.
	
	Because the PictureClip control returns an object rather than a bitmap, an image
	control cannot be used to display the selected area of the source bitmap. To
	display the selected area of the source bitmap, use a FoxHWND control to accept
	and display the object.
	
	This sample takes the approach of dividing the bitmap into a matrix containing 6
	Columns and 3 Rows. A timer is used to display the sections of the source bitmap
	sequentially.
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: VFPAnimate
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbCtrl kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
