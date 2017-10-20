---
layout: page
title: "Q216408: PRB: Slow Performance In VFP ODBC Driver with SET DELETED ON"
permalink: /kb/216/Q216408/
---

## Q216408: PRB: Slow Performance In VFP ODBC Driver with SET DELETED ON

{% raw %}

	Article: Q216408
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp600 kbODBC360 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, used with:
	   - Microsoft ODBC Driver for Visual FoxPro, version 5.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Queries that show as fully optimized in Microsoft Visual FoxPro might run very
	slowly through the Microsoft Visual FoxPro ODBC driver.
	
	CAUSE
	=====
	
	The default for SET DELETED in the Visual FoxPro ODBC driver is "On," which
	reduces the optimization of most queries. The default in Visual FoxPro for SET
	DELETED is "Off."
	
	RESOLUTION
	==========
	
	One way to set the Deleted property to Off through the ODBC driver is shown in
	the code below. This setting is connection specific:
	
	  MyConn=SQLSTRINGCONN('driver=Microsoft Visual FoxPro Driver; ' ;
	     + 'SOURCETYPE=DBC;sourcedb=c:\mydata\mydata.DBC;backgroundfetch=no')
	  IF myconn <= 0 THEN
	     MESSAGEBOX("Connection Failed")
	     AERROR(myerr)
	     DISPLAY MEMORY LIKE myerr
	     RETURN
	  ENDIF
	  MyRes=SQLExec(MyConn,'SET DELETED OFF')
	
	Here is a sample in Active Server Pages using ADO:
	
	  <%@ Language=VBScript %>
	  <HTML>
	  <HEAD>
	  <META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
	  </HEAD>
	  <BODY>
	
	  <%
	  set MyConn=server.CreateObject("adodb.connection")
	  myconn.ConnectionString="driver=Microsoft Visual FoxPro DRIVER; " & _
	  	"sourcetype=dbc;sourcedb=d:\program files\microsoft visual studio\" & _
	  	"msdn98\98vsa\1033\samples\vfp98\data\testdata.dbc;BACKGROUNDFETCH=NO"
	  MyConn.Open
	  MyConn.Execute "SET DELETED OFF",,ADCMDTEXT
	  SET MYRS=MYCONN.Execute("SELECT * FROM CUSTOMER",,ADCMDTEXT)
	  Response.Write(MYRS.FIELDS(1).VALUE)
	  SET mYRS=NOTHING
	  SET MYCONN=NOTHING
	  %>
	  </BODY>
	  </HTML>
	  <BR/>
	
	Another way to accomplish this is to configure the DSN. The DELETED setting is
	available on version 6.00.8428.00 or later of vfpodbc.dll. A version of the
	driver that supports this setting can be obtained by downloading the latest
	version of the Visual FoxPro ODBC Driver from the following MSDN Web site:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	  (http://msdn.microsoft.com/vfoxpro/downloads/updates.asp)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because this setting is the opposite of the setting in Visual FoxPro, it can
	create instances where the records returned seem to be incorrect.
	
	REFERENCES
	==========
	
	For more help on the SET DELETED command, please search for Set Deleted in the
	Visual FoxPro ODBC Help File. This file is DRVVFP.HLP in the Windows\System, or
	Windows\System32 directory or search for SET DELETED in Visual FoxPro Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbvfp600 kbODBC360 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :2.5,2.6,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
