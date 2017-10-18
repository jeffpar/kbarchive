---
layout: page
title: "Q264867: INFO: Possible Causes of Data Corruption in Visual FoxPro"
permalink: kb/264/Q264867/
---

## Q264867: INFO: Possible Causes of Data Corruption in Visual FoxPro

	Article: Q264867
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSuppor
	Last Modified: 01-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the possible causes of data corruption in Visual FoxPro. The
	article also includes some tools for fixing data corruption.
	
	MORE INFORMATION
	================
	
	Although this is by no means a complete list of every possible cause of
	corruption, it is meant to be a starting point for troubleshooting data
	corruption problems in Visual FoxPro.
	
	Possible causes for data corruption are:
	
	- Abnormal termination of the application while manipulating data. This would
	  include loss of power, voltage spikes, internal consistency errors, page
	  faults, and fatal exception errors.
	
	- Substandard or faulty network components: Because FoxPro handles data so
	  quickly, it can stress the network. These components may include network
	  drivers, network interface cards, cabling, hubs, and switches.
	
	- Data storage components: Storage devices should be checked regularly for
	  errors and fragmentation.
	
	- File locking issues: If one user performs an action that results in a table's
	  memo file being locked, and a second user attempts to open the same table and
	  access the memo field information, the second user may open the memo file
	  with an incorrect blocksize, resulting in memo file corruption. See the
	  "References" section in this article for details.
	
	- Conflicting software: Software such as Antivirus packages, screen savers, and
	  terminate-and-stay-resident applications (TSRs) can cause conflicts with
	  Visual FoxPro that could cause data corruption.
	
	- Incompatible video drivers: Certain video drivers can cause FoxPro to become
	  unstable and terminate abnormally. See the "References" section in this
	  article for more details.
	
	- Network Settings and Service Packs: Make sure that your servers are running
	  the latest service packs, check client settings (such as caching), and even
	  try switching network client drivers (such as from the Novell Netware client
	  to the Microsoft client for Netware).
	
	
	REFERENCES
	==========
	
	For additional information on the causes of corruption, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q99557 PRB: FoxPro Corruption Problems Fixed by Novell 3.11 Patches
	
	  Q195405 FIX: Corrupt Record Added in Grid Using View with Default Value
	
	  Q95232 PRB: Video Card Causes GP Faults or Display Problems
	
	  Q195623 FIX: Index Corruption When Table is Used in Read-Only Mode
	
	  Q164385 BUG: Large Result Sets May Become Corrupted in VFP
	
	For additional information on specific methods for fixing corruption, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q193952 HOWTO: Troubleshoot to Resolve Suspected Corruption
	
	  Q168762 HOWTO: Fix Index Corruption at Run Time with Visual FoxPro
	
	  Q189458 INFO: Third Party Utility Repairs FoxPro Record and Memo Data
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
