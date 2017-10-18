---
layout: page
title: "Q200074: FIX: Can't Get IBuildProject Interface from Developer Studio"
permalink: kb/200/Q200074/
---

## Q200074: FIX: Can't Get IBuildProject Interface from Developer Studio

	Article: Q200074
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbenv kbAutomation kbDSSTools kbide kbVC kbVC500bug kbVC600fix kbVS kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	While you are automating Developer Studio through the use of its Object Model,
	an attempt to obtain the IBuildProject interface fails.
	
	For example, the following code fails to get an IBuildProject interface pointer:
	
	  #include <bldauto.h>
	  IBuildProject* pIBuildProject = NULL;
	  pIGenericProject->QueryInterface(IID_IBuildProject,
	     (void**)&pIBuildProject));
	
	CAUSE
	=====
	
	The automation header Bldguid.h, the type library Devbld.pkg, and the actual
	implementation of IBuildProject each use a different GUID.
	
	RESOLUTION
	==========
	
	The fix to this problem consists of a .tlb file to add to the Developer Studio
	SharedIDE\Bin\IDE folder and a .reg file for properly registering the
	IBuildProject interface. The registry fix is nondestructive to existing entries,
	and the type library is additional; it does not overwrite anything.
	
	To implement the fix, you must first create the .tlb file. To do so, follow these
	steps:
	
	1. Copy the following code from this article and paste it into a text editor,
	  such as Microsoft Notepad. Save the file as IBuildProject.odl.
	
	  // IBuildProject.odl : type library source for IBuildProject.tlb
	
	  // This file will be processed by the Make Type Library (mktyplib) tool to
	  // produce the type library (IBuildProject.tlb).
	
	  [ uuid(48187B40-02D6-11D1-A308-00A0C909E775), version(1.0),
	    helpstring ("Type Library to properly register IBuildProject") ]
	  library AddIn
	  {
	    importlib("stdole32.tlb");
	    importlib("devshl.dll");
	    importlib("ide/devbld.pkg");
	
	    [  uuid(96961264-A819-11CF-AD07-00A0C9034965),
	
	       helpstring("Represents a group of related files that can include one or more configurations"),
	       oleautomation,
	       dual
	    ]
	    interface IBuildProject : IGenericProject
	    {
	
	       // methods
	       [id(0x00000064), propget, helpstring("Returns the set of configurations in this project")]
	       HRESULT Configurations([out, retval] IConfigurations** Configurations);
	    };
	
	  };
	
	2. From a command line in the same folder as the file IBuildProject.odl, type
	  the following command and press ENTER:
	
	  "MKTYPLIB IBuildProject.odl" (without the quotation marks)
	
	3. Copy the IBuildProject.tlb file (which was created by the previous step) to
	  the folder <Developer Studio installation folder>\SharedIDE\Bin\IDE.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Now you must register the modified IBuildProject interface. To do so, follow
	these steps:
	
	1. Copy the following code and paste it into a text editor, such as Microsoft
	  Notepad.
	
	  REGEDIT4
	
	  [HKEY_CLASSES_ROOT\Interface\{96961264-A819-11CF-AD07-00A0C9034965}]
	  @="IBuildProject"
	
	  [HKEY_CLASSES_ROOT\Interface\{96961264-A819-11CF-AD07-00A0C9034965}\ProxyStubClsid]
	  @="{00020424-0000-0000-C000-000000000046}"
	
	  [HKEY_CLASSES_ROOT\Interface\{96961264-A819-11CF-AD07-00A0C9034965}\ProxyStubClsid32]
	  @="{00020424-0000-0000-C000-000000000046}"
	
	  [HKEY_CLASSES_ROOT\Interface\{96961264-A819-11CF-AD07-00A0C9034965}\TypeLib]
	  @="{48187B40-02D6-11D1-A308-00A0C909E775}"
	  "Version"="1.0"<BR/>
	  <BR/>
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}\1.0]
	  @="IBuildProject Type Library"
	
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}\1.0\409]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}\1.0\409\win32]
	  @="c:\\Program Files\\DevStudio\\SharedIDE\\BIN\\IDE\\IBuildProject.tlb"
	
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}\1.0\FLAGS]
	  @="0"
	
	  Save this file as IBuildProject2.reg.
	
	2. If your Developer Studio installation path is not "C:\Program
	  Files\DevStudio\SharedIDE\BIN\IDE", edit the registry key named
	  [HKEY_CLASSES_ROOT\TypeLib\{48187B40-02D6-11D1-A308-00A0C909E775}\1.0\409\win32]
	  to point to the folder where you copied IBuildProject.odl.
	
	3. From Windows Explorer, open the file IBuildProject2.reg. Click OK when you
	  are prompted to import the file into the registry.
	
	STATUS
	======
	
	This problem was corrected in Visual Studio 6.0.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem and the workaround. Create a new
	Win32 console application project, and insert this code in a new file:
	
	     #include <afx.h>     // For ASSERT
	     #include <atlbase.h> // For COM smart pointers
	     #import <devshl.dll> // For DSSharedObjects
	     #import <devbld.pkg> // For DSProjectSystem
	     #import <IBuildProject.tlb> rename_namespace("IBP2")  // Fixed .tlb
	     using namespace DSSharedObjects; // Namespace declared in type library
	     using namespace DSProjectSystem;
	
	     void main()
	     {
	        CoInitialize( NULL );      // Make sure COM is initialized
	
	        CLSID    clsidDevStudio;   // Get DevStudio's current CLSID
	        HRESULT  hr = CLSIDFromProgID( L"MSDev.Application",
	                    &clsidDevStudio );
	                    // {FB7FDAE2-89B8-11CF-9BE8-00A0C90A632C};
	        if (SUCCEEDED( hr ))
	        {
	           CComPtr<IUnknown> pUnk; // Use smart pointer
	
	           hr = GetObject( clsidDevStudio, NULL, &pUnk );
	           if (SUCCEEDED( hr ))
	           {
	              CComQIPtr<IApplication, &__uuidof( IApplication )>
	                       pApplication( pUnk );
	
	              ASSERT( NULL != pApplication.p );   // Make sure we got the pointer
	
	              CComPtr<IDispGenericProject>
	                       pDGenericProject( (IDispGenericProject *)pApplication->ActiveProject );
	              ASSERT( NULL != pDGenericProject.p );
	
	              CComQIPtr<IBuildProject, &__uuidof( IBuildProject )>
	                       pProject1( pDGenericProject );
	              ASSERT( NULL != pProject1.p );   // ASSERT!
	              // This assertion fails because DSProjectSystem::IBuildProject contains invalid UUID
	              //  Fix by setting it to 96961264-a819-11cf-ad07-00a0c9034965 (matches ObjModel\bldguid.h)
	
	              CComQIPtr<IBP2::IBuildProject, &__uuidof( IBP2::IBuildProject )>
	                       pProject2( pDGenericProject );
	              ASSERT( NULL != pProject2.p );
	              // This assertion is OK because IBP2::IBuildProject contains correct UUID
	           }
	           else ; // "Developer Studio is not running"
	        }
	        else ; // "Developer Studio is not properly installed on this machine"
	
	        CoUninitialize();
	
	     }
	
	The problem only occurs when you manipulate Developer Studio externally. The
	interface works properly from within add-ins and custom AppWizards.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q173483 HOWTO: Create Custom AppWizards that Generate Non-MFC Projects
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbAutomation kbDSSTools kbide kbVC kbVC500bug kbVC600fix kbVS kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
