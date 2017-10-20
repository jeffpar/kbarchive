---
layout: page
title: "Q188348: Specially-Malformed FTP Requests May Create Denial of Service"
permalink: /kb/188/Q188348/
---

## Q188348: Specially-Malformed FTP Requests May Create Denial of Service

{% raw %}

	Article: Q188348
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specially-malformed FTP requests may create a Denial of Service in the FTP
	service, which causes Internet Information Server (IIS) to stop responding and
	generate an Access Violation error message.
	
	
	RESOLUTION
	==========
	
	
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
	
	
	IIS 4.0
	-------
	
	The IIS 4.0 version of this hotfix must be installed over Windows NT 4.0 SP4. It
	has been posted to the following Internet location as Ftpls4i.exe (x86) and
	Ftpls4a.exe (Alpha):
	
	  US English:
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/ftpls-fix/
	
	  French:
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/frn/security/ftpls-fix/
	
	IIS 3.0
	-------
	
	The IIS 3.0 version of this hotfix must be installed over Windows NT 4.0 SP4. It
	has been posted to the following Internet location as Ftpls3i.exe (x86) and
	Ftpls3a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/ftpls-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 3.0 and 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 5.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
