---
layout: page
title: "Q168206: PRB: &quot;Argument Not Optional&quot; Error Using DAO 3.5"
permalink: /kb/168/Q168206/
---

## Q168206: PRB: &quot;Argument Not Optional&quot; Error Using DAO 3.5

{% raw %}

	Article: Q168206
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After porting a Visual Basic 4.0 program that is written using DAO 3.0 (Data
	Access Objects) to DAO 3.5, the error message:
	
	  "Argument Not Optional"
	
	will occur on the Update, Movelast, and CommitTrans methods. This does not happen
	in Visual Basic 5.0.
	
	CAUSE
	=====
	
	In DAO 3.0, the methods listed above do not use optional arguments. They do use
	optional arguments in DAO 3.5. This is a problem caused by adding the Typed
	Optional Parameter feature to OLE Automation. Only newer Automation controllers
	such as Visual Basic 5.0 are going to understand this. Visual Basic 4.0 can
	accept optional parameters only if they are of the Variant data type. The
	optional arguments for the methods listed above are not Variant so it doesn't
	recognize them as optional.
	
	RESOLUTION
	==========
	
	There are three options for this problem:
	
	1. Do not use DAO 3.5 with Visual Basic 4.0. Use DAO 3.0 or lower.
	
	2. Use the optional arguments listed in the DAO 3.5 Help file.
	
	  NOTE: The Help file states that the optional argument constant for Movelast is
	  dbRunAsync. This is not true and it will not work. The actual argument is
	  rdAsyncEnable.
	
	3. Do not use early binding on the recordset object. For example, the following
	  code will cause the error:
	
	        Dim myrecordset as recordset
	
	        Set myrecordset = mydatabase("Table1",dbOpenDynaset)
	        myrecordset.Edit
	        myrecordset.Update
	
	  Removing the Dim statement will cause it to work as expected.
	
	STATUS
	======
	
	This behavior is by design. Microsoft does not support the use of DAO 3.5 in
	Visual Basic 4.0. It is recommended that DAO 3.0 or lower be used.
	
	MORE INFORMATION
	================
	
	For information on how to use the methods mentioned above, refer to the Visual
	Basic online help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : 4.0 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
