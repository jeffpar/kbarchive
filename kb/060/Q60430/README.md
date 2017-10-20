---
layout: page
title: "Q60430: Security Issues with LAN Manager 2.0 and 2.1"
permalink: /kb/060/Q60430/
---

## Q60430: Security Issues with LAN Manager 2.0 and 2.1

{% raw %}

	Article: Q60430
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following are questions and answers about security issues that pertain to
	OS/2 LAN Manager versions 2.0, 2.1, 2.1a, and 2.2.
	
	1. Q. What security is available for LAN Manager API calls? For example, I am
	  able to modify a user's full name through an OS/2 server script issuing a
	  NetUserSetInfo() call without being logged on either at the workstation or by
	  issuing a NetWkstaSetUID() prior to (or even after) executing
	  NetUserSetInfo(). When I tried to do this, however, through the NET USER
	  command at the OS/2 prompt, I received a "system access denied" error. If
	  this is the case, couldn't someone who knows C and the APIs wreak havoc upon
	  the system?
	
	  A. When a remote call is made to change any user account information, remote
	  users must have admin privileges to make changes in any account other than
	  their own, so user account information is protected from unwarranted access
	  by remote users.
	
	  On the (local) server, any user can make a NetUserSetInfo() call and make
	  changes to a user account. If you need to secure your server's user account
	  system (UAS), you need to use local security (run SECURESH.EXE).
	  Alternatively, you can run "NET CONSOLE", which does not let anyone other
	  than the administrator change the screen group, thereby securing the user
	  account system.
	
	  The Net Admin interface checks the privilege for you before you can change any
	  user account system.
	
	2. Q. On an OS/2 server running LAN Manager 2.0, 2.1, 2.1a, or 2.20 with local
	  security (SECURESH.EXE), will a background process that modifies the UAS,
	  without the process first issuing a NetWkstaSetUID2() in order to log on
	  (nobody is currently logged on the workstation), be able to modify the UAS?
	
	  A. When nobody is currently logged on, the user/process has LOCAL security.
	  Therefore, if the LOCAL group has been granted RWX privileges (as opposed to
	  RX or R only privilege), the program will modify the UAS.
	
	  The only way to stop a person or process from changing the UAS is by not
	  granting that person or process the W privilege. To do this, give the USERS
	  group (default group when you add a user account) only the RX privilege for
	  the LAN Manager tree (for example, C:\LANMAN), and grant the W privilege only
	  to limited people for the LAN Manager tree as well.
	
	3. Q. On an OS/2 server running LAN Manager 2.0, 2.1, 2.1a, or 2.20 with no
	  local security, but with NET CONSOLE running, will a background process that
	  modifies the UAS, without the process first issuing a NetWkstaSetUID2() in
	  order to log on (nobody is currently logged on the workstation), be able to
	  modify the UAS?
	
	  A. Yes, a background process can change the UAS even when NET CONSOLE is
	  running.
	
	4. Q. On an OS/2 server running LAN Manager 2.0, 2.1, 2.1A, or 2.20 with local
	  security (SECURESH.EXE), will a background process that modifies items
	  outside the scope of the UAS (servers, shared resources, print jobs, and so
	  on) without the process first issuing a NetWkstaSetUID2() in order to log on
	  (nobody is currently logged on the workstation), be able to modify these
	  items?
	
	  A. You must prevent the person from launching a background process. The
	  following scenario explains why.
	
	  Suppose ADMIN is logged off. At this time, if a person named TEST wants to log
	  on, the RX privilege must be granted to the LOCAL group for the LAN Manager
	  and OS/2 tree (to be able to run NET LOGON). After logging on, TEST launches
	  a background process that checks to see if it can change the UAS. TEST
	  receives error 2199 at this time, as the LOCAL group has only RX privileges
	  and no W privilege. Therefore, TEST may (Dos)Sleep() for a while and try
	  again later.
	
	  Suppose that in the meantime, ADMIN returns and logs on (NET LOGON). Now the
	  background process can change the UAS. The current local user is ADMIN, who
	  has all privileges.
	
	  The only way to prevent this from happening is to avoid giving any privileges
	  to the LOCAL group so that once ADMIN logs off NOBODY can access or run any
	  programs, including NET LOGON. In such a system, PRIVINIT.CMD (which is
	  executed when the system is booted) must look like this:
	
	  net start server
	  net logoff
	
	  The administrator can put NET ADMIN in this command file as well, but should
	  set up the UAS once, and from then on just use the server over the network.
	  Should the administrator later decide to change the UAS for accessing the
	  server locally or for some other reason, the best method is to change the UAS
	  over the network by remote command (NET ADMIN \\<remote computer
	  name>).
	
	  Such a server, then, becomes completely secure against any local intrusion.
	
	5. Q. On an OS/2 server running LAN Manager 2.0, 2.1, 2.1a, or 2.20 with no
	  local security, but with NET CONSOLE running, will a background process that
	  modifies items outside the scope of the UAS (that is, servers, shared
	  resources, print jobs, and so on) without the process first issuing a
	  NetWkstaSetUID2() in order to log on (nobody is currently logged on the
	  workstation), be able to modify these items?
	
	  A. You must look at specific APIs. However, in any case, the background
	  process can just wait until someone with ADMIN privilege logs on. At this
	  time, the background process can execute any ADMIN level API as well as any
	  other API.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
