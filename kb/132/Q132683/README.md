---
layout: page
title: "Q132683: PC WSPlus: Schdplus.exe Version 1.0.4003 Update"
permalink: /kb/132/Q132683/
---

## Q132683: PC WSPlus: Schdplus.exe Version 1.0.4003 Update

{% raw %}

	Article: Q132683
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the Schdplus.exe file that is included with
	version 1.0 of Microsoft Schedule+ for Windows.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Schdplus.exe now
	  (http://download.microsoft.com/download/splus10win/Update/1/WIN/EN-US/Schdplus.exe)
	
	  DownloadDownload Schedupd.exe now
	  (http://download.microsoft.com/download/splus10win/Update/1.0.4003/WIN/EN-US/Schedupd.exe)
	
	Release Date: Nov-17-1995
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	This update contains Schdplus.exe, a replacement file for the Schdplus.exe file
	included in version 1.0 of Microsoft Schedule+ for Windows. This update includes
	the following modification:
	
	When you open and print from an archived Microsoft Schedule+ for Windows file,
	the Notes section may not print, even though there are notes in this section. No
	error messages are generated.
	
	
	NOTE: You will be able to print correctly from active Schedule+ files. After you
	download Schedupd.exe to a new folder, run it by typing "schedupd" (without the
	quotation marks) at the MS-DOS prompt to extract the contents of the file.
	
	To Update Your Schdplus.exe File
	--------------------------------
	
	At the MS-DOS prompt, type the following and press ENTER
	
	  copy <path>:\schdplus.exe <destination>
	
	where <path> is the drive and folder where you ran the self- extracting
	Schedupd.exe file and <destination> is the drive and folder where your
	Schdplus.exe file currently resides.
	
	For example, if you ran the self-extracting file from the Test folder on drive D,
	and your Schdplus.exe file is located in the Schedule folder on drive C, type
	the following command:
	
	  copy d:\test\schdplus.exe c:\schedule
	
	Additional query words: schedule plus 1.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
