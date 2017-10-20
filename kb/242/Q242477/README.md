---
layout: page
title: "Q242477: SMS: Login Script Support Files Not Copied After Applying SP1"
permalink: /kb/242/Q242477/
---

## Q242477: SMS: Login Script Support Files Not Copied After Applying SP1

{% raw %}

	Article: Q242477
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0, if you do not select the "Modify user
	logon scripts" option, SMS Windows NT Logon Server Manager still copies all of
	the files in the primary domain controller's Repl$\Scripts (Repl\Export\Scripts)
	folder to the Netlogon share (Repl\Import\Scripts) on every backup domain
	controller (BDC) in the domain.
	
	In SMS 2.0 Service Pack 1 (SP1), this functionality is changed. If the "Modify
	user logon scripts" option is not selected, no files are copied. This change in
	functionality is outlined in the following article in the Microsoft Knowledge
	Base:
	
	  Q225514 SMS: NT Logon Server Manager Replicates Files When It Should Not
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Use Microsoft Windows NT Directory Replication to replicate the Bootstrap
	  files.
	
	- Manually copy the Bootstrap files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Stop the SMS Executive and SMS Site Component Manager services.
	
	2. Replace the Nt_logon.dll and Ntlg_rem.exe files in the
	  <Sms_root>\Bin\<Platform> folder with the versions from the
	  hotfix.
	
	3. Restart the SMS Executive and SMS Site Component Manager services.
	
	NOTE: With the hotfix installed, SMS copies all of the files listed in the
	Mastercfg.mcf file from the Export\Scripts folder on the primary domain
	controller (PDC) to the Import\Scripts folder on all domain controllers,
	regardless of the "Modify user logon scripts" setting in the Client Installation
	or Discovery Method dialog boxes.
	
	Additional query words: prodsms modify
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
