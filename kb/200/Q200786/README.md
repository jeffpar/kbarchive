---
layout: page
title: "Q200786: Notification Tray Icon Component"
permalink: /kb/200/Q200786/
---

## Q200786: Notification Tray Icon Component

{% raw %}

	Article: Q200786
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbsample kbMFC KbUIDesign kbVC400 kbVC410 kbCompGallery kbGrpDSMFCATL
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Notification Tray Icon Component can be inserted in a project to obtain the
	code necessary to hide the application icon in the notification area of the
	taskbar. The code will work for both an MFC SDI and MDI application. This
	component assumes that the project has a CMainFrame class that has been derived
	from the CFrameWnd or CMDIFrameWnd MFC class.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Tkbaricn.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After decompressing the file you will have get a Tkbaricn.dll, Kbaricn.hlp, and a
	Readme.txt file. Follow the instructions in the Readme.txt file to see where the
	.dll and .hlp files should go.
	
	MORE INFORMATION
	================
	
	The notification tray icon component inserts a new class called CTaskbarIcon,
	that is used to provide function calls that wrap the construction of the
	NOTIFYICONDATA structure and any necessary SDK API calls. Refer to the help
	button provided on the Component Gallery insert dialog for more detailed
	information of this class and the changes made to the project.
	
	Additional query words: tkbaricn taskbar notification tray icon component
	
	======================================================================
	Keywords          : kbsample kbMFC KbUIDesign kbVC400 kbVC410 kbCompGallery kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
