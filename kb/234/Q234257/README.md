---
layout: page
title: "Q234257: SMS: Secondary Site Server Processor Utilization Is Always High"
permalink: /kb/234/Q234257/
---

## Q234257: SMS: Secondary Site Server Processor Utilization Is Always High

{% raw %}

	Article: Q234257
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections kbSoftwareDist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server (SMS) 2.0 Secondary Site Server, one of the
	following may occur:
	
	- Processor utilization may be unusually high when the SMS_Executive service is
	  running.
	
	- The drive with Systems Management Server may fill due to large .clf files in
	  the Sms\Inboxes\Colleval.box directory.
	
	- Advertisements targeted for a collection go to all resources that were
	  members in the given collection at any time in the past.
	
	- A backlog of .psd files forms in the Sms\Inboxes\Colleval.box directory on
	  the secondary site server.
	
	CAUSE
	=====
	
	The collection evaluator thread at secondary sites improperly processes
	collection updates.
	
	WORKAROUND
	==========
	
	Delete all the files in the Colleval.box directory. The next time the
	collections are updated at the parent site, the secondary site server will
	regenerate the contents of the sms_root_directory\Inboxes\Colleval.box directory
	automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When a change or update to a collection occurs, a re-evaluation is triggered at
	the secondary sites. The collection evaluator thread at the secondary site then
	builds .clf files to represent collection membership at the secondary site
	because there is no SQL server database available.
	
	Collection evaluator then appends the updated membership list of a given
	collection to the existing .clf file for that collection rather than replacing
	the .clf file. The appending action leaves the previous entries that may or may
	not still be valid members of the collection in the .clf file. Also, this adds
	duplicate information to the .clf file, and slows future processing of the .clf
	file because of increased file size.
	
	Eventually the collection evaluator thread can't process updates as fast as
	necessary and the collection evaluator develops a backlog of .psd files. When
	there is a backlog of .psd files, the collection evaluator thread is constantly
	processing resulting in high CPU utilization by the SMS Executive process.
	
	Additional query words: prodsms offers ads colleval
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
