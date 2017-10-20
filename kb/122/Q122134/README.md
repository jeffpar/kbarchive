---
layout: page
title: "Q122134: Cannot Use Leading Spaces in a String for an Inventory Rule"
permalink: /kb/122/Q122134/
---

## Q122134: Cannot Use Leading Spaces in a String for an Inventory Rule

{% raw %}

	Article: Q122134
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a string that contains leading spaces in the Systems Management
	Server Administrator Inventory Rules dialog box for a software inventory rule,
	the inventory rule string returns in quotation marks with the leading spaces
	removed. This prevents the administrator from specifying a string with leading
	spaces for an inventory rule.
	
	CAUSE
	=====
	
	This is a known situation with Systems Management Server Administrator in
	Microsoft Systems Management Server, which removes leading spaces in a string.
	
	FILETOKN -S <filename> returns 10 byte strings, each offset by 10 bytes
	from the previous. It can return several strings at 10 byte offsets with leading
	spaces, depending on the file. The Systems Management Server administrator can
	erroneously assume that these strings with leading spaces can be used to
	uniquely identify the software package. But because SMS Administrator won't
	allow leading spaces, these strings cannot be used.
	
	RESOLUTION
	==========
	
	When you run FILETOKN -S <filename>, the results can look like this:
	
	  10 "1234567890"
	  20 " 23 56 890"
	  30 "  34567890"
	  40 "   4567890"
	
	Theoretically, you could specify an inventory rule with the string "1234567890"
	at offset 10 or " 4567890" at offset 40. With Systems Management Server
	Administrator removing leading spaces, the second example is wrong, to use this
	string you would need to specify the address 40+3=43 with the string "4567890".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
