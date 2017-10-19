---
layout: page
title: "Q190817: HOWTO: Use CREATE FORM ... AS Class FROM Classlib Syntax"
permalink: /kb/190/Q190817/
---

## Q190817: HOWTO: Use CREATE FORM ... AS Class FROM Classlib Syntax

	Article: Q190817
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 has an enhancement to the CREATE FORM command that allows you
	to specify a class from which the new form is created. This article demonstrates
	how to use this enhancement, along with a workaround for a limitation.
	
	MORE INFORMATION
	================
	
	In versions of Visual FoxPro prior to 6.0, the only way to specify a class upon
	which to base a new form was by setting the Form Template class in the Forms tab
	of the Options dialog box. Starting with Visual FoxPro 6.0, you can create a
	form and specify a specific class and class library in the CREATE FORM command.
	The syntax is CREATE FORM <FormName> AS <ClassName> FROM
	<ClassLibraryName>. Using the CREATE FORM command in this manner overrides
	any Template settings in the Options dialog box.
	
	Run the following code from the Command window:
	
	     CREATE FORM testform AS _form FROM (home()+'ffc\_base')
	
	A new form opens in the Form Designer, based on the _form class in the _base.vcx
	class library.
	
	As documented in the CREATE FORM help topic, an error is generated if the class
	specified is not based on the form baseclass. This includes the case where the
	class is based on a formset. If you wish to create a new .scx file, based on a
	specific formset class, you can accomplish this by setting the Formset Template
	class in the Forms tab of the Options dialog box, and then select Create Form
	Set from the Form menu while modifying a form in the Form Designer. Alternately,
	you could create a new form or formset based on a specific class by issuing
	commands similar to the following:
	
	     oForm = NEWOBJECT('_formset',HOME()+'ffc\_base')
	     oForm.SaveAs('testformset.scx')
	     oForm.Release
	     MODIFY FORM testformset NOWAIT
	
	These techniques were also possible in previous versions of Visual FoxPro. Keep
	in mind that if you attempt to use the preceding example in versions of Visual
	FoxPro prior to 6.0, you have to use SET CLASSLIB TO and the CREATEOBJECT()
	function, rather than the NEWOBJECT() function.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help; search on: "CREATE FORM"; "NEWOBJECT()"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
