---
layout: page
title: "Q194641: HOWTO: Make A Trusted SQL Server DSNLESS Connection"
permalink: /kb/194/Q194641/
---

## Q194641: HOWTO: Make A Trusted SQL Server DSNLESS Connection

	Article: Q194641
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When connecting to a Microsoft SQL Server using a DSN, an option or checkbox
	(depending on the version of the ODBC Driver) is available to use a Trusted
	Connection (or Integrated Security).
	
	This option is not available as a parameter for DSNLESS connections.
	
	MORE INFORMATION
	================
	
	To make a DSNLESS connection using a trusted connection to SQL Server, set the
	UID and PWD parameters equal to NULL. This will force the ODBC driver to connect
	using a trusted connection instead of SQL Server Authentication.
	
	Below is an example of the connection string needed to create a Trusted
	Connection:
	
	    Dim Connect As String
	    Connect="Driver={SQL Server};Server=TestServer;Database=Pubs;UID=;PWD="
	
	REFERENCES
	==========
	
	For more information about connecting to Microsoft SQL Server or database
	technology please refer to your Microsoft Visual Basic documentation or visit
	the Universal Data Access Web site at:
	
	  http://www.microsoft.com/data/
	
	Additional query words: kbDSupport kbdse login account connecting kbODBC kbVBp400 kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
