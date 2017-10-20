---
layout: page
title: "Q244773: 500-100.asp Returns &quot;Variable is Undefined&quot; Error When Session S"
permalink: /kb/244/Q244773/
---

## Q244773: 500-100.asp Returns &quot;Variable is Undefined&quot; Error When Session S

{% raw %}

	Article: Q244773
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Active Server Pages (ASP) error is generated in a Web site where session
	state is disabled, ASP returns an error message like the following:
	
	  Microsoft VBScript runtime error '800a01f4'
	
	  Variable is undefined: 'Session'
	
	  /iisHelp/common/500-100.asp, line 119
	
	CAUSE
	=====
	
	This behavior is by design. The session object is not registered in the
	scripting name space, so the executing script in the 500-100.asp page does not
	understand it, and so ASP returns an error message.
	
	WORKAROUND
	==========
	
	The default 500-100.asp error page can be modified to ignore errors by adding an
	"On Error" statement:
	
	1. Open Windows Explorer.
	
	2. Change folders to your %SystemRoot%\help\iishelp\common folder.
	
	3. Open 500-100.asp in a text editor, such as Microsoft Notepad. The top lines
	  of the file should resemble the following:
	
	    <%@ language="VBScript" %>
	     <%
	       Option Explicit
	
	       Const lngMaxFormBytes = 200
	      %>
	
	4. Change these lines to:
	
	  <%@ language="VBScript" %>
	     <%
	       Option Explicit
	       On Error Resume Next
	
	       Const lngMaxFormBytes = 200
	      %>
	
	MORE INFORMATION
	================
	
	Steps to Reproduce this Behavior
	--------------------------------
	
	1. Disable session state for the default Web site:
	
	  a. Select the default Web site in the Microsoft Management Console (MMC).
	
	  b. Right-click and select Properties from the pop-up menu.
	
	  c. Click the Home Directory tab.
	
	  d. Click Configuration, or click Create and then click Configuration.
	
	  e. Click the App Options tab.
	
	  f. Clear the Enable Session State checkbox.
	
	  g. Click OK as necessary to return to the MMC.
	
	2. Create a page in your Wwwroot folder named "Divbyzero.asp" (without the
	  quotation marks) with the following contents:
	
	  <%@Language="VBSCRIPT"%>
	  <% Response.Write 1/0 %>
	
	3. When you browse to the page, you will see the error message.
	
	REFERENCES
	==========
	
	For additional information on this type of error, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q242425 Using Session Objects with Session State Disabled Returns Type
	  Mismatch Error
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
