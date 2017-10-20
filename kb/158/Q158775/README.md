---
layout: page
title: "Q158775: 3270 Emulator Fails To Enforce SNA User/Group Assignments"
permalink: /kb/158/Q158775/
---

## Q158775: 3270 Emulator Fails To Enforce SNA User/Group Assignments

{% raw %}

	Article: Q158775
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbProgramming kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following problems have been observed by various third party 3270 emulation
	products when being used with SNA Server:
	
	1. A User is allowed to open multiple instances of same pool
	
	  When you assign a single pooled 3270 LU to a user or group using the SNA
	  Server Administrator program or SNA Server Manager, the 3270 emulator being
	  used should not allow the user to open multiple sessions through a single
	  instance of the pool. However, in some cases it does allow the user to open
	  multiple instances of the pool.
	
	  This problem has been observed with some third-party emulators that do not
	  closely follow the SNA Server 3270 Emulator Interface Specification. SNA
	  Server does not prevent the emulator from attempting to open multiple
	  instances of a single pooled LU, because the client may be communicating
	  through multiple SNA Servers.
	
	  To grant access to multiple pooled sessions, the administrator must grant
	  multiple instances of a pooled LU to the user or group.
	
	  The following products are known to exhibit this problem:
	
	   - IBM Personal Communications/3270 v4.0 (fix available from IBM)
	
	
	   - Attachmate Extra! Personal Client v6.1 (32-bit)
	
	
	2. A User is allowed to manually enter a 3270 LU or pool to open
	
	  Some emulators allow the user to manually configure the 3270 LU name or pool
	  name for a user to open. However, this circumvents the User/Group/Workstation
	  3270 LU assignments configured on the SNA Server. While a user will not be
	  allowed to open an LU that they do not have access to on the server, the
	  emulator should only display a list of LU's assigned to the user (which the
	  emulator retrieves by calling the sepdcrec() SNA client API function).
	
	
	MORE INFORMATION
	================
	
	The following describes issue #2 in more detail:
	
	The administrator grants access to 3270 LU's to users or groups.
	
	In SNA Server Admin (2.x) or Manager (3.x) you may have the following configured,
	for example:
	
	LU Pool:
	
	- 3270POOL: 3270 LU pool name
	
	- contains multiple 3270 LU's of same type, from multiple connections and/or
	  servers
	
	NTDOMAIN\Domain Users
	
	  Session 1: 3270POOL
	
	NTDOMAIN\JohnDoe
	
	  Session 1: 3270POOL
	  Session 2: 3270POOL
	  Session 3: 3270POOL
	
	In the above configuration example, a single instance of "3270POOL" is granted to
	the Domain Users group, while three instances of "3270POOL are granted to
	JohnDoe.
	
	When a 3270 emulator is started, it requests the user's 3270 record by calling
	the SNA Server client "sepdcrec" function. The SNA client then returns a data
	structure (tecwrkus) to the 3270 emulator (documented in the "SNA Server
	Emulator Interface Guide," Chapter 6: "Configuration Information"), including:
	
	- list of 3270 LUs assigned to the user or group (cwsesdat[10] and cwremap[]
	  list)
	
	- maximum number of active sessions to allow (cwmaxses)
	
	- number of sessions for this user (cwnumrec)
	
	If JohnDoe starts a 3270 session, the SNA client returns three instances of
	"3270POOL" to the 3270 emulator (even if JohnDoe is a member of the Domain Users
	group). The emulator should allow up to three instances of "3270POOL" to be
	opened, but no more.
	
	If a user is a member of the Domain Users group, and a 3270 session is started,
	the SNA client returns a single instance of "3270POOL" to the 3270 emulator. The
	emulator should only allow a single instance of the pool to be opened by the
	user.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbProgramming kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : :2.0,2.1,2.11,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
