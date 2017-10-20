---
layout: page
title: "Q111557: PC Win: Mail for Windows MSMAIL.EXE 3.20.4085 Update"
permalink: /kb/111/Q111557/
---

## Q111557: PC Win: Mail for Windows MSMAIL.EXE 3.20.4085 Update

{% raw %}

	Article: Q111557
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MSMAIL.EXE file that is included with
	versions 3.0b and 3.2 of Microsoft Mail for Windows.
	
	For complete information about obtaining and installing the MSMAIL.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To replace your MSMAIL.EXE file
	
	MORE INFORMATION
	================
	
	This update contains the MSMAIL.EXE file, a replacement for the MSMAIL.EXE file
	that is included with versions 3.0b and 3.2 of Microsoft Mail for Windows. This
	resolves the following problems:
	
	- When an open custom message is deleted from a shared folder, the message
	  header still appears in the folder. Trying to open the message again results
	  in the error
	
	  The message cannot be accessed.
	
	- You cannot do a Reply, Reply All, or Forward on a custom message that is
	  located in a shared folder.
	
	  NOTE: For this problem to be resolved, two files must be updated: the
	  MSMAIL.EXE file (included in this update) and the MAPI.DLL file (update
	  included in MAPIUPD.EXE on the MSL).
	
	- An error is now generated when the ACCESS.GLB file is locked open and a user
	  attempts to change his or her password.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mailupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/11/DOS/EN-US/Mailupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MAILUPD.EXE to a clean directory, run it (by typing "mailupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MSMAIL.EXE (300,560 bytes, dated 04-15-95, 9:24 P.M.)
	  README.TXT
	
	To replace your MSMAIL.EXE file
	-------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\msmail.exe <destination>" (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting MAILUPD.EXE file and <destination> is the drive and
	  directory where your MSMAIL.EXE file currently resides. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  MSMAIL.EXE file is located in the MAILEXE directory on drive C, type the
	  following command:
	
	  " copy d:\test\msmail.exe c:\mailexe" (without the quotation marks)
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old" (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old" (without the quotation
	  marks)
	
	3. Using any text editor, edit the SETUP.INF file. In the [MsMail Prog] section,
	  replace the following line
	
	  "00" = 1, msmail.exe,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY,,,,,,
	  299904,,,, 3.2.0.4027,
	
	  with:
	
	  " "00" = 1, msmail.exe,,,, 1995-04-05, !DECOMPRESS,, OLDER, !READONLY,,,,,,
	  300560,,,, 3.2.0.4085," (without the quotation marks)
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	Additional query words: 3.00b 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	

{% endraw %}
