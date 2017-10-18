---
layout: page
title: "Q163130: ODE97: Apply Button Dimmed When Converting Database to Design Ma"
permalink: kb/163/Q163130/
---

## Q163130: ODE97: Apply Button Dimmed When Converting Database to Design Ma

	Article: Q163130
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you use Microsoft Replication Manager 3.5 to convert a database to a Design
	Master, the Apply Now button is always dimmed in the dialog box for selecting
	replicated objects.
	
	Microsoft Replication Manager 3.5 is included with the Microsoft Office 97
	Developer Edition Tools (ODE Tools).
	
	RESOLUTION
	==========
	
	You must click the OK button in the Select Replicated Objects dialog box to
	apply your changes, or click the Cancel button to cancel your changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Copy the sample database Northwind.mdb to NwindRep.mdb
	
	2. Start Microsoft Replication Manager 3.5.
	
	3. On the Tools menu, click Convert Database to Design Master.
	
	4. In the "Database to Convert to the Design Master" dialog box, select
	  NwindRep.mdb.
	
	5. Click Next on the first screen of the "Convert Database to Design Master"
	  Wizard.
	
	6. Click "No, I do not want to make a backup" on the second screen of the
	  Wizard, and then click Next.
	
	7. On the next screen, accept the default description for the replica set, and
	  then click Next.
	
	8. Click "Make some objects available to the entire replica set." The Select
	  Replicated Objects dialog box opens automatically. Note that no matter what
	  selections you make in this dialog box, the Apply Now button is always
	  dimmed.
	
	9. Stop the conversion of the database by clicking Cancel until you return to
	  the Microsoft Replication Manager window, and then quit the program.
	
	Additional query words: Replman grey greyed gray grayed 3 5
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
