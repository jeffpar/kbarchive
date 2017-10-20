---
layout: page
title: "Q152204: DBCLEAN Fix for MIF Backup to Add Date Related Field"
permalink: /kb/152/Q152204/
---

## Q152204: DBCLEAN Fix for MIF Backup to Add Date Related Field

{% raw %}

	Article: Q152204
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The site server has several thousand MIFs backed up in the dataloader box due to
	poor query performance. The Dataloader never catches up with the incoming MIFs.
	DBCLEAN does not have a Date_Key function to clean up the older MIFs and HMS
	files.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
