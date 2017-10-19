---
layout: page
title: "Q241805: Combined FTP and Domain Restriction Security Patch for IIS 4.0"
permalink: /kb/241/Q241805/
---

## Q241805: Combined FTP and Domain Restriction Security Patch for IIS 4.0

	Article: Q241805
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbDSupport kbIIS kbiis400 kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following problems on your Microsoft
	Internet Information Server (IIS) 4.0:
	
	  Q241407 Files on an FTP Server can be Improperly Accessed
	
	  Q241562 IIS may Permit Clients with an Unresolved IP Address to Connect
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  09/16/99  12:40PM              322KB   asp.dll       x86
	  09/16/99  12:38PM              043KB   coadmin.dll   x86
	  09/16/99  12:39PM              011KB   ftpctrs2.dll  x86
	  09/16/99  12:39PM              080KB   ftpsvc2.dll   x86
	  09/16/99  11:49PM              012KB   httpext.h     x86
	  09/16/99  12:38PM              018KB   iisadmin.dll  x86
	  09/16/99  12:38PM              062KB   iislog.dll    x86
	  09/16/99  12:38PM              017KB   infoadmn.dll  x86
	  09/16/99  12:38PM              181KB   infocomm.dll  x86
	  09/16/99  12:38PM              029KB   iscomlog.dll  x86
	  09/16/99  12:39PM              011KB   iwrps.dll     x86
	  09/16/99  12:37PM              070KB   metadata.dll  x86
	  09/16/99  12:38PM              051KB   nsepm.dll     x86
	  09/16/99  12:39PM              015KB   w3ctrs.dll    x86
	  09/16/99  12:39PM              224KB   w3svc.dll     x86
	  09/16/99  12:38PM              086KB   wam.dll       x86
	
	  09/16/99  03:40PM              537KB   asp.dll       alpha
	  09/16/99  03:38PM              076KB   coadmin.dll   alpha
	  09/16/99  03:39PM              017KB   ftpctrs2.dll  alpha
	  09/16/99  03:40PM              124KB   ftpsvc2.dll   alpha
	  09/16/99  03:40PM              028KB   iisadmin.dll  alpha
	  09/16/99  03:40PM              110KB   iislog.dll    alpha
	  09/16/99  03:40PM              026KB   infoadmn.dll  alpha
	  09/16/99  03:40PM              181KB   infocomm.dll  alpha
	  09/16/99  03:40PM              297KB   iscomlog.dll  alpha
	  09/16/99  03:40PM              017KB   iwrps.dll     alpha
	  09/16/99  03:40PM              129KB   metadata.dll  alpha
	  09/16/99  03:40PM              051KB   nsepm.dll     alpha
	  09/16/99  03:40PM              021KB   w3ctrs.dll    alpha
	  09/16/99  03:40PM              377KB   w3svc.dll     alpha
	  09/16/99  03:40PM              146KB   wam.dll       alpha
	
	This hotfix has been posted to the following Internet location as Iprftp4i.exe
	(x86) and Iprftp4a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/IIS40/hotfixes-postSP6/security/IPRFTP-fix/
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For related information on this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: kbTSE400SRP security_patch
	
	======================================================================
	Keywords          : kbSecurity kbDSupport kbIIS kbiis400 kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
