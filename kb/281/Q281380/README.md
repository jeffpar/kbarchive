---
layout: page
title: "Q281380: HOWTO: Print Multiple .tif Files from Visual FoxPro"
permalink: kb/281/Q281380/
---

## Q281380: HOWTO: Print Multiple .tif Files from Visual FoxPro

	Article: Q281380
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro developers work with a variety of graphics files. One of the more popular
	graphics file types is the Tagged Image File Format (.tif) file. Because the
	current FoxPro Report Designer and Image control do not support this image
	format, developers must use an alternate method to print these files. This
	article details one such method.
	
	MORE INFORMATION
	================
	
	Kodak Imaging (formally known as "Wang Imaging" and "Eastman Imaging"), which
	ships with Microsoft Windows versions 95 and later, can be used to view and
	print .tif files. This application also exposes an object model that makes Kodak
	Imaging controllable from Visual FoxPro.
	
	To automate Kodak Imaging to print all the .tif files in a specific directory,
	follow these steps:
	
	1. In Visual FoxPro, open a new program, and then save and run the following
	  code:
	
	  *!* START SAMPLE CODE.
	
	  PUBLIC goImaging, goImageFile
	  LOCAL laTiffArray[1], lcTiffDir, lcTiffFullPath, i
	
	  *!* Let user choose a DIR and generate a list of *.TIF files 
	  *!* to print using ADIR().
	  lcTiffDir = GETDIR(SYS(5) + SYS(2003),"Select *.TIF Directory")
	  IF EMPTY(lcTiffDir)
	  	MESSAGEBOX("No directory selected. Aborting program.",64,"")
	  	RETURN .F.
	  ENDIF
	
	  CD (lcTiffDir)
	  ADIR(laTiffArray,"*.TIF")
	  IF TYPE("laTiffArray") = "L"
	  	MESSAGEBOX("There are no *.TIF files in the  selected directory. Aborting program.",64,"")
	  	RETURN .F.
	  ENDIF
	
	  *!* Start Kodak Imaging.
	  goImaging = CREATEOBJECT("Imaging.application")
	  *!* Make the Kodak Imaging window as small as possible. You cannot hide it.
	  goImaging.LEFT = 0
	  goImaging.TOP = 0
	  goImaging.WIDTH = 112
	  goImaging.HEIGHT = 27
	  goImaging.TopWindow = .F.
	
	  goImageFile = goImaging.CreateImageViewerObject()
	
	  WAIT WINDOW "Printing .TIF files. Please wait..." NOWAIT NOCLEAR
	
	  *!* Loop through the array and print the .tif files.
	  FOR i = 1 TO ALEN(laTiffArray) STEP 5
	  *!* We only have file names in the array. We need to give the imaging
	  *!* object a full path to each file.	
	  	lcTiffFullPath = lcTiffDir + laTiffArray[i]
	  	goImageFile.OPEN(lcTiffFullPath)
	  	goImageFile.PRINT(.F.)	&& .F. suppresses the print options dialog.
	  	goImageFile.CLOSE(.F.)	&& .F. closes file without saving changes.
	  ENDFOR
	
	  *!* Clean up.
	  goImaging.QUIT()
	  RELEASE goImaging, goImageFile
	  WAIT WINDOW "Complete!" TIME 2
	
	  *!* END SAMPLE CODE.
	
	2. When prompted, select a directory that contains some .tif files.
	
	Visual FoxPro prints these files.
	
	REFERENCES
	==========
	
	For more information about automating Kodak Imaging, download the Kodak Imaging
	Professional Developers Guide from the Eastman Kodak Web site:
	
	  http://www.eastmansoftware.com/support_pro/Documentation/2.0/Professional%20Developers%20Guide.zip
	  (http://www.eastmansoftware.com/support_pro/Documentation/2.0/Professional%20Developers%20Guide.zip)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
