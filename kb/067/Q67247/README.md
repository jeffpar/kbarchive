---
layout: page
title: "Q67247: MuScroll.exe - Custom Control Code"
permalink: /kb/067/Q67247/
---

## Q67247: MuScroll.exe - Custom Control Code

{% raw %}

	Article: Q67247
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Download Center contains a custom control DLL and documentation
	for a custom control class, MicroScroll. These controls are essentially small
	scroll bars with no scroll box, and perform no scroll-box tracking.
	
	MicroScroll controls are small enough to be placed next to edit controls to
	create a spin button, such as those in the Date/Time dialog box in the Control
	Panel. Spin buttons are discussed on pages 86 and 87 of the IBM CUA guide, which
	is included with the Windows Software Development Kit (SDK).
	
	The archive file in the Microsoft Download Center, MUSCROLL, contains the
	following files:
	
	  Filename      Description
	  --------      -----------
	  MUSCROLL.DLL  MicroScroll custom control DLL. Currently, the source
	                files necessary to build the custom control are not
	                available to the public.
	
	  MUSCROLL.H    Header file containing control styles and messages
	                that define the interface to the control.
	
	  MUSCROLL.HLP  Windows Help file describing the control interface
	                and notes on using the control in an application.
	
	  MUSTEST.ZIP   Code for a test program that uses MicroScroll
	                controls to implement a numeric spin button and to
	                add horizontal scrolling capabilities to a
	                single line edit control.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Muscroll.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To use MicroScroll effectively with the Dialog Editor that is shipped with the
	Microsoft Windows SDK version 3.0, you must first patch the Dialog Editor
	executable file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbCtrl kbSDKPlatform kbGrpDSUser kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
