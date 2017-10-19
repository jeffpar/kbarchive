---
layout: page
title: "Q219271: How to Add the Immediate-If Function to an ASP Page"
permalink: /kb/219/Q219271/
---

## Q219271: How to Add the Immediate-If Function to an ASP Page

	Article: Q219271
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the common Visual Basic (VB) or Visual Basic for Applications (VBA)
	functions that was omitted from VBScript (VBS) for Active Server Pages (ASP) is
	the "Immediate-If" or IIf() function.
	
	The IIf() function is used in place of If..Then..Else statements, where a single
	expression is being tested and specific values are returned if the expression
	evaluates as true or false. Because this command was omitted from the ASP VBS
	command set, you can use the code below to add this functionality to an ASP page
	by adding IIf() as a new function to the code.
	
	MORE INFORMATION
	================
	
	The following syntax explanation is from Microsoft's Developer Network:
	
	  
	
	  IIf Function
	  ------------
	
	  Returns one of two parts, depending on the evaluation of an expression.
	
	  Syntax
	
	  IIf(expr,truepart,falsepart)
	
	  +----------------------------------------------------------------------+
	  | Part      | Description                                              | 
	  +----------------------------------------------------------------------+
	  | expr      | Required. Expression you want to evaluate.               | 
	  +----------------------------------------------------------------------+
	  | truepart  | Required. Value or expression returned if expr is True.  | 
	  +----------------------------------------------------------------------+
	  | falsepart | Required. Value or expression returned if expr is False. | 
	  +----------------------------------------------------------------------+
	
	Usage
	-----
	
	The IIf() function can be used in ASP code by adding the following function to a
	page:
	
	  Function IIf(i,j,k)
	  	If i Then IIf = j Else IIf = k
	  End Function
	
	Example
	-------
	
	The following ASP code shows an example page using the IIf() function to
	determine if a number is even or odd:
	
	  <% @LANGUAGE="VBSCRIPT" %>
	  <%
	    Function IIf(i,j,k)
	      If i Then IIf = j Else IIf = k
	    End Function
	  %>
	  <html>
	  <head><title>IIF() example</title></head>
	  <body>
	  <ul>
	  <%
	    For X = 1 to 5
	      Response.Write "<li>" & X & " is an " & IIf(X Mod 2, "Odd", "Even") & " number.</li>" & vbCrLf
	    Next
	  %>
	  </ul>
	  </body>
	  </html>
	
	For more information on Microsoft Scripting Technologies, please see the
	information at the following URL:
	
	http://msdn.microsoft.com/scripting/
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
