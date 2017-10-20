---
layout: page
title: "Q266062: VFP6 Sample: Distributes VFP 6.0 SP3 Run Time w/Active Document"
permalink: /kb/266/Q266062/
---

## Q266062: VFP6 Sample: Distributes VFP 6.0 SP3 Run Time w/Active Document

{% raw %}

	Article: Q266062
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbActiveDocs kbVS600sp3 kbGrpDSFox
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vfp6sp3r.exe consists of a .cab file that contains the Visual FoxPro 6.0 Service
	Pack 3 run-time library files that are necessary to run an Active Document
	application. Vfp6sp3r.exe also contains a sample HTML file that facilitates the
	automatic download of the run-time files through the use of the <OBJECT>
	tag.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vfp6sp3r.exe
	  (http://download.microsoft.com/download/vfox60/sample/6.0/win98/en-us/Vfp6sp3r.exe)
	
	Release Date: Jun-26-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Vfp6sp3r.exe file contains the following files:
	
	+------------------------+
	| File name    | Size    | 
	+------------------------+
	| Readme.txt   | 921 KB  | 
	+------------------------+
	| Vfp6sp3r.cab | 2.79 MB | 
	+------------------------+
	| Vfp6sp3r.htm | 341 KB  | 
	+------------------------+
	
	The Vfp6sp3.cab file and the Vfp6sp3r.htm file should be copied to a Web server.
	The Vfp6sp3r.htm needs be changed to reflect your Web server name. The line that
	needs to be changed is:
	
	  CODEBASE="http://WebServerName/Folder/vfp6sp3r.cab#Version=6,0,8492,0">
	
	Replace "WebServerName/Folder" with the correct information for your Web server.
	
	When you access this page with Microsoft Internet Explorer, the run-time download
	is initiated. Internet Explorer performs version checking, and only installs the
	run-time files if they are newer than the ones currently installed. It also
	installs the files if the run-time files have never been installed on the
	computer. It may be necessary for the computer to be rebooted after accessing
	this Web page if any files were replaced.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbActiveDocs kbVS600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
