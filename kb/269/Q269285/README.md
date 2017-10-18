---
layout: page
title: "Q269285: FTP Server Fails to Open Data Connection"
permalink: kb/269/Q269285/
---

## Q269285: FTP Server Fails to Open Data Connection

	Article: Q269285
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client requests and receives a file from an Internet Information Services
	(IIS) 5.0 FTP server, it issues an 'ABOR' command to close the connection. At
	that point, if the client immediately tries to request another file, the IIS FTP
	server fails to respond properly by setting up the new connection. Instead, it
	issues an unexpected "425 Can't Open Data Connection" error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version       Size    File name    Platform
	  ---------------------------------------------------------------
	  10/24/2000 10:15PM 5.0.2195.2559 117,008 Ftpsvc2.dll  Intel
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	(IIS) 5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	Additional query words: ftp 425
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
