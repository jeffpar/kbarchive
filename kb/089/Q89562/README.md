---
layout: page
title: "Q89562: SAMPLE: BttnCur.exe Contains Buttons and Cursors Doc and Sample"
permalink: kb/089/Q89562/
---

## Q89562: SAMPLE: BttnCur.exe Contains Buttons and Cursors Doc and Sample

	Article: Q89562
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbButton kbCtrl kbCursor kbOSWin310
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BttnCur.exe contains information about using buttons and cursors in the
	Microsoft Windows graphical environment. BttnCur.zip contains the source code to
	a dynamic- link library (DLL) that contains 15 new standard cursors and 9
	standard command images to use as buttons on an application's toolbar. Other
	code in the DLL draws a button using one of these images (or another image
	provided by an application) in one of six different states. With this code, an
	application can provide only one image for a button and dynamically create other
	states at run time. This dramatically reduces the storage required for an
	application to provide a button-rich graphical interface.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  BttnCur.exe
	  (http://support.microsoft.com/download/support/mslfiles/BttnCur.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	NOTE: The BttnCur.exe file contains a directory structure. To reproduce the
	directory structure, specify the -d option as follows:
	
	  buttncur -d
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbButton kbCtrl kbCursor kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
