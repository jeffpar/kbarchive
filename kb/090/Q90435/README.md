---
layout: page
title: "Q90435: FILE: Windows Setup Toolkit Tutorial Available for Download"
permalink: /kb/090/Q90435/
---

## Q90435: FILE: Windows Setup Toolkit Tutorial Available for Download

{% raw %}

	Article: Q90435
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Setup Toolkit, included with version 3.1 of the Microsoft Windows
	Software Development Kit (SDK), is documented in the "Setup Toolkit for Windows"
	manual, also included with the SDK. Although this book provides a great deal of
	reference information about the setup tools, it does not provide a tutorial that
	explains how to use the tools.
	
	SETTLKIT contains a text file that describes using the Setup Toolkit and a set of
	exercises that build a simple set of installation disks.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Settlkit.exe
	  (http://download.microsoft.com/download/win31/demo/1/W31/EN-US/SETTLKIT.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The SETTLKIT document demonstrates the basic use of the Microsoft Setup Toolkit,
	provided with version 3.1 of the Windows SDK. The Setup Toolkit is a collection
	of tools and programs designed to build a "setup" disk--that is, a floppy disk
	(or group of disks) that install one or more files onto a client's computer
	system.
	
	Because the Setup program itself runs in the Windows environment, the Toolkit is
	aimed primarily at building installation disks for applications for the Windows
	environment. The Toolkit contains features that allow the setup disks to copy
	software and other data files to the target disk, create groups and program
	items in the Windows Program Manager, and create or modify profile (.INI) files.
	The tutorial does not discuss all of these features; it focuses on using the
	Setup disk layout tools and on creating a "basic" setup disk.
	
	The tutorial discusses the following topics:
	
	- Selecting the files to install on the target system.
	
	- Including the required Toolkit files on the installation disks.
	
	- Creating the required directory structure on the target disk.
	
	- Controlling file compression and decompression.
	
	- Using the Dsklayt and Dsklayt2 utilities in the Setup Toolkit.
	
	The tutorial uses the sample script file from the Toolkit (with minor
	modifications). The tutorial is designed to provide a "feel" for the
	capabilities of the Toolkit. To create an installation program for a real
	product, additional information is required.
	
	Additional query words: MSSetup tool kit softlib SETTLKIT.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
