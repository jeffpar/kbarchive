---
layout: page
title: "Q318123: Setup Does Not Recognize .inf File During Unattended HIS Install"
permalink: /kb/318/Q318123/
---

## Q318123: Setup Does Not Recognize .inf File During Unattended HIS Install

{% raw %}

	Article: Q318123
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify an .inf setup file for an unattended install of either the Host
	Integration Server (HIS) 2000 clients (HIAdmin.msi/HIClient.msi) or server
	(HIServer.msi), the Setup program does not recognize the values in the .inf
	setup file. As a result, the HIS clients/HIS server software is installed with
	default settings.
	
	CAUSE
	=====
	
	You did not specify the path to the .inf file in the command line. For example,
	the following command line performs an unattended install, but the specialized
	.inf file HIServer.inf will be ignored:
	
	  MSIExec /I hiserver.msi UNATTENDED_INSTALL_FILENAME=hiserver.inf /q
	
	RESOLUTION
	==========
	
	Specify the path to the .inf file by changing the command line to appear as
	follows:
	
	  MSIExec /I hiserver.msi UNATTENDED_INSTALL_FILENAME=<path>\hiserver.inf
	  /q
	
	MORE INFORMATION
	================
	
	For more information about automating setup of Host Integration Server, refer to
	the following TechNet Web site:
	
	  Automating Setup and Using the MSIEXEC Application
	  http://www.microsoft.com/technet/treeview/default.asp?url=/TechNet/prodtechnol/host/proddocs/install/instch08.asp
	  (http://www.microsoft.com/technet/treeview/default.asp?url=/TechNet/prodtechnol/host/proddocs/install/instch08.asp)
	
	For additional information about installation on HIS clients, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q307819 Problems with Automated Installation of Host Integration Server
	  Clients
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	

{% endraw %}
