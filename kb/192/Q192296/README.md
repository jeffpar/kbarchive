---
layout: page
title: "Q192296: Specially-Malformed GET Requests Can Create Denial of Service"
permalink: kb/192/Q192296/
---

## Q192296: Specially-Malformed GET Requests Can Create Denial of Service

	Article: Q192296
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specially-malformed GET requests can create a Denial of Service in the W3 server
	and use all available memory on the Web server, which causes Internet
	Information Server (IIS) to stop responding or generate an Access Violation
	error message.
	
	
	RESOLUTION
	==========
	
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix for IIS 4.0 should have the following file
	attributes or later:
	
	  Date      Time     Size    File Name     Platform
	  --------------------------------------------------
	  12/11/98  03:51p   327,472 asp.dll       (x86)
	  12/11/98  03:51p    11,168 ftpctrs2.dll  (x86)
	  12/11/98  03:51p    81,376 ftpsvc2.dll   (x86)
	  12/11/98  03:52p   154,288 inetmgr.dll   (x86)
	  12/11/98  03:50p    16,848 infoadmn.dll  (x86)
	  12/11/98  03:50p   184,192 infocomm.dll  (x86)
	  12/11/98  03:49p    47,936 isatq.dll     (x86)
	  12/11/98  03:50p    14,752 w3ctrs.dll    (x86)
	  12/11/98  03:50p   227,392 w3svc.dll     (x86)
	  12/11/98  03:50p    87,504 wam.dll       (x86)
	
	  12/11/98  03:57p   548,112 asp.dll       (Alpha)
	  12/11/98  03:56p    17,168 ftpctrs2.dll  (Alpha)
	  12/11/98  03:56p   126,224 ftpsvc2.dll   (Alpha)
	  12/11/98  03:58p   253,200 inetmgr.dll   (Alpha)
	  12/11/98  03:55p    25,872 infoadmn.dll  (Alpha)
	  12/11/98  03:55p   302,864 infocomm.dll  (Alpha)
	  12/11/98  03:54p    82,704 isatq.dll     (Alpha)
	  12/11/98  03:56p    21,264 w3ctrs.dll    (Alpha)
	  12/11/98  03:56p   381,200 w3svc.dll     (Alpha)
	  12/11/98  03:55p   149,264 wam.dll       (Alpha)
	
	The English version of this fix for IIS 3.0 should have the following file
	attributes or later:
	
	  Date      Time     Size    File Name     Platform
	  --------------------------------------------------
	  12/16/98  04:08p   130,320 Infocomm.dll  (x86)
	  12/16/98  04:10p   113,936 W3svc.dll     (x86)
	
	  12/16/98  04:08p   223,504 Infocomm.dll  (Alpha)
	  12/16/98  04:11p   171,280 W3svc.dll     (Alpha)
	
	
	The IIS 4.0 version of this hotfix has been posted to the following Internet
	location as Infget4i.exe (x86) and Infget4a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/Infget-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	The IIS 3.0 version of this hotfix must be installed over Windows NT 4.0, service
	pack 4, and has been posted to the following Internet location as Infget3i.exe
	(x86) and Infget3a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/Infget-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q260694 Description of the MaxClientRequestBuffer Registry Value
	
	  Q195734 WinNT 4.0 Post-Service Pack 4 Hotfixes Combined into One Package
	
	STATUS
	======
	
	This problem was corrected in Service Pack 5.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
