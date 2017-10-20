---
layout: page
title: "Q237196: SMS: SMS2.0 SP1 Upgrade Fails with Error  on Autorun.inf"
permalink: /kb/237/Q237196/
---

## Q237196: SMS: SMS2.0 SP1 Upgrade Fails with Error  on Autorun.inf

{% raw %}

	Article: Q237196
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 14-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an upgrade of a Systems Management Server 2.0 site installed from a
	Microsoft BackOffice 4.5 CD to Systems Management Server 2.0 Service Pack 1, you
	may receive the following error message:
	
	  The file \sms20sp1\autorun.inf could not be opened.
	
	Note that this problem does not occur with the Systems Management Server 2.0
	retail version CD.
	
	CAUSE
	=====
	
	BackOffice 4.5 CD 6 (the Systems Management Server 2.0 CD) does not contain the
	Autorun.inf file. When the contents of this CD are copied to a local directory
	on the hard disk or across the network, and then the Systems Management Server
	Upgrade Wizard runs, the installation fails because it cannot find the
	Autorun.inf file.
	
	WORKAROUND
	==========
	
	To work around this problem, copy all of the files from the BackOffice 4.5 CD 6
	to a folder (for example, a folder named "SMS20Sp1") on the local or network
	drive, then add the Autorun.inf file from the Systems Management Server 2.0
	retail CD (that is, the stand-alone version) to this folder. Point to SMS20Sp1
	folder as the Systems Management Server 2.0 CD image on the local or network
	drive in the Select Destination Directory box of the Upgrade Wizard. This will
	allow the upgrade process to complete successfully.
	
	MORE INFORMATION
	================
	
	You can also download the Autorun.inf file from the same Microsoft FTP that
	contains the service pack itself. This location is:
	
	  ftp://ftp.microsoft.com/bussys/winnt/sms-public/fixes/usa/sms20/USSP1/
	
	If you have already attempted the upgrade and it failed with the error message
	described in the SYMPTOMS section of this article, then copying the Autorun.inf
	file to the SMS20Sp1 directory (set as the Systems Management Server 2.0 CD
	image above) is not enough.
	
	In this case, after copying the Autorun.inf file to the SMS20Sp1 directory,
	replace the following files from BackOffice 4.5 CD 6 (the Systems Management
	Server 2.0 CD) to the SMS20Sp1 directory:
	
	  \smssetup\bin\alpha\setup.exe
	  \smsetup\bin\i386\setup.exe
	
	-or-
	
	Restart the process by recopying all files from the BackOffice 4.5 CD 6 to a
	network drive and put the Autorun.inf into that directory before attempting to
	run the Systems Management Server 2.0 Service Pack 1 upgrade.
	
	Additional query words: prodsms BORK SP SP1
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
