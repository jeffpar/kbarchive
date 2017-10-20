---
layout: page
title: "Q221931: HOWTO: Return Record's Autonumber Value Inserted into Access DB"
permalink: /kb/221/Q221931/
---

## Q221931: HOWTO: Return Record's Autonumber Value Inserted into Access DB

{% raw %}

	Article: Q221931
	Product(s): Internet Information Server
	Version(s): 1.5,2.0,3.0,4.0,5.0,7.0
	Operating System(s): 
	Keyword(s): kbAccess200 kbAccess97 kbADO150 kbADO200 kbASP kbDatabase kbInternet kbInetDev kbIIS kb
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- ActiveX Data Objects (ADO), versions 1.5, 2.0 
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	- Microsoft Access 2.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a new record is added to an ActiveX Data Objects (ADO) Recordset that
	contains an Autonumber field, immediately reporting the value of the Autonumber
	field for the inserted record returns a value of 0.
	
	This article describes how to retrieve the automatically generated value of an
	Autonumber field of a record inserted into an Access database with the ADO
	AddNew() and Update() methods. The sample uses VBScript in an Active Server
	Pages (ASP) page.
	
	MORE INFORMATION
	================
	
	The following code assumes that you have the Adventure Works database on your
	machine and you have an ODBC datasource name (DSN) named AdvWorks pointing to
	it.
	
	The sample also includes the file Adovbs.inc, which can be found in \Program
	Files\Common Files\System\Ado.
	
	This code does not prompt the user for any input. It inserts one record into the
	Customers table of the Adventure Works database and displays the value of the
	Autonumber field (CustomerID) of the new record.
	
	Following are some key elements to note:
	
	- The CursorLocation must be adUseClient. Access does not support a server-side
	  cursor.
	
	- In order to populate the Autonumber field with the automatically generated
	  value, the recordset must be requeried using the Requery method.
	
	- The Requery method resets the absolutePosition (bookmark) from the newly
	  inserted record, to the first record of the requeried recordset. As a result,
	  the absolutePosition must be saved before calling Requery, and restored to
	  the newly inserted record after Requery has been called.
	
	  <%@ Language=VBScript %>
	  <HTML>
	  <BODY>
	
	  <!--#include file=adovbs.inc -->
	
	  <% 
	  Set objConn = CreateObject("ADODB.Connection")
	  Set objRS = CreateObject("ADODB.Recordset")
	
	  objConn.Open "DSN=advworks;"
	
	  'Access does not support a cursor engine so a client cursor must be used
	  objRS.CursorLocation = adUseClient
	
	  objRS.Open "SELECT * FROM Customers", objConn, adOpenStatic, adLockOptimistic
	
	       ' when you invoke the method AddNew it adds a new record to the end of           
	       ' your current recordset and places your cursor on that record.
	       
	  objRS.AddNew
	  	objRS("CompanyName") = "Microsoft"
	  	objRS("ContactFirstName") = "Bob"
	  	objRS("ContactLastName") = "Smith"
	  objRS.Update
	
	       ' when you invoke the method Update, it updates the database with the
	       ' values of the new record that we just created.  To retrieve the 
	       ' value of the Autonumber field we need to update the ADO recordset that
	       ' currently have.
	
	       ' When you do a Requery on your recordset, you lose your cursor.  So
	       ' we need to store the location before we do the Requery, then reset
	       ' it after the Requery.
	
	  'before the requery, the Autonumber field shows as 0
	  Response.Write "<br>ID before Requery = " & objRS("CustomerID")   
	
	  bookmark = objRS.absolutePosition  ' First, store the location of you cursor
	  objRS.Requery                      ' Next, update your recordset with the data from the database
	
	  'after the requery, the absolutePosition is the first record of the recordset
	  Response.Write "<br>ID before setting absolutePosition = " & objRS("CustomerID")
	
	  objRS.absolutePosition = bookmark  ' Finally, change your cursor back
	
	  'now we have the Autonumber value
	  Response.Write "<P>Added ID = " & objRS("CustomerID")
	
	  objRS.Close
	  objConn.Close
	  set objConn = nothing
	  set objRS = nothing
	  %>
	  </BODY>
	  </HTML>
	
	REFERENCES
	==========
	
	For additional information about using AutoIncrement fields and ADO, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q195910 INFO: Identity (AutoIncrement) Columns in ADO or RDS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess200 kbAccess97 kbADO150 kbADO200 kbASP kbDatabase kbInternet kbInetDev kbIIS kbiis400 kbiis500 kbfaq
	Technology        : kbiisSearch kbAudDeveloper kbADOsearch kbAccessSearch kbADO150 kbADO200 kbAccess200 kbAccess97 kbiis500 kbiis400 kbiis300 kbAccess97Search kbAccess95Search kbZNotKeyword3 kbAccess700
	Version           : :1.5,2.0,3.0,4.0,5.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
