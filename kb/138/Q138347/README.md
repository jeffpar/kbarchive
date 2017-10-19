---
layout: page
title: "Q138347: SMS: Procedure for Backing Up and Restoring a Secondary Site"
permalink: /kb/138/Q138347/
---

## Q138347: SMS: Procedure for Backing Up and Restoring a Secondary Site

	Article: Q138347
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr kbsmsAdmin smsadmin smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The procedure for restoring a Secondary site that is documented on page 686 of
	Appendix K of the Systems Management Server Administrators Guide is insufficient
	and does not successfully restore a secondary site to a fully functional site.
	Below are steps outlined that have been proven to be successful in completely
	backing up and restoring a secondary site. The method outlined in this article
	assumes your Primary Parent site is up and running and the SMS database is
	active and can be accessed successfully.
	
	MORE INFORMATION
	================
	
	Backup
	------
	
	1. Using Registry Editor (REGEDT32.EXE) save the
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS key.
	
	2. Stop all Systems Management Server services from Control Panel Services.
	
	3. Stop all the services on the parent site.
	
	4. Backup.
	
	  a. Backup the entire \SMS directory and all subdirectories (including the
	     SITECTRL.CT0 file which is required for this procedure). Please see
	     CAUTION below.
	
	  b. Backup the entire \MS directory.
	
	  c. Backup the entire \SMS_PKGx directory (x is the drive where the package is
	     installed).
	
	  d. Backup the SMS.INI file.
	
	Restore
	-------
	
	1. On target computer, install Windows NT Server as it existed on the previous
	  SMS Secondary Site.
	
	  NOTE: The rules under step 1 on page 686 of the SMS Administrators Guide must
	  be followed, specifically the computer and domain name must be the same as
	  before.
	
	2. Create and restore the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS key in the
	  Registry using Registry Editor (REGEDT32.EXE). You are restoring the SMS key
	  saved in step 1 above (Backup).
	
	3. Restore everything from step 3 above:
	
	  a. The \SMS directory and all files within. Please see CAUTION below.
	
	  b. The \MS directory.
	
	  c. The entire \SMS_PKGx directory.
	
	  d. The SMS.INI file.
	
	  e. Run SMS\Logon.srv\Runsms.bat.
	
	4. From the \PSSTOOLS directory on the SMS Retail compact disc, locate and run
	  the INSTSRV.EXE utility for your specific platform as follows:
	
	  a. At the command prompt, change to a Windows NT directory containing
	     INSTSRV.EXE, type INSTSRV and select option 1 (Install).
	
	  b. Respond to prompts following this example:
	
	     Enter service name: SMS_SITE_CONFIG_MANAGER
	     Enter domain and user name: DOMAIN\SMS Service Account
	      (This is the SMS service account used with the original SMS
	       installation, i.e. SMSADMIN)
	     Enter password: <Enter your SMS Service Account password>
	      (The password is case sensitive)
	     Enter computername: \\<server name>
	      (This is the server name of the Secondary Site server)
	     Enter path: C:\SMS\SITE.SRV\X86.BIN\SITEINS.EXE
	      (This is a local path of the SMS tree on the secondary site
	       server)
	     Autostart service during bootup? (Y/N): Y
	
	     This step will install and start the SMS Site Configuration Manager (SCMAN)
	     service onto the target computer. Afterwards, SCMAN will install and start
	     the other SMS services bringing the site up to full operational status.
	
	5. Restart all the services on the parent site.
	
	CAUTION: If you backup the entire \SMS directory and inventory new client
	computers, new UID files will be created in the \SMS\LOGON.SRV\SMSID directory.
	If you restore the entire \SMS directory, including the UID files, make sure
	that the new client computers inventoried do not have duplicate SMS ID numbers.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbdocerr kbsmsAdmin smsadmin smsdocerr 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
