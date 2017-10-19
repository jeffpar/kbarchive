---
layout: page
title: "Q278600: XADM: Error c103aa11 Occurs When Saving Connection Agreement"
permalink: /kb/278/Q278600/
---

## Q278600: XADM: Error c103aa11 Occurs When Saving Connection Agreement

	Article: Q278600
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Active Directory Connector (ADC), you may receive the
	following error message when you attempt to save a connection agreement between
	Windows 2000 and Exchange Server 5.5:
	
	  The credentials specified on the connections tab are incorrect or do not have
	  sufficient permissions to access the Exchange 5.5 directory. Please ensure
	  that the credentials specified are entered correctly and that sufficient
	  permissions are granted in order to access the Exchange 5.5 directory.
	
	  Error ID c103aa11
	
	  Microsoft Active Directory Management.
	
	CAUSE
	=====
	
	This behavior can occur if Windows NT Challenge/Response authentication is
	disabled for the Lightweight Directory Access Protocol (LDAP) setting in
	Exchange 5.5.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable Windows NT Challenge/Response authentication for
	the LDAP setting for either all the servers in the site that are running
	Exchange Server, or for only the server that you are trying to make a connection
	agreement with.
	
	To enable Windows NT Challenge/Response authentication for the LDAP setting for
	all the servers that are running Exchange Server within the site, make the
	following changes in the Microsoft Exchange Server Administrator program:
	
	1. Click to expand the <Site Name>\Configuration\Protocols\LDAP
	  (Directory) Site Defaults object.
	
	2. Click the Authentication tab and click to select the "Windows NT
	  Challenge/Response" check box.
	
	3. Click OK, and then stop and restart the Exchange Server directory service.
	
	To enable Windows NT Challenge/Response authentication for the LDAP setting for
	only the server that you are trying to make a connection agreement with, make
	the following changes in the Administrator program:
	
	1. Click to expand the <Site
	  Name>\Configuration\<Server>\Protocols\LDAP (Directory) Settings
	  object.
	
	2. Click the Authentication tab and click to select the "Windows NT
	  Challenge/Response" check box.
	
	3. Click the General tab and click to clear the "Use site defaults for all
	  properties" check box.
	
	4. Click OK, and then stop and restart the Exchange Server directory service.
	
	MORE INFORMATION
	================
	
	If you use Ldp.exe to connect to the server on which you have disabled Windows
	NT Challenge/Response authentication, and then attempt to bind to LDAP, you
	receive the following error message:
	
	  Error 7:ldap_bind_s failed: Authentication Method not supported.
	
	Additional query words: exch2kp2w CA DS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
