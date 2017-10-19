---
layout: page
title: "Q156753: How to Determine Domestic/International Version of IIS"
permalink: /kb/156/Q156753/
---

## Q156753: How to Determine Domestic/International Version of IIS

	Article: Q156753
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine whether you have the domestic or international version of Internet
	Information Server (IIS), you can view the version information of the Secure
	Sockets Layer (SSL) security provider file.
	
	MORE INFORMATION
	================
	
	The domestic versions of IIS provide a higher level of data encryption than the
	international versions and are restricted from export. In IIS 1.0, the SSL
	provider file is Sslsspi.dll; in IIS 2.0 it is the Schannel.dll file. These
	files are located in the %Systemroot%\System32 directory.
	
	To view the version information under Windows NT 3.51:
	
	1. Open File Manager.
	
	2. Select the appropriate .dll file in File Manager.
	
	3. Press ALT+ENTER.
	
	4. Select File Information.
	
	To View the version information under Windows NT 4.0:
	
	1. Right-click the appropriate .dll file.
	
	2. Click Properties.
	
	3. Select Version.
	
	The domestic version will read SSL Security Provider (Domestic Use Only); the
	international version simply reads "SSL Security Provider."
	
	Additional query words: encryption level
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : :1.0,2.0
	
	=============================================================================
	
