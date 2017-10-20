---
layout: page
title: "Q172433: ODE97: Error: &quot;Object ID 435&quot; Installing French Run-Time"
permalink: /kb/172/Q172433/
---

## Q172433: ODE97: Error: &quot;Object ID 435&quot; Installing French Run-Time

{% raw %}

	Article: Q172433
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you try to install a French Microsoft Access run-time application, you
	receive the following error message.
	
	In French
	---------
	
	  Erreur d'installation: 914
	
	  - object 435
	
	English Translation
	-------------------
	
	  Setup Error: 914
	
	  - Object ID 435
	
	CAUSE
	=====
	
	You manually included an ActiveX control dependency file as directed in the
	following Knowledge Base article:
	
	  Q172432 ODE97: Setup Wizard Doesn't Include Intl ActiveX Dependency DLL
	
	For example, you included Cmctlfr.dll.
	
	RESOLUTION
	==========
	
	Do not include the ActiveX control international dependency file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the French Microsoft Office
	Developer Edition (ODE) Tools 97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On a computer running French Windows 95, install French Microsoft Access and
	  French Microsoft ODE.
	
	2. Run the Setup Wizard.
	
	3. In the List Of Files, add Comctl32.ocx.
	
	  When you add comctl32.ocx, it adds comcat32.dll, but not Cmctlfr.dll.
	
	4. Manually add Cmctlfr.dll.
	
	5. Add the sample database Northwind.mdb.
	
	6. Finish the Setup Wizard.
	
	7. Start the setup of the run-time application.
	
	  Note that you receive the error message mentioned in the "Symptoms" section.
	
	Additional query words: globalization international int'l localization localisation erreur d installation: 914
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug kbhowto
	
	=============================================================================
	

{% endraw %}
