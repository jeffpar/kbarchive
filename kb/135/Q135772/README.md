---
layout: page
title: "Q135772: TMP Files Left After Deinstall of SMS Admin UI Tool"
permalink: /kb/135/Q135772/
---

## Q135772: TMP Files Left After Deinstall of SMS Admin UI Tool

{% raw %}

	Article: Q135772
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbsmsAdmin kbsmsUtil smsadmin smssetup smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use Systems Management Server Setup to deinstall the SMS Administrator
	from a computer running Windows NT Workstation version 3.1 or 3.5, Setup fails
	to remove two .TMP files in the root directory. The two files are:
	
	    Name        Size
	  --------------------
	  _@x.TMP    1,241,520
	  _@x.TMP      219,136
	
	NOTE: x represents the increment of temp files created.
	
	CAUSE
	=====
	
	These files are not deleted because they are not noted in the following registry
	location:
	
	  HKEY_LOCAL_MACHINE
	  \System\CurrentControlSet\Control\SessionManager\FileRenameOperations
	
	This registry entry is blank after the deinstall completes. Windows NT looks in
	this location for filenames to be deleted upon system startup. Because there
	were no entries present, no files were deleted.
	
	WORKAROUND
	==========
	
	To work around this problem, manually delete the files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbsmsAdmin kbsmsUtil smsadmin smssetup smsutil 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
