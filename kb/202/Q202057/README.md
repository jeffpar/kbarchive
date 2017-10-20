---
layout: page
title: "Q202057: SAMPLE: DISPINVOKER.EXE How to Implement CallByName in VB4/VB5"
permalink: /kb/202/Q202057/
---

## Q202057: SAMPLE: DISPINVOKER.EXE How to Implement CallByName in VB4/VB5

{% raw %}

	Article: Q202057
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbCOMt kbVBp400 kbVBp500 kbGrpDSVB
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DispInvoker.exe is a self-extracting executable file that provides functionality
	similar to the Visual Basic 6.0 CallByName function. Most of the time you can
	discover the properties and methods of an object at design-time and write code
	to handle them. In a few cases, however, you may not know about an object's
	properties and methods in advance, or you may simply want the flexibility of
	allowing an end user to specify properties or execute methods at run-time.
	Visual Basic 6.0 introduced the CallByName function to provide this
	functionality, but it is not available in earlier versions of Visual Basic. The
	Dispinvoker sample provides similar functionality, allowing you to create a
	wrapper object with:
	
	- The same methods and properties of the original object.
	
	- An additional method, Call(), which allows calling methods and retrieving
	  properties from the original object by means of late binding.
	
	Call() Method
	-------------
	
	- Contains the method or property name as the first parameter.
	- Receives the other method parameters as the subsequent parameters.
	- Returns the same value returned by the method or property called.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload DispInvoker.exe now
	  (http://download.microsoft.com/download/vba50/Sample/1/W9X/EN-US/DispInvoker.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	  
	  +-----------------------------+
	  | File Name       | File Size | 
	  +-----------------------------+
	  | class1          | 1KB       | 
	  +-----------------------------+
	  | DispTools.aps   | 4KB       | 
	  +-----------------------------+
	  | DispTools.clw   | 1KB       | 
	  +-----------------------------+
	  | DispTools.cpp   | 4KB       | 
	  +-----------------------------+
	  | DispTools.def   | 1KB       | 
	  +-----------------------------+
	  | DispTools.dll   | 74KB      | 
	  +-----------------------------+
	  | DispTools.dsp   | 17KB      | 
	  +-----------------------------+
	  | DispTools.dsw   | 1KB       | 
	  +-----------------------------+
	  | DispTools.h     | 7KB       | 
	  +-----------------------------+
	  | DispTools.idl   | 1KB       | 
	  +-----------------------------+
	  | DispTools.ncb   | 153KB     | 
	  +-----------------------------+
	  | DispTools.opt   | 55KB      | 
	  +-----------------------------+
	  | DispTools.plg   | 4KB       | 
	  +-----------------------------+
	  | DispTools.rc    | 4KB       | 
	  +-----------------------------+
	  | DispTools.tlb   | 2KB       | 
	  +-----------------------------+
	  | DispTools_i.c   | 2KB       | 
	  +-----------------------------+
	  | DispTools_p.c   | 7KB       | 
	  +-----------------------------+
	  | DispToolsps.def | 1KB       | 
	  +-----------------------------+
	  | DispToolsps.mk  | 1KB       | 
	  +-----------------------------+
	  | dlldata.c       | 1KB       | 
	  +-----------------------------+
	  | dlldatax.c      | 1KB       | 
	  +-----------------------------+
	  | form1           | 3KB       | 
	  +-----------------------------+
	  | lUnklmpl.cpp    | 1KB       | 
	  +-----------------------------+
	  | lUnklmpl.h      | 1KB       | 
	  +-----------------------------+
	  | lUnklmpl.rgs    | 1KB       | 
	  +-----------------------------+
	  | module1         | 1KB       | 
	  +-----------------------------+
	  | Mssccprj        | 1KB       | 
	  +-----------------------------+
	  | Project1        | 22KB      | 
	  +-----------------------------+
	  | Project1        | 1KB       | 
	  +-----------------------------+
	  | resource.h      | 1KB       | 
	  +-----------------------------+
	  | StdAfx.cpp      | 1KB       | 
	  +-----------------------------+
	  | StdAfx.h        | 1KB       | 
	  +-----------------------------+
	  | Wrap.cpp        | 2KB       | 
	  +-----------------------------+
	  | Wrap.h          | 5KB       | 
	  +-----------------------------+
	  | Wrap.rgs        | 1KB       | 
	  +-----------------------------+
	
	Automation allows calling objects in three ways:
	
	- Vtable Binding: The method is referenced directly; the compiler replaces the
	  method call with an explicit reference to the method code.
	
	- Early Binding: The method is called by means of an ID (DISPID).
	
	- Late Binding: The method is called by name, the method ID is retrieved at
	  run-time.
	
	Development tools, such as Visual Basic, allow limited use of late binding.
	Method names must always be explicitly specified at design-time and cannot be
	specified at run-time.
	
	Dispinvoker is a C++ Dispatch object that allows full exploitation of late
	binding.
	
	An Automation Object, obj, and the wrapper object, objWrap, may be obtained as
	follows:
	
	  Set objWrap = Wrap.GetInvoker(obj)
	
	objWrap has the same methods as obj plus the additional method Call(), which
	allows full use of late binding.
	
	The Call() method in the Dispinvoker wrapper uses the GetIDsOfNames() method to
	determine the DispID of the method to be called. The call is then issued with
	the parameters passed from the client.
	
	Here are a few things to keep in mind:
	
	- The Call method does not support named parameters.
	
	- The Call method does not allow you to assign values to properties. They may
	  only be read.
	
	- The Dispinvoker wrapper does not return Type information (GetTypeInfoCount
	  method returns 0, GetTypeInfo method returns E_NOTIMPL)
	
	- Dispinvoker uses DISPID_EVALUATE for the method call.
	
	Sample Code
	-----------
	
	Given a Visual Basic client and an automation object named obj, of type Class1,
	with method mySub(), add the following code:
	
	   ' Create an object of type class1
	      Dim obj As New Class1
	      Dim wrp as New DISPTOOLSLib.Wrap
	      Dim objWrp As Object
	
	   ' Retrieve the DispInvoker wrapper
	      Set objWrp = wrp.GetInvoker(obj)
	
	      obj.mySub ' Calls method mySub directly on the object obj.
	      objWrp.mySub ' Calls method mySub on the DispInvoker wrapper ObjWrp.
	      objWrp.Call("mySub") ' Calls method mySub using Call() method on the 
	                           ' DispInvoker wrapper.
	  '--------------------------------
	
	Running the preceding code does the following:
	
	- Creates the Automation object.
	- Gets the DispInvoker Wrapper.
	- Shows calling mySub method directly onto the object by means of the
	  Dispinvoker wrapper.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbCOMt kbVBp400 kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
