---
layout: page
title: "Q279459: BUG: Component Category Registry Entries Remain in ATL Comp."
permalink: kb/279/Q279459/
---

## Q279459: BUG: Component Category Registry Entries Remain in ATL Comp.

	Article: Q279459
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbATL kbRegistry kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL component can add component category entries under its CLSID in the
	registry by using CATEGORY_MAP macros. However, unregistering the component does
	not remove the CLSID key and the Implemented Categories subkey.
	
	
	RESOLUTION
	==========
	
	Instead of using the CATEGORY_MAP macros, you can use the .rgs file to add the
	Implemented Categories subkey and the CATIDs themselves. This method removes the
	entries correctly upon unregistration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL COM AppWizard DLL project named "CompCat" (without the
	  quotation marks).
	
	2. Insert a full control named "TstCtrl" (without the quotation marks) to the
	  project.
	
	3. Open TstCtrl.h and add in a CATEGORY_MAP within the CTstCtrl class (for
	  instance, after the line that has END_PROP_MAP()):
	
	  BEGIN_CATEGORY_MAP(CTstCtrl)
	  	IMPLEMENTED_CATEGORY(CATID_SafeForScripting)
	  	IMPLEMENTED_CATEGORY(CATID_SafeForInitializing)
	  END_CATEGORY_MAP()
	
	4. Build the control. The control will be registered as part of the build
	  process.
	
	  The control adds entries, notably under HKCR\CLSID\{Control_CLSID}.
	
	5. Unregister the control by using RegSvr32.exe (or other suitable utility).
	
	Note that the HKCR\CLSID\{Control_CLSID} entry and the Implemented Categories
	subkey beneath it remain.
	
	Steps to Use an .RGS file Instead
	---------------------------------
	
	1. Delete the CATEGORY_MAP from within CTstCtrl.
	
	2. Open TstCtrl.rgs, and right after the
	
	  'Version' = s '1.0'
	
	  add in the Implemented Categories entries:
	
	  'Implemented Categories'
	  {
	  	{7DD95801-9882-11CF-9FA9-00AA006C42C4}
	  	{7DD95802-9882-11CF-9FA9-00AA006C42C4}
	  }
	
	  The CATIDs under the Implemented Categories key correspond to
	  CATID_SafeForScripting and CATID_SafeForInitializing, respectively. (For
	  additional information on component categories, see the "References" section
	  of this article.)
	
	3. Rebuild the control. The control will be registered as part of the build
	  process.
	
	4. The control adds entries, again under HKCR\CLSID\{Control_CLSID}.
	
	5. Unregister the control by using RegSvr32.exe (or other suitable utility).
	
	Note that this time the HKCR\CLSID\{Control_CLSID} entry and all the entries
	beneath it (including the Implemented Categories subkey) are deleted as
	expected.
	
	REFERENCES
	==========
	
	Platform SDK Documentation, "What are Component Categories and how do they
	work?"
	
	  http://msdn.microsoft.com/library/psdk/com/ctrlgde_18v3.htm
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by S. Ganesh,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbRegistry kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	
