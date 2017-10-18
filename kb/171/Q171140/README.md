---
layout: page
title: "Q171140: Permission Denied During Certificate Creation"
permalink: kb/171/Q171140/
---

## Q171140: Permission Denied During Certificate Creation

	Article: Q171140
	Product(s): Internet Information Server
	Version(s): WinNT:1.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbother
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a client certificate for Microsoft Internet Explorer
	through the Microsoft Internet Explorer Enrollment Form, you may get an error
	message similar to the following:
	
	  Microsoft VBScript runtime error '800a0046'
	  Permission denied
	  /CertSrv/CertEnroll/ceaccept.asp, line 10
	
	CAUSE
	=====
	
	The IUSR_computername account does not have access to the Certificate Server
	shared folder.
	
	RESOLUTION
	==========
	
	Give the IUSR_computername account Read access to the shared folder, and the
	certificates will be issued properly.
	
	MORE INFORMATION
	================
	
	If the anonymous account (or logged-in user) does not have at least Read access
	to the Well Known Directory, the certificate generation process will fail. An
	error message will be returned, formatted as an HTML document.
	
	The Well Known Directory is the name given to the shared folder required by the
	Certificate Server Setup program. This share contains information specific to
	the Self-Signed Certificate (Root CA).
	
	======================================================================
	Keywords          : kberrmsg kbother 
	Technology        : kbiisSearch kbiis300 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WinNT:1.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
