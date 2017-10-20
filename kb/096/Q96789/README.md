---
layout: page
title: "Q96789: Windows Code Module to Delete Files"
permalink: /kb/096/Q96789/
---

## Q96789: Windows Code Module to Delete Files

{% raw %}

	Article: Q96789
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DELTEST sample contains a complete code module to delete one or more files
	by using wildcards. The sample also demonstrates how to use wildcards to search
	through an entire directory.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Deltest.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The C Run-time contains a function to delete one file, but does not allow a
	program to delete multiple files using wildcard characters. The DELETE.C module
	included with this sample can be used with any application or dynamic-link
	library (DLL) to perform this operation. This module uses the
	_dos_findfirst/next functions in conjunction with the remove() function to allow
	multiple files to be erased.
	
	NOTE: In the sample, if "Delete tmp Files" is selected from the menu, the two
	.TMP files included with the sample will be erased.
	
	For information on how to call the Delete() function, please refer to the comment
	block inside of DELETE.C.
	
	Additional query words: softlib DELTEST.EXE kbDSupport
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
