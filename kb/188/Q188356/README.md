---
layout: page
title: "Q188356: DSMN Synchronization Problem Causes Application Event 8020"
permalink: /kb/188/Q188356/
---

## Q188356: DSMN Synchronization Problem Causes Application Event 8020

{% raw %}

	Article: Q188356
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When DSMN attempts to synchronize with a NetWare server, the following error may
	appear in Event Viewer:
	
	  Application Log
	  Event ID: 8020
	  Description:
	  The sync agent service failed to modify account <account name> on the
	  NetWare server <servername> due to error 53.
	
	CAUSE
	=====
	
	This event is logged in Event Viewer when DSMN attempts to synchronize with the
	NetWare server if a user has changed his password by using Setpass on the
	NetWare server and not through Windows NT. Changes made in this manner are not
	propagated back from the NetWare server to DSMN and the account cannot now be
	synchronized by DSMN.
	
	RESOLUTION
	==========
	
	Always change passwords using Windows NT.
	
	If password synchronization problems are caused by users rather than network
	(router) configuration issues, there are three corrective methods depending upon
	the number of user accounts affected:
	
	Few Users
	---------
	
	- Change the password back to the original password on the NetWare server.
	  Then, using DSMN Synchronization Manager, highlight the NetWare server being
	  managed, select NetWare Server, select Synchronize Selected Server. After the
	  synchronization is complete, change the password on Windows NT.
	
	- Remove the user account on the NetWare server. DSMN will then re-create the
	  account as part of the normal synchronization process. Change the password on
	  Windows NT.
	
	Many Users
	----------
	
	- Remove the NetWare server from DSMN management, and then add it back as a
	  managed server.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following Microsoft Knowledge Base
	articles:
	
	  ARTICLE-ID: Q154761
	  TITLE : DSMN How to Recover from a Loss of the Account Synchronization
	
	  ARTICLE-ID: Q154760
	  TITLE : How to Use the DSMN Utility to Verify Synchronized Passwords
	
	  ARTICLE-ID: Q148678
	  TITLE : How To Synchronize A NetWare Server Using DSMN
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
