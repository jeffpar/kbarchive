---
layout: page
title: "Q155255: IDC Queries to Access Fail from IIS 2.0"
permalink: kb/155/Q155255/
---

## Q155255: IDC Queries to Access Fail from IIS 2.0

	Article: Q155255
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbSample
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When issuing a query from Internet Information Server version (IIS) 2.0 using
	the Internet Database Connector (IDC) to an Access database using ODBC, the
	Internet Server services (WWW, FTP and Gopher) stop.
	
	Usually this is accompanied by a Dr. Watson error stating that Dr. Watson could
	not attach to the application, or you may see the following error in your
	browser:
	
	  The server returned an invalid or unrecognized response.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem with Microsoft Jet 3.0. A fix for
	the problem is available from the Microsoft resources listed below.
	
	For additional information about this update, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q143163 : PRA: Problems Running Microsoft Jet 3.0 on Windows NT 4.0
	
	If the Jet fix does not fix the problem, then you need to change the following
	registry entry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/Windows NT/CurrentVersion/Windows/ 
	
	Set AppInit_DLLs to "MSJT3032.DLL" and then restart Windows NT.
	
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	~ Msjtwng.exe
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 : How to Obtain Microsoft Support Files from Online Services
	
	To help customers obtain these files by means other than the World Wide Web, see
	the following article in the CROSSPRD rollup (use "S101" in WorkBench to bring
	up this article only):
	
	s101(Q119591)
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbSample 
	Technology        : kbiisSearch kbiis200
	Version           : :2.0
	
	=============================================================================
	
