---
layout: page
title: "Q242011: SMS: APM Does Not Install Software on BDCs"
permalink: /kb/242/Q242011/
---

## Q242011: SMS: APM Does Not Install Software on BDCs

{% raw %}

	Article: Q242011
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Smsapm32 may not run an advertisement on backup domain controllers (BDCs) when a
	program is configured to use the client software installation account.
	Advertised Programs Manager (APM) is trying to add the Microsoft Windows NT
	client software installation account to the local Administrators group.
	
	You receive an error message similar to the following example in the Smsapm32.log
	file on the BDC:
	
	  ACCOUNT MGR : Granting Local admin rights to user 'domain1\SMSCliSftAcct'
	  ACCOUNT MGR : ERROR: NetLocalGroupAddMembers error for user
	  domain1\SMSCliSftAcct. (2226)
	  ACCOUNT MGR : Failed to add admin rights to user domain1\SMSCliSftAcct
	
	NOTE: he client software installation account e.g. SMSCliSftAcct is a user
	defined account, configurable in the Systems Management Server Admin console.
	
	CAUSE
	=====
	
	This behavior occurs because the account modification operation is incorrectly
	being performed against the BDC instead of the primary domain controller (PDC).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, manually add the Windows NT client software
	installation account to the local Administrators group in the domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Prior to running a program, you can use Nconnect.exe to specify universal naming
	convention (UNC) paths to network servers that each client connects to using one
	of the Systems Management Server client network connection accounts.
	Nconnect.exe lets APM run programs under the smsclitokn& account and gain
	access to specific network resources.
	
	The Windows NT client software installation account also provides this ability,
	but has the limitation regarding BDCs described in the Symptoms section of this
	article.
	
	Disadvantages of the Nconnect.exe Approach
	------------------------------------------
	
	- You must specify the paths in the static Nconnect.ini file. The network path
	  cannot be determined by the target program at run time.
	
	- You must modify the package contents to contain Nconnect.exe and
	  Nconnect.ini.
	
	- You must grant access to the target shares to each client network connection
	  account used in your enterprise.
	
	- You must use separate programs for Windows NT clients and Microsoft Windows
	  95/98 clients, because Nconnect.exe is only supported on Windows NT clients.
	
	Advantages of the Nconnect.exe Approach
	---------------------------------------
	
	- Works on BDCs.
	
	- Does not require you to configure a Windows NT client software installation
	  account because this method uses the Systems Management Server client network
	  connection accounts.
	
	You must place Nconnect.exe in the same location as the program you want to run,
	along with a configuration file that lists the UNC paths to which the program
	needs to connect. You need to change the program command line to insert the tool
	at the beginning of the command line. For example, if the following example is
	the current program command line:
	
	  myapp.exe /option1
	
	the new command line looks like the following example:
	
	  nconnect.exe myapp.exe /option1
	
	The tool makes a connection to each path listed in the configuration file, starts
	the program, waits for the program to stop, and then releases the connections
	and passes the program's exit code back to Systems Management Server. If the
	tool cannot create one or more of the connections, the program is not started
	and a status Management Information Format (MIF) causes Systems Management
	Server to report a status message containing the unsuccessful path and a
	description of the problem.
	
	Example of an Nconnect.ini file:
	
	[Status MIF]
	Manufacturer=Microsoft
	Product=Testpkg4 - nconnect
	Version=1.0
	Locale=English
	[Paths]
	Path1=\\Server2\nconnect\logs
	Path2=\\someserver\someshare
	
	
	Additional query words: prodsms 2226 fail fails spawn spawned
	
	======================================================================
	Keywords          : kberrmsg kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
