---
layout: page
title: "Q137865: PC DirSync: Incorrect SMTP Addresses in POL After Dir-Sync"
permalink: /kb/137/Q137865/
---

## Q137865: PC DirSync: Incorrect SMTP Addresses in POL After Dir-Sync

{% raw %}

	Article: Q137865
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access details or send mail to SMTP users from the Postoffice
	Address List (POL), the following error may occur:
	
	  Address no longer valid address or PO no longer exists
	
	However, you can access the details from the Global Address List (GAL) or the
	SMTP works correctly.
	
	CAUSE
	=====
	
	When SMTP addresses are included in the POL, and you transfer the SMTP addresses
	through Directory Synchronization (Dir-Sync), the SMTP addresses in the POL may
	have incorrect tuple identifier (TID) values. However, the SMTP list and the GAL
	do have the correct TID values.
	
	RESOLUTION
	==========
	
	Using Dir-Sync to import SMTP addresses is not a recommended method of
	exchanging SMTP addresses with other postoffices. Instead, use the Mail Import
	command (IMPORT.EXE) with the -a and -g options. This allows SMTP addresses to
	be added to the SMTP list, POL, and GAL without the above problem.
	
	MORE INFORMATION
	================
	
	In the Microsoft Mail Administrator program (ADMIN.EXE), you can enable the
	option to synchronize SMTP addresses. This option is in Config, Dirsync,
	Requestor, Types. If SMTP is set to Yes, then Dir-Sync will distribute all SMTP
	addresses when a requestor does an Import command; this import will send a
	complete SMTP list from the Dir-Sync server to the requestor.
	
	When the requestor processes these updates during the T3 cycle of Dir-Sync
	(reqmain -r), the SMTP addresses will be added to the SMTP list, and the SMTP
	list is rebuilt with new TID values. Then the GAL is rebuilt from the SMTP list
	with the correct TID values.
	
	Because Dir-Sync rebuilds the SMTP list with new TID values and the POL is never
	touched, the POL will still have old TID values for any existing SMTP addresses.
	As a result, when you choose an SMTP address from the POL the above error will
	occur.
	
	For more information about Rebuild and Import, please refer to pages 319- 321 of
	the Microsoft Mail for PC Networks "Administrator's Guide."
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
