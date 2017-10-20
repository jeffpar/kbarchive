---
layout: page
title: "Q148740: PRB: Invalid Page Fault in Kernel32.dll Error"
permalink: /kb/148/Q148740/
---

## Q148740: PRB: Invalid Page Fault in Kernel32.dll Error

{% raw %}

	Article: Q148740
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbVBp400 kbGrpDSVB kb32bitOnly
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a code module containing a combination of single and double byte,
	the following error displays:
	
	  VB32 caused an Invalid Page Fault in module: Kernel32.dll at address:
	  0137:bff7
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft product listed at
	the beginning of this article. This issue was fixed in an updated version of
	Vba232.dll after Visual Basic 4.0 Far East was released.
	
	MORE INFORMATION
	================
	
	The latest release of Vba232.dll (version 2.00.6108) is Vba232a.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Vba232a.exe
	  (http://download.microsoft.com/download/access95/upd22/1/WIN98/EN-US/Vba232a.exe)
	
	The Vba232a.exe file contains the following files:
	
	  Vba232.dll   Version: 2.0.6108   Size:  1025 KB   Date: 3/08/96
	
	               The Visual Basic for Applications Development Environment
	
	  Readme.txt   The installation instructions for Vba232.dll
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Installation of Vba232.dll
	--------------------------
	
	After downloading Vba232a.exe, execute it in an empty directory to obtain the
	files it contains. Then copy the following file to the following location on top
	of the existing file by the same name. (This assumes that you have installed
	Microsoft Windows in the C:\WINDOWS directory.) For example:
	
	  VBA232.DLL -> C:\WINDOWS\SYSTEM\VBA232.DLL
	
	  -or-
	
	if you are using Microsoft Windows NT, copy the file into the SYSTEM32 directory:
	(This assumes that you have installed Microsoft Windows NT in the C:\NT35
	directory.)
	
	  VBA232.DLL -> C:\NT35\SYSTEM32\VBA232.DLL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbVBp400 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
