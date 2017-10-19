---
layout: page
title: "Q167114: SMS: PCM Service Is Now Available for Windows NT Clients"
permalink: /kb/167/Q167114/
---

## Q167114: SMS: PCM Service Is Now Available for Windows NT Clients

	Article: Q167114
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbPCM smsconfig smspcmkbfaq
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the past, the Package Command Manager (PCM) has been installed as a service
	(Pcmsvc32.exe) on Systems Management Server logon servers, but only as an
	application (Pcmwin32.exe) on Systems Management Server Windows NT clients.
	Because the client version runs as an application, packages that are run from
	PCM are run in the security context of the currently logged-on user.
	
	You can now install PCM as a service on any computer running Windows NT
	Workstation or Windows NT Server stand-alone (Intel or Alpha) that is a member
	of a Windows NT Server domain and is a Systems Management Server 1.2 client. In
	addition to the new Pcmsvc.exe file, the Pcmwin32.exe file has been changed and
	will need to be replaced on the client computers.
	
	MORE INFORMATION
	================
	
	The PCM service requires a user account that has:
	
	- Administrator privileges on the client computer.
	
	- Domain user authority to read a PCM instruction file on the Systems
	  Management Server logon server and to run a setup program in the package
	  directory on the Systems Management Server distribution server.
	
	Because it works through a user account with administrative privileges, the PCM
	service can perform tasks that the PCM application cannot. For example, it can
	install files into secured directories or make changes to secured registry
	keys.
	
	You can download installation instructions and file updates on the following
	Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt
	
	On the Web site, select "Download & Trial", then "PCM as a Service."
	
	The PCM as a service update can also be downloaded from the Microsoft Web site:
	
	  http://www.microsoft.com/servers
	
	Click Download to download the Pcmupdte.exe file to your computer. In addition to
	the files necessary for running PCM as a service, this self- extracting
	executable file also contains an Install.doc file that contains comprehensive
	information about how to install and use PCM as a service on client computers
	that are running Windows NT.
	
	
	Additional query words: prodsms rights permissions x86
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbPCM smsconfig smspcm kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
