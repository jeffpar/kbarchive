---
layout: page
title: "Q81139: SAMPLE: BkGnd.exe Demonstrates Background Processing in Windows"
permalink: /kb/081/Q81139/
---

## Q81139: SAMPLE: BkGnd.exe Demonstrates Background Processing in Windows

{% raw %}

	Article: Q81139
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BkGnd.exe is a sample in the Microsoft Download Center that demonstrates how to
	use a PeekMessage() loop to perform background processing. There are often times
	when it is necessary for an application to execute a time consuming process such
	as printing, file I/O, and math calculations in the background. Doing so allows
	the Windows environment to continue to service other applications while
	completing a lengthy process.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  BkGnd.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The BKGND sample application uses the WaitMessage() function, which allows the
	application to "sleep" when the background process is complete. In the sample,
	the user determines when background processing starts and ends. In a production
	application, an application would probably determine when background processing
	was required.
	
	Additional query words: BkGnd
	
	======================================================================
	Keywords          : kbfile kbsample kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
