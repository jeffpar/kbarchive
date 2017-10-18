---
layout: page
title: "Q172701: ODE97: Setup Wizard Requires ODESP2 for Updated ODBC Drivers"
permalink: kb/172/Q172701/
---

## Q172701: ODE97: Setup Wizard Requires ODESP2 for Updated ODBC Drivers

	Article: Q172701
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	When you install a custom application created with the Microsoft Office 97
	Developer Edition (ODE) Tools Setup Wizard, and that application includes ODBC
	functionality and the run-time option, you may receive the following error
	message
	
	  The ODBC installer DLL (ODBCCP32.DLL) is not installed on this system.
	
	followed by
	
	  SQLInstallDriver failed for ODBC driver SQL Server.
	
	and then:
	
	  ODBC's SQLInstallTranslator failed while configuring Translator MSCPXL32.DLL.
	
	Setup will then continue as normal. At the end of Setup, you receive the
	following message:
	
	  Setup was not completed successfully.
	
	This behavior occurs if you are running Windows 95 and you installed the updated
	ODBC drivers included in the following sources:
	
	- ODBC 3.0 Driver Manager
	
	- Microsoft Windows NT version 4.0 Service Pack 3
	
	CAUSE
	=====
	
	The computer that you used to create the disk images for your custom application
	contains updated versions of the ODBC files; however, the ODE Setup Wizard does
	not include all of the files on the disk images.
	
	RESOLUTION
	==========
	
	Install the Microsoft Office 97 Developer Edition Tools Service Pack 2 (ODESP2).
	This update can be found at the following locations:
	
	- In the \ValuPack\ODBC folder of the Microsoft Office 97 Service Release 1
	  (SR-1) Enterprise Update CD.
	
	- On the Microsoft Web site at:
	
	  http://www.microsoft.com/OfficeDev/ProdInfo/ODESP2.htm.
	
	NOTE: The Microsoft Office 97 Developer Edition Tools must be installed on the
	computer before you try to install the ODESP2. If the ODE is not on the computer
	when you start Setup, you will receive a message informing you that Setup could
	not find the ODE installed on your hard disk.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a computer running Microsoft Windows 95, create a simple database with a
	  startup form.
	
	2. Start the ODE Setup Wizard.
	
	3. In the screen that prompts you to add the files that you want your custom
	  Setup program to copy, select the database you created in Step 1. Click Next.
	
	4. Add a shortcut, and then click the Database Shortcut Properties tab. Click to
	  select the Run-Time check box, and then click Next twice.
	
	5. On the screen that asks "Which of the following components do you want to
	  include," click "ODBC Support With SQL Server."
	
	6. Click Next until you reach the last screen of the Setup Wizard, and then
	  click Finish.
	
	7. On a clean computer, run Setup from the disk images you created in step 6.
	
	8. When the Welcome screen appears, click Next.
	
	9. Select the folder into which you want to install the application, and then
	  click OK.
	
	  Note that you receive the error messages mentioned in the "Symptoms" section
	  of this article.
	
	REFERENCES
	==========
	
	For more information about the ODE Service Pack 2, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q173096 ODE97: Summary of Changes in the ODE Service Pack 2(ODESP2)
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: SR1 SP2 ODBCCP32 DLL
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
