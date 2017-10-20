---
layout: page
title: "Q97399: DdList.exe Implements Owner-Draw Combo Boxes"
permalink: /kb/097/Q97399/
---

## Q97399: DdList.exe Implements Owner-Draw Combo Boxes

{% raw %}

	Article: Q97399
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbGrpDSUser
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the implementation of an owner-drawn combo box and list
	box that use the drive and folder icons from the Microsoft Windows version 3.1
	Software Development Kit (SDK).
	
	DDLIST utilizes the unused bitmaps that are included in the Microsoft Windows
	version 3.1 Software Development Kit (SDK) SAMPLES\COMMDLG directory for the
	File Open and File Save dialog boxes. DDLIST implements the drives combo box and
	the directory list box as an interrelated pair in a dialog box, fully utilizing
	the drive type and folder icons available with the Windows SDK. All the bitmaps
	are loaded separately and maintained in two global HBITMAP arrays. The code to
	draw the combo box and list box items references these arrays.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DdList.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
