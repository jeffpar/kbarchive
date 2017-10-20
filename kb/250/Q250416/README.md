---
layout: page
title: "Q250416: Doc Err: SNACFG USER Syntax for Including the Domain"
permalink: /kb/250/Q250416/
---

## Q250416: Doc Err: SNACFG USER Syntax for Including the Domain

{% raw %}

	Article: Q250416
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the online documentation for the SNACFG USER command, the syntax for
	specifying the domain and user is incorrect. The forward slash (/) should be a
	backslash (\).
	
	MORE INFORMATION
	================
	
	SNACFG is a command line utility used to modify the configuration file. The
	command-line interface can be useful in certain situations, such as viewing a
	configuration setting quickly without starting the graphical interface, or when
	you want to store configuration commands in a command file so that they can be
	carried out easily in the future.
	
	The SNACFG USER command allows you to view, delete, or modify settings for users
	recognized by SNA Server. It also allows you to assign LUs or LU pools to 3270
	users, or assign default LUs to 5250 users. In addition, the SNACFG USER command
	allows you to add users to the list recognized by SNA Server. However, it is
	recommended that you use the SNA Server Management Console, not the SNACFG USER
	command to add users.
	
	When you use the SNACFG USER command to add, view, delete, or change settings for
	users, the Windows NT domain of the user can be specified.
	
	The online documentation states that the syntax for specifying the user's domain
	is as follows:
	
	  <Domain>/<username>
	
	However, the syntax should actually read:
	
	  <Domain>\<username>
	
	The complete command line syntax should be as follows:
	
	  snacfg [#configpath] user <Domain>\<username>
	
	To see a list of options for SNACFG USER, type the following command at the
	command prompt:
	
	  snacfg user /?
	
	For additional information about the syntax and available options for the SNACFG
	command, see the SNA Server online documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
