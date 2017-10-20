---
layout: page
title: "Q180395: HDR Unable to Create a PK Column on DB2 Subscription Table"
permalink: /kb/180/Q180395/
---

## Q180395: HDR Unable to Create a PK Column on DB2 Subscription Table

{% raw %}

	Article: Q180395
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Data Replicator, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG #: WINDOWS NT :231 (1.0)
	
	SYMPTOMS
	========
	
	HDR Manager displays the following error when creating a table with a Primary
	Key column on a DB2 subscriber.
	
	  [StarQuest][StarSQL ODBC Driver][DB2]THE DEFINITION OF TABLE
	  WNW027.TABLENAME IS INCOMPLETE BECAUSE IT LACKS A PRIMARY INDEX OR A
	  REQUIRED UNIQUE INDEX
	
	WORKAROUND
	==========
	
	To work around this problem, create the destination DB2 table manually with a
	primary index or a unique index. Then create the subscription using the "Use
	Existing Table" option on the Destination Screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Data Replicator
	version 1.0.
	
	NOTE: Effective immediately, Microsoft has granted exclusive marketing and
	distribution rights to StarQuest Software for Host Data Replicator 1.1, a
	software utility for replicating among heterogeneous databases. Microsoft will
	not be offering this product or any future versions to its customers. StarQuest
	has renamed the product, StarQuest Data Replicator. Please refer to the
	following link for more information:
	
	  http://www.microsoft.com/sna/guide/starqst.asp?A=2&B=7
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbHostDataRep
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
