---
layout: page
title: "Q296631: FP: Access Is Denied When Submitting a Form"
permalink: /kb/296/Q296631/
---

## Q296631: FP: Access Is Denied When Submitting a Form

{% raw %}

	Article: Q296631
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to submit an Active Server Pages (ASP) form that was created
	with Microsoft FrontPage to a FrontPage Server Extensions-based Web server, you
	receive an error message similar to the following:
	
	  User: please report details to this site's webmaster.
	
	  Webmaster: please see the server's application event log for more details.
	
	On the Web server computer, when you view the Application log in Event Viewer,
	you see either of the following FrontPage Server Extensions error messages:
	
	  Error Microsoft Server Extensions:
	  20002 Cannot open file for writing
	
	-or-
	
	  Microsoft FrontPage Server Extensions:
	  20005 Cannot create file
	  <drive>\InetPub\WWWroot\_vti_cnf\<filename>.txt
	
	You may also receive either of the following operating system error messages:
	
	  Access is denied.
	
	-or-
	
	  Permission denied
	
	CAUSE
	=====
	
	This behavior can occur if you click Check Security Settings in Internet Service
	Manager, and you then allow FrontPage to tighten security settings on the Web
	site.
	
	The behavior occurs because the Windows system accounts do not have sufficient
	permissions to the file that will contain the results of the submitted form.
	
	RESOLUTION
	==========
	
	To resolve this behavior, edit the security permissions of the form results file
	to add the Windows NT NETWORK and INTERACTIVE system accounts and give them
	Change permissions to the file. To do this, follow these steps. NOTE: Because
	there are several versions of Microsoft Windows, the following steps may be
	different on your computer. If they are, see your product documentation to
	complete these steps.
	
	1. In Windows Explorer, locate the file to which the Application log error
	  refers--for example, C:\Inetpub\wwwroot\_private\form_results.txt.
	
	2. Right-click the file, and then click Properties on the shortcut menu that
	  appears.
	
	3. In the <file name> Properties dialog box, click Permissions on the
	  Security tab.
	
	4. In the File Permissions dialog box, click Add.
	
	5. In the "Add Users and Groups" dialog box, click INTERACTIVE in the Names
	  list, and then click Add. Click NETWORK, and then click Add.
	
	6. In the Type of Access list, click Change, and then click OK.
	
	7. In the "File Permissions" dialog box, click OK, and then click OK in the
	  <filename> Properties dialog box.
	
	8. Restart the World Wide Web Publishing Service. To do this, follow these
	  steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. In Control Panel, double-click Services.
	
	  c. In the Services dialog box, click "World Wide Web Publishing Service", and
	     then click Stop. When you are prompted to confirm, click Yes.
	
	  d. In the Services dialog box, click Start, and then click Close.
	
	MORE INFORMATION
	================
	
	By default, Microsoft Windows NT authenticates anonymous access to the Web site
	by using the IUSR_<Servername> user account. If this user account does not
	have change permissions to a file that is used to collect form results data, a
	Web-based form that submits data to this file does not work.
	
	For additional information about security permissions, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q224985 FP98: How to Reset Permissions on Multiple Virtual Servers with
	  FrontPage 98 Server Extensions
	
	  Q174073 Auditing User Authentication
	
	  Q174074 Security Event Descriptions
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage2000Search kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
