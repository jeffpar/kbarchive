---
layout: page
title: "Q195525: PRB: SQLPREPARE Limited to 254 Characters"
permalink: /kb/195/Q195525/
---

## Q195525: PRB: SQLPREPARE Limited to 254 Characters

	Article: Q195525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbMDAC250 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SQLPREPARE command to prepare a SQL statement that has more
	than 254 characters in it, the following error message appears:
	
	  Command contains unrecognized phrase/keyword.
	
	Visual FoxPro does not allow the statement to have over 254 characters.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following three methods explain how to work around this limitation. The
	first two methods assume that the Visual FoxPro ODBC driver is being connected
	to and points to the customer table in the Testdata.dbc in the SAMPLES folder.
	
	Method 1
	--------
	
	You add up to 254 characters to each variable string, and then add the variables
	together in a second command to complete the SQL statement as follows:
	
	     lnHand = SQLCONN()  && Connect to the Visual FoxPro ODBC driver pointing
	                         && to the testdata.dbc.
	
	     string1 = "SELECT cust_id, company, contact, title, address, city,
	     region, postalcode, country, phone, fax, maxordamt FROM customer WHERE
	     cust_id = 'ABOUT' AND company = 'Around the Horn' AND contact = 'Thomas
	     Hardy' AND title = 'Sales Representative'"
	
	     string2 = " AND address = '120 Hanover Sq.' AND city = 'London'"
	
	     ? LEN(string1)
	     ? LEN(string2)
	
	     string1 = string1 + string2
	     ? LEN(string1)
	     y = SQLPREPARE(lnHand, string1)
	     ? y
	     z = SQLEXEC(lnHand)
	     ?z
	     =SQLDISCONN(lnHand)
	
	Method 2
	--------
	
	This method builds a dbc to store the view that you use to build the SQL
	statement. Visual FoxPro allows you to build a SQL statement that is longer than
	254 characters when you create a view programmatically. You delete the dbc after
	the statement has been created because the view is no longer needed.
	
	     lcdbcname = SYS(2023)+ "\" + SYS(3)
	     CREATE DATABASE (lcdbcname)   && Make new bogus DBC in temp directory.
	
	     * Another way to build an easy SELECT statement.
	     CREATE SQL VIEW testview as ;
	      SELECT * FROM customer WHERE .T. and .T. and .T. and .T. and .T. and
	     .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and
	     .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and
	     .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and .T. and
	     .T.
	
	     * The DBGETPROP statement gets the SQL statement that was just created.
	     lcSqlText = DBGETPROP('testview', 'view', 'sql')
	     CLOSE DATABASE ALL
	     DELETE FILE lcdbcname+'.dbc'        && Delete the DBC now that the
	                                         && SQL statement is saved to a
	                                         && variable.
	     DELETE FILE lcdbcname+'.dct'
	
	     lnHand = SQLCONN()
	     ? LEN(lcSqlText)
	     ? SQLPREPARE(lnHand, lcSQLText, 'ctest')
	     ? SQLEXEC(lnHand)
	     ? SQLDISCONN(lnHand)
	
	Method 3
	--------
	
	You can save each SELECT statement to a memo field. When you need to run the
	SELECT statements, just point the SQLPREPARE statement to the memo field.
	
	     lnHand = SQLCONN()
	     y = SQLPREPARE(lnHand, mytable.mymemo)
	     ? y
	     z = SQLEXEC(lnhand)
	     ? z
	     ? SQLDISCONN(lnhand)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQL kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
