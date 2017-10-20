---
layout: page
title: "Q111701: Microsoft Mail REBUILD.EXE 3.2.16 Update"
permalink: /kb/111/Q111701/
---

## Q111701: Microsoft Mail REBUILD.EXE 3.2.16 Update

{% raw %}

	Article: Q111701
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): kbfile kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the Rebuild program file that is included
	in versions 3.2 and 3.2a of Microsoft Mail for PC Networks.
	
	For complete information, see the following sections:
	
	- To download the updated file
	
	- To update your REBUILD.EXE file
	
	MORE INFORMATION
	================
	
	This update contains the Rebuild Mail program file (REBUILD.EXE), a replacement
	for the Rebuild program file that is included with versions 3.2 and 3.2a of
	Microsoft Mail for PC Networks. This update resolves the following problems:
	
	This replacement file corrects a problem that occurs on MS-DOS and Macintosh
	workstations when the GALNETPO.GLB file is regenerated while REBUILD.EXE is
	running.
	
	In certain conditions, Rebuild would complete its process without failing or
	returning errors. However, the global address list (GAL) would not contain all
	the expected names.
	
	
	If a network error occurred during the Rebuild process and Rebuild was unable to
	create or process a temporary file, an error would not be reported.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Rebupd.exe now
	  (http://download.microsoft.com/download/msmail/Patch/3.2/W9XNT4/EN-US/Rebupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Internet (anonymous FTP)
	
	- ftp ftp.microsoft.com
	
	- Change to the Softlib/Mslfiles folder.
	
	- Get REBUPD.EXE
	
	The Microsoft Network
	
	- On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	
	- Double-click the MS Software Library icon.
	
	- Find the appropriate product area.
	
	- Locate and Download REBUPD.EXE.
	
	
	Microsoft employees should connect to the CROSSPRD database.
	
	After you download REBUPD.EXE to a clean directory, run it (by typing "rebupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  REBUILD.EXE (85,987 bytes, dated 02-21-95, 4:54 P.M.)
	  README.TXT
	
	To update your REBUILD.EXE file
	-------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\rebuild.exe <destination> " (without the
	  quotation marks)
	
	where <drive> is the drive and directory where you ran the self- extracting
	REBUPD.EXE file and <destination> is the drive and directory where your
	REBUILD.EXE file currently resides. For example, if you ran the self-extracting
	file from the TEST directory on drive D, and your REBUILD.EXE file is located in
	the MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\rebuild.exe c:\mailexe " (without the quotation marks)
	
	NOTE: The REBUILD.EXE file typically resides on the postoffice server in the Mail
	executables directory as well as on the machine importing addresses into the
	database. Make sure you update all copies of REBUILD.EXE.
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbfile kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
