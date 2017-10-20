---
layout: page
title: "Q279139: FIX: COM Servers Fail With Heavy Load in MTS and Windows 2000"
permalink: /kb/279/Q279139/
---

## Q279139: FIX: COM Servers Fail With Heavy Load in MTS and Windows 2000

{% raw %}

	Article: Q279139
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual FoxPro Component Object Model (COM) server may stop responding under a
	heavy load when it is run using Microsoft Transaction Server (MTS) under Windows
	2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Active Server Pages (.asp) page named Mtstest.asp that contains the
	  following code:
	
	  <HTML>
	  <BODY>
	  <%
	     lnsecs = Request.QueryString("delay")
	     set ox = Server.CreateObject("myserver.myclass")
	     response.write ox.cnt()
	  %>
	  </BODY>
	  </HTML>
	
	2. Place the .asp page in the Wwwroot folder on a Windows 2000 Web server.
	
	3. On drive C, create a folder called MTSTest.
	
	4. Start Visual FoxPro.
	
	5. To create a table to use, run the following code:
	
	     CREATE TABLE C:\MTSTest\Counter FREE (count i)
	     INSERT INTO counter VALUES (0)
	     USE
	   
	
	6. Create a project called MyServer, and add the following code to the main
	  program:
	
	  DEFINE CLASS myclass AS form OLEPUBLIC
	     Datasession=2	&& private datasession
	     oScriptingContext=0
	
	     PROCEDURE Init
	        SET EXCLUSIVE OFF
	        USE C:\MTSTest\Counter shared
	     ENDPROC
	  	
	     PROCEDURE xOnStartPage(p1)
	     ENDPROC
	
	     PROCEDURE MyDoCmd(cCmd)
	        &cCmd	&& Just execute parameter as if it were a Fox command.
	     ENDPROC
	
	     FUNCTION MyEval(cExpr)
	        RETURN &cExpr	&& Evaluate parameter as if it were a Fox expression.
	     ENDFUNC
	
	     PROCEDURE cnt(p1)
	        LOCAL cStr
	        REPLACE Counter.count WITH Counter.count+1
	        cStr = _VFP.fullname+"<br>"
	        cStr = cStr + 'thread id = '+TRANS(_VFP.threadid) + "<br>"
	        cStr = cStr + 'Proc id = '+TRANS(_VFP.processid)+ "<br>"
	        cStr = cStr + '<font size=5 color = red>Count = TRANS(Counter.count)+'</font><br>'
	        RETURN  cStr
	     ENDPROC
	
	  ENDDEFINE
	
	7. Build the COM server.
	
	8. Create a package for the COM server in MTS on the Web server. (For more
	  information, see the "References" section.)
	
	9. Hit Mtstest.asp with multiple threads using the Microsoft Web Application
	  Stress Tool. (For more information, see the "References" section.)
	
	10. Look at the Web Application Stress Tool report. Failures may be listed in
	  the report as well as in the Windows Event Log.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q231282 INFO: Stress Tools to Test Your Web Server
	
	  Q223406 HOWTO: Create an Empty MTS Package to Add Components for ASP
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
