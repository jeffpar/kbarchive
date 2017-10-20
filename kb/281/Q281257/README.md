---
layout: page
title: "Q281257: SMSINST: Access Violation When Appending Data to REG_MULTI_SZ"
permalink: /kb/281/Q281257/
---

## Q281257: SMSINST: Access Violation When Appending Data to REG_MULTI_SZ

{% raw %}

	Article: Q281257
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 smsinst
	Last Modified: 05-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Edit Registry script item to append a large piece of data to an
	existing REG_MULTI_SZ registry value, you may receive the following access
	violation message when you try to run the compiled script:
	
	  SMSISTUB caused an access violation in ADVAPI32.dll at 0x77ddc1f0
	
	NOTE: The actual memory address may vary.
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	- While in Script Editor mode, click Edit, and then click Installation
	  Properties. Then, in the Destination Platforms box, click "32-bit Windows
	  (32-bit EXE)", and then recompile the script.
	
	  -or-
	
	- Use an external registry editing utility when you need to append a large
	  piece of REG_MULTI_SZ data. You can call this external registry editing
	  utility by using the Execute Program script item.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms crash av access violation smsistub advapi32 true 32 bit
	
	======================================================================
	Keywords          : kberrmsg kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
