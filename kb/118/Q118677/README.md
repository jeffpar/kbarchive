---
layout: page
title: "Q118677: PC Gen: Bound Applications That Work with MMTA"
permalink: /kb/118/Q118677/
---

## Q118677: PC Gen: Bound Applications That Work with MMTA

{% raw %}

	Article: Q118677
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Message Transfer Agent (MTA) included with version 3.2 of
	Microsoft Mail for PC Networks is an MS-DOS application (it is a single tasking
	application). You can obtain a multitasking version that runs on OS/2. Updates
	to .DLLs and new executable files are released periodically to enhance the
	performance of the Mail product and to fix problems. All of the updates are
	bound applications and will run on MS-DOS or OS/2. This article lists the
	updates for the MTA function that can be used with the MMTA.
	
	NOTE: DISPATCH.EXE is not a bound application. There is a MS-DOS version and an
	OS/2 version.
	
	All the updates are bound applications except for the EXTERNAL.EXE file for OS/2
	(MMTA). You can obtain the Application Note WA0975 "Microsoft Mail EXTERNAL.EXE
	Update for OS/2 Mail Multitasking MTA" only from Microsoft Product Support
	Services.
	
	MORE INFORMATION
	================
	
	The following files are used during the Dispatch process. (For more information
	about the Dispatch program, see page 289 in the Microsoft Mail for PC Networks
	"Administrator's Guide"). Some of these files have been updated in version 3.2a;
	these files are also available separately on the Microsoft Download Center in
	the files listed below:
	
	  DirSync file   Updated file available in
	  --------------------------------------------------------
	  REQMAIN.EXE Mail 3.2a
	  SRVMAIN.EXE Mail 3.2a (or SRVUPD.EXE on the MSL)
	  REBUILD.EXE Mail 3.2a (or REBUPD.EXE on the MSL)
	  IMPORT.EXE  Mail 3.2a (or IMPUPD.EXE on the MSL)
	
	
	The following file is used for Schedule+ distribution:
	
	  Updated file   Updated file available in
	--------------------------------------------------------
	
	  Schdist.exe             Schdupd.exe on the Download Center
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Schdupd.exe now
	  (http://download.microsoft.com/download/splus10win/Update/1.0a.2/WIN/EN-US/Schdupd.exe)
	
	Schdupd.exe contains the following files:
	
	  Schdist.exe  (194,154 byte)
	  Readme.txt
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	
	For information on obtaining the Mail 3.2a update, query on the following word in
	the Microsoft Knowledge Base:
	
	  mailupd
	
	Additional query words: 3.20 single tasking
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
