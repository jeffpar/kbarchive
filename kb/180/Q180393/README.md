---
layout: page
title: "Q180393: High CPU Use if History Log Limit Exceeds Subscription Number"
permalink: /kb/180/Q180393/
---

## Q180393: High CPU Use if History Log Limit Exceeds Subscription Number

{% raw %}

	Article: Q180393
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Data Replicator, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG #: WINDOWS NT :174 (1.0)
	
	SYMPTOMS
	========
	
	If the Replication History Log Limit Field is set to a number less than the
	number of subscriptions, but greater than zero, CPU usage will increase to 100
	percent. This high CPU usage will continue until the Replication History Log
	Limit Field is set to a number greater then the number of subscriptions or to
	zero.
	
	WORKAROUND
	==========
	
	To work around this problem, use a Replication History Log Limit that is greater
	then the number of subscriptions. Alternatively, zero can be used to disable the
	History Log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Host Data Replicator version
	1.0.
	
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
