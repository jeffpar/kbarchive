---
layout: page
title: "Q157589: SMS: PGC Does Not Work in a Trusted Domain with Windows 95"
permalink: kb/157/Q157589/
---

## Q157589: SMS: PGC Does Not Work in a Trusted Domain with Windows 95

	Article: Q157589
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgckbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Program Group Control (PGC) and Windows 95 in a trusted domain,
	Windows 95 client computers do not receive shared applications. This problem
	occurs if the Windows 95 client computer is validated in a master user domain
	and Systems Management Server is located in a resource domain. A Windows 95
	client computer can receive PGC applications if it is validated in the resource
	domain.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time                 Size   File name    Platform
	  ------------------------------------------------------------
	  11/13/98   05:17pm              84,304 Nadapi16.dll (x86)
	  11/13/98   05:18pm              72,800 Nadapi95.dll (x86)
	  11/13/98   05:17pm              72,288 Nadapi32.dll (x86)
	  11/13/98   05:12pm             163,600 Nadapi32.dll (ALPHA)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the following files in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	  directory with their hotfixed versions:
	
	  Nadapi16.dll
	  Nadapi95.dll
	  Nadapi32.dll
	
	  On its next work cycle, Maintenance Manager will replicate these files to the
	  Systems Management Server logon servers.
	
	2. After that occurs, the clients may be updated. To update the clients, either
	  manually run Upgrade.bat on each client or follow the instructions in the
	  following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
