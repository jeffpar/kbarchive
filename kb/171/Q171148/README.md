---
layout: page
title: "Q171148: Automating Detection of Logon Failures In a Windows NT Domain"
permalink: /kb/171/Q171148/
---

## Q171148: Automating Detection of Logon Failures In a Windows NT Domain

{% raw %}

	Article: Q171148
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbtshoot
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Detecting logon failures or account lockouts in a Windows NT domain with
	multiple domain controllers and trusting domains may be difficult. To do this
	manually would require the administrator to load the security event log of the
	domain controllers, member servers, workstations, and set the filter to find the
	logon failure events.
	
	MORE INFORMATION
	================
	
	Use the Dumpel.exe utility from the Windows NT Resource Kit to enable the domain
	administrator to automate this procedure.
	
	By creating a simple batch file to query the security event log of all of your
	Windows NT-based systems, you can quickly automate the process. The logon
	failure events are only recorded in the log of the resource that denied access
	to the user.
	
	To automate this procedure, perform the following steps:
	
	1. Install the Windows NT 4.0 Resource Kit.
	
	2. For each domain, create a batch file that dumps the event logs of each domain
	  member to a text file, filtering the log only on failure event IDs, as in the
	  following example:
	
	  @echo off
	  Dumpel.exe -s pdcname -l security -m security -e 529 539 >
	  %temp%\event539.txt
	  Dumpel.exe -s bdc1name -l security -m security -e 529 539 >>
	  %temp%\event539.txt
	  Dumpel.exe -s bdc2name -l security -m security -e 529 539 >>
	  %temp%\event539.txt
	  Dumpel.exe -s bdc3name -l security -m security -e 529 539 >>
	  %temp%\event539.txt
	  Dumpel.exe -s memberserver1name -l security -m security -e 529 539 >>
	  %temp%\event539.txt
	  Dumpel.exe -s workstation1name -l security -m security -e 529 539 >>
	  %temp%\event539.txt
	
	3. This will append all Event 529s and Event 539s to the event539.txt file to be
	  examined for log on problems.
	
	  Event ID 529
	  Logon Failure
	  Reason: Unknown user name or bad password
	
	  Event ID 539
	  Logon Failure
	  Reason: Account locked out
	
	Common causes for invalid logon events:
	
	- Forgotten passwords, someone is entering the wrong password.
	- An unauthorized individual is trying to gain access to the network.
	- There is a persistent network connection with an invalid password.
	- There is a service using a user account with an invalid password.
	- Trust relationship has been broken.
	
	On Service Pack 4 (SP4) and later domain controllers, event 644 can be configured
	to mark an account lockout. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q182918 Account Lockout Event also Stored in Security Event Log on DC
	
	Additional query words: hacker ntreskit log logins lockout
	
	======================================================================
	Keywords          : kbtool kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
