---
layout: page
title: "Q35708: Raw.exe Sends Binary Data to Printer w/Device Driver"
permalink: kb/035/Q35708/
---

## Q35708: Raw.exe Sends Binary Data to Printer w/Device Driver

	Article: Q35708
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows environment, device ports are a scarce resource that
	are shared by all applications running in the system. If an application is
	designed to send raw, unformatted data to a device port, it should use the
	Windows Print Spooler to ensure that two or more applications do not use the
	port at once.
	
	MORE INFORMATION
	================
	
	The best method to implement this functionality is by means of a device driver
	through which an application can pass data to the port without change. Raw.exe
	is a file in the Microsoft Download Center that contains the source code to a
	device driver that implements the PASSTHROUGH escape function. The RAW printer
	driver is intended as a sample driver and has not been designed to be
	distributed as part of a commercial application.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Raw.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Earlier versions of the RAW driver were incompatible with Adobe Type Manager
	(ATM) because ATM requires a printer driver to return a nonzero value when the
	driver processes the RealizeObject function. The current version of RAW has been
	updated to be compatible with ATM.
	
	Additional query words: print log
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
