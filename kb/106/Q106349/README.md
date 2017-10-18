---
layout: page
title: "Q106349: PC WRmt: AT&amp;T Access Plus Folder Conversion Utility"
permalink: kb/106/Q106349/
---

## Q106349: PC WRmt: AT&amp;T Access Plus Folder Conversion Utility

	Article: Q106349
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
	
	Microsoft provides an AT&T Access Plus Folder Conversion utility,
	ATTIMP.EXE, for use with version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the ATTIMP.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To install your ATTIMP.EXE file
	
	MORE INFORMATION
	================
	
	The ATTIMP.EXE utility imports mail folders created by the AT&T Access Plus
	products to the Mail message file (MMF) used by Microsoft Mail Remote for
	Windows. You should use this utility only with the AT&T Mail driver. If you
	try to use it with any other driver, you will receive the following error:
	
	  You are not using the AT&T Mail driver. Use the Mail System Selector to
	  select AT&T Mail as the current driver and try again.
	
	For more information about using the Mail System Selector, see the Microsoft Mail
	Remote for Windows "User's Guide."
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Attimp.exe now
	  (http://download.microsoft.com/download/mail35pcnet/Utility/1/W97/EN-US/Attimp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download ATTIMP.EXE to a clean directory, run it (by typing "attimp"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  ATTIMP.EXE (17,808 bytes, dated 06-09-93, 10:29 A.M.)
	  README.TXT
	
	To install your ATTIMP.EXE file
	-------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\attimp.exe <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting ATTIMP.EXE file and <destination> is the drive and directory
	  where your ATTIMP.EXE file currently resides. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and you want to copy
	  ATTIMP.EXE to the MSMAIL directory on drive C, type the following command:
	
	  " copy d:\test\attimp.exe c:\msmail " (without the quotation marks)
	
	2. In the Windows Program Manager, create an AT&T Folder Conversion icon
	  with the following properties:
	
	    -------------------------------------------------
	    |            Program Item Properties            |
	    -------------------------------------------------
	    |  Description          AT&T Folder Conversion  |
	    |                                               |
	    |  Command Line:     C:\MSMAIL\ATTIMP.EXE       |
	    |                                               |
	    |  Working Directory:                           |
	    |                                               |
	    |  Shortcut Key:     None                       |
	    |                                               |
	    -------------------------------------------------
	
	3. Before you run ATTIMP.EXE, use the Microsoft Mail Selector to make sure that
	  the AT&T driver is the current mail driver and that the Access Plus OUT
	  folder is empty.
	
	4. To run ATTIMP.EXE, double-click the AT&T Folder Conversion icon created
	  in step 2.
	
	5. The ATTIMP.EXE utility will first prompt for the path to the Access Plus File
	  Cabinet. It expects to find a directory that contains IN, OUT, and SESSION
	  subdirectories. Except for the IN and WASTE folders, a folder with the same
	  name as the Access Plus folder will be created at the topmost level of the
	  private folders in the MMF. Messages will then be imported to the
	  corresponding folders (these messages are AT&T messages of type MSU, MSG,
	  MSS, MSR, and MSQ). If a folder with the same name already exists, Access
	  Plus messages will be added to it. The WASTE folder will not be imported and
	  messages in the IN folder will be imported into the Inbox folder.
	
	NOTES:
	
	- This utility does not import address directories, nor does it change the
	  personal address book (PAB).
	
	- If you run the utility twice on the same messages, duplicate messages will be
	  imported.
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
