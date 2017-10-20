---
layout: page
title: "Q279135: FIX: Stored Proc Used w/ SQLEXEC Embeds NULL as Last Char"
permalink: /kb/279/Q279135/
---

## Q279135: FIX: Stored Proc Used w/ SQLEXEC Embeds NULL as Last Char

{% raw %}

	Article: Q279135
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp600 kbvfp600bug kbvfp600fix KbDBFDBC kbSQLServ700 kbGrpDSFox kbD
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SQLEXEC command to call a stored procedure from Visual FoxPro,
	a NULL (CHR(0)) may be added to the end of the fields in the resulting cursor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
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
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Visual FoxPro, run the following code from the Command window.
	
	NOTE: You need to provide the actual servername, user ID, and password for your
	installation of Microsoft SQL Server.
	
	  ?SQLSTRINGCONNECT("Driver=SQL Server; Server=servername;uid=sa;pwd=;")
	  ?SQLEXEC(1, "sp_who")
	  BROWSE
	
	In the Browse window, you may see a box or other ASCII character at the end of
	the status field, depending on the font that is used by the window.
	
	2. Close the Browse window.
	
	3. In the Command window, type the following:
	
	  ? ASC(SUBSTR(status,LEN(status),1))
	
	The Visual FoxPro command has embedded a NULL (CHR(0)) as the last character in
	the status field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp600 kbvfp600bug kbvfp600fix KbDBFDBC kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
