---
layout: page
title: "Q51739: DevMode.exe Changes Printer Parameters from Application"
permalink: kb/051/Q51739/
---

## Q51739: DevMode.exe Changes Printer Parameters from Application

	Article: Q51739
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 _IK kbSDKWin16
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For an application to use the printer most effectively, sometimes it is
	necessary for the user to modify the printer settings. To accomplish this, an
	application can activate the settings dialog box for the printer driver of the
	currently selected printer.
	
	DEVMODE demonstrates how this may be done. Three steps are required:
	
	1. Load the printer driver.
	
	2. Get the procedure address of the "DEVICEMODE" procedure exported by the
	  driver.
	
	3. Call the procedure through the procedure address.
	
	The settings dialog box is responsible for obtaining any information from the
	user and for saving any changes in the appropriate ini file.
	
	Chapter 17 of the "Microsoft Windows Software Development Kit Guide to
	Programming" provides additional information on this procedure.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DevMode.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
