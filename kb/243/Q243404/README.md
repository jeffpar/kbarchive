---
layout: page
title: "Q243404: Winobj.exe May Permit You to View Securable Jet500.dll Objects"
permalink: /kb/243/Q243404/
---

## Q243404: Winobj.exe May Permit You to View Securable Jet500.dll Objects

{% raw %}

	Article: Q243404
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcriticalkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following securable (event/semaphore/mutex) objects may exist on the system
	name space:
	
	- \BaseNamedObjects\Proc Count:* (semaphore)
	
	- \BaseNamedObjects\Collect:* (semaphore)
	
	- \BaseNamedObjects\New Proc:* (mutex)
	
	- \BaseNamedObjects\Access:* (mutex)
	
	- \BaseNamedObjects\Done:* (event)
	
	If these objects exist, they may be viewed by using Microsoft Object Viewer
	(Winobj.exe). In Windows NT 4.0 Service Pack 6a and earlier, these objects have
	NULL Access Control Lists (ACL), meaning that everyone has all access to these
	objects.
	
	CAUSE
	=====
	
	These objects are created and opened by Jet500.dll (the JET Engine .dll file)
	for synchronization purposes among instances of itself when they are loaded in
	different processes. Microsoft WINS and DHCP services use Jet500.dll.
	
	The Jet500.dll file described in the following article in the Microsoft Knowledge
	Base creates the aforementioned events, semaphores, and mutexs with an Access
	Control Element (ACE) for administrators:
	
	  Q244599 Fixes Required in TCSEC C2 Security Evaluation Configuration for
	  Windows NT 4.0 Service Pack 6a
	
	Specifically, only administrators (DOMAIN_ALIAS_RID_ADMINS) are given GENERIC_ALL
	access. Others do not have WRITE_DAC or WRITE_OWNER access.
	
	RESOLUTION
	==========
	
	The following files are available for download from the Microsoft Download
	Center or Microsoft's FTP site. Click the file names below to download the
	appropriate file:
	
	English:
	
	  x86:
	
	  Microsoft Download Center: DownloadDownload Q244599i.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/NT4/EN-US/Q244599i.exe)
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  Microsoft Download Center: DownloadDownload Q244599a.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/ALPHA/EN-US/Q244599a.exe)
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	French:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	Spanish:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Size   File name   Platform
	  ------------------------------------------------
	  10/13/1999  02:28p  458,512  Jet500.dll  x86
	  10/13/1999  02:26p  698,640  Jet500.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: c2 security_patch
	
	======================================================================
	Keywords          : kbgraphxlinkcritical kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
