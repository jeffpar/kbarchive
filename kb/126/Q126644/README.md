---
layout: page
title: "Q126644: Troubleshooting SMS Workstation Package Installations"
permalink: /kb/126/Q126644/
---

## Q126644: Troubleshooting SMS Workstation Package Installations

{% raw %}

	Article: Q126644
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbMaintMan kbPCM smsmaintman smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes several Systems Management Server workstation package
	problems, and what you can do to resolve them.
	
	MORE INFORMATION
	================
	
	Package Created and Distributed but Item Never Appears in Pending Folder
	------------------------------------------------------------------------
	
	The workstation package has been created and distributed with no errors but the
	item never shows up in the pending folder of the destination system's Package
	Command Manager (PCM).
	
	1. Check the package workstation properties and confirm that the Supported
	  Platforms list has the destination systems platform selected. Using the
	  Systems Management Server Administrator program, check the PC Properties for
	  the destination system and confirm that Systems Management Server has the
	  correct platform type listed for the target system.
	
	2. Get the CurrentLogonServer location and the Unique SMSID from the hidden
	  C:\Sms.ini file. Using these, check the
	  <Logonserver>\Sms_Shr\Pcmins.box directory for a file with the name
	  <Unique SMSID>.ins. If this file does not exist, the instruction file
	  for this system is missing from that logon server. The Systems Management
	  Server Maintenance Manager is responsible for placing these files on the
	  logon servers. Check the Sms\Logs\Maintman.log file for errors that may have
	  occurred when this file was replicated from the site server to the logon
	  server. Also check Appendix C of the "Microsoft Systems Management Server
	  Administrator's Guide" for details.
	
	3. If the <Smsid>.ins file exists on the logon server, use PCMDUMP to
	  display its contents. Careful examination of the Display Date and Expiration
	  Date fields may indicate why the package has not been displayed on the
	  destination system. For additional information about using PCMDUMP to display
	  the contents of an .ins file, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q123499 PCMDUMP and Package Command Manager Instruction Files
	
	  NOTE: Pcmdump.exe can be copied from the Support\Debug\<Platform>
	  Directory on the Systems Management Server CD.
	
	Mandatory Package Does Not Execute on Time or Does Not Execute at All
	---------------------------------------------------------------------
	
	1. Use PCMDUMP to check the value of the Install By Date field. Compare this
	  date/time stamp with the destination system current date/time The system time
	  must be on or after the Install By Date before PCM will run the package.
	
	2. If the package is supposed to run unattended on a Windows NT system that has
	  no user logged on locally, ensure that all the follow conditions are met:
	
	   - The package must not use console I/O. This means that nothing can print to
	     the screen or require keyboard or mouse input. The PCMSVC service is
	     responsible for executing System Background installation tasks and has no
	     access to the local console for I/O. Any console I/O in this type of
	     package will fail.
	
	   - Confirm that both Automated Command Line and System (Background) Task are
	     selected in the package's workstation properties.
	
	   - Confirm that the PCM service user account for the Windows NT client has
	     sufficient rights to execute the job on the system. On a Windows NT system
	     in a secure environment, it is possible to keep the PCM service from
	     accessing particular directories or other Windows NT system objects,
	     causing the installation to fail.
	
	
	Package Fails to Execute Properly or Does Not Execute at All
	------------------------------------------------------------
	
	1. Ensure that the package source directory and the package command line have
	  been configured correctly:
	
	  a. Ensure that the command line points to a valid executable.
	
	  b. Ensure that all directory path references are relative to the package
	     source directory and are not absolute directory references. For example,
	     to execute Setup.exe in the Install directory of a package, use a relative
	     path in the command line (Install\Setup.exe). Do not use an absolute
	     directory path reference such as Smssvr\D$\Package1\Install\Setup.exe, for
	     example.
	
	2. Manually run the package command line using PCMDUMP to determine what
	  distribution servers contain the package. Connect to one of the listed server
	  shares and change to the directory listed for the package. Run the package's
	  command line from this directory. Look for errors that reference incorrect
	  paths or missing files.
	
	3. Confirm that the package directory contains a mirrored image of the original
	  source directory specified when the package was created. Except for the top
	  level directory name, both directory trees should be identical. If they are
	  not, check the Despool.log file for any errors that may have occurred while
	  the directory structure was being created on the distribution server.
	
	4. If the distribution directory does not exist on the servers, check the
	  Sms\Logs\Despool.log file on the Systems Management Server site server for
	  errors referring to the creation and file population of this directory.
	
	Package Instruction Files Never Arrive or Never Get Updated
	-----------------------------------------------------------
	
	The package instruction files never arrive or never get updated in the <Logon
	Server>\Sms_Shr\Pcmins.box directory.
	
	1. Check the Systems Management Server site server directory
	  Sms\Site.srv\Maincfg.box\Pcmdom.box\<Clients Domain>. Confirm that an
	  instruction file exists for the client and that it has been updated since the
	  package was distributed. Use PCMDUMP if you are unsure of the status or
	  contents of this file.
	
	2. If this file exists and has been updated, check the Sms\Logs\Maintman.log
	  file for any errors that may have been logged when Systems Management Server
	  attempted to transfer this file to the logon servers. The Systems Management
	  Server Maintenance Manager will replicate these files at a regular watchdog
	  interval. Use the log file to confirm that this watchdog cycle has actually
	  taken place and that the logon server in question was one of its targets.
	
	3. If this file does not exist, or has not been updated with the current
	  package, check the Despool.log file for any error referring to the creation
	  or distribution of instruction files.
	
	Additional query words: sms prodsms trouble shoot trouble-shoot tshoot shooting
	
	======================================================================
	Keywords          : kbMaintMan kbPCM smsmaintman smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
