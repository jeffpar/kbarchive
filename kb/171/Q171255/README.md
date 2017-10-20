---
layout: page
title: "Q171255: and /Pwd: Parameters Fail In SNA Server 3.0"
permalink: /kb/171/Q171255/
---

## Q171255: and /Pwd: Parameters Fail In SNA Server 3.0

{% raw %}

	Article: Q171255
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
	
	An SNA Server client running the SNA Server 3.0 (or 3.0 SP1) Windows 3.x client
	is not able to establish a sponsor connection to an SNA Server if Wnap.exe is
	autostarted using the /User: and /Pwd: parameters to automate the client logon.
	The following is an example of a WNAP command that uses these parameters
	
	  wnap /user:<username> /pwd:<password>
	
	where <username> is a valid Windows NT user name and <password> is
	the password for this user name.
	
	When the sponsor connection fails, you receive the following error message:
	
	  SNA Server Warning: 629
	  No SNA Server Configuration Broadcast received.
	  A Server must be available before you can use 3270 or APPC.
	
	The problem does not occur if the parameters are all uppercase.
	
	The /User: and /Pwd: parameters are documented in Appendix A of the SNA Server
	version 3.0 "Planning Guide."
	
	CAUSE
	=====
	
	The Wnap.exe program included with the SNA Server 3.0 Windows 3.x client does
	not correctly parse the /User: and /Pwd: parameters if they are entered in mixed
	case or lowercase.
	
	RESOLUTION
	==========
	
	To work around this problem, when you autostart WNAP, specify the two parameters
	in uppercase as shown here:
	
	  "wnap /USER:<username> /PWD:<password>" (without the quotation
	  marks)
	
	NOTE: The arguments that you enter for USER and PWD do not need to be uppercase.
	
	The Wnap.exe program has been updated to correctly parse these parameters in all
	cases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
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
