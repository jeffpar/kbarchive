---
layout: page
title: "Q198542: XCLN: Unable to Add Components to Outlook 98 Installation"
permalink: /kb/198/Q198542/
---

## Q198542: XCLN: Unable to Add Components to Outlook 98 Installation

{% raw %}

	Article: Q198542
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add components to Outlook 98, you receive the following
	error message on the Outlook 98 Component Install page:
	
	  An unknown error occurred during installation.
	
	CAUSE
	=====
	
	If you are using a version of Outlook 98 that has been installed using the
	Outlook Deployment Wizard (ODK), installed components and options are set by the
	administrator. These options cannot be changed by the user, and using Add
	Components will fail.
	
	WORKAROUND
	==========
	
	In order to add components, the administrator needs to create a new build of
	Outlook 98 using the ODK that contains the new components. This new version can
	then be deployed to the users.
	
	MORE INFORMATION
	================
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
