---
layout: page
title: "Q97371: SAMPLE: VLB.exe Implements a Virtual List Box"
permalink: kb/097/Q97371/
---

## Q97371: SAMPLE: VLB.exe Implements a Virtual List Box

	Article: Q97371
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VLB.exe implements a single-selection, single-column virtual list box that is
	capable of displaying millions of items. The standard list box control in
	Microsoft Windows can contain a limited number of items. VLB.exe shows how to
	implement list boxes that exceed this limitation.
	
	The standard list box control in Microsoft Windows can contain a limited number
	of items. Applications may need to implement list boxes that exceed this
	limitation. This article introduces a custom control called VLIST, which is a
	virtual list box capable of displaying millions of items. Part 1 of the article
	provides instructions for using the VLIST virtual list box, and documents the
	styles and messages that VLIST supports. Part 2 describes how VLIST was
	implemented, and discusses the problems encountered and decisions made during
	the implementation; readers who would like to modify VLIST or implement their
	own virtual list box may find this section interesting. For a working example of
	VLIST, see the Microsoft Developer Network CD---the topic listing in the Index
	window was implemented with VLIST.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VLB.exe
	  (http://download.microsoft.com/download/platformsdk/sample87/3.1/W31/EN-US/VLB.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
