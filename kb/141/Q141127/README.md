---
layout: page
title: "Q141127: SFS Post Office Shared Folders Not Available with MS Exchange"
permalink: /kb/141/Q141127/
---

## Q141127: SFS Post Office Shared Folders Not Available with MS Exchange

{% raw %}

	Article: Q141127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbtool win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange in Windows 95 to access any shared-file-
	system-based (SFS) post office, shared folders on the post office are not
	available.
	
	Examples of SFS post offices include the post offices created by Microsoft
	Windows for Workgroups 3.x, Windows 95, and Microsoft Mail3.x.
	
	CAUSE
	=====
	
	The Microsoft Exchange client in Windows 95 does not provide the ability to view
	shared folders on an SFS post office.
	
	RESOLUTION
	==========
	
	To view shared folders in Microsoft Exchange in Windows 95, perform the
	following steps:
	
	1. Download the Exupdusa.exe file from the Microsoft Software Library to an
	  empty folder.
	
	  NOTE: If you copy the file to your Windows\Desktop folder, be sure you delete
	  the following files from the Windows\Desktop folder after Exupdusa.exe is
	  installed: Exchgupg.inf, Exchng32.exe, Readme.txt, Mapi.dll, Mapi32.dll,
	  Msfs32.dll, Wgpoadmn.dll, and Wmsui32.dll.
	
	2. In My Computer or Windows Explorer, double-click the Exupdusa.exe file you
	  downloaded in step 1.
	
	3. Double-click the Readme.txt file for installation instructions.
	
	  NOTE: The Windows 95 Shared Folders Update Readme.txt file is also available
	  in the following article in the Microsoft Knowledge Base:
	
	  Q139706 Windows 95 Shared Folders Update Readme.txt File
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Exupdusa.exe now
	  (http://download.microsoft.com/download/pcmail/Update/3/W95/EN-US/exupdusa.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Note that Microsoft has also released this update as part of Microsoft Windows 95
	Service Pack 1. For information about Microsoft Windows 95 Service Pack 1,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	MORE INFORMATION
	================
	
	This feature was previously available as a downloadable file named Msfs32.exe.
	The Msfs32.exe file is no longer available. It has been replaced by the
	Exupdusa.exe file.
	
	
	Additional query words: servicepack1
	
	======================================================================
	Keywords          : kbfile kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
