---
layout: page
title: "Q165650: Command Line Configuration Fixes for SNA Server 3.0"
permalink: kb/165/Q165650/
---

## Q165650: Command Line Configuration Fixes for SNA Server 3.0

	Article: Q165650
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	1. SNA Server Did Not Support the Local LU Syncpoint Option
	
	
	2. "Use Client/Server Encryption" Not Supported Using /Print Option
	
	
	3. Session Level Security Settings Not Supported
	
	
	4. MaxSendRU is Displayed Three Times When Using Mode Option
	
	
	5. Deleting User Without DomainName May Delete Wrong User
	
	
	6. SNACFG Connection Command Problems
	
	
	7. SNACFG Doesn't Support Different LOCAL Network Name and Control Point Name
	  for Each Connection
	
	
	SYMPTOMS
	========
	
	1. SNA Server Did Not Support the Local LU Syncpoint Option
	
	  SYMPTOMS
	
	  SNACFG does not support "Use Client/Server Encryption" flag for Local APPC
	  LUs.
	
	  RESOLUTION
	
	  A fix is available to correct this problem. The syntax is:
	
	  SNACFG [#configpath] User <username> /add /syncpoint: yes | no
	
	  It also works with /print.
	
	
	2. "Use Client/Server Encryption" Not Supported Using /Print Option
	
	  SYMPTOMS
	
	  The following command does not display the "Use Client/Server Encryption" flag
	  for users or user groups:
	
	  SNACFG [#configpath] User <username> /Print
	
	  RESOLUTION A fix is available to correct this problem.
	
	
	3. Session Level Security Settings Not Supported
	
	  SYMPTOMS
	
	  SNACFG does not support the APPCRLU session-level security options.
	
	  RESOLUTION
	
	  A fix is available to correct this problem. The following is the syntax:
	
	  SNACFG APPCRLU /SECURITY:{ None,text | Hex,text | Char,text }
	
	  It also works with /print.
	
	
	4. MaxSendRU is Displayed Three Times When Using Mode Option
	
	  SYMPTOMS
	
	  The following command will display the MaxSendRU value three times in error:
	
	  c:> snacfg mode <modename> /print
	
	  RESOLUTION A fix is available to correct this problem.
	
	
	5. Deleting User Without DomainName May Delete Wrong User
	
	  SYMPTOMS
	
	  Snacfg.exe allows the deletion of users without specifying the domainname. The
	  following command deletes the first user named Fred that it finds:
	
	  c:> snacfg user Fred /delete
	
	  RESOLUTION A fix is available to correct this problem.
	
	
	6. SNACFG Connection Command Problems
	
	  SYMPTOMS
	
	  When using the connection option of SNACFG, you have the following results:
	
	   - The XID parameter is not output by /PRINT.
	
	   - If a connection is set to use XID0, restoring the config via SNACFG will
	     set it to XID3.
	
	   - The remote end parameter is not preserved. The /PRINT converts peer to
	     host. After restoring the config, downstream is converted to peer.
	
	  RESOLUTION A fix is available to correct this problem.
	
	
	7. SNACFG Doesn't Support Different LOCAL Network Name and Control Point Name
	  for Each Connection
	
	  SYMPTOMS
	
	  SNACFG doesn't support different LOCAL Network Name and Control Point Name for
	  each connection.
	
	  RESOLUTION
	
	  A fix is available to correct this problem.
	
	  The following command allows a Local Network Name and Control Point Name to be
	  added for each connection:
	
	  c:> snacfg [#configpath] connection <connectionname> /netname
	  /cpname
	
	
	STATUS
	======
	
	Microsoft has confirmed these to be problems in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
