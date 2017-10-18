---
layout: page
title: "Q241637: PRB: Adding New Method to VB Component Breaks Existing Client"
permalink: kb/241/Q241637/
---

## Q241637: PRB: Adding New Method to VB Component Breaks Existing Client

	Article: Q241637
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX KbClientServer kbDLL kbInprocSvr kbMTS kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDS
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding a new method or property to a class in an ActiveX DLL within a MTS
	package and recompiling it with binary compatibility, existing clients get one
	of the following error messages upon deployment of the new client package:
	
	  Run-time error '-2147467259 (80004005)':Automation error Unspecified error
	
	-or-
	
	  Run-time error '-2147221163 (80040155)':Automation error Interface not
	  registered
	
	CAUSE
	=====
	
	This is caused by the fact that when you add a new method to an existing class
	(interface) and compile the project with binary compatibility, Microsoft Visual
	Basic (VB) creates a new interface and uses a forwarding mechanism to forward
	calls made to methods of the old interface to corresponding methods of the new
	interface.
	
	This works out well between Visual Basic clients and servers when the DLL is
	registered by calling DllRegisterServer (using REGSVR32.EXE). Unfortunately, the
	type library knows nothing about the forwarding scheme and that is where MTS
	Explorer gets information about the component when creating a package.
	
	RESOLUTION
	==========
	
	NOTE: The best solution is to avoid the practice of adding methods or properties
	to classes with existing clients.
	
	To work around this problem, you can do the following:
	
	1. Create a VBR file for the upgraded component by checking the Remote Server
	  Files checkbox on the Components tab of the Project Properties dialog box
	  before compiling the upgraded DLL.
	
	2. Open the VBR file with Notepad.exe and find the entry that looks like the
	  following:
	
	  HKEY_CLASSES_ROOT\INTERFACE\{313BACC6-3D8B-4029-B0D3-B5F4859CEE3E}\Forward =
	  {485D75F2-6AC5-11D3-BB1C-00C04F8ED9F0}
	
	  The first UUID {313BACC6-3D8B-4029-B0D3-B5F4859CEE3E} is the interface ID
	  implemented by the older version of your DLL. Make a copy of this UUID.
	
	3. Start Regedit.exe and open the HKEY_CLASSES_ROOT\Interface subkey, then find
	  the UUID you've copied.
	
	4. This UUID subkey should have three additional subkeys of its own:
	
	   - Forward
	   - ProxyStubClsid
	   - ProxyStubClsid3
	
	5. Export the UUID subkey and save it as a REG file.
	
	6. Create the MTS package with the upgraded component as usual. After you
	  install the client package (the exe in the client folder), double-click the
	  REG file on the client machine. This updates the client machine's registry to
	  enable the existing client to access the upgraded component hosted in MTS on
	  the remote server.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Creating and testing the initial version of a VB DLL::
	
	1. Create a Visual Basic ActiveX DLL project and rename it MyDLL.
	
	2. Add the following code to the default class (Class1):
	
	        Public Function Function1() As String
	            Function1 = "Function1"
	        End Function
	
	3. Save the project and compile it as MyDll.dll.
	
	4. Create a Visual Basic Standard EXE project and rename it Client.
	
	5. From the Project Menu, select References, check MyDll, and click OK.
	
	6. Add a CommandButton to the default form (Form1) and paste the following code
	  into Form1's code window:
	
	        Private Sub Command1_Click()
	            Dim oTest As MyDll.Class1
	            Set oTest = New MyDll.Class1
	            MsgBox oTest.Function1
	        End Sub
	
	7. Make sure the project runs and then compile it as Client.exe.
	
	8. Create an MTS package from MyDll.dll and export the package (See the online
	  Help in MTS Explorer for instructions on Exporting Packages.)
	
	9. Deploy the client package and the Client.exe from the Client package created
	  to a client machine, and make sure it runs.
	
	Creating and testing the upgraded VB DLL::
	
	1. Reopen the MyDll project.
	
	2. Select Project Properties from the Project menu, check the Remote Server
	  Files checkbox, and select the Binary Compatibility option under the
	  Components tab.
	
	3. Add the following code to Class1:
	
	        Public Function Function2() As String
	           Function2 = "Function2"
	        End Function
	
	4. Compile the project. At this point, if you run Client.exe on the development
	  machine, it should work.
	
	5. Delete the MTS package created from the older version of MyDll.dll from MTS
	  Explorer.
	
	6. Create a new package with the new version of MyDll.dll and export it.
	
	7. Uninstall the previous package on the client machine and install the upgraded
	  client package. At this point, when you run Client.exe you get one of the
	  error messages described in the "Symptoms" section. Please see the
	  "Resolution" section of this article for a workaround to this problem.
	
	Additional query words: MTS Binary Compatibility
	
	======================================================================
	Keywords          : kbActiveX KbClientServer kbDLL kbInprocSvr kbMTS kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
