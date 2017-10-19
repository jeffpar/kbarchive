---
layout: page
title: "Q260541: Uninstalling Client by Removing Site Boundaries Leaves Files"
permalink: /kb/260/Q260541/
---

## Q260541: Uninstalling Client by Removing Site Boundaries Leaves Files

	Article: Q260541
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removing site boundaries from a site without disabling the Modify User Logon
	Scripts setting at the site does not ensure that all Systems Management Server
	(SMS) 2.0 files are removed from the clients. The client is uninstalled from the
	site, but retains some common base SMS client files if it logs on to the network
	after being uninstalled.
	
	CAUSE
	=====
	
	SMS uninstalls the client components when site boundaries are removed. However,
	because the the Modify User Logon Scripts setting is still enabled for Windows
	Networking Logon Client Installation or Windows Networking Logon Discovery, the
	client runs the SMS logon script the next time a user logs on. Therefore, the
	client receives some of the base component files to assess site assignment.
	Because there are no boundaries for the site, however, the assignment does not
	succeed. This leaves behind the common files that were copied to the client.
	
	WORKAROUND
	==========
	
	Disable the Modify User Logon Scripts setting in Windows Networking Logon Client
	Installation or Windows Networking Logon Discovery before you remove site
	boundaries, or wait until all users have logged on to the network before
	removing the site boundaries.
	
	If the files exist on a client workstation after you have removed the site
	boundaries and did not disable the Modify User Logon Scripts option, remove the
	files manually by running Cliunins.exe or 20clicln.bat, or reassign the client
	to another site and then uninstall it by running "smsman /u" from the
	Smslogon\X86.bin\00000409 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The following files may remain on client workstations in the MS\SMS\Core\Bin
	folder after the logon script is run, even though no valid site boundaries exist
	for the client workstation:
	
	  Abnwcli.dll
	  Bindclin.dll
	  Boot32wn.exe
	  Clibase.dll
	  Clicore.exe
	  Cliex32.dll
	  Clilog.dll
	  Cliunins.exe
	  Cliver
	  Coreinst.log
	  Delpath.exe
	  Discv_nd.dll
	  Falclin.dll
	  Mfc42.dll
	  Mslmclin.dll
	  Msvcrt.dll
	  Nalcli.dll
	  Ndsclin.dll
	  Slownet.exe
	  Smsboot1.exe
	  Smscfg.cpl
	  Smsclreg.dll
	  Smscstat.dll
	  Smsdiscv.dll
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
