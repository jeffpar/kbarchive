---
layout: page
title: "Q296096: Source Code for Global.asa Is Displayed in Browser"
permalink: /kb/296/Q296096/
---

## Q296096: Source Code for Global.asa Is Displayed in Browser

	Article: Q296096
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you explicitly request the Global.asa file (for example, when you request
	http://payroll/global.asa), the browser displays the source code for the
	Global.asa file instead of the expected HTTP 500-15 status code.
	
	CAUSE
	=====
	
	This behavior occurs after you remove the script mapping for the .asa file type
	and is by design. When application types are not mapped to a specific Internet
	Server Application Programming Interface (ISAPI) application (such as Asp.dll or
	Ssinc.dll), IIS returns the requested content to the browser with a
	Content-Type: application/octet-stream header. This header indicates that the
	browser should render the data as text, so the source code of the Global.asa
	file is displayed in the browser.
	
	RESOLUTION
	==========
	
	To prevent the display of source code for Global.asa files, add the application
	mapping (sometimes referred to as script mapping) for the .asa extension back to
	the Web application or applications that return source code. To do this, follow
	these steps:
	
	1. Click Start, click Run, type "inetmgr" (without the quotation marks), and
	  then click OK to open the Internet Service Manager (ISM) Microsoft Management
	  Console (MMC).
	
	2. Expand the nodes under Internet Information Server to display the Web
	  application that is returning source code for the Global.asa file.
	
	3. Right-click the Web application, and then click Properties.
	
	4. On the Home Directory tab, click Configuration.
	
	5. On the App Mappings tab, click Add.
	
	6. Type the following information in the Add/Edit Application Extension Mapping
	  dialog box that appears:
	
	  Executable: C:\WINNT\System32\inetsrv\asp.dll
	  Extension: .asa
	  Limit to: GET,HEAD,POST,TRACE
	  Script engine: checked
	
	NOTE: The path for the executable file may be different if %windir% is not in the
	default location of C:\Winnt.
	
	MORE INFORMATION
	================
	
	This problem is not unique to the .asa file type, and can occur for any
	script-mapped ISAPI application (including .asp file types). However, the
	effects may be less noticeable with other file types such as .asp because many
	browsers do not render content that is in the server-side script tags. The
	Global.asa file requires server-side script to be included in <SCRIPT>
	tags, which render in the browser. The following .asp code sample is likely to
	display only the word "World" in the browser, even though "<%
	Response.Write("Hello")%>" is visible when you view the source of the .asp
	document in the browser:
	
	  <% Response.Write("Hello") %> World
	
	NOTE: If Application or Session variables are not initialized in a Web
	application, the .asa extension may not be properly mapped to Asp.dll. Without
	the application mapping, the Global.asa file does not execute when requests are
	made to the specified Web application.
	
	
	Additional query words: scriptmap script-map appmap app-map
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbZNotKeyword6 kbiis500 kbiis400 _IKkbZNotKeyword4 kbZNotKeyword5
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
