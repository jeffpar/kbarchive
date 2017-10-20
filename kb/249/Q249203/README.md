---
layout: page
title: "Q249203: Site Attachment Fails or Causes Damaged Data at the Parent Site"
permalink: /kb/249/Q249203/
---

## Q249203: Site Attachment Fails or Causes Damaged Data at the Parent Site

{% raw %}

	Article: Q249203
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the inventory synchronization process initiated either manually or
	automatically as part of the site attachment process, the inventory information
	sent to the parent site may be damaged. This can lead to failure in the
	inventory synchronization operation and/or cause damaged data to be inserted at
	the parent site.
	
	CAUSE
	=====
	
	This problem is caused by the child site improperly formatting the data files
	that represent the inventory and then forwarding the improperly formatted data
	files to the parent site. Upon reception, the parent site attempts to insert the
	data as formatted, causing invalid data to be inserted or insertion failures
	resulting in damaged information and/or failed inventory synchronization. This
	is the result of a buffer overflow during the site attachment file construction
	at the child site and can cause damage at 8 kilobyte (KB) intervals within site
	attachment data files. If the data that is damaged during this process is
	validated by SQL server prior to insertion into the site database (as with
	date/time fields), a failure will cause the attachment process to fail. If the
	data that is damaged during this process is an unvalidated field such as a
	string, the corrupt data is inserted at the parent site without causing a
	failure in site attachment.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this software update should have the following
	file attributes or later:
	
	  Date        Time      Size     File name       Platform   Version
	  -----------------------------------------------------------------------
	  01/31/2000  02:01pm   129,648  Dataldr.dll     I386       1.2.0.0
	  01/31/2000  02:02pm   209,680  Dataldr.dll     Alpha      1.2.0.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug smsinst 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
