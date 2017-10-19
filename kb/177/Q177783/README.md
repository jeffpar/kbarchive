---
layout: page
title: "Q177783: XADM: Temp Files Remain After OAB Generation Fails"
permalink: /kb/177/Q177783/
---

## Q177783: XADM: Temp Files Remain After OAB Generation Fails

	Article: Q177783
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Generating an Offline Address Book (OAB) on a drive that has low disk space will
	fail, leaving the drive with temp files related to this unsuccessful operation.
	
	When you generate the OAB within the Microsoft Exchange Administrator program,
	temporary files are created. Running this task on Microsoft Windows NT Server
	causes these files to be created on the system drive of the server or in the
	location to which the Administrator points the %temp% and %tmp% environment
	variables.
	
	If the directory service is large and low disk space conditions are encountered
	on the server, an error may occur and you may receive the following error
	message:
	
	  An error occurred while generating the offline Address Book. To view
	  details, see the application event log in the Windows NT Event Viewer
	  on the offline Address Book Server.
	
	  Microsoft Exchange Administrator ID no. c1031662
	
	The following information is written in the application log in the Windows NT
	Event Viewer:
	
	  Event ID 5004 Generation of the offline Address Book is complete.
	  Result: An error occurred.
	
	WORKAROUND
	==========
	
	The remaining temp files are not automatically deleted and must be deleted
	manually. If temp files still remain, repeat the operation to complete. It is
	commonly expected that temporary files associated with failed attempts would be
	deleted, but in this case, they are not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
