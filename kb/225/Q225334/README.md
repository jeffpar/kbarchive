---
layout: page
title: "Q225334: PRB: Jet/VBA May Fail w/ Datetime Data"
permalink: /kb/225/Q225334/
---

## Q225334: PRB: Jet/VBA May Fail w/ Datetime Data

{% raw %}

	Article: Q225334
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,3.0,3.5
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbODBC KbVBA kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 3.0, 3.5 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, when running queries from Microsoft Access or any application
	that uses Jet/VBA, like Data Access Objects (DAO), that involve an ODBC
	timestamp or SQL datetime data with the fractional portion of the timestamp
	having a higher precision than milliseconds (3 digits), during updates you may
	get an error message titled Write Conflict as follows:
	
	  This record has been changed by another user since you started editing it. If
	  you save the record, you will overwrite the changes the other user made.
	  Copying the changes to clipboard will let you look at the values the other
	  user entered, and then paste your changes back in if you decide to make the
	  changes.
	
	CAUSE
	=====
	
	Jet/VBA retrieves the timestamp data and converts it to a native format for
	display. When the user tries to update such data, Jet/VBA has to convert the
	data stored in native format to ODBC timestamp. In some cases during this
	process the precision part of the fractional portion of the timestamp data may
	be lost, and the backend may not be able to update the data successfully. When
	this occurs you will receive the error.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This problem may occur with any applications using the Jet engine/VBA on their
	clients.
	
	Microsoft SQL Server uses a maximum of three digits (milliseconds) for the
	fractional portion of the timestamp data, so the problem has not been observed
	with respect to Microsoft SQL Server.
	
	Additional query words: timestamp odbc datetime
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbODBC KbVBA kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Component         : JET
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBC350 kbODBC300 kbODBC200
	Version           : :2.0,2.1,2.5,2.6,3.0,3.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
