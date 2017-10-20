---
layout: page
title: "Q190771: FILE: Vfp6rt.exe Distributing Run-Time Files w/ Active Document"
permalink: /kb/190/Q190771/
---

## Q190771: FILE: Vfp6rt.exe Distributing Run-Time Files w/ Active Document

{% raw %}

	Article: Q190771
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vfp6rt.exe consists of a .cab file containing the Visual FoxPro run-time library
	files necessary to run an Active Document Application. Vfp6rt.exe also contains
	a sample HTML file that facilitates the automatic download of the run-time files
	through the use of the <OBJECT> tag.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vfp6rt.exe
	  (http://download.microsoft.com/download/vfox60/file3/1/W9X/EN-US/Vfp6rt.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Vfp6rt.cab file and the Vfp6rt.htm file should be copied to a Web server.
	When this page is accessed from Internet Explorer, the run-time download is
	initiated. Internet Explorer performs version checking, and only installs the
	run-time files if they are newer than the ones currently installed or it also
	installs the files if the run-time files have never been installed on the
	computer.
	
	Additional query words: kbActiveDocs kbVFp600 activedoc
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
