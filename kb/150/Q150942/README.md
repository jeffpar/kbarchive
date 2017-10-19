---
layout: page
title: "Q150942: PRB: ISAM Tuning Information Not Read From VB.INI"
permalink: /kb/150/Q150942/
---

## Q150942: PRB: ISAM Tuning Information Not Read From VB.INI

	Article: Q150942
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbIISAM
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ISAM tuning information is not automatically read from the VB.INI file in
	the design environment or the <application>.INI in the executable
	program.
	
	When using Visual Basic 4.0 with one of the ISAM drivers, unexpected behavior or
	errors occur. For example, setting Deleted=on in the [dBase ISAM] section of the
	VB.INI or <application name>.INI has no effect on the visibility of
	deleted records. Also, when trying to connect to a Paradox 4.x table, Visual
	Basic gives the error message:
	
	  Can't open this Paradox 4.x table because ParadoxNetStyle is set to 3.x in.
	
	For developers working with Paradox 4.X tables, this means that their
	applications cannot access those tables at design time. Specifically, right
	clicking on a DBGrid and selecting "Retrieve Fields" will generate the error
	message described above. Also, the DataField property of bound controls will not
	be populated automatically. This means that the DataField property cannot be
	filled by selecting from the drop-down list of fields in the table. However, the
	field can still be entered at design time by typing it in. If the
	DBEngine.IniPath property is correctly assigned and contains the necessary
	information, the application will behave properly at run time.
	
	Both the 16-bit and 32-bit versions of the Visual Basic database engine look for
	the [Installable ISAM] information, such as the [Paradox ISAM] and [dbase ISAM]
	sections, in the system registry.
	
	
	The 32-bit edition also looks for the ISAM tuning information in the system
	registry. The 16-bit version does not.
	
	The 16-bit edition looks for the ISAM tuning information in a specified INI file.
	Unlike Visual Basic 3.0, it does not default to the VB.INI file or
	<application>.INI file.
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	To work around this problem in the 16-bit edition of Visual Basic, specify an
	.INI file that contains the ISAM entries using the INIPath property of the
	DBEngine object, and set all properties at run-time. For example:
	
	     Sub Form_Load ()
	
	        'Do before any other references to DAO objects or data control.
	        DBEngine.INIPath = "VB.INI"
	        'All other code
	
	     End Sub
	
	To work around this problem in the 32-bit edition of Visual Basic, specify a
	Registry key such as:
	
	  ...\Engines\SomeISAM
	
	where SomeISAM = Xbase, Paradox, Excel, Text, or Lotus, and the ... specifies any
	Registry key you specify.
	
	Use the DBEngine.INIPath property as documented above to point to the Registry
	Key up to, but not including, the Engines Key (the ...).
	
	If ... = "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\3.0", then the settings are
	system wide and DBEngine.INIPath does not need to be used.
	
	NOTE: The full path to the .Ini file must be included, Visual Basic will not
	automatically look in the Windows directory.
	
	For further information see:
	
	"The Jet Database Engine Programmer's Guide", Appendix C.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase kbIISAM 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
