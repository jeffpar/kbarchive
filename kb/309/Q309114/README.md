---
layout: page
title: "Q309114: OLE DB Provider for DB2 Using SSO Fails With SQL State Error"
permalink: kb/309/Q309114/
---

## Q309114: OLE DB Provider for DB2 Using SSO Fails With SQL State Error

	Article: Q309114
	Product(s): Microsoft SNA Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft OLE DB Provider for DB2, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following scenario assumes that Host Security is configured with a working
	Host Account Cache (HAC):
	
	If a Universal Data Link (.udl) file was configured to an AS/400 through Advanced
	Program-to-Program Communications (APPC) with Single Sign-On (SSO) selected,
	Test Connection will succeed. However, any application that uses this .udl file,
	including the sample applications Drda_vb.exe and Rowsetviewer.exe, will fail
	and report following error:
	
	  Invalid User ID or password. SQLSTATE:08S01, SQLCODE:-568
	
	CAUSE
	=====
	
	The user ID and password on the .udl file are always being used even if the
	Single Sign-on checkbox was selected.
	
	WORKAROUND
	==========
	
	Set both the UserId and Password fields to "MS$SAME" (without the quotation
	marks) prior to selecting Single Sign-on .
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbOLEDBSearch kbHostIntegServ2000 kbOLEDBProvDB500 kbOLEDBProvSearch
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
