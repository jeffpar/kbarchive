---
layout: page
title: "Q185352: SMS: How to Set Up a Simple Test Environment"
permalink: kb/185/Q185352/
---

## Q185352: SMS: How to Set Up a Simple Test Environment

	Article: Q185352
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article is intended to help you set up a simple test
	environment, but is not meant to take you through a step-by-step demonstration
	or test of Systems Management Server functionality. After you have set up a test
	lab, refer to the Systems Management Server Administrator's Guide and try each
	feature, to become familiar with Systems Management Server processes.
	
	MORE INFORMATION
	================
	
	The main components of a minimal test environment are:
	
	- Windows NT Server running as a primary or backup domain controller.
	
	- A SQL Server database installed and configured on a Windows NT Server
	  computer.
	
	- A client computer running Windows 95, Windows 3.x, Windows for Workgroups, or
	  MS-DOS.
	
	- A local area network (LAN) connecting the computers.
	
	In this very simple environment, you only need to devote two computers to your
	test effort. The computer running Windows NT Server, installed as a Systems
	Management Server central site, will also function as a Systems Management
	Server logon and distribution server. Obviously, you can increase the scope of
	your testing by including more computers in your test environment.
	
	Hardware Requirements
	---------------------
	
	A Systems Management Server primary site server in a simple test environment must
	meet the following minimal hardware requirements:
	
	- Intel Pentium or DEC Alpha CPU
	
	- 500 MB free disk space available
	
	- Access to a CD-ROM drive
	
	- An amount of RAM as determined below
	
	The following list includes a simple set of rules for determining the total
	amount of RAM required by a site server:
	
	- 16 MB of RAM for the Windows NT Server operating system.
	
	- 16 MB of RAM for SMS services.
	
	- 16 MB of RAM if the site server runs the SMS Administrator program.
	
	- 16 MB of RAM for additional major applications or network services.
	
	- 16 MB to 64 MB of RAM for SQL Server if it is running on the site server
	  computer.
	
	Additionally, the client must meet the following requirements:
	
	- Intel x86 processor or Apple Macintosh
	
	- Windows NT, Windows 95, Windows 3.x, Windows for Workgroups, or MS-DOS
	  version 5.x or later, Macintosh System 7.x or later operating system
	
	Setup Checklist
	---------------
	
	The following checklist is useful as a guideline to successfully running Setup:
	
	1. Set up the hardware, install the Windows NT Server network operating system,
	  and make sure the network is fully functioning before installing SQL Server
	  or Systems Management Server.
	
	2. Create a Windows NT user account for the SMS Services. This is generally
	  called the "Systems Management Server Service Account" and it must have:
	
	   - Domain Administrative privileges.
	
	   - Log On As A Service rights.
	
	3. Set the Application Log of the Windows NT event log to overwrite events as
	  needed.
	
	4. Install SQL Server. Have a Systems Management Server SQL Login ID such as
	  "sa" (you will need to specify this ID when you run the Systems Management
	  Server Setup program). The Systems Management Server SQL Login ID specified
	  in the Systems Management Server Setup program must have Create Database,
	  Dump Database, and Dump Transaction permissions for the master database. This
	  enables the Systems Management Server Setup program to create and maintain
	  the site database.
	
	5. Increase the memory option in the system configuration for the SQL Server to
	  at least 8 MB (note that this setting is specified in 2-KB units; specify
	  4096 for 8 MB), and increase the "open objects" option to 5,000. For more
	  information on SQL Server tuning parameters with Systems Management Server,
	  see the following article in the Microsoft Knowledge Base:
	
	  Q166244 SMS: SQL Server Tuning Parameters for Systems Management Server
	
	6. If SQL Server is installed on a different server than the Systems Management
	  Server site server, do all of the following:
	
	   - Create the site database device and transaction log device on separate
	     devices (for example, SMSDATA and SMSLOG). Each of these devices should be
	     at least 5 MB.
	
	   - Increase the size of the temporary database (tempdb). For a simple test
	     environment, 10 MB should be more than enough space.
	
	   - Set the "maximum user connections" option to at least 25.
	
	   - Set the SQL Server with the current time.
	
	7. Synchronize the date and time of the client computer to the Windows NT Server
	  computer. You can do this by typing the following at the client command line:
	
	  net time\\siteserver /set
	
	Additional query words: testing
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
