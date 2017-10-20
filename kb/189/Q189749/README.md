---
layout: page
title: "Q189749: IAS: USR/3Com Total Control Radius Logging Not Working"
permalink: /kb/189/Q189749/
---

## Q189749: IAS: USR/3Com Total Control Radius Logging Not Working

{% raw %}

	Article: Q189749
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Authentication Services for Remote Access Service version 1.0 
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	In general, here are the commands used on the USR Total Control to set up a
	Shared Secret for Radius accounting. If you have specific questions, please
	contact USR/3Com support.
	
	Commands to use if you are running USR Netserver software:
	
	1. Set authentic <IP address of radius server>;
	
	2. Set secret <secret key>;
	
	3. Set accounting <IP address of accounting server> <secret key>;
	
	4. Set acct_authchk on;
	
	5. Save all.
	
	For customers with Netserver 8/16, Netserver 8plus or other USR/3Com equipment
	that uses the newer Netserver plus code 4.1.x, a known bug exists in the 3Com
	code that does not allow a user to set up a Shared Secret for Radius accounting
	as required by RFC2139. USR/3Com has released a hotfix to this problem.
	Customers affected should contact 3Com and request "Emergency release
	4.1.86.[ASCII 148]
	
	The above steps are given as a guideline only on how to set up the USR Total
	Control. For specifics, please contact USR/3Com support.
	
	SYMPTOMS
	========
	
	When using a U.S. Robotics(USR)/3Com Total Control Chassis with Microsoft
	Internet Authentication Service (Radius), administrators may notice that the
	Radius log files do not show up properly.
	
	CAUSE
	=====
	
	There are several reasons why this may occur. Assuming authentication is working
	properly and users are able to log on, the most likely causes are as follows:
	
	- A known bug exists in the Total Control firmware. Please ensure you are
	  running version 3.6.28 or later. For more information, please contact
	  USR/3Com.
	
	- By default, Radius requires that the Shared Secret that is used for
	  authentication also be used for accounting. If no Shared Secret is set up in
	  the USR box, Radius Logs are not created.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For information about how to contact 3Com Corp., query in the Knowledge Base for
	one of the following articles:
	
	  Q65416 : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: vpn radius CIAS USR prodmcis2
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis400 kbMCISSearch kbZNotKeyword3 kbMCIS200 kbIASRAS kbIASSearch
	Version           : winnt:1.0,2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
