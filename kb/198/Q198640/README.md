---
layout: page
title: "Q198640: SMS: NDS Container Script Is Not Modified"
permalink: /kb/198/Q198640/
---

## Q198640: SMS: NDS Container Script Is Not Modified

{% raw %}

	Article: Q198640
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbNDS
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NDS container script is not modified.
	
	CAUSE
	=====
	
	If the NDS container script has not been updated with the Systems Management
	Server login script commands and the Site Settings-Client Installation
	Methods-Logon Settings tab has been enabled from within the Systems Management
	Server Administrator Console, this problem is most likely a rights issue.
	
	WORKAROUND
	==========
	
	Make sure that the NDS account listed in the Site Settings-Connection
	Accounts-Site system has proper rights to update the container and to modify the
	login script.
	
	Even if the account is made ADMIN equivalent, the account might be restricted if
	it is also made a trustee of the container, but not given proper rights. If the
	account is ADMIN equivalent it should be given the Supervisor OBJECT right and
	the Supervisor PROPERTY right. To add appropriate NDS Rights, do the following:
	
	1. Go into Nwadmin.
	
	2. Highlight the container that will contain System Management Server systems,
	  right-click on it and select TRUSTEES OF THIS OBJECT.
	
	3. If the account shows as a trustee of the container (which would have been
	  done manually), highlight the account.
	
	4. In the OBJECT pane, click on the box to the left of SUPERVISOR.
	
	5. If ALL PROPERTIES is selected in the PROPERTY pane, click on the box to the
	  left of SUPERVISOR.
	
	6. If you want to restrict the account to only certain properties, choose LOGIN
	  SCRIPT in the SELECTED PROPERTIES section and enable Write as the minimum
	  right required (refer to Novell Dynatext).
	
	Additional query words: prodsms netware nwroles
	
	======================================================================
	Keywords          : kbsms200 kbNDS 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
