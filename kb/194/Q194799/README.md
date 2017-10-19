---
layout: page
title: "Q194799: HOWTO: Retrieve RAW/LONG RAW Data from Oracle for ASP Page"
permalink: /kb/194/Q194799/
---

## Q194799: HOWTO: Retrieve RAW/LONG RAW Data from Oracle for ASP Page

	Article: Q194799
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.1 SP2,2.5,2.6,2.7,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbcode kbATM kbASP kbOLEDB kbOracle kbProvider kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDA
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP2, 2.5, 2.6, 2.7 
	- Microsoft Active Server Pages 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to insert and retrieve RAW or LONG RAW data from an
	Oracle database for use in an Active Server Pages (ASP) page.
	
	MORE INFORMATION
	================
	
	1. To insert images into an Oracle table, see the following article in the
	  Microsoft Knowledge Base:
	
	  Q185958 HOWTO: Use ADO GetChunk/AppendChunk with Oracle for BLOB Data
	
	  NOTE: We do not recommend using Microsoft Access to insert images into Oracle.
	  Microsoft Access adds an OLE wrapper around the object that prevents the
	  object from being extracted and interpreted correctly by ASP.
	
	2. To query and display the image, use the following code:
	
	        <%@ LANGUAGE="VBSCRIPT" %>
	
	        <%
	        'Clear existing HTTP header information.
	        Response.Expires = 0
	        Response.Buffer = TRUE
	        Response.Clear
	
	        'Set the HTTP header to an image type, if you want to display
	        'a jpg you need to use the "image/jpeg" content type.
	        Response.ContentType = "image/gif"
	
	        Dim strTemp
	
	        Set oConn = Server.CreateObject("ADODB.Connection")
	
	       'You need to change this line to reflect your DSN, UID
	       'and PWD.
	        oConn.Open "DSN=Ovteam;UID=userid;PWD=password;"
	
	       'Change this line to use your table that contains a raw or
	       'long raw field.  In this case, ID is the primary key of the
	       'IMAGE table and IMG is the RAW or LONG RAW data column.
	        sSQL = "Select ID, IMG from IMAGE where ID = 1"
	
	        Set oRS = Server.CreateObject("ADODB.Recordset")
	        oRS.Source = sSQL
	        oRS.ActiveConnection = oConn
	
	       'The cursor type does not seem to matter.  A keyset cursor was used
	       'with success for this article; however, you will not be able to
	       'scroll with it because the content type of this page is set for
	       '"image/gif".
	
	        oRS.Open
	
	        strtemp = oRS("IMG")
	        Response.BinaryWrite(strTemp)
	        Response.End
	
	        oRS.Close
	        Set oRS = nothing
	        oConn.Close
	        Set oConn = nothing
	     %>
	
	NOTE: Because you are changing the content type of this page, you can display
	only one image. In order to incorporate this into a page with text, you need to
	do a server side include of this .asp page to get the picture into another page.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q192743 HOWTO: Use ADO GetChunk/AppendChunk with Oracle for TEXT Data
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbATM kbASP kbOLEDB kbOracle kbProvider kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 kbado270 
	Technology        : kbAudDeveloper kbADOsearch kbASPsearch kbADO210 kbADO200 kbADO210sp2 kbADO250 kbADO260 kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCOracle25732927 kbMDAC270 kbADO270 kbODBCOracle250Search
	Version           : :2.0,2.1,2.1 SP2,2.5,2.6,2.7,Build 2.573.2927
	Issue type        : kbhowto
	
	=============================================================================
	
