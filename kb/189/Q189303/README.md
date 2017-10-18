---
layout: page
title: "Q189303: SMS: Service Pack Upgrade Button Unavailable When Running Setup"
permalink: kb/189/Q189303/
---

## Q189303: SMS: Service Pack Upgrade Button Unavailable When Running Setup

	Article: Q189303
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Setup for Systems Management Server Service Packs, the Upgrade
	button in the Site Operations window is unavailable and the following message
	appears:
	
	  Setup has detected an existing version of a SMS Primary Site Server. The
	  version of the existing installation is 786.
	
	  Since you are running Setup from your local program group, you cannot install
	  a Site Server or Administrator UI, upgrade the site or add new components.
	  Run setup from the SMS CD to perform these operations.
	
	CAUSE
	=====
	
	The name of the directory that the Systems Management Server Service Pack setup
	starts with the letters "SMS".
	
	WORKAROUND
	==========
	
	To work around this problem, rename the directory that contains the Systems
	Management Server Service Pack so that the first three characters are not "SMS".
	For example, you could rename "SMSSP3" to "SP3SMS".
	
	Additional query words: gray grey grayed greyed out dim dimmed disabled prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
