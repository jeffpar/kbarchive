---
layout: page
title: "Q243503: FIX: Platform SDK Prevents MFC Projects from Compiling"
permalink: kb/243/Q243503/
---

## Q243503: FIX: Platform SDK Prevents MFC Projects from Compiling

	Article: Q243503
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbMFC kbSDKPlatform kbVC600bug kbDSupport kbfix kbGrpDSMFCATL kbIDL kb
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a MFC ActiveX project with Microsoft Visual C++ 6.0 and the
	Platform SDK installed, you may get compiler errors when building the project.
	You may get a "C2146" error in the project C++ source file for the CWinApp
	derived class not being defined.
	
	This did not happen before installing the Platform SDK.
	
	CAUSE
	=====
	
	This is due to the project header file being overwritten by the MIDL compiler
	generated header file. This only happens when the /mktyplib203 switch is not
	specified when compiling an .odl file and the .odl file has the following line
	of code outside of the library block.
	
	  #include <olectl.h>
	
	
	RESOLUTION
	==========
	
	At this time, it is recommended to not select the MkTypLib compatible option
	when building MFC ActiveX components. This option can be found from Project menu
	Settings menu and then select MIDL tab.
	
	Removing the MkTypLib compatible option may overwrite the project header file
	that results in the compiler error mentioned in the "Symptoms" section of this
	article. Instead, move any #include statements in the .odl file inside of the
	library block. For example:
	
	  [ uuid(9D830476-7DAB-11D3-9D15-00C04F542A77), version(1.0),
	    helpfile("testodl5.hlp"),
	    helpstring("testodl5 ActiveX Control module"),
	    control ]
	  library TESTODL5Lib
	  {
	      #include <olectl.h> //move this to here to prevent any MIDL 2311 errors
	      #include <idispids.h>
	
	      importlib(STDOLE_TLB);
	      importlib(STDTYPE_TLB);
	  //...rest of code omitted
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in the Microsoft Platform SDK January 2000 Edition.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Platform SDK for Windows 2000 RC2.
	
	2. Select Typical Install when prompted, and then select Enable Visual VC++
	  Integration.
	
	3. Run Visual C++ 6.0.
	
	4. From the Tools menu select Options and then select Directories tab.
	
	5. Move the Platform SDK include directories to the top of the list.
	
	6. Move the Platform SDK LIB directories to the top of the list.
	
	7. Create a new MFC ActiveX control. Do this by from the File/New menu select
	  the Projects tab and then select MFC ActiveX Control Wizard. Name the project
	  "PlatOCX".
	
	8. Open the PlatOCX.odl file by selecting Open from the File menu.
	
	9. Build the PlatOCX.odl file by selecting the Build/Compile PlatOCX.odl menu
	  item.
	
	10. You should get a MIDL error 2311. This is OK. You can disable this by
	  selecting the Project menu, Settings menu and then selecting the MIDL tab,
	  and deselecting the MkTypLib compatible checkbox.
	
	11. Build the PlatOCX.odl file again.
	
	You should notice that the PlatOCX.odl file compiles cleanly now. However, you
	should also notice that the AppWizard generated PlatOCX.h header file was
	overwritten with the MIDL generated header file.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q243219 FIX: Platform SDK Causes MIDL to Throw MIDL2311 Error
	
	Additional query words: C2146 MIDL 2311 ODL Data loss overwrite header file
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbMFC kbSDKPlatform kbVC600bug kbDSupport kbfix kbGrpDSMFCATL kbIDL kbMIDL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
