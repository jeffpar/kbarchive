---
layout: page
title: "Q189853: PRB: Data Environment: Error Setting Lock Type"
permalink: /kb/189/Q189853/
---

## Q189853: PRB: Data Environment: Error Setting Lock Type

{% raw %}

	Article: Q189853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbVBp kbVBp600 kbGrpDSVB kbGrpDSVBDB kbGrpDSMDAC kbDSupport kb
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use Pessimistic locking and Client Cursors, Visual Basic
	generates the following error message:
	
	  An invalid value was entered for 'Lock Type'.
	
	Under Microsoft Data Access Components (MDAC) version 2.5, the error message
	appears as
	
	  Invalid property value.
	
	CAUSE
	=====
	
	Pessimistic locking is not available with Client cursors in ADO or the Data
	Environment.
	
	RESOLUTION
	==========
	
	Change your cursor to Server-Side or change your lock type.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Note that Pessimistic locking on server-side cursors must be supported by the
	driver/provider in order to use this functionality in ADO. SQL Server and Access
	drivers and providers have this functionality whereas Oracle does not.
	
	Under MDAC version 2.5 or later, you cannot set the locktype to Pessimistic when
	the cursor location is set to aduseclient. The above error will be returned
	immediately.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual Basic 6.0 and open a new Standard EXE Project. Form1 is created by
	  default. Add a DataEnvironment to the project.
	
	2. In the Data Environment Window, right-click the default Connection1 object,
	  choose Properties from the shortcut menu, choose the Connection tab, and then
	  select the Use Connection String option.
	
	3. Enter your Connection String to a valid data source. This example will use
	  SQL Server's pubs database and the authors table, such as:
	
	        CONNECTIONSOURCE="PROVIDER=sqloledb;DATA" & _
	                         "SOURCE=<server_name>;" & _
	                         "INITIAL CATALOG=pubs;" & _
	                         "USER ID=<uid>;PASSWORD=<pwd>;"
	
	4. Click OK.
	
	5. Click the Add a Command object to open a table.
	
	6. Set the Command Name to Authors.
	
	7. Change the Database Object to Table.
	
	8. From the list of tables, select Authors.
	
	9. Change the locktype to Pessimistic. The location is aduseclient by default.
	
	Result:
	
	  Microsoft Data Environment Designer
	  An invalid value was entered for 'Lock Type'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbVBp kbVBp600 kbGrpDSVB kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
