---
layout: page
title: "Q246596: Cannot Use VBScript Classes with Application or Session Scope"
permalink: /kb/246/Q246596/
---

## Q246596: Cannot Use VBScript Classes with Application or Session Scope

	Article: Q246596
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The VBScript 5.0 engine allows the creation of user defined classes, similar to
	the Visual Basic classes.
	
	When you attempt to assign a class as an Application variable, the following
	error message occurs:
	
	  Error Type:
	  Application object, ASP 0197 (0x80004005)
	  Disallowed object use
	  Cannot add object with apartment model behavior to the application intrinsic
	  object.
	  /<path>/<file.ext>, line <nn>
	
	In addition, when you assign a class to a Session variable, the following error
	message occurs when you attempt to use the class:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A01B6)
	  Object doesn't support this property or method: <class variable>
	  /<path>/<file.ext>, line <nn>
	
	CAUSE
	=====
	
	This behavior is by design. There are specific threading issues that prevent
	this functionality from being exposed at the Application or Session level.
	
	RESOLUTION
	==========
	
	Only use VBScript classes with page-level scope.
	
	WORKAROUND
	==========
	
	To work around this issue, use Include files to store VBScript classes. To do
	this perform the following steps:
	
	1. Save the following ASP code as Convert.inc in a folder with at least Script
	  access:
	
	  <%
	  Class Convert
	  	Function Celsius(F)
	  		Celsius = ((F-32)*5)/9
	  	End Function
	  	Function Fahrenheit(C)
	  		Fahrenheit = ((C*9)/5)+32
	  	End Function
	  End Class
	  %>
	
	2. Save the following ASP code as Convert.asp in the same folder as the above
	  file:
	
	  <% @LANGUAGE="VBSCRIPT" %>
	  <!--#include file="class.inc"-->
	  <% Set MyConvert = New Convert %>
	  <html>
	  <body>
	  <pre>32F = <%=MyConvert.Celsius(32)%>C</pre>
	  <pre>32C = <%=MyConvert.Fahrenheit(32)%>F</pre>
	  </body>
	  </html>
	
	3. When you browse the Convert.asp page, the following should be returned:
	
	  
	
	  32F = 0C
	  32C = 89.6F
	
	Note: The above example does not preserve class state between pages. In other
	words, if any variables are created in the class, they will be destroyed when
	the page goes out of scope.
	
	MORE INFORMATION
	================
	
	For more information on Microsoft Scripting Technologies, please see the
	Microsoft Developer Network (MSDN) Web site at the following URL:
	
	  http://msdn.microsoft.com/scripting/
	
	Note: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
