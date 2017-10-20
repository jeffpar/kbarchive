---
layout: page
title: "Q126228: CONN: LGTWGET and LMACGET Version 3.4.6 Update"
permalink: /kb/126/Q126228/
---

## Q126228: CONN: LGTWGET and LMACGET Version 3.4.6 Update

{% raw %}

	Article: Q126228
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides replacements for the LGTWGET.EXE and LMACGET.EXE program
	files that are included in version 3.2 of the Microsoft Mail Connection for PC
	and AppleTalk Networks.
	
	For complete information about obtaining and installing the LGTWGET and LMACGET
	program files, see the following sections:
	
	- To download the updated files
	
	- To update your LGTWGET.EXE and LMACGET.EXE
	
	MORE INFORMATION
	================
	
	This update contains the LGTWGET and LMACGET files, replacements for the LGTWGET
	and LMACGET program files included with version 3.2 of Microsoft Mail Connection
	for PC and AppleTalk Networks. This update resolves the following problem:
	
	- A message could get stuck in the Mail Connection Outbound Queue. Once this
	  message is stuck, the gateway tries to resend this numerous times. This
	  results in duplicate messages being transmitted and prevents other messages
	  from being sent across the gateway.
	
	
	  NOTE: To resolve this problem, two files must be updated: the LGTWGET.EXE file
	  (included in this update) and the LMACGET.EXE file (included in this update).
	
	To download the updated files
	-----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Getupd.exe now
	  (http://download.microsoft.com/download/mail35pcnet/Update/3.4.6/DOS/EN-US/Getupd.exe)
	
	Release Date: 08-11-94
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To update your LGTWGET.EXE and LMACGET.EXE files
	------------------------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER after each line
	
	  " copy <path>\lgtwget.exe <destination> " (without the quotation
	  marks)
	
	  " copy <path>\lmacget.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	GETUPD.EXE file and <destination> is the drive and directory where the
	LGTWGET.EXE and LMACGET.EXE files currently reside. For example, if you ran the
	self-extracting file from the TEST directory on drive D, and your two files are
	located in the MAILEXE directory on drive C, type the following commands:
	
	  " copy d:\test\lgtwget.exe c:\mailexe " (without the quotation marks)
	
	  " copy d:\test\lmacget.exe c:\mailexe " (without the quotation marks)
	
	NOTE: The LGTWGET.EXE and LMACGET.EXE files typically reside on the postoffice
	server in the Mail executables directory.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
