---
layout: page
title: "Q241407: Files on an FTP Server Can Be Improperly Accessed"
permalink: /kb/241/Q241407/
---

## Q241407: Files on an FTP Server Can Be Improperly Accessed

{% raw %}

	Article: Q241407
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the hotfix referenced in the following Microsoft Knowledge Base
	article, there is a possibility that files located on a Microsoft FTP server can
	be viewed and downloaded regardless of NTFS file or folder permissions.
	
	  Q237987 FTP GET Does Not Work Correctly on UNC Virtual Directories
	
	RESOLUTION
	==========
	
	If the aforementioned hotfix is applied to your IIS 4.0-based computer or if you
	have applied a hotfix with the version number of 0719 through 0722, it is
	recommended that you update your system with the security patch mentioned below.
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time      Size     File name     Platform
	  -----------------------------------------------------
	  09/16/99   12:40PM   322 KB   Asp.dll        x86
	  09/16/99   12:38PM    43 KB   Coadmin.dll    x86
	  09/16/99   12:39PM    11 KB   Ftpctrs2.dll   x86
	  09/16/99   12:39PM    80 KB   Ftpsvc2.dll    x86
	  09/16/99   11:49PM    12 KB   Httpext.h      x86
	  09/16/99   12:38PM    18 KB   Iisadmin.dll   x86
	  09/16/99   12:38PM    62 KB   Iislog.dll     x86
	  09/16/99   12:38PM    17 KB   Infoadmn.dll   x86
	  09/16/99   12:38PM   181 KB   Infocomm.dll   x86
	  09/16/99   12:38PM    29 KB   Iscomlog.dll   x86
	  09/16/99   12:39PM    11 KB   Iwrps.dll      x86
	  09/16/99   12:37PM    70 KB   Metadata.dll   x86
	  09/16/99   12:38PM    51 KB   Nsepm.dll      x86
	  09/16/99   12:39PM    15 KB   W3ctrs.dll     x86
	  09/16/99   12:39PM   224 KB   W3svc.dll      x86
	  09/16/99   12:38PM    86 KB   Wam.dll        x86
	
	  09/16/99   03:40PM   537 KB   Asp.dll        Alpha
	  09/16/99   03:38PM    76 KB   Coadmin.dll    Alpha
	  09/16/99   03:39PM    17 KB   Ftpctrs2.dll   Alpha
	  09/16/99   03:40PM   124 KB   Ftpsvc2.dll    Alpha
	  09/16/99   03:40PM    28 KB   Iisadmin.dll   Alpha
	  09/16/99   03:40PM   110 KB   Iislog.dll     Alpha
	  09/16/99   03:40PM    26 KB   Infoadmn.dll   Alpha
	  09/16/99   03:40PM   181 KB   Infocomm.dll   Alpha
	  09/16/99   03:40PM   297 KB   Iscomlog.dll   Alpha
	  09/16/99   03:40PM    17 KB   Iwrps.dll      Alpha
	  09/16/99   03:40PM   129 KB   Metadata.dll   Alpha
	  09/16/99   03:40PM    51 KB   Nsepm.dll      Alpha
	  09/16/99   03:40PM    21 KB   W3ctrs.dll     Alpha
	  09/16/99   03:40PM   377 KB   W3svc.dll      Alpha
	  09/16/99   03:40PM   146 KB   Wam.dll        Alpha
	
	This hotfix has been posted to the following Internet location as Iprftp4i.exe
	(x86) and Iprftp4a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/IIS40/hotfixes-postSP6/security/IPRFTP-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	To view the IIS build number installed on the affected computer, perform the
	following steps:
	
	1. Open Windows NT Explorer.
	
	2. Open the folder where Ftpsvc2.dll is located,
	  <SystemRoot&amp>\System32\Inetsrv.
	
	3. Right-click Ftpsvc2.dll.
	
	4. Locate the last four digits of the file version. That number is the build
	  number.
	
	NOTE: The hotfix file version should be 4.02.0724 or higher.
	
	For additional information about how to fix this problem in Internet Information
	Server version 4.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q242559 Files on an FTP Server Can Be Improperly Accessed
	
	For related information on this problem, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/security/bulletins/ms99-039.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
