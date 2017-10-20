---
layout: page
title: "Q129164: Updated NET.EXE Corrects Basic Redirector Truncating Problem"
permalink: /kb/129/Q129164/
---

## Q129164: Updated NET.EXE Corrects Basic Redirector Truncating Problem

{% raw %}

	Article: Q129164
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): kbfile kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	3.11
	
	WINDOWS
	
	kbnetwork kbfile kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Workgroup Add-On for MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The application you are using may not write data to a network server correctly.
	For example, the new data begins at an offset of "f_size" and the first "f_size"
	bytes are replaced with zeroes.
	
	CAUSE
	=====
	
	This problem can occur when all of the following conditions are met:
	
	- You use the basic redirector from Windows for Workgroups 3.11 or Workgroup
	  Add-On for MS-DOS 3.11.
	
	- The file is opened with TRUNCATE or CREATE options.
	
	- SH_DENYRW share mode is set.
	
	- The file already exists.
	
	- The file size is equal to f_size.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any one of the following methods:
	
	- Use the Windows for Workgroups 3.11 or Workgroup Add-On for MS-DOS 3.11 full
	  redirector.
	
	- Use the Windows for Workgroups 3.11 protected-mode redirector.
	
	- An updated NET.EXE file is available to correct this problem. Replace the
	  existing NET.EXE, NET.MSG, and NETH.MSG files with the updated versions. For
	  information about how to obtain the updated drivers, refer to the "More
	  Information" section below.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Nnet.exe now
	  (http://download.microsoft.com/download/wfw311/Update/1/WIN/EN-US/nnet.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 3.11 redir vredir
	
	======================================================================
	Keywords          : kbfile kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
