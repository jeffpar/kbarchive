---
layout: page
title: "Q251170: Malformed Argument in Hit-Highlighting Allows Access to Server"
permalink: /kb/251/Q251170/
---

## Q251170: Malformed Argument in Hit-Highlighting Allows Access to Server

{% raw %}

	Article: Q251170
	Product(s): Internet Information Server
	Version(s): 2.0,2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbProgramming kbWin2000PreSP1Fix kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On March 31, 2000, Microsoft re-released this patch to address a variant of this
	vulnerability. In addition to the information below, the latest variant, even
	after applying the original patch, could allow a malicious user to read the
	source of selected files on the server that normally get server-side processing
	(most notably, .ASP files). While the original vulnerability affects Windows NT
	4.0 and Windows 2000, this variant only affects Windows NT 4.0. You do not need
	to reapply the patch to Windows 2000-based computers.
	
	The ISAPI filter that implements the hit-highlighting (also known as "WebHits")
	functionality does not adequately constrain what files can be requested. If you
	provide a deliberately-malformed argument in a request to hit-highlight a
	document, it is possible to escape the virtual folder. This can allow someone
	without permissions to read any file residing on the same logical drive of the
	server that contains the Web Root folder. It does not allow anyone without
	permissions to add or modify files.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	This update is also part of the Windows 2000 Critical Update, February 17, 2000
	that is available on the Windows Update site. You can also download this
	critical update (for installation later or on a different computer) from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/downloads/critical/q253934/default.asp
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q251170_w2k_sp1_x86_en.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=17726)
	
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q252463i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=17727)
	
	  Alpha: DownloadDownload Q252463a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=17728)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version      Size     File name    Platform
	  ---------------------------------------------------------------
	  01/25/2000  10:07p  5.0.1781.3    193,296  Idq.dll      x86
	  01/25/2000  10:05p  5.0.1781.3    863,504  Query.dll    x86
	  03/27/2000  11:17a  5.0.1781.3     42,256  Webhits.dll  x86
	
	  01/25/2000  10:12p  5.0.1781.3    300,304  Idq.dll      Alpha
	  01/25/2000  10:11p  5.0.1781.3  1,952,528  Query.dll    Alpha
	  03/27/2000  11:15a  5.0.1781.3     79,120  Webhits.dll  Alpha
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	For more information, please see the security buletin information at:
	
	  http://www.microsoft.com/technet/Security/Bulletin/ms00-006.asp
	
	  Q252463 Index Server Error Message Reveals Physical Location of Web
	  Directories
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbProgramming kbWin2000PreSP1Fix kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIdxServSearch kbAudDeveloper kbWinAdvServSearch kbIdxServ200
	Version           : :2.0,2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
