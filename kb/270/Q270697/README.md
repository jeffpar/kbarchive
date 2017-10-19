---
layout: page
title: "Q270697: SMS: Windows NT Clients Are Continually Prompted to Restart"
permalink: /kb/270/Q270697/
---

## Q270697: SMS: Windows NT Clients Are Continually Prompted to Restart

	Article: Q270697
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Windows NT client computer, you may receive the following
	message:
	
	  SMS Client Services Change Notification
	
	  The system management services on this client have changed. You must restart
	  the system for this change to take effect. The following components have been
	  changed:
	
	  SMNP Event-to-Trap Translator
	  Remote Control
	  SMS Client Inventory Agent
	
	In addition, the client's Sms.ini file may contain entries that indicate
	"SetupPhase=verify_files" and "FilesNotDownloaded=UINFO.XNF" (this entry may
	indicate some other file).
	
	CAUSE
	=====
	
	This issue may occur in any of the following scenarios:
	
	- The SMS client components have been updated or reinstalled.
	
	- The SMS client files are not fully installed and the SetupPhase remains in a
	  "verify_files" state and never gets set to Installed.
	
	- The Smsls.bat or Runsms.bat file has been modified to add the /f switch to
	  Cli_nt.exe. In this scenario, the client enters "Verify_files" mode every
	  time the script is executed. Do not use this switch in either script.
	
	- Client Configuration Manager on the logon servers is no longer running.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. If the SMS client files are not fully installed, verify that the files that
	  are referenced in the "FilesNotDownloaded" value in Sms.ini are located on
	  the site server and logon servers, and then copy any missing files to the
	  correct locations.
	
	  If the file was removed for a reason and you do not want it copied to the
	  client, update the copylist files (CL_<xxx>.TXT) so that these files
	  are no longer referenced. When you do so, the client Setup process is able to
	  complete and you are no longer prompted to restart your computer.
	
	2. Remove the /f switch for Cli_nt.exe from either the Smsls.bat or Runsms.bat
	  logon script.
	
	3. To determine if Client Configuration Manager is running, check the Clicfg.log
	  on the logon servers to verify that it is logging current entries.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	
