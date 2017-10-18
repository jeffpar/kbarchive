---
layout: page
title: "Q207523: Error Occurs During SSL Connection"
permalink: kb/207/Q207523/
---

## Q207523: Error Occurs During SSL Connection

	Article: Q207523
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Explorer Plus 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to an IIS Web site using an SSL connection, one of
	the following symptoms occurs, depending on the browser being used:
	
	- In Internet Explorer, the following error message occurs:
	
	  Internet Explorer could not open the Internet site: <URL>
	  The data area passed to a system call is too small.
	
	- Netscape Communicator stops responding when you attempt to make the
	  connection.
	
	CAUSE
	=====
	
	The browser is trying to use a 128-bit session key, but the Web server is set up
	to use a 40-bit key.
	
	RESOLUTION
	==========
	
	NOTE: Due to export restrictions, the 128-bit key strength encryption feature is
	available only in the United States and Canada.
	
	To resolve this problem, install the 128-bit version of the latest Windows NT 4.0
	Service Pack (SP). This will enable the Web server to create 128-bit
	connections.
	
	Installing the 128-bit version of the Windows NT SP updates the Schannel.dll
	file, which is used by IIS to create SSL connections.
	
	MORE INFORMATION
	================
	
	For information about obtaining the latest Service Pack, go to the Windows NT
	Server Service Packs Web site at the following site:
	
	  http://support.microsoft.com/Support/NTServer/Content/ServicePacks/
	
	For more information about setting encryption strength, copy the following URL to
	your browser:
	
	  http://localhost/iishelp/iis/htm/core/iistesc.htm
	
	For information on how to determine the security strength that IIS is using, see
	the following article in the Microsoft Knowledge Base:
	
	  Q184311 Remote Key Request Generation Affected by Schannel.dll
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: schannel.dll 40 128 128bit 40bit security hangs freezes quits north america akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbIEPlus400
	Version           : WINDOWS:4.0; winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
