---
layout: page
title: "Q280051: Foreign User Exclusion Template Has a Duplicate Message Number"
permalink: /kb/280/Q280051/
---

## Q280051: Foreign User Exclusion Template Has a Duplicate Message Number

	Article: Q280051
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 25-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange MAPI Management Agent, the same message number is
	displayed in the Exclusion template twice:
	
	  message 300
	  $exist($MULTI_VALUED("$MA()", $zcConnectedDirectoryID)) = T
	
	  message 300
	  $structuralObjectClass = list
	  $MA($zcExchangeExcludeCustomRecipientsListCreate) = TRUE
	
	  message 301
	  $embedded("applications", $mv.dn) = T
	
	RESOLUTION
	==========
	
	To resolve this issue, change the message number in the Exclusion template. To
	do this, follow these steps:
	
	1. On the Actions menu, click Configure.
	
	2. Click the "Inclusions and Exclusions" tab.
	
	3. Click the Foreign Entries tab.
	
	4. Click the Exclusions tab.
	
	5. Edit the template. By default, only three messages are listed. Renumber the
	  messages 300, 301 and 302.
	
	6. Click OK to save the changes.
	
	MORE INFORMATION
	================
	
	This issue does not affect the functionality of the Management Agent. This
	behavior may only be an issue when you view the logs to see why an entry was
	excluded. When the logging level is set to 2, the logs report an exclusion for
	each entry. For example:
	
	  0003-EXCLUDED[300]: cn=Peter
	  Lee,ou=Employees,dc=testdom,dc=com
	
	In this case, the user is reported as being excluded on message 300. Because
	message 300 exists twice, you cannot determine which exclusion rule was
	applied.
	
	For details about how to use Inclusion and Exclusion templates, refer to the
	Inclusion and Exclusion Filters topic that is located in the online
	documentation for Microsoft Metadirectory Services.
	
	Additional query words: MMS Foreign Uses Management Agent, Custom Recipients
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
