---
layout: page
title: "Q171623: Unable to Define a Low-Priority LUA LU in SNA Server Manager"
permalink: /kb/171/Q171623/
---

## Q171623: Unable to Define a Low-Priority LUA LU in SNA Server Manager

{% raw %}

	Article: Q171623
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you define an LUA LU in SNA Server Manager, there is no way to indicate
	that the LUA LU is low priority. Instead, all LUA LUs created using SNA Server
	Manager are defined as high priority, so that all traffic flowing over the LUA
	LU is handled at the same priority as 3270 LUs.
	
	You can set the priority in SNA Server version 2.x. The SNA Server 2.x
	Administrator program supports configuration of the LUA LU priority through the
	"High Priority LU" checkbox located in the LUA LU Properties dialog box.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Use the Snacfg.exe command line configuration program to add a low- priority
	  LUA LU, using the following command:
	
	  "SNACFG LUA <luaname> /ADD /CONNECTION:<name>
	  /LUNUMBER:<value> /HIGHPRIORITY:No" (without the quotation marks)
	
	  -OR-
	
	- To change an existing LUA LU to low priority, use this command:
	
	  "SNACFG LUA <luaname> /HIGHPRIORITY:No" (without the quotation marks)
	
	  -OR-
	
	- If the above command-line configuration method is not possible, see the fix
	  to SNA Server Manager referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
