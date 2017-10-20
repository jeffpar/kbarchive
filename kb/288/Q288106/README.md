---
layout: page
title: "Q288106: HOWTO:Use UDL File for Hierarchical Commands in Data Environment"
permalink: /kb/288/Q288106/
---

## Q288106: HOWTO:Use UDL File for Hierarchical Commands in Data Environment

{% raw %}

	Article: Q288106
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.5 SP1,2.6,6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbDatabase kbDataEnv kbGrpDSVBDB kbDSupport kbMDACNoSweep kbADOsearch
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use a Universal Data Link (UDL) file in place of a
	connection string in the Data Environment with hierarchical or grouped Command
	objects.
	
	Normally, a UDL file can be used with a Data Environment Connection by changing
	the ConnectionSource property manually to point to the UDL file by using the
	"File Name=" argument, as follows:
	
	  File Name=C:\MyFolder\MyUDLFile.udl
	
	However, this approach does not work with Command hierarchies.
	
	MORE INFORMATION
	================
	
	When a Data Environment Connection must service hierarchical Command objects,
	the connection string that is entered by the developer at design time is
	modified in a hidden manner at run time to use the MSDataShape data shaping
	service provider in front of the originally specified provider (for example, the
	Microsoft Jet or the SQLOLEDB provider).
	
	Although the Data Environment handles this modification properly with an ordinary
	connection string, the Data Environment does not handle this modification
	correctly if the developer has manually specified a UDL file as the
	ConnectionSource. The modified connection string that results is invalid, and,
	although no error message may be generated, no data is retrieved.
	
	You can work around this limitation and still rely on a UDL file by using two
	Connection objects: one for "ordinary" Commands, and a second for hierarchical
	or grouped Commands. This is demonstrated in greater detail in the following
	example. The outline of steps is as follows:
	
	1. Open the first connection for ordinary Commands by using the desired UDL
	  file.
	
	2. Create a new connection string based on this connection string, adding the
	  arguments necessary to use the MSDataShape provider.
	
	3. Assign this new connection string to the second connection for hierarchical
	  Commands.
	
	Example
	-------
	
	1. Create two identical Connections in your Data Environment and specify the
	  connection information by using the Data Link Properties dialog box.
	
	2. Create your ordinary Commands under Connection #1.
	
	3. Create your hierarchical or grouped Commands under Connection #2.
	
	4. Right-click on the Windows Desktop, in Microsoft Data Link choose New, and
	  then specify the connection information to create a UDL file for your
	  database.
	
	5. Select Connection #1 in the Data Environment, and then change the
	  ConnectionSource property in the Properties window to point to the UDL file
	  by using the "File Name=" syntax shown earlier.
	
	6. Select Connection #2, and then delete the existing contents of the
	  ConnectionSource property. Note that you are now supplying this value
	  programmatically.
	
	7. Open the code window for the Data Environment, and then select the Data
	  Environment's Initialize event.
	
	8. Enter the following code for the Initialize event, adjusting the names of the
	  Data Environment and the Connection objects as necessary:
	
	  DataEnvironment1.Connection2.ConnectionString = "Provider=MSDataShape;Data " & DataEnvironment1.Connection1.ConnectionString
	
	If your original connection string is
	
	  "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\MyFolder\MyDatabase.mdb"
	
	then the new connection string you have for your hierarchical Command object is:
	
	  "Provider=MSDataShape;Data Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\MyFolder\MyDatabase.mdb"
	
	9. Run and test your project.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q274536 HOWTO: Specify a UDL File as the Source of Connection Attributes for
	  a VB Data Environment Connection Object
	
	  Q244659 SAMPLE: How to Create a Data Link File with Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataEnv kbGrpDSVBDB kbDSupport kbMDACNoSweep kbADOsearch 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4
	Version           : :2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.5 SP1,2.6,6.0,6.0 SP3,6.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
