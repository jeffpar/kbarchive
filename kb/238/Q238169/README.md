---
layout: page
title: "Q238169: SMS: Queries using SMS_R_SYSTEM Return Inaccurate Results"
permalink: /kb/238/Q238169/
---

## Q238169: SMS: Queries using SMS_R_SYSTEM Return Inaccurate Results

{% raw %}

	Article: Q238169
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a query that uses joins and that contains the SMS_R_SYSTEM
	class, you may receive duplicate or inaccurate result sets for some records.
	This can occur even if you enable the Omit Duplicate Rows (Select Distinct)
	option.
	
	NOTE: To determine if your queries use the SMS_R_System class, view the query
	properties, and click Show Query Language.
	
	CAUSE
	=====
	
	This issue can occur because the SMS_R_System class is an array, based on
	several SQL tables.
	
	A composite column is created from all the joined tables keys. This column is
	used to order the results so that the query code can roll up the array values.
	This column distorts the meaning of the unique directive, and may cause
	duplicates.
	
	WORKAROUND
	==========
	
	To work around this issue, use the SMS_G_System class instead of the
	SMS_R_System class. SMS_G_System is displayed as the "Computer System" class and
	SMS_R_System is displayed as the "System Resource" class in the SMS Admin
	Console Query Builder Query Statement Properties dialog box. Note that when you
	select the Object Type System Resource, you do not select the System Resource
	class. If you need to query or report on IP information, you can use the Network
	Adapter Config class instead of the System Resource class to avoid using
	SMS_R_System.
	
	If you receive duplicate rows when you use SMS_R_System in a query, you can use
	the SMSExtract tool included in the Back Office Resource Kit 4.5 to export query
	results to Microsoft Access or Microsoft Excel for reporting. After you open the
	results in another program, you can remove the duplicate rows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms dupes dupe result set wrong double wmi wql kbhowto
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
