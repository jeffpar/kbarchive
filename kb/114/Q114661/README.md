---
layout: page
title: "Q114661: PC WSPlus: Schedule+ Splus.dll 1.00.4002 Update and SAL Files"
permalink: /kb/114/Q114661/
---

## Q114661: PC WSPlus: Schedule+ Splus.dll 1.00.4002 Update and SAL Files

{% raw %}

	Article: Q114661
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the file Splus.dll, that is included with
	version 1.0a of Microsoft Schedule+ Libraries, which can be found in version 3.2
	of the Microsoft Mail Software Development Kit.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Splus.exe now
	  (http://download.microsoft.com/download/splus10win/Updt1.0a/1/WIN/EN-US/Splus.exe)
	
	The following files are included:
	
	File Name         Description
	------------------------------
	Splus.dll         Dynamic-link library used for function calls.
	                 (84,240 bytes, dated 11-11-94, 11:01 A.M.)
	Splus.txt         Visual Basic declarations for the SAL functions.
	Readme.txt        General description of the Schedule+ Access Libraries.
	Splus-c.doc       Command reference for programming SAL using the Microsoft
	                 C programming language.
	Splus.h           Header file containing definitions for C.
	Splus-vb.doc      Command reference for programming SAL using the Microsoft
	                 Visual Basic programming language.
	Splus.bas         SAL functions for Visual Basic.
	Update.txt        Splus.dll update information.
	
	Release Date: May-09-1994
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	This update contains Splus.dll, a replacement for the Splus.dll file that is
	included with version 1.0 of Microsoft Schedule+ Libraries. This replacement
	file corrects the following problems:
	
	- If you have seven or more projects defined in Schedule+ and you use the
	  Schedule+ API to add a task to a project, a general- protection (GP) fault
	  occurs in Demilayr.dll.
	
	- Under certain conditions, if you try to add a task or appointment to another
	  user's .cal file without Create privileges, an application error or general
	  protection fault may occur. This problem has been fixed in Splus.dll version
	  1.00.4002.
	
	This update also contains information on the Schedule+ Access Libraries (SAL).
	The SAL allow users to develop applications that manipulate Schedule+
	appointments and tasks and exchange meeting messages among Schedule+ users.
	Portions of the libraries require Simple Messaging Applications Programming
	Interface (MAPI).
	
	
	To Update your Splus.dll File
	-----------------------------
	
	1. After you download Splus.exe to a new folder, type "splus" (without the
	  quotation marks) at the MS-DOS prompt to extract the contents of the file.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  copy <path>:\splus.dll <destination>
	
	where <path> is the drive and folder where you ran the self-extracting
	Splus.exe file, and <destination> is the drive and folder where your
	Splus.dll file currently resides.
	
	For example, if you ran the self-extracting file from the Test folder on drive D,
	and your Splus.dll file is located in the System folder on drive C, type the
	following command:
	
	  copy d:\test\splus.dll c:\windows\system
	
	Additional query words: schedule plus 1.00a
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	

{% endraw %}
