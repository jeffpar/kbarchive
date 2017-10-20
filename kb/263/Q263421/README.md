---
layout: page
title: "Q263421: SMS: Cust. Collect's from Par. Site Don't Appear in Child's Site"
permalink: /kb/263/Q263421/
---

## Q263421: SMS: Cust. Collect's from Par. Site Don't Appear in Child's Site

{% raw %}

	Article: Q263421
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, collections defined at a parent site do not appear in the
	collection hierarchy of a child site. A symptom of this problem is the
	generation of status message "2528." This status message defines which
	collection (or subcollection) is causing the problem. After the collection has
	been identified, you may find that one or more of the .psd files, which are
	pending in the SMS\INBOXES\Colleval.box file for the collection, are
	experiencing problems.
	
	CAUSE
	=====
	
	This problem typically occurs when defining a subcollection. When you add this
	new subcollection, the parent collection (including the new subcollection) must
	be copied down to the child site. This is because the addition of a
	subcollection is considered a change to the parent collection.
	
	When the collections are received at the child site, the new subcollection is
	saved, but the parent is not. The parent site then checks to make sure that each
	of its children exist in the database. Child sites that do not exist in the
	database are placed back in the queue for reprocessing at a later time.
	
	WORKAROUND
	==========
	
	On the parent site under collections, click Update Collection Membership for the
	missing collection. It is not necessary to update all subcollections because
	they will still be waiting to be processed at the child site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	This problem seems to occur in sites that were upgraded from Systems Management
	Server (SMS) 1.2 to SMS 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
