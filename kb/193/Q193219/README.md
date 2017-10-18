---
layout: page
title: "Q193219: Member Server Role Cannot Be Changed to Domain Controller"
permalink: kb/193/Q193219/
---

## Q193219: Member Server Role Cannot Be Changed to Domain Controller

	Article: Q193219
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is important to plan your domain carefully. You cannot change a computer's
	role from member server to domain controller without reinstalling Windows NT
	Server.
	
	What Is the Difference Between a Domain Controller (DC) and a Server?
	---------------------------------------------------------------------
	
	A member server:
	
	- Does not get a copy of the domain account database, but does have access to
	  it if it is a member of the domain.
	
	- Maintains its own local user account database.
	
	- Does not process domain logons.
	
	- Has the same built-in user groups as a Windows NT Workstation (including
	  Power Users).
	
	- Can be configured as a member of a domain or workgroup.
	
	MORE INFORMATION
	================
	
	It is sometimes necessary to make a determination on the role of a server in the
	domain. Use one of these methods to determine the computer's role.
	
	Method 1
	--------
	
	1. Click Start and then click Programs.
	
	2. Click Command Prompt.
	
	3. At the command prompt, type "net accounts" (without quotation marks). Press
	  ENTER.
	
	You will see a list of information and the last line of information will say
	computer role.
	
	Sample of the output:
	
	  c:\>NET ACCOUNTS
	  Force user logoff how long after time expires?:       Never
	  Minimum password age (days):                          0
	  Maximum password age (days):                          42
	  Minimum password length:                              0
	  Length of password history maintained:                None
	  Lockout threshold:                                    Never
	  Lockout duration (minutes):                           30
	  Lockout observation window (minutes):                 30
	  Computer role:                                        PRIMARY
	  The command completed successfully.
	
	Method 2
	--------
	
	1. Right-click Network Neighborhood.
	
	2. Click Properties.
	
	3. Click the Identification tab
	
	4. Click Change.
	
	If you have the ability to change the computer to a workgroup, the server is a
	member server; this will not be an option if the server is a domain controller.
	
	Method 3
	--------
	
	1. Click Start, click Programs, and then select Administrative Tools.
	
	2. Click Server Manager.
	
	3. Check the role of the computer in Server Manager.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q126436 Q&A: The Role of a Windows NT Server in a Domain
	
	
	Additional query words: Member Server Role upgrade promote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
