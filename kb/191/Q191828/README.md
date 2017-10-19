---
layout: page
title: "Q191828: Account Lockouts and 5711 Events on the PDC"
permalink: /kb/191/Q191828/
---

## Q191828: Account Lockouts and 5711 Events on the PDC

	Article: Q191828
	Product(s): Microsoft Windows NT
	Version(s): NT:4.0; winnt:1.2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server 4.0 
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events may fill up the System Log on the primary domain controller
	(PDC):
	
	  Event ID 5711 - Source: NETLOGON
	  Description: The partial synchronization request from the server <BDC>
	  completed successfully. X changes(s) has (have) been returned to the
	  caller.
	
	-or-
	
	  User accounts may be getting locked out sporadically.
	
	-or-
	
	  The Lsass.exe process on the primary domain controller may be using
	  high levels of CPU use.
	
	CAUSE
	=====
	
	A component of Systems Management Server called Climonnt.exe is trying to log on
	to the SMS shares on your network using an incorrect or expired password.
	
	Normally, the CLIMONNT process will wake up one time every 24 hours and try to
	connect to the SMS shares on the network using the credentials of the currently
	logged-on user. The problem occurs when a user's password has been changed or
	has expired, but the user has not logged off. The problem can also occur if a
	user's password is changed on one computer but the user is logged on with the
	old password on at least one other computer.
	
	In either scenario, the CLIMONNT process will awaken and try to connect to an SMS
	share using an old password. Since the password is incorrect, Windows NT will
	deny the connection. CLIMONNT then attempts to connect to other SMS shares that
	may be configured. It fails again. When all SMS shares have been tried
	unsuccessfully, CLIMONNT will pause for 60 seconds, and then start the entire
	process again, using the first SMS share. If an account lockout policy is in
	effect on the domain, the user's account will be locked out.
	
	This problem can also cause the LSASS process on the Windows NT primary domain
	controller to spike.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q184858
	  TITLE : SMS: CLIMON Consumes PDC LSASS Resources When Password Expired
	
	Problem Detection
	-----------------
	
	There are three ways to detect this problem.
	
	User Manager for Domains
	------------------------
	
	You can use User Manager for Domains to unlock a user account that has been
	locked. When the account is unlocked, wait 60 seconds, then reopen User Manager.
	If the user account is locked again, you may be experiencing the problem.
	
	NOTE: This method will not detect expired password problems, only bad password
	attempts that then lock out the user account.
	
	Checked Version of NETLOGON.DLL
	-------------------------------
	
	Install the checked version of Netlogon.dll on your PDC according to the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q189541
	  TITLE : Using the Checked Netlogon.dll to Track Account Lockouts
	
	When a Netlogon.log file has been produced, examine the file for the following
	lines:
	
	  08/01 08:12:26 [LOGON] SamLogon: Network logon of <DOMAIN>\<USERNAME>
	  from \\<MACHINENAME> (via <DOMAIN CONTROLLER NAME>) Returns 0xC0000234
	
	  08/01 08:14:42 [LOGON] SamLogon: Network logon of <DOMAIN>\<USERNAME>
	  from \\<MACHINENAME> (via <DOMAIN CONTROLLER NAME>) Returns 0xC000006A
	
	  08/01 08:12:26 [LOGON] SamLogon: Network logon of <DOMAIN>\<USERNAME>
	  from \\<MACHINENAME> (via <DOMAIN CONTROLLER NAME>) Returns 0xC0000071
	
	If any of the three lines above appears every 60 to 61 seconds for a given user,
	you may be experiencing the CLIMONNT problem.
	
	Status 0xC0000234 means STATUS_ACCOUNT_LOCKED_OUT. Status 0xC0000071 means
	STATUS_PASSWORD_EXPIRED. Status 0xC000006A means STATUS_WRONG_PASSWORD.
	
	Network Monitor
	---------------
	
	If you know of a client computer that you suspect may have the CLIMONNT problem,
	use Network Monitor to get a trace of all traffic going into and out of the
	client computer. Open Task Manager, and verify that the Climonnt.exe process is
	in memory. Look for the following two packets in the Network Monitor trace:
	
	  32 55.577 00609708A9D8 AA000400060C SMB C session setup & X, Username =
	  <USERNAME>, and C tree connect & X, Share = \\SERVER\SMS_SHR <IP
	  ADDRESS>
	
	  33 55.605 AA000400060C 00609708A9D8 SMB R session setup & X - NT error,
	  System, Error, Code = (113) STATUS_PASSWORD_EXPIRED <IP ADDRESS1> <IP
	  ADDRESS2> IP
	
	There may be multiple packets happening within one second, then you will see a
	pause for 60 to 61 seconds, and the packets will reoccur. When you recognize
	this pattern, use Task Manager to kill the Climonnt.exe process, and the pattern
	will stop.
	
	RESOLUTION
	==========
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack. The
	hotfix should have the following timestamp:
	
	  04/22/98   08:18 PM        182KB      Climonnt.exe (Alpha)
	  04/22/98   08:23 PM         80KB      Climonnt.exe (INTEL)
	
	This update must be installed on all computers running Windows NT.
	
	NOTE: This hotfix is included in SMS 1.2 Service Pack 4 and was fixed in SP4, not
	SP5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: sms climon climonnt account lockouts lockout expired lsass
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbSMSSearch kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400 kbSMS120
	Version           : NT:4.0; winnt:1.2,4.0
	Issue type        : kbbug
	
	=============================================================================
	
