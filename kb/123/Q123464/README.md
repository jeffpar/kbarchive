---
layout: page
title: "Q123464: Obtaining Visual C++ 2.0 Run-Time Library Source Code"
permalink: /kb/123/Q123464/
---

## Q123464: Obtaining Visual C++ 2.0 Run-Time Library Source Code

{% raw %}

	Article: Q123464
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCRT kbVC kbVC200 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The source code for the C/C++ run-time library for Visual C++ version 2.0 is
	available to customers for informational and debugging purposes in a
	self-extracting file named Vc20ctrl.exe. This release is for the x86 platform
	only.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vc20crtl.exeDownload Vc20crtl.exe now
	  (http://download.microsoft.com/download/vc20/File/3/WIN98/EN-US/vc20crtl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	IMPORTANT: How to Extract the Source Code from Vc20ctrl.exe
	-----------------------------------------------------------
	
	Once you obtain Vc20crtl.exe, run it using the -D option to extract the source
	code and set up the correct directory structure:
	
	  Vc20ctrl.exe -D
	
	You need to use the -D option because Vc20ctrl.exe contains several hundred
	files. The -D option sets up the directory structure for the sources. If you do
	not use the -D option, you will run into problems attempting to build libraries
	from the source.
	
	You need approximately four megabytes of disk space to hold Vc20ctrl.exe and all
	the files it contains. You'll need over 20 megabytes of disk space to rebuild
	the run-time libraries from the source code. For more details on building the
	sources, as well as other notes, please refer to the README.TXT file included
	with the release.
	
	Additional query words: kbinf runtime kbfile CRT
	
	======================================================================
	Keywords          : kbfile kbSample kbCRT kbVC kbVC200 kbgraphxlinkcritical 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
