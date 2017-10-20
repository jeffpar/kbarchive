---
layout: page
title: "Q305164: SMS: Remote Control Clients May Not Be Contacted by the Console"
permalink: /kb/305/Q305164/
---

## Q305164: SMS: Remote Control Clients May Not Be Contacted by the Console

{% raw %}

	Article: Q305164
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 clients that are configured to use NetBIOS
	for remote control (instead of TCP/IP) may not be found when you try a remote
	control session from an SMS Administrator console. You receive a "Remote Control
	Agent not found" error message when you try a remote control session. If you run
	the "netstat -a" command on the target client, you see that Wuser32 is
	registered by using an uppercase NetBIOS name. If you view a Network Monitor
	capture from the Administrator console, you see that the Remote.exe process is
	trying to contact the Remote Control agent by using a lowercase NetBIOS name.
	This causes the Administrator console not to be able to connect to the client.
	
	CAUSE
	=====
	
	The NetBIOS name that is stored in the SMS database for the client uses
	lowercase letters. The problem occurs if the site server uses only network
	discovery and if Domain Name System (DNS) is being used for name resolution.
	When network discovery creates the discovery record for a computer, the name is
	recorded in lowercase letters. Network discovery obtains the lowercase entry
	from DNS, which can store information in lowercase letters.
	
	You can also confirm that the client's resource information is in lowercase
	letters by starting the SMS Administrator console, expanding Collections,
	expanding All Systems (or any collection in which this computer name appears),
	and then locating the client. If the client is listed in lowercase letters, the
	problem may occur.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version         Size     File name   Platform
	  ---------------------------------------------------------------
	  01-Mar-01  15:00  2.00.1493.3212   78,944  Remote.exe  I386
	  01-Mar-01  15:00  2.00.1493.3212  127,760  Remote.exe  Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Configure the site to use TCP/IP as the default remote access protocol.
	
	- Use Remote.exe at a command prompt to manually change the NetBIOS name to
	  uppercase letters. For example, type "Remote 3 SERVER1" (without the
	  quotation marks).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	Additional query words: prodsms communicate connect
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
