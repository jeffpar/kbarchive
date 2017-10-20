---
layout: page
title: "Q80887: Chgaccl.exe Switches Between Accelerator Tables in App"
permalink: /kb/080/Q80887/
---

## Q80887: Chgaccl.exe Switches Between Accelerator Tables in App

{% raw %}

	Article: Q80887
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbInput kbKeyAccel kbOSWin2000 kbGrpDSUser kbOSWin310 kbOSWin300 kbAcce
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, it is useful to change the accelerator keys that are assigned to
	menu items in an application. Chgaccl.exe is a sample in the Microsoft Download
	Center that demonstrates how to change the accelerators by loading a different
	accelerator table from the RC file and modifying the text of menu items.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Chgaccl.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Chgaccl.exe has two accelerator tables defined in the .RC file and a menu item
	that allows the user to "swap" accelerator tables. When the user chooses to swap
	the accelerators, the application loads the second accelerator table and
	modifies the menu to reflect the changes in the accelerators. The user can swap
	back to the original accelerator table by choosing swap accelerators from the
	menu a second time.
	
	Dynaccel.exe is a second sample in the Microsoft Download Center that
	demonstrates how to build an accelerator table as part of an application. For
	additional information about Dynaccel.exe, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q75738 SAMPLE: Dynaccel.exe Creates Accelerator Tables Dynamically
	
	NOTE: Two (or more) instances of the application can be running, using different
	accelerators for each instance.
	
	Chgaccl.exe also uses specific GDI functions to properly draw shapes in the
	client area of the window. Each time the user chooses a new shape from the menu,
	the client area device context is reset to properly define the window's
	background color, pen color, mapping mode, and compression factors.
	
	Additional query words: Chgaccl
	
	======================================================================
	Keywords          : kbfile kbsample kbInput kbKeyAccel kbOSWin2000 kbGrpDSUser kbOSWin310 kbOSWin300 kbAcceleratorKey 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
