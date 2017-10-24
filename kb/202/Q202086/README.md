---
layout: page
title: "Q202086: SMS: Purchase Date in New Product Shows a &quot;&lt;7F&gt;&quot; instead of a &quot;2&quot;"
permalink: /kb/202/Q202086/
---

## Q202086: SMS: Purchase Date in New Product Shows a &quot;&lt;7F&gt;&quot; instead of a &quot;2&quot;

{% raw %}

	Article: Q202086
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	
	
	
	SYMPTOMS
	========
	
	When configuring the New Product date in the Software Metering section of
	Systems Management Server (SMS) version 2.0, the invalid date of 2/30/97 is
	entered and the "2" changes to a random character like the "<7F>". This will remain
	until you leave the edit box at which time the control will return to a valid
	date format. This happens when the current date is beyond 28 or a date is typed
	that is beyond 28 and then a 2 is typed into the month field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Open the Tool.
	
	2. Click the New Producticon.
	
	3. Select the 30th of any month.
	
	4. Move cursor to the Month field and type 2.
	
	Additional query words: License swmeter
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
