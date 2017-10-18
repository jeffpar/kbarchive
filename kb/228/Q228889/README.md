---
layout: page
title: "Q228889: Err Msg: &quot;NFS Login Failed&quot; When Connecting to NFS Share"
permalink: kb/228/Q228889/
---

## Q228889: Err Msg: &quot;NFS Login Failed&quot; When Connecting to NFS Share

	Article: Q228889
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Client for NFS component of Services for UNIX, whenever a
	user attempts to connect to a network file system (NFS) share the following
	error message is displayed:
	
	  NFS Login Failed
	
	CAUSE
	=====
	
	This behavior occurs because the user's NFS client credentials did not
	authenticate to the UNIX network information service (NIS) server or the
	personal computer network file system daemon (PCNFSD) server.
	
	RESOLUTION
	==========
	
	To resolve this issue, specify an existing NIS server and NIS domain, or specify
	a PCNFSD server that can positively validate the NFS user and password
	credentials in the Client for NFS configuration. If no NIS or PCNFSD server
	exists, the client uses the Nobody/Nobody (-2/-1) UID/GID NFS credentials.
	
	To disable the NFS login confirmation dialog box:
	
	1. In the Client for NFS Configuration dialog box, click the Authentication tab.
	
	2. Clear the following check boxes:
	
	   - "Authenticate at System Logon"
	
	   - "Display this Dialog on Connect"
	
	   - "Display Confirmation"
	
	Additional query words: SFU
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix
	Version           : :; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
