---
layout: page
title: "Q255498: ODE97: How to Make Sure Apps You Create with ODE Run Correctly"
permalink: kb/255/Q255498/
---

## Q255498: ODE97: How to Make Sure Apps You Create with ODE Run Correctly

	Article: Q255498
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	This article lists the steps to follow to ensure that the applications that you
	create with Microsoft Office Developer Edition (ODE) 97 run correctly in all
	environments. These steps guide you through downloading the latest patches, and
	they cross-reference other Knowledge Base articles that discuss the information
	you need to properly deploy Access 97 run-time applications by using the Setup
	Wizard.
	
	MORE INFORMATION
	================
	
	To ensure that applications that you create by using the Office Developer
	Edition 97 Setup Wizard are installed correctly on operating systems and
	workstations with applications that were released after Microsoft Office 97,
	follow these steps:
	
	1. Install ODE 97.
	
	2. Install ODE 97 Service Pack 2.
	
	For additional information about changes in ODE 97 Service Pack 2 and how to
	obtain Microsoft Office 97 Developer Edition Service Pack 2 (ODESP2), click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173096 ODE97: Summary of Changes in ODE Service Pack 2 (ODESP2)
	
	3. Run through the Setup Wizard once to ensure that the path to associated
	  supporting files is correct.
	
	4. Install the Setup Wizard Template Files Updater.
	
	For additional information about how to obtain the Setup Wizard Template Files
	Updater and the problems that the Updater corrects, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q179567 ODE97: Setup Wizard Template Files Updater Available in Download
	  Center
	
	5. Modify the Setup.stf created by the Setup Wizard to ensure that your
	  application uses the correct executable when Access 2000 is installed on your
	  customer's computer.
	
	For additional information about modifying the Setup.stf file, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q248112 ODE97: Access 97 Run-Time Application Incorrectly Uses Access 2000
	  Executable
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q180284 ODE97: Avoiding Common Mistakes Creating Distributable Run-Time
	  Applications
	
	Additional query words: inf run time run-time runtime acc97 acc2000 app
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
