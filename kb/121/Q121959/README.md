---
layout: page
title: "Q121959: ADT/ODE: ADT/ODE Application Setup Always Defaults to Drive C"
permalink: /kb/121/Q121959/
---

## Q121959: ADT/ODE: ADT/ODE Application Setup Always Defaults to Drive C

{% raw %}

	Article: Q121959
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you are installing an application created with the Microsoft Office 97
	Developer Edition Tools (ODE) or the Microsoft Access Developer's Toolkit (ADT),
	the default drive for installation is always drive C, even if you designate a
	different drive as the default in the ODE or ADT Setup Wizard.
	
	CAUSE
	=====
	
	The Setup program automatically chooses the first available hard disk for the
	default installation drive. If no local hard disk is available, Setup chooses
	the first available network drive.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard using the sample database Northwind.mdb (or NWIND.MDB in
	  version 2.0) as your custom application.
	
	2. In the ODE 97 or ADT version 7.0:
	
	  When you are prompted: "What folder should your custom Setup program suggest
	  as the default for your application's installation?," type the following
	  line:
	
	  R:\TEST
	
	  In Microsoft Access Developers Toolkit version 2.0:
	
	  In the Default Installation Directory box, type the following line:
	
	  R:\TEST
	
	3. When the Setup Wizard is finished, run the custom Setup program. Note that
	  Setup uses drive C as the default installation drive instead of drive R.
	
	REFERENCES
	==========
	
	For more information about using the Setup Wizard, search the Help Index for
	"Setup Wizard," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:2.0,7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
