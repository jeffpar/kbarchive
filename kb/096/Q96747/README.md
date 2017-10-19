---
layout: page
title: "Q96747: PC Win: Mail for Windows VFORMS.DLL 3.2.0.4064 Update"
permalink: /kb/096/Q96747/
---

## Q96747: PC Win: Mail for Windows VFORMS.DLL 3.2.0.4064 Update

	Article: Q96747
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the VFORMS.DLL file that is included with
	versions 3.0b and 3.2 of Microsoft Mail for PC Networks.
	
	For complete information about obtaining and installing the VFORMS.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your VFORMS.DLL file
	
	MORE INFORMATION
	================
	
	This update contains VFORMS.DLL, a replacement for the VFORMS.DLL file that is
	included with versions 3.0b and 3.2 of Microsoft Mail for Windows. This
	replacement file provides additional enhancements to the original VFORMS.DLL,
	resolving the following two problems that can occur when attachments are
	launched using version 3.0 of Microsoft Mail for Windows:
	
	- When you attempt to launch attachments that do not have an extension, an
	  error occurs when you hold down the ALT key and double-click the mouse button
	  to load the attachment in Notepad.
	
	- When you attempt to launch MACBINARY attachments, Mail for Windows changes
	  the name of the file being launched if that filename is less than eight
	  characters in length.
	
	This replacement file also resolves the following problems that can occur when
	you use version 3.0b or 3.2 of Microsoft Mail for Windows:
	
	- When you open a MAPI Send note through a Windows-based application (for
	  example, Microsoft Word or Microsoft Excel) and the application is launched
	  again via Mail, the application is brought to the front, but the Send note is
	  left in the background. If the application is running full screen, the
	  computer hangs because the active window (the Send note) will accept any
	  keystrokes; however, it is hidden by the full-screen application.
	
	To Download the Updated File
	----------------------------
	
	The following self-extracting file is available for download from the Microsoft
	Software Library:
	
	  Vformupd.exe
	  (http://support.microsoft.com/download/support/mslfiles/Vformupd.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	
	After you download VFORMUPD.EXE to a clean directory, run it (by typing
	"vformupd" (without the quotation marks) at the MS-DOS prompt) to extract the
	contents of the file. You should receive the following files:
	
	  VFORMS.DLL (143,552 bytes, dated 01-28-94, 2:56 P.M.)
	  README.TXT
	
	To replace your VFORMS.DLL file
	-------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\vforms.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting VFORMUPD.EXE file and <destination> is the drive and
	  directory where your VFORMS.DLL file currently resides. This directory should
	  also contain the Microsoft Mail for Windows SETUP.EXE program. For example,
	  if you ran the self-extracting file from the TEST directory on drive D, and
	  your VFORMS.DLL file is located in the MAILEXE directory on drive C, type the
	  following command:
	
	  " copy d:\test\vforms.dll c:\mailexe " (without the quotation marks)
	
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
	
	  1, vforms.dll,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  142960,,,, 3.2.0.4027 ,
	
	  with:
	
	  1, vforms.dll,,,, 1994-01-28, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  143552,,,, 3.2.0.4064 ,
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	Note that this article is referred to by the w_mail articles "PC Win: Attached
	MAC Filenames Convert to Windows Incorrectly," Q115165. If you modify or delete
	this article, please make corresponding changes in that article.
	
	Note that this article is referred to by the SCHEDPLUS article "PC WSPlus: Timex
	Data Link Error - Cannot Find VFORMS.DLL" Q128578. If you modify or delete this
	article, please make corresponding changes in that article.
	
	Additional query words: 3.00b 3.20 wga
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
