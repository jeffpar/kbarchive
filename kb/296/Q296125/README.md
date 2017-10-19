---
layout: page
title: "Q296125: Error Calling IsInherited Attribute of GetPropertyAttribObj"
permalink: /kb/296/Q296125/
---

## Q296125: Error Calling IsInherited Attribute of GetPropertyAttribObj

	Article: Q296125
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reference the IsInherited attribute of the IIS Admin Object
	GetPropertyAttribObj method, you may receive the following error message:
	
	  Object doesn't support this property or method: 'objIIS.IsInterited'
	  0x800A01B6
	
	NOTE: The error code may also be displayed as 438 or 1B6, depending on the
	environment that the GetPropertyAttribObj object was instantiated in and the
	error code formatting that is being used.
	
	CAUSE
	=====
	
	The IIS 5.0 product documentation incorrectly refers to the attribute as
	IsInherited, when the correct name is IsInherit. The correct information is
	listed below:
	
	+------------------------------------------------------------+
	| Attribute | Description                                    | 
	+------------------------------------------------------------+
	| IsInherit | Specifies whether the property is inheritable. | 
	+------------------------------------------------------------+
	
	WORKAROUND
	==========
	
	Use objIIS.Inherit instead of objIIS.Inherited to reference the attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	MORE INFORMATION
	================
	
	This problem does not affect IIS 4.0 because the GetPropertyAttribObj method is
	not available with the NT Option Pack, which is the installation vehicle for IIS
	4.0.
	
	To programmatically obtain information about property inheritance in IIS 4.0 (or
	for an additional workaround in IIS 5.0), see the GetDataPaths method sample
	available from the following Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/iisref/adsi52wj.htm
	
	If your computer has the IIS 4.0 product documentation installed, you can also
	obtain information about property inheritance in IIS 4.0 by viewing the IIS
	schema sample at the following Web site:
	
	  http://localhost/iishelp/iis/htm/sdk/aoii09bh.htm
	
	Steps to Reproduce Behavior
	---------------------------
	
	On an IIS 5.0 server, create a file called Inherit.vbs, and paste the following
	sample code into that file:
	
	  On Error Resume Next
	  Set objIIS = GetObject("IIS://localhost/W3SVC/1/ROOT")
	  Set objAttrib = objIIS.GetPropertyAttribObj("ScriptMaps")
	  WScript.Echo 
	  WScript.Echo "The following properties are set for " & objAttrib.PropName 
	  WScript.Echo
	  WScript.Echo "    Inherit = " & objAttrib.Inherit
	  WScript.Echo "    IsInherit = " & objAttrib.IsInherited
	
	  If Err.Number <> 0 Then
	     WScript.Echo
	     WScript.Echo "  VBScript Error " & Hex(Err.Number) & ": " & Err.Description
	  End If
	
	If you replace objAttrib.IsInherited in the sample code with objAttrib.IsInherit,
	you receive the correct result.
	
	REFERENCES
	==========
	
	For more information on the GetPropertyAttribObj method, see the following
	Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/iisref/adsi5wmi.htm
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
