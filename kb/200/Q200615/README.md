---
layout: page
title: "Q200615: SMS: Setup Does Not Install SQL Server 7.0 Unattended"
permalink: kb/200/Q200615/
---

## Q200615: SMS: Setup Does Not Install SQL Server 7.0 Unattended

	Article: Q200615
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Microsoft Systems Management Server (SMS) 2.0 Setup, you receive the
	option to install Microsoft SQL Server. Installation of SQL Server version 6.5
	is accomplished without user interaction. However, if you install SQL Server
	7.0, you must complete SQL Server Setup by entering data when prompted, and you
	must have sufficient SQL Server licenses for the installation.
	
	MORE INFORMATION
	================
	
	During SMS 2.0 installation, Setup prompts you to provide SQL Server
	configuration information if a current installation of SQL Server is not
	detected on your computer. When Setup reaches the point where a SQL Server
	source is needed, you are prompted to insert the CD-ROM or specify a network
	source.
	
	You must have sufficient licenses to install SQL Server for use with SMS. If SMS
	was purchased as a part of Microsoft BackOffice, the server licenses were
	purchased along with the product and the installation of SQL Server and SMS is
	made easier.
	
	If you purchased SMS separately from SQL Server (not in the Microsoft BackOffice
	suite), you must install the SQL Server service pack that is on the SMS 2.0
	CD-ROM. Setup prompts you when you need to perform this step.
	
	SMS installation is SQL Server version independent. All you need to provide is a
	licensed copy of SQL Server 6.5 or 7.0.
	
	Additional query words: prodsms attended unattended background silent
	
	======================================================================
	Keywords          : kbsetup kbsms200 smssetup 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
