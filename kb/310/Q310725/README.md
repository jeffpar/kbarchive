---
layout: page
title: "Q310725: HOW TO: Run the IIS Lockdown Wizard Unattended in IIS"
permalink: kb/310/Q310725/
---

## Q310725: HOW TO: Run the IIS Lockdown Wizard Unattended in IIS

	Article: Q310725
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Description of the Technique
	- Configure the IIS Lockdown Wizard to Run Unattended
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure the Internet Information
	Services (IIS) Lockdown Wizard to run unattended.
	
	Description of the Technique
	----------------------------
	
	The latest version of the Internet Information Services (IIS) Lockdown Wizard
	provides administrators with the ability to run the wizard programmatically,
	allowing configuration across many servers through unattended, automated
	scripts.
	
	To configure the IIS Lockdown Wizard for unattended use, you must edit the
	Iislockd.ini file. This file contains the [Info] section, which defines the
	following basic configuration information that is used by the IIS Lockdown
	Wizard:
	
	  [Info]
	  ServerTypesNT4=sbs4.5, exchange5.5, frontpage, proxy, staticweb, dynamicweb , other, iis_uninstalled
	  ServerTypes=sbs2000, exchange5.5, exchange2k, sharepoint_portal, frontpage, biztalk, commerce, proxy, staticweb, dynamicweb, other, iis_uninstalled
	  UnattendedServerType=frontpage
	  Unattended=FALSE
	  Undo=FALSE
	
	The following list explains the configuration information:
	
	- ServerTypesNT4 - Lists the available server type templates that are available
	  for use with Microsoft Windows NT 4.0 servers.
	- ServerTypes - Lists the available server type templates that are available
	  for use with Microsoft Windows 2000.
	- UnattendedServerType - Designates which server type template to use when you
	  perform an unattended installation.
	- Unattended - Designates whether or not to run the wizard unattended.
	- Undo - When this option is set to TRUE, the wizard undoes previous changes
	  made by the wizard.
	
	The remaining portion of the Iislockd.ini file contains the various server type
	templates that are listed for the ServerTypeNT4 and ServerTypes variables in the
	[Info] section.
	
	Configure the IIS Lockdown Wizard to Run Unattended
	---------------------------------------------------
	
	1. Open the Iislockd.ini file in a text editor.
	
	2. In the [Info] section, configure UnattendedServerType by entering the name of
	  the desired server template. For example, if you want to apply the dynamicweb
	  template, the setting resembles the following:
	
	  UnattendedServerType=dynamicweb
	
	3. Change the Unattended setting to TRUE, as follows:
	
	  Unattended=TRUE
	
	NOTE: If you want to run Iislockd.exe unattended to undo a previous run of the
	wizard, ensure that both Unattended and Undo are set to TRUE, as follows:
	
	  Unattended=TRUE
	  Undo=TRUE
	
	4. Configure the server type template that is designated in step 2. The template
	  configuration is denoted with square brackets around the server type name
	  (for example, [dynamicweb]). This section contains the various feature
	  settings for that specific server type. To turn these feature settings on or
	  off, set them to TRUE or FALSE.
	
	5. Save the changes to the Iislockd.ini file.
	
	6. Run Iislockd.exe from the command line or by using a script.
	
	Note the following:
	
	- The parameter for AdvancedSetup is not used and is ignored during an
	  unattended installation.
	- The UninstallServices parameter only works on Windows 2000.
	
	REFERENCES
	==========
	
	For additional information on using a custom server type template during an
	unattended configuration of the IIS Lockdown Wizard, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q311350 HOW TO: Create a Custom Server Type for Use with the IIS Lockdown
	  Wizard
	
	Additional query words: iis lockdown unattended urlscan
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
