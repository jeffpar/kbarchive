---
layout: page
title: "Q297519: Server App Err Msg: &quot;The server failed to load application...&quot;"
permalink: /kb/297/Q297519/
---

## Q297519: Server App Err Msg: &quot;The server failed to load application...&quot;

	Article: Q297519
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse the Active Server Pages (ASP) content of an Internet
	Information Services (IIS) version 5.0 Web server, you may receive the following
	error messages in the Event Viewer System log:
	
	  Event ID: 10004; Source: DCOM
	  DCOM got error "Logon failure: the user has not been granted the requested
	  logon type at this computer. " and was unable to logon .\IWAM_MACHINENAME in
	  order to run the Server:{3D14228D-FBE1-11D0-995D-00C04FD919C1}
	
	  Event ID: 36; Source: W3SVC
	
	  The server failed to load application '/LM/W3SVC/1/Root/'. The error was 'The
	  server process could not be started because the configured identity is
	  incorrect. Check the username and password'.
	
	CAUSE
	=====
	
	This behavior can occur if the IWAM_MACHINENAME and IUSR_MACHINENAME user
	accounts do not have "Logon as a batch job" rights.
	
	RESOLUTION
	==========
	
	Give "Logon as a batch job" rights to the IWAM_MACHINENAME and IUSR_MACHINENAME
	accounts. To do this, follow these steps:
	
	1. On the Administrative Tools menu, expand Local Security Policies.
	
	2. Select User Rights Assignment.
	
	3. Select the IWAM_MACHINENAME and IUSR_MACHINENAME accounts.
	
	NOTE: If domain level policy settings are defined, they override local policy
	settings. Make sure that the Effective Policy Setting is also selected (this
	setting is dimmed). Contact your domain administrator if this setting is not
	selected.
	
	
	Additional query words: iis 5 dcom logon failure 10004 36 w3svc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
