---
layout: page
title: "Q323614: SMS: Increasing Zero-Byte Files in Replmgr.box&#92;Incoming Folder"
permalink: /kb/323/Q323614/
---

## Q323614: SMS: Increasing Zero-Byte Files in Replmgr.box&#92;Incoming Folder

{% raw %}

	Article: Q323614
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see some zero-byte .rpl or .rpt files in the site server's
	SMS\Inboxes\Replmgr.box\Incoming folder. The number of zero-byte files increases
	over time.
	
	CAUSE
	=====
	
	There is a problem with the handling of files between the Systems Management
	Server (SMS) Despooler and SMS Replication Manager components. The despooler may
	receive "Access denied" (Win32 Error 5) error responses when it tries to move
	files to the Replmgr\Incoming folder. The error response occurs because
	Replication Manager is still processing the file. This leaves a uniquely named
	zero-byte file in the Incoming folder in preparation for the last file move.
	Over time, the number of zero-byte files may increase.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The hotfix that was originally provided for the problem that is described in this
	Microsoft Knowledge Base article is no longer available. The hotfix that is
	described in the following Microsoft Knowledge Base article supercedes the
	original hotfix:
	
	  Q324204 SMS: Collections That Are Based on Complex Queries Do Not Update
	
	To resolve the problem that is described in this article, you must install the
	hotfix for article Q324204.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
