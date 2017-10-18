---
layout: page
title: "Q180394: Incomplete Destination Selection: Please Enter Table Name"
permalink: kb/180/Q180394/
---

## Q180394: Incomplete Destination Selection: Please Enter Table Name

	Article: Q180394
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Data Replicator, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG #: WINDOWS NT:196 (1.0)
	
	SYMPTOMS
	========
	
	If you create a subscription while the destination connection is down, you will
	receive an error. The error occurs when you select the destination. Host Data
	Replicator tries to fill in the destination table information.
	
	After the destination connection is resolved, backing up to the Criteria dialog
	box and then moving forward to the Destination dialog box will not update the
	destination table information. If the destination table information is not
	updated when you click the Next button, you will receive the following error
	message:
	
	  Please Enter A Table Name
	
	CAUSE
	=====
	
	The Next button in the Criteria dialog box does not request destination table
	information from the destination system.
	
	WORKAROUND
	==========
	
	There are two ways to request destination table information.
	
	- Double-click the destination server icon. Choose the destination DSN. Verify
	  that the password is correct, and then click OK.
	
	- Click modify. Choose the destination DSN. Verify that the password is
	  correct, and then click OK.
	
	After the destination table information is filled in, you will be able to
	continue creating the subscription by clicking the Next button.
	
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
	
