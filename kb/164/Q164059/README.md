---
layout: page
title: "Q164059: IIS Execution File Text Can Be Viewed in Client"
permalink: /kb/164/Q164059/
---

## Q164059: IIS Execution File Text Can Be Viewed in Client

	Article: Q164059
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NOTE: On Sunday, February 23, 1997, Microsoft was alerted to a posting regarding
	an Internet Information Server (IIS) security exposure. This bug permits the
	publication of IIS executable files via a complicated string of commands sent
	from a web browser to an IIS server.
	
	Because of this security exposure, Internet users can view Active Server Pages
	(ASP), Internet Server API applications (ISAPI), Internet Database Connector
	(IDC) applications, or Common Gateway Interface (CGI) applications within an IIS
	publication installation.
	
	RESOLUTION
	==========
	
	Get the hotfix mentioned below.
	
	This hotfix has been posted to the following Internet location. You can download
	any of these self-extracting files from the following service:
	
	  Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the bussys/winnt/winnt-public/fixes/usa/ 
	  nt40/hotfixes-postSP2/iis-fix/ folder.
	  Get Readme.1st (for instructions on downloading and installing the
	  hotfix).
	
	Or use the following full URL on your client browser:
	
	  FTP://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/ 
	  nt40/hotfixes-postSP2/iis-fix/readme.1st
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 2.0 and 3.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	
	=============================================================================
	
