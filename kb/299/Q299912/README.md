---
layout: page
title: "Q299912: FIX: Verify Connection With Access DB Changes Folder"
permalink: /kb/299/Q299912/
---

## Q299912: FIX: Verify Connection With Access DB Changes Folder

{% raw %}

	Article: Q299912
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDS
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you verify a connection to an Access database using the Connection
	Designer, the current folder may change to the folder that contains the Access
	database.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 5.0 or 6.0, paste the following code in a new program:
	
	   *!* Q299912 FIX: Verify Connection Of MS Access Database Connection Changes Current Directory
	  CLEAR
	  #DEFINE DBCNAME 'testdb'
	
	  CLOSE DATA ALL
	  DELETE FILE DBCNAME+'.dbc'
	  DELETE FILE DBCNAME+'.dc?'
	
	  CREATE DATABASE DBCNAME
	  ? 'Directory before verify connection: ' + SET('DEFAULT')+ CURDIR()
	  CREATE CONNECTION conn1 DATASOURCE "MS Access Database"
	  MODIFY CONNECTION conn1
	  SUSPEND
	  ? 'Directory after verify connection: ' + SET('DEFAULT')+ CURDIR()
	  RETURN
	
	2. Save and run the program (the name is unimportant).
	
	3. Click Verify Connection and browse to an Access database. Select the database
	  and click OK.
	
	4. In the Connection succeeded dialog box, click OK.
	
	5. Press CTRL+M to resume execution of the program.
	
	The current drive and folder for both before and after the connection was
	verified appear on the screen. The current folder changes to the location of the
	Access database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
