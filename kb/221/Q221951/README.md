---
layout: page
title: "Q221951: SMS: RAS Sender SNA Link: Error 53 During WNetAddDConnection2 ()"
permalink: /kb/221/Q221951/
---

## Q221951: SMS: RAS Sender SNA Link: Error 53 During WNetAddDConnection2 ()

{% raw %}

	Article: Q221951
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSender kbSMSSender
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RAS Sender is randomly unable to establish a connection to a remote Systems
	Management Server site using the RAS Sender over a Systems Network Architecture
	(SNA) link. The connection to the remote RAS server is properly established but
	the connection to the Systems Management Server site fails. The following error
	is reported in Sender.log:
	
	  Error during WNetAddConnection2 (53)
	
	To work around this problem, use RASDIAL to manually establish a connection to
	the RAS server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The new version of Connras.dll has been improved. A retry mechanism has been
	added to the connection component. Adding this mechanism to the Systems
	Management Server RAS Sender code allows Systems Management Server to cope with
	some "timing" problems.
	
	To install the hotfix, perform the following step on the Systems Management
	Server site server:
	
	Replace the CONNRAS.DLL file in the <SMS_root>\BIN\<Platform>
	directory with the hotfixed version on each Systems Management Server Sender.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
