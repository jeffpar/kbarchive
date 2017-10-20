---
layout: page
title: "Q103821: PC Win: Mail for Windows PABNSP.DLL 3.2.0.4046 Update"
permalink: /kb/103/Q103821/
---

## Q103821: PC Win: Mail for Windows PABNSP.DLL 3.2.0.4046 Update

{% raw %}

	Article: Q103821
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the PABNSP.DLL file that is included with
	versions 3.0b and 3.2 of Microsoft Mail for Windows.
	
	For complete information about obtaining and installing the PABNSP.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your PABNSP.DLL file
	
	MORE INFORMATION
	================
	
	This update contains PABNSP.DLL, a replacement for the PABNSP.DLL file that is
	included with versions 3.0b and 3.2 of Microsoft Mail for Windows. This
	replacement file provides additional enhancements to the original PABNSP.DLL
	file, correcting a problem where duplicate addresses are added to the Personal
	Address Book (PAB).
	
	NOTE: For this problem to be resolved, two DLL files must be updated: the
	PABNSP.DLL file (included in this update) and MSSFS.DLL version 3.2.0.4079
	(update included in MSSFS.EXE on the MSL).
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Pabnsp.exe now
	  (http://download.microsoft.com/download/pcmail/Update/16/WIN/EN-US/Pabnsp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download PABNSP.EXE to a clean directory, run it (by typing "pabnsp"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  PABNSP.DLL (44,656 bytes, dated 08-06-93, 5:37 P.M.)
	  README.TXT
	
	To update your PABNSP.DLL file
	------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\pabnsp.dll <destination>" (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting PABNSP.EXE file and <destination> is the drive and directory
	  where your PABNSP.DLL file currently resides. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and your PABNSP.DLL
	  file is located in the MAILEXE directory on drive C, type the following
	  command:
	
	  " copy d:\test\pabnsp.dll c:\mailexe" (without the quotation marks)
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old " (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old " (without the quotation
	  marks)
	
	3. Using any text editor, edit the SETUP.INF file. In the [MsMail System]
	  section, replace the following line
	
	  1, pabnsp.dll,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  44640,,,, 3.2.0.4027,
	
	  with:
	
	  1, pabnsp.dll,,,, 1993-08-06, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  44656,,,, 3.2.0.4046,
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	
	Additional query words: 3.00b 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	

{% endraw %}
