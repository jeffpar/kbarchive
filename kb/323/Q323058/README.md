---
layout: page
title: "Q323058: &quot;Unable to Obtain a Write Lock on Config File&quot; Error in SNA Mgr"
permalink: kb/323/Q323058/
---

## Q323058: &quot;Unable to Obtain a Write Lock on Config File&quot; Error in SNA Mgr

	Article: Q323058
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make a configuration change in SNA Manager, and then you click OK to
	confirm the change, you may receive the following error message:
	
	  Unable to obtain a write lock on the config file.
	
	NOTE: The error occurs before you try to save the configuration file. Depending
	on the symptoms, the error can occur on either the Primary or Backup Host
	Integration Server (HIS) or the SNA Server.
	
	Some common causes that prevent you from obtaining a write lock on the
	configuration file are:
	
	1. Another user has the Com.cfg file open for write and has not saved the
	  changes. (A Com.lok file is in the Config directory of the Primary Host
	  Integration Server (HIS) / SNA Server.)
	
	2. The file permission or the share permission (or both) for the Everyone group
	  account is not set to full access. This can be further qualified, for
	  example, if an account such as Administrator or Administrator equivalent is
	  specified instead of the Everyone group account.
	
	3. The user who is logged on is not part of the local Administrator group.
	
	MORE INFORMATION
	================
	
	If none of the causes mentioned in the "Summary" section apply, there may be an
	issue with file creation and the virus scanning software that is running on the
	server(s). The cause of the issue may occur when SNA Manager attempts to create
	the Com.c$$ in the COMCFG share on the Primary Host Integration Server (HIS) /
	SNA Server. The Com.c$$ file is created when a configuration change is made to
	the Com.cfg, and then the user clicks OK to confirm the change in SNA Manager.
	You may resolve this issue by disabling virus-scanning software.
	
	REFERENCES
	==========
	
	For additional information about how to determine who has locked the Com.cfg
	file, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q139676 Finding Out Who Has Locked the SNA Server Configuration File
	
	Additional query words: his
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
