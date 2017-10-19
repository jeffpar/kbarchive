---
layout: page
title: "Q248350: Kerberos Authentication Fails after Upgrading from IIS 4.0 to II"
permalink: /kb/248/Q248350/
---

## Q248350: Kerberos Authentication Fails after Upgrading from IIS 4.0 to II

	Article: Q248350
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the metabase. Before you edit the metabase, verify that you have a backup copy that can be restored if a problem occurs. For information about how to do this, view the "Configuration Backup/Restore" Help topic in Microsoft Management Console (MMC).
	
	SYMPTOMS
	========
	
	When you upgrade a computer running Windows NT Server 4.0 with Internet
	Information Server 4.0 installed to Windows 2000 with Internet Information
	Services 5.0, Kerberos authentication may fail. The Negotiate method may not be
	used by the Web server even though Windows Integrated authentication is
	selected.
	
	When you do a network trace (from the client) using Network Monitor, you will
	usually see the following in the WWW-Authenticate header sent to the client:
	
	  WWW-Authenticate: Negotiate
	  WWW-Authenticate: NTLM
	
	When you upgrade from Windows NT 4.0 to Windows 2000, you may only see the NTLM
	WWW-Authenticate header sent to the client (Negotiate is not sent to the
	client). For example:
	
	  WWW-Authenticate: NTLM
	
	CAUSE
	=====
	
	In order to preserve the default authentication method used in Internet
	Information Server 4.0, the metabase setting for NTAuthenticationProviders was
	not changed. The default for this metabase key is "NTLM" in Internet Information
	Server 4.0; however, this has been changed in Internet Information Services 5.0
	so that the new Negotiate method can use "Negotiate,NTLM."
	
	If you do a clean installation of Windows 2000 (as opposed to an upgrade), the
	key will reflect the default in Internet Information Services 5.0 as
	"Negotiate,NTLM."
	
	RESOLUTION
	==========
	
	To resolve this problem, you must edit the metabase.
	
	WARNING: Editing the metabase incorrectly can cause serious problems that may
	require you to reinstall any product that uses the metabase. Microsoft cannot
	guarantee that problems resulting from incorrectly editing the metabase can be
	solved. Edit the metabase at your own risk.
	
	NOTE: You should always back up the metabase before you edit it.
	
	To change the value of NTAuthenticationProviders, perform the following steps:
	
	1. Open a command prompt (Cmd.exe).
	
	2. Change the directory to c:\inetpub\adminscripts. Note that this path is the
	  default path and may be different from yours if you changed the content area
	  or installed to a different drive letter.
	
	3. To determine the value of NTAuthenticationProviders, type the following, and
	  then press the ENTER key:
	
	  cscript adsutil.vbs get w3svc/NTAuthenticationProviders
	
	  The following output should return:
	
	  NTAuthenticationProviders : (STRING) "NTLM"
	
	4. If the value of NTAuthenticationProviders is "NTLM," then type the following
	  (exactly):
	
	  cscript adsutil.vbs set w3svc/NTAuthenticationProviders "Negotiate,NTLM"
	
	  Press the ENTER key. You should receive the following output:
	
	  NTAuthenticationProviders : (STRING) "Negotiate,NTLM"
	
	If you receive an error on the last step, make sure that you did not leave a
	space between Negotiate and NTLM. For example, "Negotiate,NTLM" is not the same
	as "Negotiate, NTLM."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis 5 NTLM Negotiate Kerberos Upgrade
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
