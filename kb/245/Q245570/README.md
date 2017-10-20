---
layout: page
title: "Q245570: SMSINST: Repackaged REG_MULTI_SZ Values May Be Truncated"
permalink: /kb/245/Q245570/
---

## Q245570: SMSINST: Repackaged REG_MULTI_SZ Values May Be Truncated

{% raw %}

	Article: Q245570
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a repackage process with Systems Management Server Installer,
	REG_MULTI_SZ registry values may be truncated or corrupted when you run the
	script on another computer.
	
	CAUSE
	=====
	
	This behavior occurs because Systems Management Server Installer does not
	intercept REG_MULTI_SZ registry values that contain the percent character (%)
	properly. Systems Management Server Installer treats a string that is inside
	single percent characters as a variable rather than a static text string. To
	instruct Systems Management Server Installer to use a static text string, use
	double percent characters.
	
	WORKAROUND
	==========
	
	To work around this problem manually, edit the resulting script and look for
	"Edit Registry" script items. If found, look for registry values of the type
	"Multiple strings" and make sure that the value data uses double percent
	characters where you want to use a percent character as a static character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
