---
layout: page
title: "Q178656: XWEB: VBScript Error When Attempting to Access a Mailbox"
permalink: kb/178/Q178656/
---

## Q178656: XWEB: VBScript Error When Attempting to Access a Mailbox

	Article: Q178656
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following VBScript error may appear when you try to access a mailbox on an
	Exchange Server computer via Outlook Web Access (OWA):
	
	  Microsoft VBScript runtime error '800a03e3'
	
	  Unknown runtime error
	
	  /exchange/USA/lib/session.inc, line 300"
	
	The script name and line number may be different from the above, but the error
	code will remain the same.
	
	CAUSE
	=====
	
	This error may be caused if anonymous access is not enabled on the Lightweight
	Directory Access Protocol (LDAP) in the Exchange Administrator program, or if
	the anonymous account has not been assigned the correct permissions, or both.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. From the Exchange Server Administrator program, view the properties of the
	  LDAP and ensure that Allow Anonymous is checked.
	
	2. View the properties of the directory service Site Configuration container and
	  ensure the account designated for the anonymous access is correct and that
	  the password for this account is correct. NOTE: the IUSR_servername account
	  is normally used for anonymous access; however, it is possible to use a
	  different account name.
	
	3. View the properties of the Configuration container and changes to the
	  permissions tab. Ensure that the IUSR_servername or anonymous account has
	  search permissions.
	
	If any of the above changes have been made, you must stop and restart the World
	Wide Web Publishing Service via Control Panel/Services.
	
	MORE INFORMATION
	================
	
	Please see the following Microsoft Knowledge Base articles for additional
	resolutions to this error:
	
	  Q176245 XWEB: VBScript Error When Accessing Outlook Web Access Server
	
	  Q173455 XWEB: OWA Returns Exchange Server Down Error Message
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
