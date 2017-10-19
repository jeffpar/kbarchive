---
layout: page
title: "Q319549: PRB: ASP Class_Terminate Code Errors Can Cause IIS 4.0 to Fail"
permalink: /kb/319/Q319549/
---

## Q319549: PRB: ASP Class_Terminate Code Errors Can Cause IIS 4.0 to Fail

	Article: Q319549
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ASP class with the Class_Terminate function, and the object is
	implicitly destroyed, the Internet Information Server (IIS) process in which the
	page is running (Inetinfo.exe or Mtx.exe) silently fails if there are code
	errors in the Class_Terminate function.
	
	If the Class object is explicitly destroyed, the client returns with the script
	engine error details.
	
	CAUSE
	=====
	
	If the ASP Class object is not explicitly destroyed (for example, if you set it
	to Nothing), code errors in the Class_Terminate function cause the IIS process
	to fail, but no error messages are returned.
	
	RESOLUTION
	==========
	
	To make sure that code errors on the Class_Terminate function do not cause such
	a failure, you have to explicitly destroy ASP Class objects in the page.
	
	Alternatively, you can use 'On Error Resume Next' in the Class_Terminate
	function; however, this is not recommended because code errors are not generated
	to the client.
	
	STATUS
	======
	
	Microsoft Internet Information Services (IIS) 5.0 handles the code error without
	a failure occurring in Inetinfo.exe or Dllhost.exe, but it does not return an
	error to the client as expected and the remaining code in the Class_Terminate
	function does not run.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	NOTE: In the following sample code, a Response.Write on an undefined variable is
	used to produce a code error. This could also be some other code error, such as
	divide by zero.
	
	  <%
	  Option Explicit
	
	  Class clsTest
	  	Private Sub Class_Terminate
	  		'On Error Resume Next 'Uncomment this to prevent IIS crashing
	  		Response.Write stringout 'this will produce code error as variable is undefined 
	  		End Sub 	
	  End Class
	  Dim tester
	  Set tester=New clsTest
	  'Set tester=Nothing 'Comment this line to have clsTest object destroyed implicitly 
	  %>
	
	  <P>
	
	Test the text to show how the page is processing.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
