---
layout: page
title: "Q106260: PC WSPlus: Adding Sharp Wizard Options"
permalink: /kb/106/Q106260/
---

## Q106260: PC WSPlus: Adding Sharp Wizard Options

{% raw %}

	Article: Q106260
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a file, WIZARD.DLL, that is required for exporting and
	importing Microsoft Schedule+ information to and from the Sharp Wizard.
	
	For complete information about obtaining and installing the WIZARD.DLL file, see
	the following sections:
	
	- To download the utility
	
	- To add the Sharp Wizard option
	
	MORE INFORMATION
	================
	
	To Download the Updated File
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Wizard.exe now
	  (http://download.microsoft.com/download/splus10win/Utility/1/WIN/EN-US/Wizard.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download WIZARD.EXE to a clean directory, run it (by typing "wizard" at
	the MS-DOS prompt) to extract the contents of the file. You should receive the
	following files:
	
	  WIZARD.DLL  (12,272 bytes, dated 10-05-92, 12:00 A.M.)
	  README.TXT
	
	To Add the Sharp Wizard Option to the Export File Format menu in Schedule+
	--------------------------------------------------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  copy <path>:\wizard.dll <destination>
	
	  where <path> is the drive and directory where you ran the self-
	  extracting WIZARD.EXE file and <destination> is the drive and directory
	  where you want the WIZARD.DLL file to reside. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and you want your
	  WIZARD.DLL file to be located in the WINDOWS directory on drive C, type the
	  following command:
	
	  copy a:\wizard.dll c:\windows
	
	2. Add the following lines to the SCHDPLUS.INI file residing in the WINDOWS
	  directory, then restart Schedule+.
	
	  [Microsoft Schedule+ Importers]
	  key1=C:\WINDOWS\WIZARD.DLL
	
	  [Microsoft Schedule+ Exporters]
	  key1=C:\WINDOWS\WIZARD.DLL
	
	Additional query words: schedule plus 1.00a wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	

{% endraw %}
