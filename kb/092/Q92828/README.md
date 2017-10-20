---
layout: page
title: "Q92828: Maintaining a Hidden Application"
permalink: /kb/092/Q92828/
---

## Q92828: Maintaining a Hidden Application

{% raw %}

	Article: Q92828
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HIDAPP is a sample DLL (dynamic-link library) that uses a hidden application to
	do file I/O for the DLL. Using this architecture, it is possible for multiple
	applications to link to the DLL and access the file through the DLL.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Hidapp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	It is often desirable to have a DLL open and manage a data file. This way, many
	applications can link to the DLL and access the file. Because all access is done
	through the DLL, there are no problems associated with having more than one
	application opening the file at the same time.
	
	Under Windows, DLLs cannot own files; only applications can. File handles are
	indices into the file table, which is stored in the task database. When a DLL
	opens a file, the application that called the DLL owns that file handle. If a
	DLL saves the file handle in a global variable and then later tries to use it
	when it is called by a different application, then that file handle will be
	invalid.
	
	This HIDAPP sample application discusses one way to work around this limitation.
	It consists of a DLL that uses a hidden application to access files for the DLL
	that act as a server. When the first instance of client application links to the
	DLL, the hidden application is executed and a data file is opened. The handle
	for this data file is owned by the hidden application. After this, other client
	applications may link to the DLL and call functions to add and retrieve records
	from the data file. When the last client application shuts down, the DLL closes
	the data file and shuts down the hidden application.
	
	Additional query words: 3.00 3.10 softlib HIDAPP.EXE kbFile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
