---
layout: page
title: "Q257853: PRB: Problem When You Call ITC Execute from Form_Load"
permalink: /kb/257/Q257853/
---

## Q257853: PRB: Problem When You Call ITC Execute from Form_Load

{% raw %}

	Article: Q257853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbhttp kbITC
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may be tempting to call the Execute method of Internet Transfer Control in
	Form_Load with the intention to send a request automatically. However, the
	StateChanged subroutine may not get called if the method is called when the form
	is being loaded.
	
	RESOLUTION
	==========
	
	To send a request automatically with the Execute method, you can call the method
	in Sub Main() and set Sub Main() as the startup object:
	
	1. Add a module to the Visual Basic project.
	
	2. Add Sub Main() to the module.
	
	3. Select Sub Main() as the Startup Object from the project Properties.
	
	4. Remove Sub Form_Load from the form.
	
	5. Call the Execute method in Sub Main() as follows:
	
	  Sub Main()
	     Load Form1
	     'Form1.Show
	     ...
	     Form1.Inet1.Execute ...
	  End Sub
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q232632 ITC Access Violation with Internet Explorer 5
	
	  Q185519 Vbinet.exe WinInet API Declarations for Visual Basic
	
	  Q193625 WinInet Error Codes (12001 through 12156)
	
	Win32 Internet HTTP Functions in Visual Basic
	(http://msdn.microsoft.com/library/techart/msdn_vbhttp.htm)
	
	WinInet APIs Documentation
	(http://msdn.microsoft.com/library/default.asp?url=/workshop/networking/wininet/wininet.asp?frame=true)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhttp kbITC 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
