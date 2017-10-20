---
layout: page
title: "Q207421: SMS: Advertisements Cannot Be Deleted with Just Delete Right"
permalink: /kb/207/Q207421/
---

## Q207421: SMS: Advertisements Cannot Be Deleted with Just Delete Right

{% raw %}

	Article: Q207421
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advertisements cannot be deleted by users who have delete permissions to the
	advertisement.
	
	WORKAROUND
	==========
	
	To work around this problem, give the user advertise rights on the related
	collection and read rights on the package, along with the delete permissions on
	the advertisment itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms swdist32
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
