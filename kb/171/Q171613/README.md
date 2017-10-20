---
layout: page
title: "Q171613: INFO: Retaining Transactions with Transaction Object"
permalink: /kb/171/Q171613/
---

## Q171613: INFO: Retaining Transactions with Transaction Object

{% raw %}

	Article: Q171613
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbprogramming kbODBC kbOLEDB
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB, version 1.1 
	- Microsoft OLE DB Provider for ODBC, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the relationship of retaining transactions and transaction
	object.
	
	MORE INFORMATION
	================
	
	An OLE DB application can use ITransactionLocal::StartTransaction to begin a
	transaction if the transaction object is supported by providers.
	ITransactionLocal is an interface on the session object, and can be
	QueryInterface from any other interface on the session object. Information
	regarding a transaction can be retrieved by calling the GetTransactionInfo
	method.
	
	The Commit or Abort method of the transaction object can be used to commit or
	abort a transaction. The Commit and Abort methods allow you to specify whether
	or not to retain a transaction. If you do not retain the transaction object, a
	new transaction will not be started after the original transaction is finished,
	and the transaction object will become inactive. The only valid action for the
	transaction object will be to release it. To retain a transaction, set
	fRetaining flag to TRUE in the Commit or Abort method.
	
	The OLE DB Provider for ODBC version 1.1 supports transaction object and
	commit/abort retaining. Transactions can be committed synchronously,
	asynchronously, or two-phased, depending on the setting of XACTTC flag. With
	fRetaining set to TRUE, however, the XACTTC flag must be set to zero. The OLE DB
	Provider for ODBC version 1.1 does not support any setting of XACTTC flag when
	fRetaining set to TRUE.
	
	Additional query words: ado preserve cursor active data objects
	
	======================================================================
	Keywords          : kbprogramming kbODBC kbOLEDB 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbOLEDB110 kbOLEDBProvODBC110 kbOLEDBProvSearch
	Version           : :1.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
