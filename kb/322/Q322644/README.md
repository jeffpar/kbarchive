---
layout: page
title: "Q322644: Remote Administration Using TNADMIN with -S, -K, or -M Fails"
permalink: /kb/322/Q322644/
---

## Q322644: Remote Administration Using TNADMIN with -S, -K, or -M Fails

{% raw %}

	Article: Q322644
	Product(s): Microsoft Windows NT
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Windows Services for UNIX 2.0, and you use the tnadmin command
	with either the -s, the -k, or the -m parameter to remotely administer a Telnet
	server that is running Windows Services for UNIX 3.0, the command may not work.
	Alternatively, this command may not work if you are using Windows Services for
	UNIX 3.0 to administer a Telnet server that is running Windows Services for UNIX
	2.0 or if you are using Windows Services for UNIX 2.0 to administer a Telnet
	server that is running Windows Services for UNIX 2.0.
	
	CAUSE
	=====
	
	This problem occurs because of changes to Telnet Server that occur if you apply
	the Q301514 hotfix that is described in the following Microsoft Knowledge Base
	article:
	
	  Q301514 Memory Leak in Telnet Server
	
	RESOLUTION
	==========
	
	To resolve this issue, apply the Q301514 hotfix that is described in the
	preceding section to all computers that are running Windows Services for UNIX
	2.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The usage requirements for the following tnadmin command parameters have
	changed:
	
	- -s: List sessions
	- -k: Kill sessions
	- -m: Send message
	
	The Q301514 hotfix includes security fixes that affect how these parameters are
	used. To use these parameters, you must be an administrator on the remote
	computer. If you use a parameter other than the parameters that are described in
	this section with the tnadmin command, you can pass credentials on the command
	line; however, the parameters that are described in this section do not allow
	you to pass credentials because of security limitations.
	
	Operational Functionality
	-------------------------
	
	- If you are using Windows Services for UNIX 2.0 without the hotfix to
	  administer a server that is running Windows Services for UNIX 2.0 with the
	  hotfix, the tnadmin command with any of the parameters described in the
	  "Summary" section of this article does not work.
	
	- If you are using Windows Services for UNIX 2.0 without the hotfix to
	  administer a server that is running Windows Services for UNIX 3.0, the
	  tnadmin command with any of the parameters described in the "Summary" section
	  of this article does not work.
	
	- If you are using Windows Services for UNIX 2.0 with the hotfix to administer
	  a server that is running Windows Services for UNIX 2.0 with the hotfix, the
	  tnadmin command with any of the parameters described in the "Summary" section
	  of this article works as expected.
	
	- If you are using Windows Services for UNIX 2.0 with the hotfix to administer
	  a server that is running Windows Services for UNIX 3.0, the tnadmin command
	  with any of the parameters described in the "Summary" section of this article
	  works as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
