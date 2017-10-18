---
layout: page
title: "Q159590: HOWTO: Connect to SQL Server Using a Trusted Connection in VFP"
permalink: kb/159/Q159590/
---

## Q159590: HOWTO: Connect to SQL Server Using a Trusted Connection in VFP

	Article: Q159590
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.6,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbODBC kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSuppor
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server can be installed utilizing either Standard, Windows NT Integrated or
	Mixed security. The Trusted Connection is available only under Windows NT.
	
	When creating a new DataSource to SQL Server via the ODBC dialog box in the
	Control Panel of a client machine, there is a radio button check box in step 2
	with the label "With Windows NT authentication using the network login ID."
	Checking this option requests a trusted connection to SQL Server regardless of
	the security mode of the server. For information about the SQL Server login
	security mode and trusted connections, see the Microsoft SQL Server
	Administrator's Companion.
	
	Once a DataSource has been created using a Trusted Connection, a connection can
	be created without supplying a user name and password. The user's Windows NT
	userid must exist on SQL Server.
	
	To connect from Visual FoxPro via an available DataSource:
	
	1. Create a DataSource with the Trusted Connection box checked.
	
	2. In a program or Command window type: x=sqlconnect("datasource name here").
	
	3. Print the value of x, such as "? x". If x returns a positive number, then a
	  valid connection was established.
	
	To connect from Visual FoxPro via an available connection from a Window NT
	machine:
	
	1. Open up a project in Visual FoxPro.
	
	2. Select Connections.
	
	3. Select New.
	
	4. Choose a valid DataSource with the Trusted connection option checked.
	
	5. Leave the userid and password text boxes empty.
	
	  a. Visual FoxPro 5.0 and 6 allows you to verify the connection via a command
	     button.
	
	6. Select Remote Views from the project.
	
	7. Select New.
	
	8. Use the Connection created by the steps above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbODBC kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbMDAC260 kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :2.5,2.6,3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
