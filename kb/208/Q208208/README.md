---
layout: page
title: "Q208208: HOWTO: Add Records with Memo Data Using the VFP ODBC Driver"
permalink: /kb/208/Q208208/
---

## Q208208: HOWTO: Add Records with Memo Data Using the VFP ODBC Driver

	Article: Q208208
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbASP kbDatabase kbODBC KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbCodeSnip
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains sample code for an ASP that adds a new record to a
	Microsoft Visual FoxPro (VFP) table and inserts over 254 characters into a memo
	field in that table.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, you can insert a record into a table with a memo field and
	place over 254 characters of data into the table with no special commands. For
	example, the following code can be used to insert a record into a table named
	memotest.dbf:
	
	  lcmemodata=REPLICATE("Hello There ",500)
	  INSERT INTO memotest (id,memo1) VALUES ("0001",lcmemodata)
	
	This same technique cannot, however, be used with the Visual FoxPro ODBC driver.
	
	ADO can be used with an Active Server Page or with Microsoft Visual Basic to go
	through the Visual FoxPro ODBC driver. The AppendChunk() method of a field
	object can be called in a loop to place over 254 characters in the memo field of
	a table.
	
	The following Active Server Page can be used to demonstrate. It assumes that
	there is a table named memotest.dbf in the e:\vfpdata directory. It uses ADO to
	add a new record and place data in the id and memo1 fields. Note that it calls
	the AppendChunk method of the memo1 field object in a loop to append in 254
	characters at a time.
	
	The steps below assume that Microsoft Internet Information Server (IIS) is
	available and that the reader is familiar with serving Active Server Pages with
	it. It also assumes that the Visual FoxPro ODBC driver is installed on the
	computer running IIS.
	
	1. Create a table in Visual FoxPro with a character field named ID and a memo
	  field named Memo1. The following code can be used to do this:
	
	  CREATE TABLE memotest FREE (id C(5), memo1 M)
	
	2. Create the following file in a text editor, such as Notepad:
	
	  <%@ Language=VBScript %>
	  <HTML>
	  <HEAD>
	  <META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
	  </HEAD>
	  <BODY>
	
	  <%
	
	  Set oConn = Server.CreateObject("ADODB.connection")
	    
	  ConnStr= "Driver=Microsoft Visual FoxPro Driver; " + _
	  "SourceType=DBf;SourceDB=e:\vfpdata;BackgroundFetch=No;"
	
	  oConn.Open ConnStr   
	
	  'Has to be a serverside cursor.
	
	  set RS = server.CREATEOBJECT("ADOR.Recordset")
	  Rs.cursortype = 1 'adOpenKeyset
	  Rs.cursorlocation = 2 'adUseServer
	  Rs.locktype = 3 'adLockOptimistic    
	
	  Rs.OPEN "select * from memotest",oConn
	
	  'Build a long string and limited appendchunk size to 254 per batch
	
	  lcLongParm = string(254,"A") + string(254, "B") + string(254,"C")
	  liChunkSize = 254
	
	  Rs.AddNew
	
	  'Assign the first field
	
	  rs.Fields("ID")="0001"
	
	  'Looping through 254 characters at a time and add the data
	  'to Ado Field buffer
	
	  FOR i = 1 to len(lcLongParm) step liChunkSize
	  liStartAt = i
	  liWorkString = mid(lcLongParm, liStartAt, liChunkSize) 
	  Rs.Fields("Memo1").AppendChunk(liWorkString)
	  NEXT
	
	  'Update the recordset
	
	  Rs.UPDATE
	
	  Response.Write "<table border=1 cellpadding=4>"
	  Response.Write "<tr>"
	
	     For I = 0 To RS.Fields.Count - 1
	       Response.Write "<td><b>" & RS(I).Name & "</b></td>"
	     Next
	
	     Response.Write "</tr>"
	
	  RS.Requery 
	
	     Do While Not RS.EOF
	       Response.Write "<tr>"
	
	  		For I = 0 To RS.Fields.Count - 1
	  		 Response.Write "<td>" & cstr(RS(I)) & "</td>"
	  		Next
	
	       Response.Write "</tr>"
	       RS.MoveNext
	     Loop
	
	       Response.Write "</table>"
	
	  rs.Close
	  oconn.Close
	  set oconn = nothing
	  set rs = nothing
	
	  %>	
	
	  </BODY>
	  </HTML>
	
	3. Save this file to your IIS WWWROOT directory as AppendChunk.ASP, and make
	  certain that this directory has Execute privileges.
	
	4. You should now be able to access this Active Server Page from your Web
	  browser. The page should show the Id and Memo1 fields from the memotest.dbf
	  table. Scroll to the right in the browser to see all of the data for the memo
	  field. This ASP does not format the memo field text.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbDatabase kbODBC KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbCodeSnippet kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCVFP600828100
	Version           : WINDOWS:2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
