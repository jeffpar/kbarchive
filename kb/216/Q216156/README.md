---
layout: page
title: "Q216156: BUG: &quot;Invalid Line In Setup Information File&quot; Installing VB6 App"
permalink: /kb/216/Q216156/
---

## Q216156: BUG: &quot;Invalid Line In Setup Information File&quot; Installing VB6 App

{% raw %}

	Article: Q216156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbDateTime kbVBp600bug kbDateFormat kbGrpDSVB
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a setup program that was created using the VB 6.0 Package and
	Deployment Wizard (PDW), you receive the following error message:
	
	  Invalid line in setup information file
	
	CAUSE
	=====
	
	This error is caused by bad date and time formats written to the Setup.lst file.
	This issue is documented in the "Wizard Issues" section of the Visual Basic
	Readme file (readmevb.htm) as follows:
	
	Package and Deployment Wizard: Bad Date and Time Formats
	--------------------------------------------------------
	
	In certain situations, the Package and Deployment Wizard will incorrectly write
	time and date information to the Setup.lst file. When this occurs, the setup
	will fail because the dates will be written in a form that the setup.exe cannot
	read. The problem occurs when you create a deployment package using the US
	version of Visual Basic on:
	
	- A computer using the German version of Windows. (NOTE: the German version of
	  Visual Basic will work correctly.)
	
	- Any computer where the date separator isn't either a forward slash ( / ) or a
	  dash ( - ).
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. From the Start menu, open Control Panel.
	
	2. Click the Regional Settings icon.
	
	3. On the Date tab, change the Date separator to a forward slash ( / ).
	
	4. On the Time tab, change the Time separator to a colon ( : ).
	
	5. Run the Package and Deployment Wizard
	
	6. Restore the date and time settings.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You can also get this error when distributing an application that uses the Jet
	engine.
	
	REFERENCES
	==========
	
	For additional information about this error, please see the following article in
	the Microsoft Knowledge Base:
	
	Q159411 PRB: "Invalid Line in Setup Information File" Error Message
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbDateTime kbVBp600bug kbDateFormat kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
