---
layout: page
title: "Q260533: PRB: &quot;Function Name Is Missing )&quot; When Modifying a Remote View"
permalink: /kb/260/Q260533/
---

## Q260533: PRB: &quot;Function Name Is Missing )&quot; When Modifying a Remote View

{% raw %}

	Article: Q260533
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 23-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the View Designer with the Case option set in the filter condition
	to modify a remote view, the following error message appears:
	
	  Function name is missing ).
	
	When you use remote views that include case-dependent conditions in the filter,
	you need to create and modify the view programmatically.
	
	RESOLUTION
	==========
	
	The following code illustrates programmatic creation of remote views that use a
	case-dependent conditions in the filter:
	
	  CREATE SQL VIEW MyView REMOTE CONNECTION MyConn;
	     AS SELECT * FROM TESTDATA!CUSTOMER Customer;
	     WHERE UPPER(customer.cust_id) LIKE UPPER(?lccust_id)
	
	MORE INFORMATION
	================
	
	This behavior occurs when the UPPER() function is used in the filter condition,
	or when the Case button is selected in the Filter tab of the View Designer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Viewdemo.prg using the following code:
	
	  CREATE DATA TESTVIEW
	  CREATE CONNECTION MYCONN CONNSTRING  "DRIVER=Microsoft Visual FoxPro Driver;" + ;
	     "SourceType=DBC;SourceDB=" + HOME(2) + ;
	     "data\testdata.dbc;exclusive=no;backgroundfetch=no"
	  CREATE SQL VIEW MyView REMOTE CONNECTION MYCONN;
	     AS SELECT * FROM TESTDATA!CUSTOMER CUSTOMER;
	     WHERE UPPER(CUSTOMER.cust_id) LIKE ?UPPER(lccust_id)
	  MODIFY VIEW MyView
	  MODIFY VIEW MyView
	
	2. Save and run the program.
	
	3. When the View Designer opens for the first time, click the Filter tab and
	  note that the Case portion of the filter condition is checked.
	
	4. Press the CTRL+W keys.
	
	5. Note that the following error message appears when the second MODIFY VIEW
	  command is encountered:
	
	  Function name is missing ).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
