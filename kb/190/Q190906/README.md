---
layout: page
title: "Q190906: BUG: DBGrid Displays Blank Rows When Modifying Column Width"
permalink: /kb/190/Q190906/
---

## Q190906: BUG: DBGrid Displays Blank Rows When Modifying Column Width

{% raw %}

	Article: Q190906
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbDatabase kbDataBinding _IK12475 kbVBp kbVBp500bug kbVBp600bug kbGrpD
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the width of a column in the properties of a bound DBGrid control at
	design-time results in the DBGrid displaying blank rows.
	
	RESOLUTION
	==========
	
	When doing an alternate click on the DBGrid, select "Retrieve Fields" first, and
	then the column width can be modified successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Under the Project - Components menu, select the following components:
	
	   - Microsoft Data Bound Grid Control 5.0 (SP3)
	
	   - Microsoft RemoteData Control 5.0 (SP2) in Visual Basic 5.0 or
	
	   - Microsoft RemoteData Control 6.0 in Visual Basic 6.0
	
	3. Add the DBGrid and Remote Data Control to the new Form.
	
	4. Set the DataSourceName property of the Remote Data Control to a DSN that is
	  pointing to a SQL Server Database. Under the SQL property for the MSRDC, type
	  a simple Select statement, such as Select * from Authors(when the SQL
	  Database is Pubs).
	
	5. Set the DBGrid's DataSource property to MSRDC1.
	
	6. Press the F5 key to run the application and the rows should appear in the
	  DBGrid as they are in the SQL database.
	
	7. In Design mode, alternate-click on the DBGrid and choose Properties. From the
	  Layout tab, change the width of Column 0 or 1.
	
	8. Press the F5 key to run the application once again, and note the DBGrid
	  displays a blank row for every record returned by the SQL statement.
	
	  NOTE: This also occurs when the DBGrid is bound to a standard Data Control
	  connecting to an Access database or an ODBC data source.
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp500bug kbVBp600bug kbCtrl kbDatabase kbDataBinding kbActiveX
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbDatabase kbDataBinding _IK12475 kbVBp kbVBp500bug kbVBp600bug kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
