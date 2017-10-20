---
layout: page
title: "Q245613: SMS: Error Message Occurs When Status Messages Are Deleted"
permalink: /kb/245/Q245613/
---

## Q245613: SMS: Error Message Occurs When Status Messages Are Deleted

{% raw %}

	Article: Q245613
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete the status messages associated with a status message
	query, you may receive the following error message:
	
	  An error was encountered deleting status messages: rc = -2147217407. No
	  status messages were deleted.
	
	In addition, the Microsoft Systems Management Server Provider log (Smsprov.log)
	may contain an error message similar to the following:
	
	  *
	  *
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspStatusMessage.cpp(927) : Error
	  executing delete query: delete from StatusMessages WHERE RecordID IN
	  (SELECT SMS_StatusMessage.RecordID from vStatusMessages AS
	  SMS_StatusMessage LEFT OUTER JOIN StatusMessageInsStrs AS
	  SMS_StatMsgInsStrings ON SMS_StatMsgInsStrings.RecordID =
	  SMS_StatusMessage.RecordID LEFT OUTER JOIN StatusMessageAttributes AS
	  SMS_StatMsgAttributes ON SMS_StatMsgAttributes.RecordID =
	  SMS_StatusMessage.RecordID )
	  SQL Error: SQL Server connection timed out.
	  *
	*
	
	CAUSE
	=====
	
	This error message can occur because the deletion query has timed out. On a site
	that has a large number of status messages stored in the database, the preset
	time-out interval of 10 minutes may not be enough time for Microsoft SQL Server
	to complete the deletion request.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the status message filter rules to limit the
	number of status messages in the database. For additional information on using
	the status message filter rules, see Chapter 20 of the <Microsoft Systems
	Management Server Administrators Guide>.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
