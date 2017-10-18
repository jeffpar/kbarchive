---
layout: page
title: "Q309020: CONVERT Verb Fails With SV_G on HIS 2000 End-User Client"
permalink: kb/309/Q309020/
---

## Q309020: CONVERT Verb Fails With SV_G on HIS 2000 End-User Client

	Article: Q309020
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 10-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Advanced Program-to-Program Communications (APPC) application that is using
	the Host Integration Server 2000 (HIS 2000) End-User Client may receive the
	following error message:
	
	  Primary Return Code: 0001 (SV_PARAMETER_CHECK)
	  Secondary Return Code: 00000405 (SV_TABLE_ERROR)
	
	This error typically occurs when the application is calling the Convert verb and
	using a SV_G char_set parameter.
	
	CAUSE
	=====
	
	The HIS 2000 End-User Client system does not contain a COMTBLG value in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SnaBase\Parameters\Client
	
	This value should exist and should contain the path for the default type G
	conversion table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
