---
layout: page
title: "Q311950: PRB: &quot;Insufficient Base Table Information for Updating&quot; Error"
permalink: kb/311/Q311950/
---

## Q311950: PRB: &quot;Insufficient Base Table Information for Updating&quot; Error

	Article: Q311950
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.7,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 20-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Data Access Components version 2.7, used with:
	   - Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	   - Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you update your system to MDAC 2.7 or install Microsoft Windows XP, you
	cannot update Data Environment recordsets that you retrieve from Microsoft
	Visual FoxPro databases by using command objects of type Table and you receive
	the following error message:
	
	  Run-time Error '-2147467259(80004005) Insufficient base table information for
	  updating or refreshing.
	
	RESOLUTION
	==========
	
	To resolve this behavior, change the command object from Table to SQL Query
	under Source of Data in the Properties dialog box for the command object. To do
	this:
	
	1. In the Data Environment window, right-click the command object, and then
	  click Properties. This opens the Properties dialog box for the command
	  object.
	
	2. Click the SQL Statement button. The SQL command text box is now enabled.
	
	3. Enter a SQL query, that is similar to the following syntax, in the SQL
	  command text box, referencing your particular table:
	
	  SELECT * FROM tablename
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Open a new project in Microsoft Visual Basic.
	
	2. In the New Project dialog box, select Data Project, and then click OK.
	
	3. In Project Explorer, double-click the Data Environment window.
	
	4. Right-click Connection1, the default connection, and then click Properties.
	
	5. Click "Microsoft OLE DB Provider for ODBC Drivers" from the list on the first
	  tab, and then click Next.
	
	6. Select your Visual FoxPro ODBC data source, and then click OK.
	
	7. In the Data Environment window, right-click the default connection, and then
	  click Add Command.
	
	8. In the Database Object drop-down list box, click Table.
	
	9. In the Object Name drop-down list box, select your table.
	
	10. Click OK to close the Command Properties dialog box.
	
	11. On the Advanced tab, change the Lock Type from 1-Read Only to 3-Optimistic.
	
	12. Open "frmDataEnv" (without quotation marks), the default form, and then add
	  a Button command to the form.
	
	13. Double-click the Button command to open the Click event handler.
	
	14. Add the following code in the Click event handler of the button:
	
	    DataEnvironment1.rsCommand1.Open
	    
	    DataEnvironment1.rsCommand1("CharField").Value = "Testing 123"
	    
	    DataEnvironment1.rsCommand1.Update '<error occurs here
	    
	    DataEnvironment1.rsCommand1.Close
	      
	    MsgBox "done"
	
	NOTE: You must replace CharField in line 2 of the code with the name of an
	existing character field in the database table that you are using.
	
	15. Run the project. Click the Button command when the default form appears. You
	  will receive the error message that is described in the "Symptoms" section.
	
	16. Stop the application, and return to the Data Environment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbMDACSearch
	Version           : :2.7,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
