---
layout: page
title: "Q268816: XADM: Using an Active Directory Connector to Rebuild Exchg Dir."
permalink: /kb/268/Q268816/
---

## Q268816: XADM: Using an Active Directory Connector to Rebuild Exchg Dir.

	Article: Q268816
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running the DS/IS Consistency Adjuster to re-create directory objects in the
	case of a lost Exchange directory, may cause unexpected results if there is an
	Active Directory Connector (ADC) in place. Running the DS/IS Consistency
	Adjuster creates new mailbox objects, newer than the objects currently existing
	in the Active Directory. An Active Directory Connector could replicate the blank
	details of the new mailbox objects over the existing User Accounts. As a result,
	account details such as phone numbers, names, and addresses would be lost.
	
	You can use the Active Directory Connector to create the directory objects
	without losing these details.
	
	MORE INFORMATION
	================
	
	To use this method, there must be an ADC active, and successful replication must
	have taken place before losing the Exchange directory. In other words, the
	Microsoft Windows 2000 Active Directory must have knowledge of Exchange objects
	to replicate them back. There should also be a good backup of the Windows 2000
	system state. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q240363 How to Back Up and Restore the System State Using the Windows 2000
	  Backup Program
	
	Note: If there are other Exchange Server computers available, directory exports
	and imports may be the preferable method to rebuild the directory.
	
	Steps to Rebuild the Exchange Directory:
	
	These steps are for single Exchange server in a site.
	
	1. Reinstall Exchange so that you have a new, clean directory. Use the same
	  service account. Create a new site with the same organization and site names.
	  Reapply any previously applied service packs, and so forth.
	
	2. Open the Active Directory Connector Manager.
	
	3. Click Properties on the Connection Agreement, which replicates to Exchange.
	
	4. Right-click Connection Agreement, and then click Replicate Now.
	
	5. Open Exchange Administrator on the server that is being rebuilt, and verify
	  that the objects are being re-created.
	
	6. After all entries are replicated, you can use the DS/IS Consistency Adjustor
	  to re-create objects that did not replicate.
	
	7. Complete the rebuild, and then configure any connectors on the Exchange
	  Server computer.
	
	Additional query words: adc ds/is
	
	======================================================================
	Keywords          : exc55sp3 
	Component         : ADC
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
