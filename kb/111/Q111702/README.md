---
layout: page
title: "Q111702: PC WRmt: Mail Remote MAILDRV.EXE 3.2.0.4002 Update"
permalink: kb/111/Q111702/
---

## Q111702: PC WRmt: Mail Remote MAILDRV.EXE 3.2.0.4002 Update

	Article: Q111702
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MAILDRV.EXE file that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MAILDRV.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MAILDRV.EXE file
	
	MORE INFORMATION
	================
	
	This update contains MAILDRV.EXE, a replacement for the MAILDRV.EXE file that is
	included with version 3.2 of Microsoft Mail Remote for Windows. This update
	includes the following modification:
	
	- When Microsoft Mail Selector (MAILDRV.EXE) loads a driver after EFAX has been
	  activated, the driver does not become EFAX aware. Therefore, when EFAX is
	  activated, the provider section for the EFAX driver is removed from the
	  MSMAIL.INI file in the Windows directory. This updated version of the Mail
	  Selector (MAILDRV.EXE) makes all the drivers EFAX aware. This ensures that
	  when the driver is installed, the EFAX driver is not removed.
	
	  NOTE: Because MAILDRV.EXE looks at the EFAX software, this version of
	  MAILDRV.EXE should be installed ONLY on machines running version 3.11 of
	  Microsoft Windows for Workgroups.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mdrvupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/13/DOS/EN-US/Mdrvupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MDRVUPD.EXE to a clean directory, run it (by typing "mdrvupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MAILDRV.EXE (23,952 bytes, dated 10-20-93, 3:58 P.M.)
	  README.TXT
	
	To update your MAILDRV.EXE file
	-------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\maildrv.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	MDRVUPD.EXE file and <destination> is the drive and directory where your
	MAILDRV.EXE file currently resides. For example, if you ran the self-extracting
	file from the TEST directory on drive D, and your MAILDRV.EXE file is located in
	the MSMAIL directory on drive C, type the following command:
	
	  " copy d:\test\maildrv.exe c:\msmail " (without the quotation marks)3.20 wga
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
