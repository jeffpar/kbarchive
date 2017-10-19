---
layout: page
title: "Q297779: FIX:Closing Connection While View Designer Open Crashes VFP"
permalink: /kb/297/Q297779/
---

## Q297779: FIX:Closing Connection While View Designer Open Crashes VFP

	Article: Q297779
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you issue a SQLDISCONNECT function on the connection that the View Designer
	is using, Visual FoxPro (VFP) may quit and you may receive one of the following
	error messages:
	
	In VFP version 6.0 running on Microsoft Windows 2000:
	
	  VFP6.exe has generated an error and will be closed by Windows. You need to
	  restart the program. An error log is being generated.
	
	In VFP version 6.0 running on Microsoft Windows Millennium Edition (Me):
	
	  Vfp6 has caused an error in VFP6.exe.
	  Vfp6 will now close.
	
	In VFP verion 5.0 running on Microsoft Windows NT 4.0:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	NOTE: In VFP version 7.0, when you perform the steps in the "More Information"
	section, you receive the following error message after step 3:
	
	  No connection associated with this cursor
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. To set up a test database and open the View Designer, run the following code
	  in a program file or the command window:
	
	  SET SAFETY OFF
	  CLOSE DATA ALL
	
	  lcDir = SET("DEFAULT") + CURDIR()
	
	  CREATE DATABASE company
	  CREATE TABLE employees (iEmpID I, cName c(80))
	  CLOSE DATABASES ALL
	
	  OPEN DATABASE company SHARED
	  CREATE CONNECTION cnCompany CONNSTRING "DSN=Visual FoxPro Database;" + ;
	      "UID=;PWD=;SourceDB=" + lcDir + "Company.DBC;SourceType=DBC;" + ;
	      "Exclusive=No;BackgroundFetch=No;Collate=Machine;DBQ="
	  CREATE VIEW r_Employees REMOTE CONNECTION cnCompany SHARED AS ;
	  	SELECT * FROM employees
	
	  _CLIPTEXT = "MODIFY VIEW r_Employees"
	  KEYBOARD "{ctrl+f2}{ctrl+end}{ctrl+v}{enter}"
	
	2. After the View Designer appears, type the following in the command window:
	
	  SQLDISCONNECT(0)
	
	This closes all open connections.
	
	3. Right-click the View Designer and click Run Query. In the ODBC dialog box,
	  click Cancel.
	
	4. VFP displays the following error message:
	
	  Connectivity error: Unable to retrieve specific error information. Driver is
	  probably out of resources
	
	Click OK.
	
	5. Minimize and then maximize VFP.
	
	6. Right-click the View Designer again and click Run Query. In the Fetch is in
	  progress dialog box, click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
