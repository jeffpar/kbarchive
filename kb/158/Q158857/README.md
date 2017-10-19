---
layout: page
title: "Q158857: PRB: Setup Wizard Restarts Using Template (.vbz) File"
permalink: /kb/158/Q158857/
---

## Q158857: PRB: Setup Wizard Restarts Using Template (.vbz) File

	Article: Q158857
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400 kbGrpDSVB
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load a template (.vbz) file into the Visual Basic 4.0 Setup Wizard, the
	following error message appears:
	
	  Either the project state or template file has changed since this template was
	  created. Setup will restart.
	
	Click OK to restart the Setup Wizard.
	
	CAUSE
	=====
	
	This behavior is by design. The Setup Wizard compares the date on the template
	file to the dates on the project's .exe and source files. If the date on the
	template file is older than the other files, then the error message is
	generated. It also compares the checksum stored in the .vbz file and generates
	the error condition if the values do not match.
	
	WORKAROUND
	==========
	
	Do not use template (.vbz) files. To work around the problem, add an entry for
	the project .exe file to \Windows\Sw depend.ini. Also, add entries for all of
	the additional components that need to be shipped with that .exe file. This is
	not an effective workaround for projects that require significant configuration,
	such as OLE servers, but it handles the inclusion of a large number of files.
	
	For detailed information on the format of Swdepend.ini, select the "Help/Search
	For Help On..." menu option from the Visual Basic 4.0 IDE. Type Swdepend.ini
	<cr>. Double-click the "Syntax in Swdepend.ini(ReadMe)" topic.
	
	Example
	-------
	
	To include the files Bullet.bmp and Emdash.bmp when you create installation disks
	for the CALC sample project, add the following entry to Swdepend.ini:
	
	     [calc.exe]
	     Register=$(EXESelfRegister)
	     Dest=$(AppPath)
	     Uses1=c:\vb4\hc\bullet.bmp
	     Uses2=c:\vb4\hc\emdash.bmp
	     Uses3=
	
	STATUS
	======
	
	A change in the design of the Setup Wizard is under review and will be
	considered for inclusion in a future release of Visual Basic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
