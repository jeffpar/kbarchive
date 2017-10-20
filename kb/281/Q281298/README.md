---
layout: page
title: "Q281298: PRB: Session Variables Do Not Persist When Global.asa Is Empty"
permalink: /kb/281/Q281298/
---

## Q281298: PRB: Session Variables Do Not Persist When Global.asa Is Empty

{% raw %}

	Article: Q281298
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbWebServer kbDSupport kbiis400 kbiis500
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your application contains an empty (0 byte) Global.asa file, session
	variables may not be maintained as you browse from page to page in your
	application.
	
	CAUSE
	=====
	
	Because Internet Information Server (IIS) tries to parse Global.asa to determine
	whether there is a Session_OnStart subroutine to process, if Global.asa is
	empty, IIS fails when it tries to parse the file.
	
	RESOLUTION
	==========
	
	To resolve this problem, open Global.asa in Notepad, press the SPACEBAR, and
	then save the changes. In addition, you can delete Global.asa.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In IIS, create a virtual folder, and make it an application. To make the
	  virtual folder an application, perform the following steps:
	
	  a. In the IIS Management Console, right-click the virtual folder, and then
	     click Properties.
	
	  b. On the Virtual Directory tab, in the Application Settings list box, click
	     Create.
	
	  c. Click OK. The icon for the virtual folder should change from a folder icon
	     to an application icon (a box that contains a globe).
	
	2. Add Global.asa, and make sure that it is completely empty.
	
	3. Add an Active Server Pages (ASP) page named Page1.asp, and then paste the
	  following code:
	
	    <% session("test") = "value" %>
	    <a href="page2.asp">Page 2</a>
	
	4. Add another ASP page named Page2.asp, and then paste the following code:
	
	    <% Response.Write session("test") %>
	
	5. Browse to the first page, and then browse to the second page. The value that
	  is stored in session("test") is not persisted.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q182891 INFO: Session ID Does Not Persist in Active Server Pages
	
	  Q178037 PRB: Session Variables Lost When ASP is Located in Frameset
	
	  Q173307 PRB: Nested Virtual Roots Can Lose Session State
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbWebServer kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
