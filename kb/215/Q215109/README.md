---
layout: page
title: "Q215109: Express Setup Repeatedly Prompts You to Swap SQL and SMS CD-ROMs"
permalink: /kb/215/Q215109/
---

## Q215109: Express Setup Repeatedly Prompts You to Swap SQL and SMS CD-ROMs

{% raw %}

	Article: Q215109
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbtool kbConfig kbDatabase kbServer kbsms200
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Express Setup for Systems Management Server (SMS) version 2.0, if
	SQL has not already been installed, you may receive a prompt for the Microsoft
	SQL Server CD-ROM. After you complete the SQL server installation, Setup may
	prompt you for the SMS 2.0 CD-ROM. When you insert the SMS 2.0 CD-ROM, Setup
	prompts for the Microsoft SQL Server CD-ROM, and this cycle may continue
	repeatedly. Also, Setup may generate the following message when it prompts you
	for the Microsoft SQL Server CD-ROM:
	
	  Enter the location of the setup executable for Microsoft SQL Server 6.5 or
	  Microsoft SQL Server 7.0. If you are installing from a CD, please insert it
	  now and ensure that the CD-ROM drive light is extinguished before pressing
	  the Browse button.
	
	CAUSE
	=====
	
	This issue can be caused by the Autorun feature in the Microsoft Windows
	operating systems. When you insert the SQL Server CD-ROM, the Autorun feature
	checks for the Autorun.inf file on the CD-ROM to execute the Setup program. With
	the Microsoft SQL Server CD-ROM, an Options page is displayed to permit you to
	run the Setup program or review extras on the CD-ROM. If you click Browse before
	the CD-ROM drive light goes out, the SQL Server Autorun screen starts. If you do
	not close the SQL Autorun screen, it remains in the background. SMS Setup runs
	the SQL Setup, and when it finishes, it prompts you to return the SMS CD-ROM.
	When the CD-ROMs are swapped, Setup continues normally.
	
	After Setup finishes, the SQL Autorun regains focus, and the computer looks for
	the SQL CD-ROM in the CD-ROM drive. Because it is not in the drive, you are
	prompted to insert the SQL CD-ROM. Setup then detects that the Systems
	Management Server CD-ROM is not in the drive, and prompts you to insert it
	again. A few minutes later, the SQL Autorun screen again gains focus, and
	prompts you for the SQL CD-ROM, and this process is repeated indefinitely.
	
	WORKAROUND
	==========
	
	To work around this issue, wait for the CD-ROM drive light to stop flashing
	after you insert the CD-ROM.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbtool kbConfig kbDatabase kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
