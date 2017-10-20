---
layout: page
title: "Q191624: INFO: Do Visual FoxPro Datasources Work Under MTS?"
permalink: /kb/191/Q191624/
---

## Q191624: INFO: Do Visual FoxPro Datasources Work Under MTS?

{% raw %}

	Article: Q191624
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the great new features of Visual FoxPro 6.0 is improved support for
	Microsoft Transaction Server (MTS) Server. However, there are some issues to be
	aware of when using Visual FoxPro data within MTS.
	
	MORE INFORMATION
	================
	
	Microsoft Transaction Server is a critical technology for creating distributed
	applications that scale to Enterprise requirements. Part of the MTS appeal is
	its automatic transaction support. Distributed components can all participate in
	transactions which are Atomic in nature and retain their transaction state
	across multiple component calls. With MTS 2.0, transactions are limited
	primarily to actions taken against databases such as record inserts, deletes and
	updates.
	
	In order to support MTS transactions, a datasource must utilize the Microsoft
	Distributed Transaction Coordinator. Databases, such as SQL Server and Oracle,
	support transaction protocols that permit them to work with a design-time
	control (DTC). SQL Server supports OLE Transactions while Oracle uses XA
	Transaction support. This allows one component to perform an action against one
	of these databases and have another one abort it so that its actions are
	automatically rolled back.
	
	Unfortunately, Visual FoxPro databases do not support either of the transaction
	protocols needed to work with MTS distributed transactions. While this limits
	the use of Visual FoxPro data in MTS transactions, there are still plenty of
	valuable uses for Visual FoxPro data such as meta data. In addition, many
	applications do not necessarily require strict distributed transaction support.
	Fortunately, there are many solutions around this problem. You might consider
	using the MTS Shared Property Manager to set a property that your Visual FoxPro
	server can check throughout the lifetime of the transaction and perform its own
	rollback/commit.
	
	NOTE: Visual FoxPro's own native transactions still work, but since they do not
	go through the Microsoft DTC, they do not participate in the distributed ones
	managed by MTS.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Help
	
	Microsoft Transaction Server Help
	
	Additional query words: PGFest600 kbVFp600 kbMTS
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
