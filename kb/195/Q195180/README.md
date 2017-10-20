---
layout: page
title: "Q195180: PRB: VBScript &quot;Type Mismatch&quot; Error When Field Type Is adNumeric"
permalink: /kb/195/Q195180/
---

## Q195180: PRB: VBScript &quot;Type Mismatch&quot; Error When Field Type Is adNumeric

{% raw %}

	Article: Q195180
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,1.5,2.0,2.5,2.6,2.7,5.0,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbASP kbGrpDSASP kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSASPDB kbMDAC260 kbADO260 kbmda
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- ActiveX Data Objects (ADO), versions 1.0, 1.5, 2.0, 2.5, 2.6, 2.7 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.5, 2.6, 2.7 
	- Microsoft Active Server Pages 
	- Microsoft ODBC Driver for Visual FoxPro, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a numeric comparison or calculation on an adNumeric (131) field
	type using VBScript, the following errors may be returned:
	
	  Microsoft VBScript runtime error '800a000d'
	  Type mismatch
	
	  Microsoft VBScript runtime error '800a01ca' Variable uses an Automation type
	  not supported in VBScript
	
	CAUSE
	=====
	
	The errors occur because VBScript cannot properly convert adNumeric values to a
	valid numeric type.
	
	RESOLUTION
	==========
	
	You can use either of the following two possible workarounds:
	
	- Convert the adNumeric field using CDbl() (or CInt()) as in the following
	  example:
	
	     <%@ LANGUAGE="VBScript"%>
	     <%
	     Set oConn = Server.CreateObject("ADODB.Connection")
	     oConn.Open "MyDSN", "MyUserID", "MyPassWord"
	     set oRS = oConn.Execute("Select list_price FROM DEMO.PRICE")
	     Response.Write("List Price * 100 = " & CDbl(oRS("list_price")) * 100)
	     %>
	
	  -or-
	
	- Use JScript, because JScript does not exhibit this behavior.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	The following code exhibits the above-mentioned error:
	
	  <%
	      Set oConn = Server.CreateObject("ADODB.COnnection")
	      oConn.Open "MyDSN", "MyUserID", "MyPassWord"
	      set oRS = oConn.Execute("Select list_price FROM DEMO.PRICE")
	
	      'This is the bad line of code, "list_price" is being returned as
	      'type adNumeric.
	      Response.Write("List Price * 100 = " & oRS("list_price") * 100)
	      %>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbGrpDSASP kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSASPDB kbMDAC260 kbADO260 kbmdac270 kbado270 
	Technology        : kbVFPsearch kbAudDeveloper kbADOsearch kbASPsearch kbADO150 kbADO100 kbADO200 kbADO250 kbADO260 kbODBCSearch kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC250 kbMDAC260 kbODBCVFP500 kbODBCOracle25732927 kbMDAC270 kbADO270 kbODBCOracle250Search
	Version           : :1.0,1.5,2.0,2.5,2.6,2.7,5.0,Build 2.573.2927
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
