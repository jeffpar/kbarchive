---
layout: page
title: "Q230255: SMS: Wuser32 Service Hangs on Windows NT Clients"
permalink: kb/230/Q230255/
---

## Q230255: SMS: Wuser32 Service Hangs on Windows NT Clients

	Article: Q230255
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows NT-based clients that are using network discovery and
	remote client installation, if you log off or reboot within 15 minutes of
	logging on, the Wuser32 service hangs with an "End task" message. During this
	time, the Systems Management Server (SMS) Remote Control service does not appear
	in the Services tool in Control Panel, and the client cannot be remotely
	controlled.
	
	CAUSE
	=====
	
	The following text is an excerpt from a sample Wuser32.log file:
	
	  Using security type 2
	  Init TCPIP
	  RegQueryValueEx of Verify Port returned 0
	  RegQueryValueEx of View Port returned 0
	  ** TCP Stream Viewee Thread starting
	  ** Starting TCPStreamSendThread
	  Desktop Change thread started: 8B
	  Desktop is different
	  Creating Main Windows
	  UPW: no parent window setting values to invalid
	  Creating main dialog on desktop 144, Default
	  Initdialog!
	  ghwndParent = 50080
	  ghwndDlg = 40036
	  ghwndInvisible = 30066
	  Unable to lookup account name Administradores
	  Unable to lookup account name Administrateurs
	  Unable to lookup account name Administratoren
	  Unable to lookup account name Administratorer
	  Unable to lookup account name Administratrer
	  Added Administrators. ACE count: 1 size: 4096
	  Unable to lookup account name Amministratori
	  Unable to lookup account name Beheerders
	  Unable to lookup account name Jrjestelmnvalvojat
	  Added DACL - ACE count: 1
	
	This behavior can occur in a multiple-domain, multiple-full-trust environment
	with Windows NT 3.51-based and 4.0-based primary domain controllers (PDCs). It
	takes about one minute for each permitted viewer in the Permitted Viewers list
	to be authenticated (or return from an unsuccessful authentication attempt). The
	authentication process begins as soon as the Client agent starts, and spends one
	minute on each entry in the Permitted Viewers list. This is an uncorrectable
	problem with Windows NT when it creates Access Control Lists (ACLs) for user and
	user group names in complex environments. Wuser32.exe is waiting for a Windows
	NT-based API call for a return from the Windows NT domain authentication system.
	The Wuser32 agent may seem to hang if a shutdown is performed during one of
	these attempts to authenticate an ACL.
	
	WORKAROUND
	==========
	
	Edit the Permitted Viewers list on the site server to remove unnecessary groups.
	Add a domain name to each remaining user group by replacing "Administrators"
	with "<DOMAIN>\Administrators"
	. If you change the settings on the Advanced tab after the Remote Control Client
	agent is installed on clients, the previously installed clients receive the new
	settings during the next 23-hour Client Component Installation Manager (CCIM)
	cycle.
	
	If you have disabled security reconciliation on clients, you must manually update
	the clients with the new settings. To do so, disable and re-enable Remote Tools
	in the SMS Administrator console. After you disable Remote Tools, wait for all
	clients to recognize the change and uninstall the Remote Control Client agent.
	Then, re-enable Remote Tools in the SMS Administrator console. This method is
	easy, but may not be suitable for many networks because of the brief loss of
	Remote Tools functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
