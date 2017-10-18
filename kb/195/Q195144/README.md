---
layout: page
title: "Q195144: Copying Files with Mix of LFN and SFN May Lead to Data Loss"
permalink: kb/195/Q195144/
---

## Q195144: Copying Files with Mix of LFN and SFN May Lead to Data Loss

	Article: Q195144
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix kbshell kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When files are copied from a source having a mixture of short filenames and long
	filenames, the copy operation may lead to lost files.
	
	This problem can happen when the copy operation is performed using any of the
	following programs:
	
	- COPY
	
	- XCOPY
	
	- Windows NT Explorer
	
	- Windows NT Backup
	
	CAUSE
	=====
	
	This problem happens when a file with a long filename is copied and a new short
	filename is generated for the file in the destination folder. If a file exists
	in the source folder and it has a name matching the newly generated short
	filename, this file will replace the first file and the content of the first
	file is lost. For example:
	
	  Source Directory :
	
	  C:\source> dir /x
	
	  08/21/98  02:03p        <DIR>                          .
	  08/21/98  02:03p        <DIR>                          ..
	  08/20/98  02:32p                     17                YXXXXX~1.XXX
	  08/20/98  02:32p                     7 YXXXXX~2.XXX    yxxxxxxxxx.xxx
	    4 File(s)              14 bytes
	
	  C:\source> copy *.* c:\dest
	  yxxxxxxxxx.xxx
	  YXXXXX~1.XXX
	       2 file(s) copied.
	
	  C:\source> dir c:\dest
	
	  09/15/98  09:27a        <DIR>                          .
	  09/15/98  09:27a        <DIR>                          ..
	  08/20/98  02:32p                     17 YXXXXX~1.XXX   yxxxxxxxxx.xxx
	    3 File(s)             17 bytes
	
	NOTE: The File yxxxxxxxxx.xxx gets copied first and the short filename generated
	for that is YXXXXX~1.XXX. When the copy program copies YXXXXX~1.XXX to the
	destination, it finds a match in file name and replaces the existing file with
	its contents.
	
	In NTBackup, if both the short named file, and the NTFS converted long file names
	are the same, you are prompted whether to replace the existing file or not.
	Overwriting the file may result in data loss as the file names will be the same
	but the contents will not be.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0 with Internet Explorer 4
	---------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT 4.0 without Internet Explorer 4
	------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows 2000 with Internet Explorer
	-----------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time      Version         Size        File name
	-------------------------------------------------------------
	5/11/2001   10:51a   5.0.3315.1000   2,337,552    Shell32.dll
	
	
	Windows 95 with Internet Explorer 4.0
	-------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size       File name      Platform
	  -------------------------------------------------------------
	  03/02/99  06:40p  1,431,264   Shell32.dll   (Windows 95)
	
	
	
	NOTE: The fixes mentioned above only fixes Windows NT Explorer initiated copies.
	The COPY/XCOPY behaviour is unchanged by design.
	
	WORKAROUND
	==========
	
	You can work around this problem by using the Windows NT Resource Kit utility,
	Robocopy, to copy the files.
	
	Windows NT Backup
	-----------------
	
	If the short file named files (for example, Drawg~12.dwg) are created by legacy
	applications and these applications cannot be upgraded, the following methods
	can be employed:
	
	- Use the FAT formatted partitions on Windows NT Servers for compatibility with
	  these applications and use share-level security.
	
	The following are less optimum workarounds but are mentioned here for
	convenience.
	
	- Disable the auto-generation of the short file names on NTFS volumes as per
	  the following article in the Microsoft Knowledge Base:
	
	  Q210638 How to Disable Automatic Short File Name Generation
	
	- Use different directories for long and short named files.
	
	
	STATUS
	======
	
	Windows NT
	----------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	Windows 2000
	------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbShell 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix kbshell kbWin2000sp3fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWin95search kbZNotKeyword3
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
