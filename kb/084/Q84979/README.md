---
layout: page
title: "Q84979: SuperMDI.exe Demos Superclassing MDI Client Window"
permalink: /kb/084/Q84979/
---

## Q84979: SuperMDI.exe Demos Superclassing MDI Client Window

{% raw %}

	Article: Q84979
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbMDI kbGrpDSUser kbWndw
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SuperMDI.exe is a sample that demonstrates superclassing an MDI client window to
	change its behavior. An application can use superclassing to add new styles and
	functionality to a multiple document interface (MDI) client window.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  SuperMDI.exe
	  (http://download.microsoft.com/download/platformsdk/demo99/3.1/W31/EN-US/SuperMDI.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Under a variety of circumstances an application might be designed to change the
	predefined behavior of an MDI client window. Superclassing provides the easiest
	and cleanest method to change window styles or to handle messages in a unique
	manner.
	
	By default, an MDI client window cannot accept mouse button double-clicks. If an
	application superclasses the client window, the application can change the
	window style of the client window and have it accept double- clicks. An
	application can also use this method to change the MDI client window background
	color.
	
	The SuperMDI sample application demonstrates how to change the color of the MDI
	client window and enable the MDI client to respond to mouse button
	double-clicks.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbMDI kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
