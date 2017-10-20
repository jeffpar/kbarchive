---
layout: page
title: "Q150584: Service Pack 1 for SMS 1.1 Does Not Update Clients"
permalink: /kb/150/Q150584/
---

## Q150584: Service Pack 1 for SMS 1.1 Does Not Update Clients

{% raw %}

	Article: Q150584
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you apply Service Pack 1 for SMS 1.1, your SMS clients may not receive the
	Service Pack files.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	Delete the Cl_???.txt files from your primary site
	\sms\site.srv\maincfg.box\client.src directory and from the \SMS\logon.srv
	directory. After you delete the files, run SMS Setup and reset the site.
	
	After you reset the site, Maintenance Manager will create new Cl_???.txt files
	containing a new CopyListVersion value. This new version will trigger the update
	on the SMS clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: sp1 service pack prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
